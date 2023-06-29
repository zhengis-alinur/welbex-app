import { LinearGradient } from 'expo-linear-gradient';
import React, { ReactNode } from 'react';
import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

const Wrapper = ({ children }: { children: ReactNode }) => {
  return (
    <LinearGradient
      start={{ x: 0.3, y: 1.0 }}
      end={{ x: 0.5, y: 0.25 }}
      colors={['rgba(40, 188, 198, 0)', 'rgba(149, 213, 227, 0.8)']}
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
