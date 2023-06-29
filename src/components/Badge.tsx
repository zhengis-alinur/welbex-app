import { styled } from 'styled-components/native';
import { COLORS } from '../constants/';
type Props = {
  bgColor?: string;
};

const StyledBadge = styled.TouchableOpacity<Props>`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.bgColor ? props.bgColor : COLORS.BLACK)};
  padding: 10px;
  border-radius: 15px;
  text-align: center;
`;

export default StyledBadge;
