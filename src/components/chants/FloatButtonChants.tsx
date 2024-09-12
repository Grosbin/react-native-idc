import React, {useContext} from 'react';
import {StyleProp, StyleSheet, ViewStyle} from 'react-native';
import Animated, {withTiming} from 'react-native-reanimated';
import {BibleContext} from '../../context/BibleContext';
import {useBibleAnimation} from '../../hooks/useButtonAnimation';
import {ButtonBible} from '../bible/ButtonBible';
import {ButtonChants} from './ButtonChants';
import {ThemeContext} from '../../context/ThemeContext';

interface Props {
  style?: StyleProp<ViewStyle>;
  widthOffset?: any;
  heightOffset?: any;
  disabledButton?: boolean;
  onNextChant: () => void;
  onPrevChant: () => void;
  disabledNextButton?: boolean;
  disabledPrevButton?: boolean;
}

export const FloatButtonChants = ({
  style,
  widthOffset,
  heightOffset,
  disabledButton,
  onNextChant,
  onPrevChant,
  disabledNextButton,
  disabledPrevButton,
}: Props) => {
  const {
    theme: {colors},
  } = useContext(ThemeContext);

  return (
    <Animated.View style={[styles.buttonContainer]}>
      <ButtonChants
        disableButton={disabledPrevButton}
        styleButton={styles.styleButton}
        styleText={styles.styleText}
        text="Anterior"
        onPress={onPrevChant}
        icon="caret-back"
        colorIcon={colors.background}
      />
      <ButtonChants
        disableButton={disabledNextButton}
        styleButton={styles.styleButton}
        styleText={styles.styleText}
        text="Siguiente"
        onPress={onNextChant}
        icon="caret-forward"
        colorIcon={colors.background}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    // flex: 1,
    // gap: 10,
    flexDirection: 'row',
    position: 'absolute',
    bottom: 15,
    // marginHorizontal: 20,
    zIndex: 999,
    // backgroundColor: 'red',
    // width: 320,
    width: '100%',
    justifyContent: 'space-between',
  },

  styleButton: {
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: gbColor.blueSecondary,
    height: 55,
    width: 90,
    marginHorizontal: 10,
  },

  styleText: {
    fontSize: 15,
    fontFamily: 'Poppins-SemiBold',
  },
});
