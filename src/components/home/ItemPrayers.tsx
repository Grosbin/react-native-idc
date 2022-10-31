import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {gbColor} from '../../theme/themeGlobal';
import {ListPrayers} from './ListPrayers';

interface Props {
  title: string;
  iconName: string;
  listPrayers: {id: number; name: string}[];
}

export const ItemPrayers = ({title, iconName, listPrayers}: Props) => {
  return (
    <View style={[styles.itemSeparator, {paddingBottom: 10}]}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={styles.textHeader}>
          <Icon name={`${iconName}`} size={20} color={gbColor.blueSecundary} />
          {` ${title}`}
        </Text>
      </View>
      <ListPrayers listPrayers={listPrayers} />
    </View>
  );
};

const styles = StyleSheet.create({
  itemSeparator: {
    backgroundColor: gbColor.background,
    borderRadius: 10,
    marginBottom: 15,
    marginHorizontal: 9,
  },
  textHeader: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    color: gbColor.fontPrimary,
    top: 10,
    left: 10,
    marginBottom: 10,
    opacity: 0.7,
  },
});