import React from 'react';
import { BookSearchDocsDTO } from '../../../../../types/api/books';
import { getBookCover } from '../../../../../utils/books';
import placeholder from '../../../../../assets/book-cover-placeholder.jpg';

export function SearchResultsItemContents(bookDetails: BookSearchDocsDTO) {
  const { author_name, first_publish_year, publisher, subject_facet, title } =
    bookDetails;

  return (
    <React.Fragment>
      <img
        src={getBookCover({ book: bookDetails, defaultImg: placeholder })}
        alt="Book cover"
      />
      <div>
        <h4>
          {title} ({first_publish_year})
        </h4>
        {'author_name' in bookDetails && author_name?.length ? (
          <p>{author_name[0]}</p>
        ) : null}
        {'publisher' in bookDetails && publisher?.length ? (
          <p>{publisher[0]}</p>
        ) : null}
        {'subject_facet' in bookDetails && subject_facet?.length ? (
          <p>{subject_facet[0]}</p>
        ) : null}
      </div>
    </React.Fragment>
  );
}
