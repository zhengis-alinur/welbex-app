import React, { ReactNode } from 'react';
import { styled } from 'styled-components/native';
import Text from '../components/AppText';

type Props = {
  title: string;
  subtitle?: string;
  children?: ReactNode;
};

const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-height: 50px;
`;

const View = ({ title, children }: Props) => {
  return (
    <Header>
      <Text size={20} weight={'bold'}>
        {title}
      </Text>
      {children}
    </Header>
  );
};

export default View;
