import styled, { css } from 'styled-components';

export const StyledNoResults = styled.div(
  ({ theme: { colors, fontWeights, space } }) => css`
    position: relative;
    color: ${colors.textBlue};
    font-weight: ${fontWeights.bold};
    display: flex;
    flex-direction: column;
    place-items: center;
    gap: ${space.xlarge};
    padding: ${space.xxlarge} 0;
    width: 40rem;
    height: 40rem;
    margin: 0 auto;
  `,
);
