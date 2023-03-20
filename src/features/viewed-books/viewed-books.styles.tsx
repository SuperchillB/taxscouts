import styled, { css } from 'styled-components';
import { mqUp } from '../../styles/theme';
import { StyledNoResults } from '../ui/elements/empty-state/empty-state.styles';

export const StyledViewedBooksList = styled.div(
  ({ theme: { breakpoints, space } }) => css`
    display: grid;
    grid-gap: ${space.large};
    grid-template-columns: repeat(1, minmax(0, 1fr));
    padding: ${space.large} 0;

    ${mqUp(breakpoints.md)} {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    ${mqUp(breakpoints.lg)} {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  `,
);

export const StyledNoBooks = styled(StyledNoResults)(
  ({ theme: { breakpoints } }) => css`
    p {
      z-index: 2;
    }

    ${mqUp(breakpoints.md)} {
      ${StyledIllustration} {
        height: 25rem;
      }
    }
  `,
);

export const StyledBlob = styled.img(
  ({ theme: { breakpoints } }) => css`
    position: absolute;
    top: -6rem;
    left: 50%;
    transform: translateX(-50%);
    height: 53rem;
    z-index: 0;
    user-select: none;
    pointer-events: none;

    ${mqUp(breakpoints.md)} {
      top: -15rem;
      height: 75rem;
    }
  `,
);

export const StyledIllustration = styled.img`
  height: 15rem;
  opacity: 0.9;
  z-index: 2;
  user-select: none;
  pointer-events: none;
`;
