import React, {useContext} from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import Animated from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/Ionicons';
import {BibleContext} from '../../context/BibleContext';
import {gbColor} from '../../theme/themeGlobal';
import {View} from 'react-native';
import {ThemeContex} from '../../context/ThemeContex';

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
  iconSearch?: true;
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
  iconSearch,
}: Props) => {
  const {
    bibleState: {book},
  } = useContext(BibleContext);

  const {
    theme: {colors},
  } = useContext(ThemeContex);

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
            backgroundColor: colors.background,
          },
          onActive && {backgroundColor: colors.green},
          style,
          buttonScaleAnimation,
          buttonOpacityAnimation,
        ]}>
        <View
          style={{
            flexDirection: 'row',
            // alignItems: 'center',
            // justifyContent: 'center',
          }}>
          {/* {iconSearch && (
            <Icon name="search" size={20} color={colors.background} />
          )} */}
          <Text
            style={[
              styles.buttonText,
              {
                color: colors.background,
              },
              activeCard && {color: colors.fontPrimary},
              onActive && {color: colors.background},
              book.length > 11 && {fontSize: 14},
            ]}>
            {text}
          </Text>
        </View>
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
    height: 60,
    marginHorizontal: 10,
  },
  buttonText: {
    fontFamily: 'Poppins-ExtraBold',
    fontSize: 16,
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
