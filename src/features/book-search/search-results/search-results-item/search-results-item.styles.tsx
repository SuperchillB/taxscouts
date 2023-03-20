import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { mqUp } from '../../../../styles/theme';

const StyledSearchResultsItem = styled(Link)(
  ({ theme: { breakpoints, colors, fontSizes, radii, space } }) => css`
    display: flex;

    img {
      height: 10rem;
      width: 7rem;
      border-radius: ${radii.half};
    }

    & > div {
      text-align: start;
      padding-left: ${space.medium};
      color: ${colors.textGrey};
      max-width: 26rem;
      font-size: ${fontSizes.medium};

      p {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
    }

    ${mqUp(breakpoints.md)} {
      & > div {
        max-width: 37.5rem;
        font-size: ${fontSizes.large};
      }
    }
  `,
);

export default StyledSearchResultsItem;
