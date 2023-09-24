import {View, Text, StyleSheet} from 'react-native';
import React, {useContext} from 'react';
import {ButtonPressIcon} from '../ui/ButtonPressIcon';
import {ThemeContext} from '../../context/ThemeContext';
import {gbColor} from '../../theme/themeGlobal';

export const ButtonPreviousChants = () => {
  const {
    theme: {colors},
  } = useContext(ThemeContext);

  return (
    <View style={styles.containerButton}>
      <ButtonPressIcon
        PressFuntion={() => console.log('Siguiente')}
        nameIcon={'caret-back'}
        colorIcon={colors.fontPrimary}
      />
      <View style={{width: 250}}>
        <Text style={[styles.title, {color: colors.fontPrimary}]}>
          Hola mundo
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerButton: {
    marginHorizontal: 20,
    paddingRight: 30,
    marginTop: 15,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    flexDirection: 'row',
    width: 80,
    height: 40,
    backgroundColor: gbColor.primary,
    borderRadius: 10,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },

  title: {
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
  },
});
