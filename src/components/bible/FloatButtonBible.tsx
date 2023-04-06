import React, {useContext} from 'react';
import {StyleProp, StyleSheet, ViewStyle} from 'react-native';
import Animated, {withTiming} from 'react-native-reanimated';
import {BibleContext} from '../../context/BibleContext';
import {useBibleAnimation} from '../../hooks/useButtonAnimation';
import {ButtonBible} from './ButtonBible';

interface Props {
  style?: StyleProp<ViewStyle>;
  widthOffset?: any;
  heightOffset?: any;
  disabledButton?: boolean;
}

export const FloatButtonBible = ({
  style,
  widthOffset,
  heightOffset,
  disabledButton,
}: Props) => {
  const {
    onActiveCard,
    onPressBookHandler,
    onPressChapterHandler,
    onPressVerseHandler,
    onChangeVerse,
    bibleState: {
      bookText,
      activeCard,
      chapter,
      verse,
      bookOnPress,
      verseOnPress,
      chapterOnPress,
    },
  } = useContext(BibleContext);

  const {
    bookOffset,
    chapterOffset,
    verseOffset,
    buttonBookScaleStyle,
    buttonChapterScaleStyle,
    buttonVerseScaleStyle,
  } = useBibleAnimation();

  const handlerActiveCard = (active: boolean, subActive: boolean) => {
    if (!active) {
      widthOffset.value = '100%';
      heightOffset.value = withTiming('100%', {duration: 300});
      onActiveCard(true);
    }
  };

  const onChangeBook = () => {
    bookOffset.value = 0.8;
    handlerActiveCard(activeCard, true);
    onPressBookHandler(true);
  };

  const onChangeChapterLocal = () => {
    chapterOffset.value = 0.8;
    onActiveCard(true);
    onPressChapterHandler(true);
    onChangeVerse(1);
    handlerActiveCard(activeCard, false);
  };

  const onChangeVerseLocal = () => {
    verseOffset.value = 0.8;
    onActiveCard(true);
    onPressVerseHandler(true);
    handlerActiveCard(activeCard, false);
  };

  return (
    <Animated.View style={[styles.buttonContainer, activeCard && {bottom: 80}]}>
      <ButtonBible
        disabled={disabledButton}
        onPress={onChangeBook}
        activeCard={activeCard}
        text={bookText}
        style={style}
        onActive={bookOnPress}
        flex={2}
        buttonScaleAnimation={buttonBookScaleStyle}
        iconSearch
      />

      <ButtonBible
        disabled={disabledButton}
        onPress={onChangeChapterLocal}
        activeCard={activeCard}
        text={chapter}
        style={style}
        onActive={chapterOnPress}
        flex={1}
        buttonScaleAnimation={buttonChapterScaleStyle}
      />

      <ButtonBible
        disabled={disabledButton}
        onPress={onChangeVerseLocal}
        activeCard={activeCard}
        text={verse}
        style={style}
        onActive={verseOnPress}
        flex={1}
        buttonScaleAnimation={buttonVerseScaleStyle}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    gap: 10,
    flexDirection: 'row',
    position: 'absolute',
    bottom: 15,
    marginHorizontal: 20,
    zIndex: 999,
  },
});
