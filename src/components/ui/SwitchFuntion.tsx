import React, {useContext} from 'react';
import {
  StyleProp,
  StyleSheet,
  Switch,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import {gbColor} from '../../theme/themeGlobal';
import {ThemeContext} from '../../context/ThemeContext';
import {Background} from './Background';
interface Props {
  toggleSwitch: () => void;
  title: string;
  isEnabled: boolean;
  setIsEnabled?: (value: boolean) => void;
  style?: StyleProp<ViewStyle>;
}

export const SwitchFuntion = ({
  toggleSwitch,
  title,
  isEnabled,
  style,
}: Props) => {
  const {theme} = useContext(ThemeContext);

  return (
    <View style={[styles.container, style && style]}>
      <Text
        style={{
          fontFamily: 'Poppins-Medium',
          textAlign: 'center',
          fontSize: 15,
          color: gbColor.foco,
        }}>
        {' '}
        {title}
      </Text>
      <Switch
        // trackColor={{false: gbColor.yellow, true: gbColor.yellow}}
        trackColor={{false: theme.colors.skeleton, true: theme.colors.skeleton}}
        thumbColor={
          isEnabled ? theme.colors.background : theme.colors.background
        }
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    paddingTop: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
