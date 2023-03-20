import {
  isRejectedWithValue,
  Middleware,
  MiddlewareAPI,
} from '@reduxjs/toolkit';
import { api } from '.';
import {
  BookDetailsDTO,
  BookDetailsPayload,
  BookSearchDTO,
  BookSearchPayload,
  BookSearchResult,
} from '../types/api/books';
import { toast } from 'react-toastify';
import { trimBookKey } from '../utils/books';

// Middleware to handle errors at macro level using toasts
export const rtkToastMiddleware: Middleware =
  (api: MiddlewareAPI) => (next) => (action) => {
    if (isRejectedWithValue(action)) {
      console.warn('Rejected');
      toast.error(
        `${action.error?.message || 'Error'}: ${
          action.payload?.error || 'There was an issue, try again.'
        }`,
      );
    }

    return next(action);
  };

const searchBooksApi = api.injectEndpoints({
  endpoints: (builder) => ({
    searchBooks: builder.query<BookSearchResult, BookSearchPayload>({
      query({ query, fields = [], limit = 5, page = 0 }) {
        const fieldsString = fields.join(',');
        const defaultFields =
          'key,title,first_publish_year,number_of_pages_median,oclc,isbn,ia,cover_edition_key,cover_i,publisher,author_key,author_name,id_amazon,subject_facet,id_goodreads,id_librarything';

        // Used for pagination
        const offset = limit * page;

        return `/search.json?q=${query}&fields=${defaultFields},${fieldsString}&limit=${limit}&offset=${offset}`;
      },
      transformResponse(response: BookSearchDTO, _, args) {
        const responseSize = args.limit ?? 5;
        return {
          page: response.offset / responseSize,
          items: response.docs,
          totalItems: response.numFound,
          size: args.limit,
        } as BookSearchResult;
      },
      providesTags: (result) => {
        const mapped =
          result?.items.map(
            ({ key }) => ({ type: 'SearchedBooks', id: key } as const),
          ) ?? [];

        return [...mapped, { type: 'SearchedBooks' as const, id: 'LIST' }];
      },
    }),
    getBook: builder.query<BookDetailsDTO, BookDetailsPayload>({
      query({ key = '', title = '' }) {
        const trimmedKey = trimBookKey(key);
        return `/search.json?q=${trimmedKey}${
          title.length ? `&title=${title}` : ''
        }`;
      },
      transformResponse(response: BookSearchDTO) {
        return response.docs[0] as BookDetailsDTO;
      },
      providesTags: (result) => [
        { type: 'Book' as const, id: result?.key },
        { type: 'SearchedBooks' as const, id: 'DETAILS' },
      ],
    }),
  }),
});

export const { useSearchBooksQuery, useGetBookQuery } = searchBooksApi;

export default searchBooksApi;
