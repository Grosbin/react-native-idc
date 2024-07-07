import {DrawerScreenProps} from '@react-navigation/drawer';
import React, {useContext} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {ThemeContext} from '../context/ThemeContext';
import {gbColor} from '../theme/themeGlobal';

interface Props extends DrawerScreenProps<any, any> {}

export const Header = ({navigation}: Props) => {
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  return (
    <View style={styles.container}>
      {/* <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('ProfileScreen')}>
        <View style={styles.containerIcon}>
          <Image
            style={{
              width: 40,
              height: 40,
            }}
            source={require('../assets/logo/Logo_Azul.png')}
          />

          <Text style={[styles.nameProfile, {color: colors.fontPrimary}]}>
            {' '}
            San José De La Vega
          </Text>
        </View>
      </TouchableOpacity> */}

      <TouchableOpacity
        style={styles.buttonMenu}
        onPress={() => navigation.toggleDrawer()}>
        <Text>
          {' '}
          <Icon
            name={'ellipsis-horizontal'}
            size={30}
            color={colors.fontPrimary}
          />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginHorizontal: 20,
    marginTop: 8,
  },

  containerIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  nameProfile: {
    fontFamily: 'Poppins-Bold',
    color: gbColor.fontPrimary,
    fontSize: 12,
    textAlign: 'center',
    paddingTop: 11,
  },

  buttonMenu: {
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'flex-end',
    width: 60,
  },
});
