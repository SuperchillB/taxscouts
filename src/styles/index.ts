import { createGlobalStyle, css } from 'styled-components';
import { normalize } from 'styled-normalize';
import { mqUp } from './theme';
import ThemeType from './theme/types';

export const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>(
  ({ theme: { breakpoints, colors, fontFamilies } }) => css`
    ${normalize};
    *,
    :before,
    :after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    html {
      font-size: 62.5%;
      scroll-behavior: smooth;
    }
    body {
      font-family: ${fontFamilies.primary};
      font-size: 1.6rem;
      background: ${colors.bgBlue};
      color: ${colors.textGrey};
      cursor: default;
      margin: 0 auto;
      min-width: ${breakpoints.sm};
      min-height: 100vh;
      overflow: hidden;
      background-image: url('./blob.svg');
      background-size: 290%;
      background-repeat: no-repeat;
      background-position-y: 10vh;
      background-position-x: -15vh;
      overflow-y: scroll;

      /* &:has(div.home-blob) {
        background-image: url('./blob.svg');
        background-size: 290%;
        background-repeat: no-repeat;
        background-position-y: 10vh;
        background-position-x: -15vh;
      } */

      ${mqUp(breakpoints.md)} {
        background-size: 250rem;
        background-position-y: 0;
        background-position-x: auto;
        overflow-y: auto;
      }
    }
    main {
      height: 100%;
    }
    #root {
      width: 100%;
      margin: 0 auto;
      text-align: center;
      overflow-x: hidden;
      height: 100vh;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    button {
      color: ${colors.darkBlue};
      line-height: 2rem;
    }
    p {
      line-height: 2rem;
    }
    h1 {
      font-weight: normal;
      font-size: 3.2rem;
    }
    a {
      color: inherit;
      text-decoration: none;
    }
    button {
      border: 0;
      padding: 0;
      background: none;
      cursor: pointer;
    }
    li {
      list-style: none;
    }
    a[href],
    button,
    input,
    textarea,
    select,
    details,
    [tabindex]:not([tabindex='-1']) {
      outline-color: ${colors.ctaHover};
    }
    ::-webkit-scrollbar {
      width: 0;
      background: transparent;
    }
  `,
);
