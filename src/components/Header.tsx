import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {gbColor} from '../theme/themeGlobal';

export const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerIcon}>
        <Icon
          name={'person-circle-outline'}
          size={30}
          color={gbColor.fontPrimary}
        />
        <Text style={styles.nameProfile}>Grosbin Rivera</Text>
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
    marginBottom: 15,
  },

  containerIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  nameProfile: {
    fontFamily: 'Poppins-ExtraBold',
    color: gbColor.fontPrimary,
    fontSize: 15,
    textAlign: 'center',
  },
});
