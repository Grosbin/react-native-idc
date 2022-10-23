import React from 'react';
import {StyleProp, View, ViewStyle, FlatList, StyleSheet} from 'react-native';
import {ItemChapterVerse} from './ItemChapterVerse';

import {useContext} from 'react';
import {BibleContext} from '../../context/BibleContext';
import { useBible } from '../../hooks/useBible';

// interface Props {
//   testament: {};
//   style?: StyleProp<ViewStyle>;
// }

export const ScrollChapter = () => {
  const {
    onChangeChapter,
    bibleState: {book, chapter},
  } = useContext(BibleContext);

  const {getLengthChapter} = useBible();

  const getChapter = (item: number) => {
    let data: number[] = [];
    for (let i = 0; i < item; i++) {
      data[i] = i + 1;
    }

    return data;
  };

  const chapterLength = getChapter(getLengthChapter());
  // console.log(testament[book][1], " Estamento");
  // console.log(chapterLength, ' Longitud');
  // console.log(testament, ' Testamento');

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
