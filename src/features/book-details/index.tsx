import StyledNoResults from '../ui/elements/empty-state';
import StyledTitle from '../ui/elements/headers';
import {
  StyledDescriptionContainer,
  StyledDetailsContainer,
  StyledIllustration,
  StyledImgContainer,
} from './book-details.styles';
import illustration from '../../assets/hands-phone-pink.png';
import { getBookCover } from '../../utils/books';
import placeholder from '../../assets/book-cover-placeholder-lg.png';
import { useLocation, useParams } from 'react-router-dom';
import { useGetBookQuery } from '../../api/books';
import BookDetailsSkeleton from './skeleton';
import { useEffect } from 'react';
import { useAppDispatch } from '../../hooks/redux-hooks';
import { addBook } from '../book-search/book-search-slice';

export default function BookDetails() {
  const dispatch = useAppDispatch();
  const { state } = useLocation();
  const params = useParams();
  const {
    data: book,
    isLoading,
    isFetching,
  } = useGetBookQuery({
    key: params.id as string,
    title: state?.title as string,
  });

  const isLoadingBook = isLoading || isFetching;

  useEffect(() => {
    if (book) {
      dispatch(addBook(book));
    }
  }, [book]);

  if (isLoadingBook) {
    return (
      <div>
        <StyledTitle>Book details</StyledTitle>
        <BookDetailsSkeleton />
      </div>
    );
  }

  if (!book) {
    return (
      <div data-testid="book-details-empty-state">
        <StyledNoResults>
          <StyledIllustration src={illustration} alt="No book details" />
          <p>We couldn't fetch this book, please try again later.</p>
        </StyledNoResults>
      </div>
    );
  }

  const authorKey = book.author_key ? book.author_key[0] : '';

  const firstYearPublished = book.first_publish_year ?? 'unknown';

  const subjects = book.subject_facet?.length
    ? `${book.subject_facet[0]}, ${book.subject_facet[1] || ''}, ${
        book.subject_facet[2] || ''
      }`
    : 'unknown';

  const contributors = book.contributor?.length
    ? `${book.contributor[0]}, ${book.contributor[1] || ''}, ${
        book.contributor[2] || ''
      }`
    : 'unknown';

  const pages = book.number_of_pages_median || 'unknown';

  const publishers = book.publisher?.length
    ? `${book.publisher[0]}, ${book.publisher[1] || ''}, ${
        book.publisher[2] || ''
      }`
    : 'unknown';

  const getAmazonLink = () => {
    const encodedTitle = encodeURIComponent(book.title);
    if (book.isbn && book.isbn.length && book.isbn[0].length)
      return `https://www.amazon.co.uk/${encodedTitle}/dp/${
        book.isbn[0]
      }/ref=nosim?tag=${book.id_amazon || ''}`;
    return `https://www.amazon.com/s?k=${encodedTitle}`;
  };

  return (
    <div data-testid="book-details-container">
      <StyledTitle>Book details</StyledTitle>
      <StyledDetailsContainer>
        <StyledImgContainer>
          <img
            src={getBookCover({ book, defaultImg: placeholder, size: 'L' })}
            alt="Book cover"
          />
          <a
            data-testid="book-amazon-link"
            href={getAmazonLink()}
            target="_blank"
          >
            View on Amazon
          </a>
        </StyledImgContainer>
        <StyledDescriptionContainer>
          <h2>{book.title}</h2>
          <p className="author">
            by{' '}
            <a
              data-testid="book-author-link"
              href={`https://openlibrary.org/authors/${authorKey}`}
              target="_blank"
            >
              {book.author_name || '?'}
            </a>
          </p>
          <p>
            <strong>Year published</strong>: {firstYearPublished}
          </p>
          <p>
            <strong>Genre</strong>: {subjects}
          </p>
          <p>
            <strong>Contributors</strong>: {contributors}
          </p>
          <p>
            <strong>Pages</strong>: {pages}
          </p>
          <p>
            <strong>Published by</strong>: {publishers}
          </p>
        </StyledDescriptionContainer>
      </StyledDetailsContainer>
    </div>
  );
}
