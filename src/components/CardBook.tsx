import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';
import Animated from 'react-native-reanimated';
import {ThemeContext} from '../context/ThemeContext';
import {TopTabsBible} from '../navigator/TopTabsBible';

interface Props {
  style?: any;
  widthOffset?: any;
  heightOffset?: any;
}
export const CardBook = ({style, widthOffset, heightOffset}: Props) => {
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  return (
    <Animated.View
      style={[styles.container, style, {backgroundColor: colors.background}]}>
      <TopTabsBible widthOffset={widthOffset} heightOffset={heightOffset} />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 999,
    bottom: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
