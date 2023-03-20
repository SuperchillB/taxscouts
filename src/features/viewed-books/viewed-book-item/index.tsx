import { BookSearchDocsDTO } from '../../../types/api/books';
import { trimBookKey } from '../../../utils/books';
import { SearchResultsItemContents } from '../../book-search/search-results/search-results-item/item-contents';
import StyledViewedBookItem from './viewed-book-item.styles';

type ViewedBookItemProps = {
  book: BookSearchDocsDTO;
};

export default function ViewedBookItem({ book }: ViewedBookItemProps) {
  const { key, title } = book;

  return (
    <StyledViewedBookItem
      aria-label={title}
      data-testid="recently-viewed-book"
      role="button"
      tabIndex={0}
      to={`books/${trimBookKey(key)}`}
      state={{ title }}
    >
      <SearchResultsItemContents {...book} />
    </StyledViewedBookItem>
  );
}
