import styled, { css } from 'styled-components';
import { mqUp } from '../../../styles/theme';

export const StyledLoadMoreBtn = styled.div(
  ({ theme: { colors, radii, space } }) => css`
    padding-top: ${space.medium};
    width: 100%;

    button {
      padding: ${space.small};
      width: fit-content;
      background-color: ${colors.cta};
      color: ${colors.white};
      border-radius: ${radii.half};

      &:hover {
        background-color: ${colors.ctaHover};
      }

      &:disabled {
        background-color: ${colors.ctaHover};
        cursor: not-allowed;
      }
    }
  `,
);

const StyledBookSearchResults = styled.div(
  ({ theme: { breakpoints, colors, radii, shadows, space } }) => css`
    position: absolute;
    top: calc(100% + ${space.medium});
    right: 50%;
    min-width: 37rem;
    max-width: 50rem;
    width: 100%;
    transform: translateX(50%);
    max-height: 45rem;
    min-height: 20rem;
    overflow-y: auto;
    padding: ${space.medium};
    background-color: ${colors.white};
    border-radius: ${radii.half};
    box-shadow: ${shadows.card};
    display: flex;
    flex-direction: column;
    gap: ${space.small};
    z-index: 10;

    &.no-results {
      flex-flow: row;
      justify-content: center;
      align-items: center;
      padding-left: ${space.xlarge};

      img {
        height: 10rem;
        opacity: 0.9;
      }

      p {
        place-self: center;
        margin: 0 auto;
      }
    }

    ${mqUp(breakpoints.md)} {
      right: 0;
      width: 50rem;
      transform: translateX(0);
    }
  `,
);

export default StyledBookSearchResults;
