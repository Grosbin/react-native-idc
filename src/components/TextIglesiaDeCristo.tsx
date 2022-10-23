import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {gbColor} from '../theme/themeGlobal';

export const TextIglesiaDeCristo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imagenContainer}>
        <Image
          style={styles.image}
          source={require('../assets/logo/Logo_Azul.png')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 17,
    color: gbColor.fontPrimary,
  },
  image: {
    width: 40,
    height: 40,
  },
  imagenContainer: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 999,
  },
  textContainer: {
    justifyContent: 'flex-end',
  },
});
