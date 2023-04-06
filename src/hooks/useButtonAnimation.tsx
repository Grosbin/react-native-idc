import {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

export const useBibleAnimation = () => {
  const bookOffset = useSharedValue(1);

  const buttonBookScaleStyle = useAnimatedStyle(() => {
    bookOffset.value = withSpring(1, {damping: 10});
    return {
      transform: [{scale: withSpring(bookOffset.value)}],
    };
  });

  const chapterOffset = useSharedValue(1);

  const buttonChapterScaleStyle = useAnimatedStyle(() => {
    chapterOffset.value = withSpring(1, {damping: 10});
    return {
      transform: [{scale: withSpring(chapterOffset.value)}],
    };
  });

  const verseOffset = useSharedValue(1);

  const buttonVerseScaleStyle = useAnimatedStyle(() => {
    verseOffset.value = withSpring(1, {damping: 10});
    return {
      transform: [{scale: withSpring(verseOffset.value)}],
    };
  });

  return {
    buttonBookScaleStyle,
    buttonChapterScaleStyle,
    buttonVerseScaleStyle,
    bookOffset,
    chapterOffset,
    verseOffset,
  };
};
