import { LinearGradient } from 'expo-linear-gradient';
import React, { ReactNode } from 'react';
import { StyleSheet } from 'react-native';

const GRADIENT_START_POINT = { x: 0.3, y: 1.0 };
const GRADIENT_END_POINT = { x: 0.5, y: 0.25 };

const GRADIENT_START_COLOR = 'rgba(40, 188, 198, 0)';
const GRADIENT_END_COLOR = 'rgba(149, 213, 227, 0.8)';

const Wrapper = ({ children }: { children: ReactNode }) => {
  return (
    <LinearGradient
      start={GRADIENT_START_POINT}
      end={GRADIENT_END_POINT}
      colors={[GRADIENT_START_COLOR, GRADIENT_END_COLOR]}
      style={styles.wrapper}
    >
      {children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    gap: 10,
    width: '100%',
    borderRadius: 15,
    padding: 20,
    minHeight: 300,
  },
});
export default Wrapper;
