import React from 'react';
import {
  ColorValue,
  StyleProp,
  TouchableOpacity,
  ViewStyle,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  PressFuntion: () => void;
  activeCard?: boolean;
  style?: StyleProp<ViewStyle>;
  nameIcon: string;
  colorIcon: number | ColorValue | undefined;
}

export const ButtonPressIcon = ({
  PressFuntion,
  activeCard,
  style,
  nameIcon,
  colorIcon,
}: Props) => {
  return (
    <TouchableOpacity
      disabled={activeCard}
      activeOpacity={0.8}
      style={[styles.button, style]}
      onPress={PressFuntion}>
      <Icon name={nameIcon} size={20} color={colorIcon} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: 60,
    // backgroundColor: 'red',
  },
});