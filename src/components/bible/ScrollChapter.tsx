import React from 'react';
import {StyleProp, View, ViewStyle, FlatList, StyleSheet} from 'react-native';
import {ItemChapterVerse} from './ItemChapterVerse';

import {useContext} from 'react';
import {BibleContext} from '../../context/BibleContext';

interface Props {
  testament: {};
  style?: StyleProp<ViewStyle>;
}

export const ScrollChapter = ({testament, style}: Props) => {
  const {
    onChangeChapter,
    bibleState: {book, chapter},
  } = useContext(BibleContext);

  // const {
  //   onChangeChapter,
  //   bibleState: {chapter},
  // } = useContext(BibleContext);

  // const onPressChapter = (chapterText: number) => {
  //   onChangeChapter(chapterText);
  // };

  const getChapter = (item: number) => {
    let data: number[] = [];
    for (let i = 0; i < item; i++) {
      data[i] = i + 1;
    }

    return data;
  };

  const chapterLength = getChapter(testament[book][1]);

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={4}
        keyExtractor={(item, index) => index + item.toString()}
        data={chapterLength}
        style={{marginBottom: 150}}
        renderItem={({index}) => (
          <ItemChapterVerse
            chapterNum={index + 1}
            onPress={() => onChangeChapter(index + 1)}
          />
        )}
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
