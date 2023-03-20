export type ThemeRecord<TAlias extends string | number | symbol> = Record<
  TAlias,
  string
>;

export type BreakpointAlias = 'sm' | 'md' | 'lg' | 'xl';
export type ColorAlias =
  | 'darkBlue'
  | 'bgGrey'
  | 'bgBlue'
  | 'cta'
  | 'ctaHover'
  | 'white'
  | 'textGrey'
  | 'textBlue'
  | 'borderGrey'
  | 'darkGrey';
export type FontFamilyAlias = 'primary';
export type FontSizeAlias = 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge';
export type FontWeightAlias = 'normal' | 'bold';
export type RadiiAlias = 'full' | 'half';
export type SpaceAlias =
  | 'tiny'
  | 'small'
  | 'medium'
  | 'large'
  | 'xlarge'
  | 'xxlarge';
export type ShadowAlias = 'card' | 'nav';

export default interface ThemeType {
  breakpoints: ThemeRecord<BreakpointAlias>;
  colors: ThemeRecord<ColorAlias>;
  fontFamilies: ThemeRecord<FontFamilyAlias>;
  fontSizes: ThemeRecord<FontSizeAlias>;
  fontWeights: ThemeRecord<FontWeightAlias>;
  radii: ThemeRecord<RadiiAlias>;
  shadows: ThemeRecord<ShadowAlias>;
  space: ThemeRecord<SpaceAlias>;
}
