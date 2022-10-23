import React from 'react';
import {StyleSheet, Text, TouchableHighlight} from 'react-native';
import {gbColor} from '../../theme/themeGlobal';
import {useContext} from 'react';
import {BibleContext} from '../../context/BibleContext';

interface Props {
  chapterNum: number;
  onPress: (num: number) => void;
}

export const ItemChapterVerse = ({chapterNum, onPress}: Props) => {
  const {
    bibleState: {chapter, verse, chapterOnPress},
  } = useContext(BibleContext);

  const validateChapterVerse = chapterOnPress ? chapter : verse;

  return (
    <TouchableHighlight
      underlayColor={gbColor.foco}
      style={styles.container}
      onPress={() => onPress(chapterNum)}>
      <Text
        style={[
          styles.chapterText,
          chapterNum === validateChapterVerse && {color: gbColor.blueSecundary},
        ]}>
        {chapterNum}
      </Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: gbColor.foco,
    width: 75,
    height: 75,
    justifyContent: 'center',
    marginHorizontal: 8,
    marginVertical: 8,
    borderRadius: 10,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  chapterText: {
    fontSize: 19,
    fontFamily: 'Poppins-Bold',
    color: gbColor.fontPrimary,
    textAlign: 'center',
  },
});
