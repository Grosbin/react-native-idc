import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {ThemeContext} from '../../context/ThemeContext';
import {ListPrayers} from './ListPrayers';

interface Props {
  title: string;
  iconName: string;
  listPrayers: string[];
}

export const ItemPrayers = ({title, iconName, listPrayers}: Props) => {
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  const titleDetail = `Oraciones por ${title}`;
  return (
    <View style={[{paddingBottom: 10}]}>
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
  itemSeparator: {},
  textHeader: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    top: 10,
    left: 10,
    marginBottom: 10,
    opacity: 0.7,
  },
});
