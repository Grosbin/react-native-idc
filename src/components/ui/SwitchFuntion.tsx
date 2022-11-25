import React, {useState} from 'react';
import {StyleSheet, Switch, Text, View} from 'react-native';
import {gbColor} from '../../theme/themeGlobal';

interface Props {
  toggleSwitch: () => void;
  title: string;
  isEnabled: boolean;
  setIsEnabled?: (value: boolean) => void;
}

export const SwitchFuntion = ({
  toggleSwitch,
  title,
  isEnabled,
  setIsEnabled,
}: Props) => {
  return (
    <View
      style={{
        width: '100%',
        height: 50,
        paddingTop: 10,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
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
        // onChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
