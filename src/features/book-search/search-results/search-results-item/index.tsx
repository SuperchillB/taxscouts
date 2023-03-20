import { BookSearchDocsDTO } from '../../../../types/api/books';
import StyledSearchResultsItem from './search-results-item.styles';
import { SearchResultsItemContents } from './item-contents';
import { trimBookKey } from '../../../../utils/books';

type SearchResultsItemProps = {
  book: BookSearchDocsDTO;
  onSearchItemSelect: () => void;
};

export default function SearchResultsItem({
  book,
  onSearchItemSelect,
}: SearchResultsItemProps) {
  const { key, title } = book;

  return (
    <StyledSearchResultsItem
      data-testid="book-search-item"
      onClick={onSearchItemSelect}
      to={`/books/${trimBookKey(key)}`}
      state={{ title }}
    >
      <SearchResultsItemContents {...book} />
    </StyledSearchResultsItem>
  );
}
