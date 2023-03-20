import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';
import { BOOK_SEARCH_API_BASE_URL } from '../constants';

// Create our baseQuery instance and wrap it in retry to provide retries
const baseQuery = retry(
  fetchBaseQuery({
    baseUrl: BOOK_SEARCH_API_BASE_URL,
    timeout: 30000,
    // Config can be more fine-tuned here (eg headers)
  }),
  { maxRetries: 5 },
);

// Create an API client service that contains all our endpoints
export const api = createApi({
  reducerPath: 'api',
  baseQuery,
  tagTypes: ['SearchedBooks', 'Book'],
  endpoints: () => ({}),
});
