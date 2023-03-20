import styled, { css } from 'styled-components';
import { mqUp } from '../../../../styles/theme';

const Container = styled.div`
  height: 100%;
  width: 100%;
  margin: 0 auto;
`;

export const PageContainer = styled(Container)(
  ({ theme: { breakpoints, space } }) => css`
    padding: ${space.medium} 0;

    ${mqUp(breakpoints.md)} {
      padding: ${space.xlarge} 0;
    }
  `,
);

export const FlexContainer = styled(Container)`
  display: flex;
`;

export default Container;
