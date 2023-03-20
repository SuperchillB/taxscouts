import styled, { css } from 'styled-components';
import StyledSearchResultsItem from '../search-results-item.styles';

const StyledSearchResultsItemSkeleton = styled(StyledSearchResultsItem).attrs({
  as: 'div',
})(
  ({ theme: { colors, radii } }) => css`
    align-items: center;

    div:first-of-type {
      border-radius: ${radii.half};
      height: 10rem;
      width: 8rem;
      background-color: ${colors.darkBlue};
      animation: skeleton-loading 1s linear infinite alternate;
    }

    div:last-of-type {
      h4 {
        background-color: ${colors.darkBlue};
        width: 8rem;
        height: 2rem;
        margin-bottom: 1rem;
        border-radius: ${radii.half};
        animation: skeleton-loading 1s linear infinite alternate;
      }

      p {
        background-color: ${colors.darkBlue};
        width: 20rem;
        height: 1.5rem;
        margin-bottom: 0.5rem;
        border-radius: ${radii.half};
        animation: skeleton-loading 1s linear infinite alternate;

        &:nth-of-type(2),
        &:nth-of-type(3) {
          width: 30rem;
        }
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

export default StyledSearchResultsItemSkeleton;
