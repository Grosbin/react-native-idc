import {DrawerScreenProps} from '@react-navigation/drawer';
import React, {useContext} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {ThemeContex} from '../context/ThemeContex';
import {gbColor} from '../theme/themeGlobal';

interface Props extends DrawerScreenProps<any, any> {}

export const Header = ({navigation}: Props) => {
  const {
    theme: {colors},
  } = useContext(ThemeContex);
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

        <Text style={[styles.nameProfile, {color: colors.fontPrimary}]}>
          {' '}
          IDC
        </Text>
      </View>

      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
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
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 8,
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
    paddingTop: 11,
  },
});
