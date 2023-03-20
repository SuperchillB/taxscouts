import StyledBookDetailsSkeleton, {
  StyledDescriptionContainerSkeleton,
  StyledImgContainerSkeleton,
} from './skeleton.styles';

export default function BookDetailsSkeleton() {
  return (
    <StyledBookDetailsSkeleton data-testid="book-details-skeleton">
      <StyledImgContainerSkeleton>
        <div />
        <p></p>
      </StyledImgContainerSkeleton>
      <StyledDescriptionContainerSkeleton>
        <h2></h2>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
      </StyledDescriptionContainerSkeleton>
    </StyledBookDetailsSkeleton>
  );
}
