import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import Animated from 'react-native-reanimated';
import {gbColor} from '../../theme/themeGlobal';

interface Props {
  onPress: () => void;
  text: string | number;
  onPressBook: boolean;
  style?: StyleProp<ViewStyle>;
  buttonOpacityAnimation?: any;
  buttonScaleAnimation?: any;
  flex: number;
  disabled?: boolean;
}

export const ButtonBible = ({
  text,
  onPressBook,
  style,
  buttonOpacityAnimation,
  buttonScaleAnimation,
  flex,
  onPress,
  disabled,
}: Props) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      activeOpacity={1}
      style={[{flex: flex}]}
      onPress={onPress}>
      <Animated.View
        style={[
          styles.button,
          !onPressBook && styles.buttonShadow,
          onPressBook && {
            backgroundColor: gbColor.foco,
            borderColor: gbColor.secundary,
            borderWidth: 1,
          },
          style,
          buttonScaleAnimation,
          buttonOpacityAnimation,
        ]}>
        <Text
          style={[
            styles.buttonText,
            onPressBook && {color: gbColor.secundary},
          ]}>
          {text}
        </Text>
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: gbColor.primary,
    height: 60,
    marginHorizontal: 10,
  },
  buttonText: {
    fontFamily: 'Poppins-ExtraBold',
    fontSize: 16,
    color: gbColor.foco,
  },
  buttonShadow: {
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
