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
          {iconSearch && <Icon name="search" size={20} color={gbColor.foco} />}
          <Text
            style={[
              styles.buttonText,
              activeCard && {color: gbColor.fontPrimary},
              onActive && {color: gbColor.foco},
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
