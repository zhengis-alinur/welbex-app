import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Switch } from 'react-native';
import styled from 'styled-components/native';
import { COLORS, EN, RU } from '../constants';
import { Language } from '../types';

const ToggleWrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
//Комопнент для переключение языка приложения
const Toggle = () => {
  const { t, i18n } = useTranslation();

  const [isEnabled, setIsEnabled] = useState(i18n.language == 'ru');

  const toggleSwitch = (lang: Language) => {
    setIsEnabled((previousState) => !previousState);
    i18n.changeLanguage(lang);
  };

  return (
    <ToggleWrapper>
      <Switch
        trackColor={{ false: COLORS.ACCENT, true: COLORS.ACCENT }}
        thumbColor={COLORS.WHITE}
        onValueChange={() => toggleSwitch(isEnabled ? EN : RU)}
        value={isEnabled}
      />
    </ToggleWrapper>
  );
};

export default Toggle;
