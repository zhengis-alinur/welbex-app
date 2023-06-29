import React, { useState } from 'react';
import { View, Switch, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { COLORS } from '../constants';

const ToggleWrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Toggle = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <ToggleWrapper>
      <Switch
        trackColor={{ false: COLORS.ACCENT, true: COLORS.ACCENT }}
        thumbColor={COLORS.WHITE}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </ToggleWrapper>
  );
};

export default Toggle;
