import React from 'react';
import {StyleProp, View, ViewStyle, FlatList, StyleSheet} from 'react-native';
import {ItemChapter} from './ItemChapter';

import {useContext} from 'react';
import {BibleContext} from '../../context/BibleContext';

interface Props {
  testament: {};
  style?: StyleProp<ViewStyle>;
}

export const ScrollChapter = ({testament, style}: Props) => {
  const {
    bibleState: {book},
  } = useContext(BibleContext);

  const getChapter = (item: number) => {
    let data: number[] = [];
    for (let i = 0; i < item; i++) {
      data[i] = i + 1;
    }

    return data;
  };

  const chapter = getChapter(testament[book][1]);

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={4}
        keyExtractor={(item, index) => index.toString()}
        data={chapter}
        style={{marginBottom: 150}}
        renderItem={({index}) => <ItemChapter chapterText={index + 1} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
