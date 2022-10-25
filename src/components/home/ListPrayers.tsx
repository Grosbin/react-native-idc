import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {gbColor} from '../../theme/themeGlobal';

const listPrayers = [
  {
    id: '1',
    name: 'Pedro Ramirez',
  },
  {
    id: '2',
    name: 'Sofia Perez',
  },
  {
    id: '3',
    name: 'Juan Perez',
  },
  // {
  //   id: '4',
  //   name: 'Mikel Yamamoto',
  // },
  // {
  //   id: '5',
  //   name: 'Shakira Perez',
  // },
];

export const ListPrayers = () => {
  return (
    <View style={styles.container}>
      {listPrayers.map(item => (
        <View style={styles.containerText} key={item.id}>
          <Text style={styles.name}>{item.name}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 5,
  },
  containerText: {
    backgroundColor: gbColor.foco,
    borderRadius: 12,
    marginVertical: 4,
    padding: 10,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },

  name: {
    fontFamily: 'Poppins-Bold',
    fontSize: 14,
    color: gbColor.fontPrimary,
  },
});
