import React, {useCallback} from 'react';
import {StyleProp, View, ViewStyle, FlatList} from 'react-native';
import {ItemBook} from './ItemBook';

interface Props {
  testament: {};
  style?: StyleProp<ViewStyle>;
}

export const ScrollSelectBook = ({testament, style}: Props) => {
  const data = useCallback(() => getDataTestament(testament), [testament]);

  const getDataTestament = testament => {
    const data = Object.keys(testament).map(key => {
      return {
        id: key,
        content: testament[key],
      };
    });

    return data;
  };

  return (
    <View
      style={{
        marginBottom: 150,
      }}>
      <FlatList
        numColumns={2}
        columnWrapperStyle={{justifyContent: 'center'}}
        keyExtractor={(item, index) => index + item.toString()}
        showsVerticalScrollIndicator={false}
        data={data()}
        renderItem={({item, index}) => (
          <ItemBook
            key={item.id}
            book={item.id}
            bookText={testament[item.id][0]}
            chapters={testament[item.id][1]}
          />
        )}
        ListFooterComponent={<View style={{height: 100}} />}
      />
    </View>
  );
};
