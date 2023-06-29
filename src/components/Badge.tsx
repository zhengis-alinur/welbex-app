import React from 'react';
import { styled } from 'styled-components/native';

interface Props {
  bgColor?: string;
}

const Badge = styled.View<Props>`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.bgColor ? props.bgColor : '#000')};
  padding: 10px;
  border-radius: 15px;
  text-align: center;
`;

export default Badge;
