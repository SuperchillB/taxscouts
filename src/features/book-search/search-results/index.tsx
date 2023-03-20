import { useEffect, useState } from 'react';
import { useSearchBooksQuery } from '../../../api/books';
import useLoadMore from '../../../hooks/use-load-more';
import SearchResultsItem from './search-results-item';
import SearchResultsItemSkeleton from './search-results-item/skeleton';
import StyledBookSearchResults, {
  StyledLoadMoreBtn,
} from './search-results.styles';
import handsPhone from '../../../assets/hands-phone-pink.png';

type BookSearchResultsProps = {
  searchQuery: string;
  minSearchLength?: number;
  onSearchItemSelect: () => void;
};

const BOOK_FETCHING_LIMIT = 10;

export default function BookSearchResults({
  searchQuery,
  minSearchLength = 1,
  onSearchItemSelect,
}: BookSearchResultsProps) {
  const [minSearchQuery, setMinSearchQuery] = useState(searchQuery);

  const {
    mergedItems: books,
    isFetching,
    isLoading,
    readMore,
  } = useLoadMore(
    useSearchBooksQuery,
    {
      query: minSearchQuery,
      limit: BOOK_FETCHING_LIMIT,
    },
    { skip: minSearchQuery == '' },
  );

  const isLoadingBooks = isFetching || isLoading;

  useEffect(() => {
    // Data is fetched only when searchQuery > minSearchLength
    if (searchQuery.length === 0 || searchQuery.length > minSearchLength) {
      setMinSearchQuery(searchQuery);
    }
  }, [searchQuery]);

  if (!isLoadingBooks && books.length == 0) {
    return (
      <StyledBookSearchResults
        className="no-results"
        data-testid="book-search-results"
      >
        <img src={handsPhone} alt="No results found" />
        <p>No results found for "{searchQuery}"</p>
      </StyledBookSearchResults>
    );
  }

  return (
    <StyledBookSearchResults data-testid="book-search-results">
      {books.map((book) => (
        <SearchResultsItem
          book={book}
          key={book.key}
          onSearchItemSelect={onSearchItemSelect}
        />
      ))}
      {isLoadingBooks &&
        [...Array(BOOK_FETCHING_LIMIT).keys()].map((_, i) => (
          <SearchResultsItemSkeleton key={i} />
        ))}

      <StyledLoadMoreBtn>
        {isLoadingBooks ? (
          <button disabled onClick={readMore}>
            Loading ...
          </button>
        ) : (
          <button onClick={readMore}>Load more</button>
        )}
      </StyledLoadMoreBtn>
    </StyledBookSearchResults>
  );
}
