import styled, { css } from 'styled-components';

const StyledTextInput = styled.input.attrs({
  type: 'text',
})(
  ({ theme: { colors, fontSizes, radii, space } }) => css`
    display: block;
    width: 100%;
    border: none;
    border-radius: ${radii.half};
    padding: ${space.small};
    padding-left: ${space.large};
    font-size: ${fontSizes.medium};
    line-height: ${fontSizes.small};
    color: ${colors.darkBlue};
    background-color: ${colors.bgGrey};

    &::placeholder {
      color: ${colors.textGrey};
    }
  `,
);

export default StyledTextInput;
