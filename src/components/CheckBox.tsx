import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  isChecked: boolean;
  setIsChecked: (value: boolean) => void;
}

export const CheckBox = ({isChecked, setIsChecked}: Props) => {
  return (
    <TouchableOpacity onPress={() => setIsChecked(!isChecked)}>
      <View
        style={[styles.container, isChecked && {backgroundColor: '#0dc4ae'}]}>
        <Icon name="checkmark" size={20} color={'#fff'} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: 25,
    height: 25,
    borderRadius: 9,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
});
