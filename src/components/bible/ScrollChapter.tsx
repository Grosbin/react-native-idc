import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import {ItemChapterVerse} from './ItemChapterVerse';

import {useContext} from 'react';
import {BibleContext} from '../../context/BibleContext';
import {useBible} from '../../hooks/useBible';

export const ScrollChapter = () => {
  const {onChangeChapter, onPressVerseHandler} = useContext(BibleContext);

  const {getLengthChapter} = useBible();

  const getChapter = (item: number) => {
    let data: number[] = [];
    for (let i = 0; i < item; i++) {
      data[i] = i + 1;
    }

    return data;
  };

  const chapterLength = getChapter(getLengthChapter());

  const onChange = (item: number) => {
    onChangeChapter(item);
    onPressVerseHandler(true);
  };

  return (
    <View style={styles.container}>
      <View>
        <FlatList
          showsVerticalScrollIndicator={false}
          numColumns={4}
          keyExtractor={(item, index) => index + item.toString()}
          data={chapterLength}
          columnWrapperStyle={{justifyContent: 'flex-start'}}
          style={{
            marginBottom: 150,
          }}
          renderItem={({index}) => (
            <ItemChapterVerse
              chapterNum={index + 1}
              onPress={() => onChange(index + 1)}
            />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
