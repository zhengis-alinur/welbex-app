import styled from 'styled-components/native';

type Props = {
  weight?: 'light' | 'bold';
  size?: number;
  color?: string;
};

const AppText = styled.Text<Props>`
  font-family: 'Roboto';
  color: ${(props) => (props.color ? props.color : '#FFF')};
  font-weight: ${(props) => props.weight || 300};
  font-size: ${(props) => props.size || 12}px;
`;

export default AppText;
