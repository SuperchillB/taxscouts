import { useState } from 'react';
import useDebounce from '../../hooks/use-debouncer';
import Searchbar from '../ui/elements/searchbar';
import StyledBookSearch from './book-search.styles';
import BookSearchResults from './search-results';

export default function BookSearch() {
  const [searchQuery, setSearchQuery] = useState('');
  const debouncedSearchQuery = useDebounce(searchQuery, 500);

  return (
    <StyledBookSearch data-testid="book-searchbar">
      <Searchbar
        ariaLabel="Search for books, authors, and more"
        onSearchType={(value: string) => setSearchQuery(value)}
        placeholder="Search for books, authors, and more"
      />

      {searchQuery.length > 3 ? (
        <BookSearchResults
          minSearchLength={3}
          searchQuery={debouncedSearchQuery}
          onSearchItemSelect={() => setSearchQuery('')}
        />
      ) : null}
    </StyledBookSearch>
  );
}
