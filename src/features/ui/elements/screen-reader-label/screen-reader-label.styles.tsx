import styled from 'styled-components';
interface ScreenReaderLabel {
  text: string;
}

const ScreenReaderLabel = styled.label<ScreenReaderLabel>`
  clip: rect(0, 0, 0, 0);
  border-width: 0;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export default ScreenReaderLabel;
