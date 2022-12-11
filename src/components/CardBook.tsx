import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Animated from 'react-native-reanimated';
import {ThemeContex} from '../context/ThemeContex';
import {TopTabsBible} from '../navigator/TopTabsBible';
import {gbColor} from '../theme/themeGlobal';

interface Props {
  style?: any;
  widthOffset?: any;
  heightOffset?: any;
}
export const CardBook = ({style, widthOffset, heightOffset}: Props) => {
  const {
    theme: {colors},
  } = useContext(ThemeContex);
  return (
    <Animated.View
      style={[styles.container, style, {backgroundColor: colors.background}]}>
      <TopTabsBible widthOffset={widthOffset} heightOffset={heightOffset} />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    // alignSelf: 'center',
    position: 'absolute',
    zIndex: 999,
    bottom: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
