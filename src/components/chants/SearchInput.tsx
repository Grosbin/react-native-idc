import React, {useContext, useEffect, useState} from 'react';
import {Keyboard, StyleSheet, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import {ThemeContex} from '../../context/ThemeContex';
import {useDeboucedValue} from '../../hooks/useDeboucedValue';

interface Props {
  onChange: (value: string) => void;
}

export const SearchInput = ({onChange}: Props) => {
  const [textValue, setTextValue] = useState('');
  const {
    theme: {colors},
  } = useContext(ThemeContex);

  const debouncedValue = useDeboucedValue(textValue);

  useEffect(() => {
    onChange(debouncedValue);
  }, [debouncedValue]);

  return (
    <View style={[styles.textBackground, {backgroundColor: colors.foco}]}>
      <TextInput
        onSubmitEditing={Keyboard.dismiss}
        placeholder="Buscar Canto"
        placeholderTextColor={colors.blueSecondary}
        autoCapitalize="none"
        autoCorrect={false}
        style={[styles.textInput, {color: colors.fontPrimary}]}
        value={textValue}
        onChangeText={setTextValue}
      />
      <Icon name="search-outline" size={25} color={colors.blueSecondary} />
    </View>
  );
};

const styles = StyleSheet.create({
  textBackground: {
    borderRadius: 50,
    height: 50,
    marginHorizontal: 5,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  textInput: {
    flex: 1,
    fontSize: 14,
    top: 2,
    fontFamily: 'Poppins-Medium',
  },
});
