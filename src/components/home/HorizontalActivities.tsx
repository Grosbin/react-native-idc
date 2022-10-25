import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {gbColor} from '../../theme/themeGlobal';
import {ItemActivitie} from '../ItemActivitie';

const activities = [
  {
    id: '1',
    title: 'Culto Dominical',
    day: 'Domingo 30',
    hour: '8:00 AM',
  },
  {
    id: '2',
    title: 'Culto Dominical',
    day: 'Domingo 30',
    hour: '10:00 AM',
  },
  {
    id: '3',
    title: 'Clase Bíblica',
    day: 'Miércoles 2',
    hour: '6:00 PM',
  },
];

export const HorizontalActivities = () => {
  return (
    <View style={{paddingVertical: 12}}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        keyExtractor={item => item.id}
        data={activities}
        renderItem={({item}) => (
          <ItemActivitie title={item.title} day={item.day} hour={item.hour} />
        )}
      />
    </View>
  );
};
