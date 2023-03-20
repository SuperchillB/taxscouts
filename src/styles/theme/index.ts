import radii from './foundations/border';
import breakpoints from './foundations/breakpoints';
import colors from './foundations/colors';
import shadows from './foundations/shadows';
import space from './foundations/space';
import { fontFamilies, fontSizes, fontWeights } from './foundations/typography';
import ThemeType from './types';

const theme: ThemeType = {
  breakpoints,
  colors,
  fontFamilies,
  fontSizes,
  fontWeights,
  radii,
  shadows,
  space,
};

export const mqUp = (breakpoint: string) =>
  `@media (min-width: calc(${breakpoint} + 0.02px))`;

export const mwDown = (breakpoint: string) =>
  `@media (max-width: ${breakpoint})`;

export default theme;
