import StyledSearchResultsItemSkeleton from './skeleton.styles';

export default function SearchResultsItemSkeleton() {
  return (
    <StyledSearchResultsItemSkeleton data-testid="book-search-item-skeleton">
      <div />
      <div>
        <h4></h4>
        <p></p>
        <p></p>
        <p></p>
      </div>
    </StyledSearchResultsItemSkeleton>
  );
}
