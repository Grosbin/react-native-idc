import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {gbColor} from '../theme/themeGlobal';

export const ItemActivitie = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Clase Biblica</Text>

      <View style={styles.date}>
        <Text style={styles.day}>Miercoles 12</Text>
        <Text style={styles.hour}>6:00 PM</Text>
      </View>
      <TouchableOpacity style={styles.button} activeOpacity={0.8}>
        <Text style={styles.textButton}>Asistire</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    height: 120,
    backgroundColor: 'white',
    borderRadius: 10,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  title: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 15,
    position: 'absolute',
    top: 10,
    left: 10,
    color: gbColor.fontPrimary,
  },
  date: {
    position: 'absolute',
    top: 10,
    right: 15,
  },
  day: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    textAlign: 'right',
    color: gbColor.secundary,
  },
  hour: {
    fontFamily: 'Poppins-Medium',
    fontSize: 11,
    textAlign: 'right',
    color: gbColor.fontPrimary,
  },
  button: {
    position: 'absolute',
    bottom: 15,
    left: 10,
    width: 120,
    height: 40,
    backgroundColor: gbColor.primary,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    fontFamily: 'Poppins-ExtraBold',
    fontSize: 15,
    paddingTop: 3,
    color: 'white',
    alignSelf: 'center',
  },
});
