import styled, { css } from 'styled-components';
import { mqUp } from '../../styles/theme';

export const StyledMainContainer = styled.main(
  ({ theme: { breakpoints, space } }) => css`
    padding: ${`0 ${space.small}`};
    max-width: ${breakpoints.xl};
    margin: 0 auto;

    ${mqUp(breakpoints.md)} {
      padding: ${`0 ${space.xlarge}`};
    }
  `,
);
