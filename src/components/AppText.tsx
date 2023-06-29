import styled from 'styled-components/native';

const AppText = styled.Text<{ bold?: boolean; size?: number }>`
  font-family: 'Roboto';
  color: #fff;
  font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
  font-size: ${(props) => props.size || 12}px;
`;

export default AppText;
