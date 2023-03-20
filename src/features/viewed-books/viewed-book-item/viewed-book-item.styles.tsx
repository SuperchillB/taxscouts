import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { mqUp } from '../../../styles/theme';

const StyledViewedBookItem = styled(Link)(
  ({ theme: { breakpoints, colors, fontSizes, radii, shadows, space } }) => css`
    display: flex;
    padding: ${space.medium};
    background-color: ${colors.white};
    border-radius: ${radii.half};
    box-shadow: ${shadows.nav};
    max-width: 50rem;

    img {
      height: 12rem;
      width: 9rem;
      border-radius: ${radii.half};
    }

    & > div {
      text-align: start;
      padding-left: ${space.medium};
      color: ${colors.textGrey};
      font-size: ${fontSizes.medium};
    }

    ${mqUp(breakpoints.md)} {
      img {
        height: 14rem;
        width: 11rem;
      }

      & > div {
        font-size: ${fontSizes.large};
      }
    }
  `,
);

export default StyledViewedBookItem;
