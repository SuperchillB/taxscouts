import styled, { css } from 'styled-components';
import { mqUp } from '../../../../styles/theme';

export const StyledTitle = styled.h1(
  ({ theme: { breakpoints, fontSizes, space } }) => css`
    text-align: start;
    line-height: 3rem;
    font-size: ${fontSizes.xlarge};
    z-index: 1;
    position: relative;

    ${mqUp(breakpoints.md)} {
      font-size: ${fontSizes.xxlarge};
    }
  `,
);
