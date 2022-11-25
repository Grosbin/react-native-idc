import React from 'react';
import {View} from 'react-native';

export const Background = () => {
  return (
    <View
      style={{
        position: 'absolute',
        backgroundColor: '#3b46f1',
        // top: -250,
        width: '100%',
        height: '100%',
        // transform: [{rotate: '-70deg'}],
      }}
    />
  );
};
