import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ThemeContex} from '../../context/ThemeContex';

interface Props {
  id: string;
  title: string;
  description: string;
}

export const ItemNotices = ({title, description}: Props) => {
  const {
    theme: {colors},
  } = useContext(ThemeContex);
  return (
    <View style={[styles.container, {backgroundColor: colors.foco}]}>
      <Text style={[styles.title, {color: colors.blueSecondary}]}>{title}</Text>
      <Text style={[styles.description, {color: colors.fontPrimary}]}>
        {description}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 5,
    marginVertical: 5,
    borderRadius: 10,
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
  },
  description: {
    fontSize: 15,
    fontFamily: 'Poppins-SemiBold',
  },
});
