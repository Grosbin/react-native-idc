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
  const [numChapter, setNumChapter] = useState<number>(1);
  const {
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

  const validateBible = (num: number) => {
    return data.hasOwnProperty(num);
  };

  const getChapter = (num: number = 1) => {
    if (validateBible(num)) {
      return data[num]['chapter'];
    }
    setNumChapter(1);
    previousOpacityButtonOffset.value = 0;
    return data[1]['chapter'];
  };

  const getVerses = (num: number = 1) => {
    if (validateBible(num)) {
      return data[num]['verses'];
    }
    setNumChapter(1);
    previousOpacityButtonOffset.value = 0;
    return data[1]['verses'];
  };

  const nextChapter = () => {
    setNumChapter(numChapter + 1);
    previousOpacityButtonOffset.value = 1;
  };

  const previousChapter = () => {
    setNumChapter(numChapter - 1);
    if (numChapter === 2) {
      previousOpacityButtonOffset.value = 0;
    }
  };

  return {
    getChapter,
    getVerses,
    numChapter,
    setNumChapter,
    nextChapter,
    previousChapter,
    bibleOpacityButtonOffset,
    previousOpacityButtonOffset,
    buttonOpacityBibleStyle,
    buttonOpacityPreviousStyle,
  };
};
