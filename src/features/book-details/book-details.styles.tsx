import styled, { css } from 'styled-components';
import { mqUp } from '../../styles/theme';

export const StyledDetailsContainer = styled.div(
  ({ theme: { breakpoints, space } }) => css`
    padding: ${space.medium} 0;
    display: flex;
    flex-direction: column;
    gap: ${space.large};
    align-items: center;

    ${mqUp(breakpoints.md)} {
      padding: ${space.xlarge} 0;
      flex-direction: row;
      align-items: initial;
    }

    ${mqUp(breakpoints.lg)} {
      gap: ${space.xxlarge};
    }
  `,
);

export const StyledImgContainer = styled.div(
  ({ theme: { breakpoints, colors, radii, shadows, space } }) => css`
    display: flex;
    flex-direction: column;
    gap: ${space.xlarge};
    background-color: ${colors.white};
    box-shadow: ${shadows.nav};
    border: 0.1rem solid ${colors.bgGrey};
    padding: ${space.xlarge};
    border-radius: 3rem;
    align-items: center;
    width: 80%;
    min-width: 35rem;
    max-width: 36rem;

    img {
      max-height: 40rem;
      min-width: 20rem;
      max-width: 26rem;
      border-radius: ${radii.half};
    }

    a {
      background-color: ${colors.cta};
      border-radius: ${radii.half};
      padding: ${space.medium};
      color: ${colors.white};

      &:hover {
        background-color: ${colors.ctaHover};
      }
    }

    ${mqUp(breakpoints.md)} {
      width: auto;
    }
  `,
);

export const StyledDescriptionContainer = styled.div(
  ({ theme: { breakpoints, colors, fontWeights, shadows, space } }) => css`
    text-align: start;
    background-color: ${colors.white};
    box-shadow: ${shadows.nav};
    border: 0.1rem solid ${colors.bgGrey};
    padding: ${space.xlarge};
    border-radius: 3rem;
    width: 80%;
    min-width: 35rem;
    height: fit-content;
    color: ${colors.textBlue};

    h2 {
      padding-bottom: ${space.small};
    }

    & .author {
      padding-bottom: ${space.large};

      a {
        color: ${colors.darkBlue};
        font-weight: ${fontWeights.bold};

        &:hover {
          text-decoration: underline;
        }
      }
    }

    p {
      line-height: 3rem;
    }

    ${mqUp(breakpoints.md)} {
      width: 100%;
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
