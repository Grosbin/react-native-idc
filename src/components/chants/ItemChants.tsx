import React, {useContext} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Keyboard} from 'react-native';
import {ThemeContex} from '../../context/ThemeContex';
import {gbColor} from '../../theme/themeGlobal';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParams} from '../../navigator/StackNavigator';

interface Props {
  id: string;
  name: string;
  lyrics: string[];
}

export const ItemChants = ({id, name, lyrics}: Props) => {
  const navigate = useNavigation<StackNavigationProp<RootStackParams>>();

  const {
    theme: {colors},
  } = useContext(ThemeContex);

  return (
    <TouchableOpacity
      onPress={() => navigate.navigate('ContentChants', {id, name, lyrics})}
      activeOpacity={0.8}
      style={[styles.container, {backgroundColor: colors.foco}]}>
      <Text style={[styles.text, {color: colors.fontPrimary}]}>{id}</Text>
      <Text style={[styles.text, {color: colors.fontPrimary}]}>{name}</Text>
      <Icon name="chevron-forward" size={25} color={colors.fontPrimary} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // backgroundColor: gbColor.background,
    marginVertical: 5,
    borderRadius: 10,
    height: 55,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 5,
    paddingHorizontal: 15,

    shadowColor: '#020052',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,

    elevation: 2,
  },
  text: {
    fontFamily: 'Poppins-Medium',
  },
});
