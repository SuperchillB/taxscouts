import styled, { css } from 'styled-components';
import { mqUp } from '../../../styles/theme';
import StyledSearchbar from '../elements/searchbar/searchbar.styles';

export const StyledNavbar = styled.nav(
  ({ theme: { colors, breakpoints, shadows, space } }) => css`
    padding: ${space.large};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: ${space.large};
    width: 100%;
    box-shadow: ${shadows.nav};
    max-width: ${breakpoints.xl};
    margin: 0 auto;

    a {
      display: flex;
      align-items: center;

      svg {
        color: ${colors.darkBlue};
        width: ${space.large};
        height: ${space.large};
      }

      h3 {
        padding-left: ${space.small};
      }
    }

    ${StyledSearchbar} {
      width: 90%;
    }

    ${mqUp(breakpoints.md)} {
      justify-content: space-between;
      flex-direction: row;

      ${StyledSearchbar} {
        width: 35rem;
      }
    }
  `,
);
