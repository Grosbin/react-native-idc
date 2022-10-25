import React, {useContext} from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import Animated from 'react-native-reanimated';
import {BibleContext} from '../../context/BibleContext';
import {gbColor} from '../../theme/themeGlobal';

interface Props {
  onPress: () => void;
  text: string | number;
  activeCard: boolean;
  onActive?: boolean;
  style?: StyleProp<ViewStyle>;
  buttonOpacityAnimation?: any;
  buttonScaleAnimation?: any;
  flex: number;
  disabled?: boolean;
}

export const ButtonBible = ({
  text,
  activeCard,
  onActive,
  style,
  buttonOpacityAnimation,
  buttonScaleAnimation,
  flex,
  onPress,
  disabled,
}: Props) => {
  const {
    bibleState: {book},
  } = useContext(BibleContext);
  return (
    <TouchableOpacity
      disabled={disabled}
      activeOpacity={1}
      style={[{flex: flex}]}
      onPress={onPress}>
      <Animated.View
        style={[
          styles.button,
          styles.buttonShadow,
          activeCard && {
            backgroundColor: gbColor.foco,
          },
          onActive && {backgroundColor: gbColor.green},
          // onActive && {backgroundColor: gbColor.blueSecundary},
          style,
          buttonScaleAnimation,
          buttonOpacityAnimation,
        ]}>
        <Text
          style={[
            styles.buttonText,
            activeCard && {color: gbColor.fontPrimary},
            onActive && {color: gbColor.foco},
            book.length > 11 && {fontSize: 14},
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
    backgroundColor: gbColor.green,
    // backgroundColor: gbColor.blueSecundary,
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
