import {useContext, useState} from 'react';
import genesis from '../data/ntv/genesis.json';
import exodo from '../data/ntv/exodo.json';
import levitico from '../data/ntv/levitico.json';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {BibleContext} from '../context/BibleContext';
import { getBook } from '../helpers/getBook';

export const useBible = () => {
  const {
    onChangeChapter,
    onChangeVerse,
    bibleState: {book, chapter, verse},
  } = useContext(BibleContext);

  let data = getBook(book);

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
  
  const validateBible = (chapterNum: number) => {
    if (chapter > 1) previousOpacityButtonOffset.value = 1;
    if (chapter <= 1) previousOpacityButtonOffset.value = 0;
    
    return data.hasOwnProperty(chapterNum);
  };
  
  const getChapter = () => {
    if (validateBible(chapter)) {
      return data[chapter]['chapter'];
    }
    
    onChangeChapter(1);
    previousOpacityButtonOffset.value = 0;
    return data[1]['chapter'];
  };
  
  const getVerses = () => {
    if (validateBible(chapter)) {
      return data[chapter]['verses'];
    }
    
    onChangeChapter(1);
    previousOpacityButtonOffset.value = 0;
    return data[1]['verses'];
  };
  
  const nextChapter = () => {
    onChangeVerse(1);
    if (validateBible(chapter + 1)) {
      onChangeChapter(chapter + 1);
    }
    if (!validateBible(chapter + 1)) {
      onChangeChapter(1);
    }
    previousOpacityButtonOffset.value = 1;
  };
  
  const previousChapter = () => {
    onChangeVerse(1);
    onChangeChapter(chapter - 1);
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
