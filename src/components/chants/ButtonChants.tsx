import {
  View,
  Text,
  TouchableOpacity,
  ViewStyle,
  StyleProp,
  TextStyle,
  ColorValue,
} from 'react-native';
import React, {useContext} from 'react';
import {ThemeContext} from '../../context/ThemeContext';
import {styles} from '../../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  text: string;
  styleButton?: StyleProp<ViewStyle>;
  styleText?: StyleProp<TextStyle>;
  icon?: string;
  colorIcon?: number | ColorValue | undefined;
  onPress: () => void;
  disableButton?: boolean;
}

export const ButtonChants = ({
  text,
  onPress,
  styleButton,
  styleText,
  icon,
  colorIcon,
  disableButton = false,
}: Props) => {
  const {
    theme: {colors},
  } = useContext(ThemeContext);

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      disabled={disableButton}
      onPress={onPress}
      style={[styleButton, {backgroundColor: colors.green}]}>
      {/* <Text style={[styleText, {color: colors.fontSecondary}]}>{text}</Text> */}
      {icon ? (
        <Icon name={icon} size={20} color={colorIcon} />
      ) : (
        <Text style={[styleText, {color: colors.fontSecondary}]}>{text}</Text>
      )}
    </TouchableOpacity>
  );
};
