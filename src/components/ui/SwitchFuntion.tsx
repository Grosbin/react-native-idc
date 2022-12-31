import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Switch,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import {gbColor} from '../../theme/themeGlobal';

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
        trackColor={{false: gbColor.close, true: gbColor.green}}
        thumbColor={isEnabled ? gbColor.foco : gbColor.foco}
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
