import React from 'react';
import {StyleProp, View, ViewStyle, FlatList, StyleSheet} from 'react-native';
import {ItemChapterVerse} from './ItemChapterVerse';

import {useContext} from 'react';
import {BibleContext} from '../../context/BibleContext';
import {useBible} from '../../hooks/useBible';

interface Props {
  testament: {};
  style?: StyleProp<ViewStyle>;
}

export const ScrollVerse = ({testament, style}: Props) => {
  const {
    onChangeVerse,
    bibleState: {book, chapter, verse},
  } = useContext(BibleContext);

  const {getVerses} = useBible();

  const verses: [] = getVerses();

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={4}
        keyExtractor={index => index}
        data={verses}
        style={{marginBottom: 150}}
        renderItem={({index}) => (
          <ItemChapterVerse
            chapterNum={index + 1}
            onPress={() => onChangeVerse(index + 1)}
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
