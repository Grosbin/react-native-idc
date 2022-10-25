import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {gbColor} from '../theme/themeGlobal';

export const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerIcon}>
        <Image
          style={{
            // position: 'absolute',
            // top: 0,
            // left: 10,
            width: 40,
            height: 40,
          }}
          source={require('../assets/logo/Logo_Azul.png')}
        />
        {/* <Icon
          name={'person-circle-outline'}
          size={30}
          color={gbColor.fontPrimary}
        /> */}
        <Text style={styles.nameProfile}> Grosbin Rivera</Text>
      </View>
      <Icon
        name={'ellipsis-horizontal'}
        size={30}
        color={gbColor.fontPrimary}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginBottom: 8,
  },

  containerIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  nameProfile: {
    fontFamily: 'Poppins-ExtraBold',
    color: gbColor.fontPrimary,
    fontSize: 16,
    textAlign: 'center',
    paddingTop: 5,
  },
});
