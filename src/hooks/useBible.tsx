import {useContext, useState} from 'react';
import genesis from '../data/ntv/genesis.json';
import exodo from '../data/ntv/exodo.json';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {BibleContext} from '../context/BibleContext';

export const useBible = () => {
  const {
    onChangeChapter,
    onChangeVerse,
    bibleState: {book, chapter, verse},
  } = useContext(BibleContext);

  let data: Object;
  if (book === 'genesis' || book !== 'exodo') {
    data = genesis;
  }
  if (book === 'exodo') {
    data = exodo;
  }

  const bibleOpacityButtonOffset = useSharedValue(1);
  const previousOpacityButtonOffset = useSharedValue(0);

  const buttonOpacityBibleStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(bibleOpacityButtonOffset.value, {duration: 300}),
    };
  });

  const buttonOpacityPreviousStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(previousOpacityButtonOffset.value, {duration: 300}),
    };
  });

  const validateBible = () => {
    if (chapter > 1) previousOpacityButtonOffset.value = 1;
    if (chapter <= 1) previousOpacityButtonOffset.value = 0;

    return data.hasOwnProperty(chapter);
  };

  const getChapter = () => {
    if (validateBible()) {
      return data[chapter]['chapter'];
    }

    onChangeChapter(1);
    previousOpacityButtonOffset.value = 0;
    return data[1]['chapter'];
  };

  const getVerses = () => {
    if (validateBible()) {
      return data[chapter]['verses'];
    }

    onChangeChapter(1);
    previousOpacityButtonOffset.value = 0;
    return data[1]['verses'];
  };

  const nextChapter = () => {
    onChangeChapter(chapter + 1);
    onChangeVerse(1);
    previousOpacityButtonOffset.value = 1;
  };

  const previousChapter = () => {
    onChangeChapter(chapter - 1);
    onChangeVerse(1);
  };

  return {
    getChapter,
    getVerses,
    nextChapter,
    previousChapter,
    bibleOpacityButtonOffset,
    previousOpacityButtonOffset,
    buttonOpacityBibleStyle,
    buttonOpacityPreviousStyle,
  };
};
