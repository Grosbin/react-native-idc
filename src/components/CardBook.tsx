import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Animated from 'react-native-reanimated';
import {TopTabsBible} from '../navigator/TopTabsBible';
import {gbColor} from '../theme/themeGlobal';

interface Props {
  style?: any;
}
export const CardBook = ({style}: Props) => {
  return (
    <Animated.View
      style={[
        styles.container,
        style,
        // onPressBook && {alignSelf: 'center'},
        // !onPressBook && {justifyContent: 'flex-start', left: 16, bottom: 17},
      ]}>
      <TopTabsBible />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    // paddingTop: 8,
    backgroundColor: gbColor.background,
    // alignItems: 'center',
    // justifyContent: 'center',
    alignSelf: 'center',
    position: 'absolute',
    zIndex: 999,
    bottom: 0,
    marginHorizontal: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
});
