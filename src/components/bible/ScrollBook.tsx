import React from 'react';
import {ScrollView, StyleProp, View, ViewStyle} from 'react-native';
import {ItemBook} from './ItemBook';
import {Bible} from '../../types/bible';

interface Props {
  testament: {};
  style?: StyleProp<ViewStyle>;
}

export const ScrollSelectBook = ({testament, style}: Props) => {
  return (
    <ScrollView
      style={{marginBottom: 150}}
      showsVerticalScrollIndicator={false}>
      <View style={[{marginBottom: 0}, style]}>
        {Object.keys(testament).map((key, index) => {
          return (
            <ItemBook
              key={index}
              book={key}
              bookText={testament[key][0]}
              chapters={testament[key][1]}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};
