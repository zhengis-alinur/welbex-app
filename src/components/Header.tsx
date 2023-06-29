import React from 'react';
import { styled } from 'styled-components/native';
import Text from '../components/AppText';
import Map from '../assets/icons/Map';

const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-height: 50px;
`;

const View = ({ title }: { title: string }) => {
  return (
    <Header>
      <Text size={20} bold>
        {title}
      </Text>
      <Map />
    </Header>
  );
};

export default View;
