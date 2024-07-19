import React from 'react';
import {StyleSheet, Text, TouchableHighlight} from 'react-native';
import {gbColor} from '../../theme/themeGlobal';
import {useContext} from 'react';
import {BibleContext} from '../../context/BibleContext';
import {ThemeContext} from '../../context/ThemeContext';

interface Props {
  chapterNum: number;
  onPress: (num: number) => void;
}

export const ItemChapterVerse = ({chapterNum, onPress}: Props) => {
  const {
    bibleState: {chapter, verse, chapterOnPress},
  } = useContext(BibleContext);

  const {
    theme: {colors},
  } = useContext(ThemeContext);

  const validateChapterVerse = chapterOnPress ? chapter : verse;

  return (
    <TouchableHighlight
      underlayColor={colors.background}
      style={[styles.container, {backgroundColor: colors.foco}]}
      onPress={() => onPress(chapterNum)}>
      <Text
        style={[
          styles.chapterText,
          {
            color: colors.fontPrimary,
          },
          chapterNum === validateChapterVerse && {color: colors.blueSecondary},
        ]}>
        {chapterNum}
      </Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 70,
    height: 70,
    justifyContent: 'center',
    marginHorizontal: 9,
    marginVertical: 7,
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
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    textAlign: 'center',
  },
});
