import React, {useCallback, useMemo} from 'react';
import {
  ScrollView,
  StyleProp,
  View,
  ViewStyle,
  FlatList,
  Text,
} from 'react-native';
import {ItemBook} from './ItemBook';

interface Props {
  testament: {};
  style?: StyleProp<ViewStyle>;
}

export const ScrollSelectBook = ({testament, style}: Props) => {
  // Memorizar getDataTestament

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
    // <ScrollView
    //   style={{marginBottom: 150}}
    //   showsVerticalScrollIndicator={false}>
    //   <View style={[{marginBottom: 0}, style]}>
    //     {Object.keys(testament).map((key, index) => {
    //       return (
    //         <ItemBook
    //           key={index}
    //           book={key}
    //           bookText={testament[key][0]}
    //           chapters={testament[key][1]}
    //         />
    //       );
    //     })}
    //   </View>
    // </ScrollView>
    <View
      style={{
        marginBottom: 150,
        // justifyContent: 'center',
        // alignItems: 'center',
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
