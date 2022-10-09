import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {gbColor} from '../theme/themeGlobal';
import {CircleHour} from './CircleHour';
import {TextIglesiaDeCristo} from './TextIglesiaDeCristo';

export const NowActivitie = () => {
  return (
    <View style={styles.conteiner}>
      <TextIglesiaDeCristo />
      <View style={styles.textContainer}>
        <Text style={styles.title}>Culto Dominical</Text>
        <Text style={styles.hour}>10:00 AM</Text>
      </View>
      <CircleHour />
    </View>
  );
};

const styles = StyleSheet.create({
  conteiner: {
    backgroundColor: gbColor.secundary,
    marginVertical: 10,
    marginLeft: 10,
    marginRight: 60,
    borderRadius: 12,
    height: '88%',
  },
  textContainer: {
    top: 50,
    left: 20,
  },

  title: {
    fontFamily: 'Poppins-ExtraBold',
    fontSize: 25,
    color: gbColor.fontPrimary,
    marginBottom: -15,
  },
  hour: {
    fontFamily: 'Poppins-ExtraBold',
    fontSize: 25,
    color: gbColor.foco,
  },
});
