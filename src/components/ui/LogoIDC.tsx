import React from 'react';
import {Image, View} from 'react-native';

export const LogoIDC = () => {
  return (
    <View
      style={{
        alignSelf: 'center',
        marginBottom: 10,
      }}>
      <Image
        source={require('../../assets/logo/Logo_Blanco.png')}
        style={{
          width: 110,
          height: 100,
        }}
      />
    </View>
  );
};
