import React from 'react';
import {
  ColorValue,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {gbColor} from '../../theme/themeGlobal';

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
      style={style}
      onPress={PressFuntion}>
      <Icon name={nameIcon} size={20} color={colorIcon} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});
