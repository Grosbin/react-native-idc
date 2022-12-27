import React from 'react';
import {FlatList, View} from 'react-native';
import {ItemActivitie} from '../ItemActivitie';

interface Props {
  activities: {
    id: string;
    title: string;
    day: string;
    hour: string;
    description: string;
  }[];
}

export const HorizontalActivities = ({activities}: Props) => {
  return (
    <View style={{paddingVertical: 12}}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        keyExtractor={(item, index) => item.id + index.toString()}
        data={activities}
        renderItem={({item}) => (
          <ItemActivitie title={item.title} day={item.day} hour={item.hour} />
        )}
      />
    </View>
  );
};
