import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {ThemeContex} from '../../context/ThemeContex';
import {gbColor} from '../../theme/themeGlobal';
import {ListPrayers} from './ListPrayers';

interface Props {
  title: string;
  iconName: string;
  listPrayers: {id: number; name: string}[];
}

export const ItemPrayers = ({title, iconName, listPrayers}: Props) => {
  const {
    theme: {colors},
  } = useContext(ThemeContex);
  const titleDetail = `Oracines por ${title}`;
  // console.log(colors.blueSecundary);
  return (
    <View
      style={[
        styles.itemSeparator,
        {paddingBottom: 10},
        // {backgroundColor: colors.background},
      ]}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={[styles.textHeader, {color: colors.blueSecondary}]}>
          <Icon name={`${iconName}`} size={20} />
          {` ${title}`}
        </Text>
      </View>
      <ListPrayers listPrayers={listPrayers} titleDetail={titleDetail} />
    </View>
  );
};

const styles = StyleSheet.create({
  itemSeparator: {
    // backgroundColor: gbColor.background,
    borderRadius: 10,
    marginBottom: 15,
    marginHorizontal: 9,
  },
  textHeader: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    // color: gbColor.fontPrimary,
    top: 10,
    left: 10,
    marginBottom: 10,
    opacity: 0.7,
  },
});
