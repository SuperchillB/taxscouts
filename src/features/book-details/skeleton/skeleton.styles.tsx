import styled, { css } from 'styled-components';
import {
  StyledDescriptionContainer,
  StyledDetailsContainer,
  StyledImgContainer,
} from '../book-details.styles';

const StyledBookDetailsSkeleton = styled(StyledDetailsContainer).attrs({
  as: 'div',
})(
  ({ theme: { colors } }) => css`
    ${StyledImgContainerSkeleton} {
      div,
      p {
        animation: skeleton-loading 1s linear infinite alternate;
      }
    }

    ${StyledDescriptionContainerSkeleton} {
      h2,
      p {
        animation: skeleton-loading 1s linear infinite alternate;
      }
    }

    @keyframes skeleton-loading {
      0% {
        background-color: ${colors.textGrey};
      }
      100% {
        background-color: ${colors.bgGrey};
      }
    }

    @keyframes shimmer {
      100% {
        transform: translateX(100%);
      }
    }
  `,
);

export const StyledImgContainerSkeleton = styled(StyledImgContainer).attrs({
  as: 'div',
})(
  ({ theme: { colors, radii } }) => css`
    div {
      width: 26rem;
      height: 40rem;
      background-color: ${colors.darkGrey};
      border-radius: ${radii.half};
    }

    p {
      background-color: ${colors.darkGrey};
      width: 20rem;
      height: 5rem;
      margin-bottom: 0.5rem;
      border-radius: ${radii.half};
    }
  `,
);

export const StyledDescriptionContainerSkeleton = styled(
  StyledDescriptionContainer,
).attrs({
  as: 'div',
})(
  ({ theme: { colors, radii } }) => css`
    h2 {
      background-color: ${colors.darkGrey};
      width: 25rem;
      height: 3rem;
      margin-bottom: 1rem;
      border-radius: ${radii.half};
    }

    p {
      background-color: ${colors.darkGrey};
      width: 20rem;
      height: 2rem;
      margin-bottom: 1.5rem;
      border-radius: ${radii.half};

      &:nth-of-type(1) {
        margin-bottom: 3rem;
      }
    }
  `,
);

export default StyledBookDetailsSkeleton;
