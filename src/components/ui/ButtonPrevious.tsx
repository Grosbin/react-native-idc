import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ThemeContex} from '../../context/ThemeContex';
import {colors} from '../../theme/appTheme';
import {gbColor} from '../../theme/themeGlobal';
import {ButtonPressIcon} from './ButtonPressIcon';

interface Props {
  navigation: any;
  title: string;
  sizeTitle: number;
}

export const ButtonPrevious = ({navigation, title, sizeTitle}: Props) => {
  const {
    theme: {colors},
  } = useContext(ThemeContex);
  return (
    <View style={styles.containerButton}>
      <ButtonPressIcon
        // style={styles.button}
        PressFuntion={() => navigation.pop()}
        nameIcon={'caret-back'}
        colorIcon={colors.fontPrimary}
      />
      <View style={{width: 250}}>
        <Text
          style={[
            styles.title,
            {color: colors.fontPrimary, fontSize: sizeTitle},
          ]}>
          {title}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerButton: {
    marginHorizontal: 15,
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
    // fontSize: 20,
  },
});
