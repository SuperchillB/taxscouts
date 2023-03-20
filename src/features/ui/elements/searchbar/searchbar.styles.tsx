import styled, { css } from 'styled-components';
import StyledTextInput from '../_form/text-input';

const StyledSearchbar = styled.div`
  margin: 0 auto;
`;

export const StyledSearchbarInput = styled.div(
  ({ theme: { colors, space } }) => css`
    position: relative;
    width: 100%;

    svg {
      color: ${colors.textGrey};
      width: ${space.large};
      height: ${space.large};
    }

    ${StyledTextInput} {
      padding-left: 4rem;
      padding-right: 4rem;
    }
  `,
);

export const StyledSearchIcon = styled.div`
  position: absolute;
  bottom: 0;
  top: 0;
  display: flex;
  align-items: center;
  padding-left: ${({ theme }) => theme.space.small};
  left: 0;
  pointer-events: none;
`;

export const StyledDeleteIcon = styled.button`
  position: absolute;
  bottom: 0;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  padding-right: ${({ theme }) => theme.space.small};
`;

export default StyledSearchbar;
