import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {gbColor} from '../theme/themeGlobal';

export const CircleHour = () => {
  return (
    <View style={styles.contanier}>
      <Text style={styles.textCircle}>Hoy</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  contanier: {
    backgroundColor: 'white',
    borderRadius: 100,
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 50,
    right: 20,
  },
  textCircle: {
    fontFamily: 'Poppins-ExtraBold',
    fontSize: 20,
    color: gbColor.fontPrimary,
  },
});
