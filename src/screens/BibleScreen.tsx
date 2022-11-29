import React, {useContext, useEffect, useRef, useState} from 'react';
import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
  FlatList,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';
import {gbColor} from '../theme/themeGlobal';
import {FloatButtonBible} from '../components/bible/FloatButtonBible';
import Icon from 'react-native-vector-icons/Ionicons';
import {useBible} from '../hooks/useBible';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import {CardBook} from '../components/CardBook';
import {BibleContext} from '../context/BibleContext';
import {CloseCard} from '../components/bible/CloseCard';
import {ButtonPressIcon} from '../components/ui/ButtonPressIcon';
import {color} from 'react-native-reanimated';
import {ThemeContex} from '../context/ThemeContex';
import {useLocalStorage} from '../hooks/useLocalStorage';
import {useCardAnimation} from '../hooks/useCardAnimation';
import {SafeAreaView} from 'react-native';

export const BibleScreen = () => {
  const [disabledButton, setDisabledButton] = useState(false);
  const ref = useRef<FlatList>(null);

  const {
    theme: {colors},
  } = useContext(ThemeContex);

  const {
    getChapter,
    getVerses,
    nextChapter,
    previousChapter,
    getLengthChapter,
    bibleOpacityButtonOffset,
    buttonOpacityBibleStyle,
    buttonOpacityPreviousStyle,
  } = useBible();

  const {widthOffsetCard, heightOffsetCard, cardScaleStyle} =
    useCardAnimation();

  const lastContentOffset = useRef(0);

  const {
    bibleState: {activeCard, chapter, verse, book},
  } = useContext(BibleContext);
  const [index, setIndex] = useState(0);

  const showButton = () => {
    bibleOpacityButtonOffset.value = 1;
    setDisabledButton(false);
  };

  const removeButton = () => {
    bibleOpacityButtonOffset.value = 0;
    setDisabledButton(true);
  };

  const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (!activeCard) {
      let y = e.nativeEvent.contentOffset.y;
      let previousY = lastContentOffset.current;
      previousY > y && showButton();
      if (Math.sign(previousY) === 1) {
        previousY < y && removeButton();
      }
      y === 0 && showButton();
      lastContentOffset.current = e.nativeEvent.contentOffset.y;
    }
  };

  useEffect(() => {
    if (getVerses().length >= verse) {
      setIndex(verse - 1);
    }
    if (getVerses().length < verse) {
      setIndex(0);
    }
  }, [verse]);

  useEffect(() => {
    ref.current?.scrollToIndex({index, animated: true});
  }, [index]);

  useEffect(() => {
    ref.current?.scrollToIndex({index: 0, animated: true});
  }, [chapter]);

  const getChapterNumber = getChapter();
  const lengthChapter = getLengthChapter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text
          style={[
            styles.titleText,
            book.length > 11 && {fontSize: 19},
            {color: colors.primary},
          ]}>
          {getChapterNumber}
        </Text>
        <View style={styles.buttonContainer}>
          <Animated.View style={[buttonOpacityPreviousStyle]}>
            <ButtonPressIcon
              activeCard={chapter === 1 || activeCard}
              style={[styles.button, styles.previousButton]}
              PressFuntion={previousChapter}
              nameIcon={'caret-back'}
              colorIcon={colors.primary}
            />
          </Animated.View>
          {lengthChapter > 1 && (
            <ButtonPressIcon
              activeCard={activeCard}
              style={styles.button}
              PressFuntion={nextChapter}
              nameIcon={'caret-forward'}
              colorIcon={colors.fontPrimary}
            />
          )}
        </View>
      </View>

      <FlatList
        ListFooterComponent={<View style={{height: 90}} />}
        ref={ref}
        initialScrollIndex={index}
        onScrollToIndexFailed={() => {
          setIndex(0);
        }}
        keyExtractor={(item, index) => index + item.toString()}
        // TODO: Valida Versiculos duplicados
        // keyExtractor={(index) => index.toString()}
        scrollEnabled={!activeCard}
        showsVerticalScrollIndicator={false}
        data={getVerses()}
        renderItem={({item, index}) => (
          <View key={index} style={styles.containerVerse}>
            <Text style={[styles.numVerse, {color: colors.fontPrimary}]}>
              {index + 1}
            </Text>
            <Text style={[styles.texVerse, {color: colors.fontPrimary}]}>
              {item}
            </Text>
          </View>
        )}
        onScroll={e => onScroll(e)}
      />
      <CardBook
        style={cardScaleStyle}
        widthOffset={widthOffsetCard}
        heightOffset={heightOffsetCard}
      />

      <FloatButtonBible
        style={buttonOpacityBibleStyle}
        widthOffset={widthOffsetCard}
        heightOffset={heightOffsetCard}
        disabledButton={disabledButton}
      />
      {activeCard && (
        <CloseCard
          widthOffset={widthOffsetCard}
          heightOffset={heightOffsetCard}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    marginVertical: 15,
  },
  titleText: {
    fontFamily: 'Poppins-ExtraBold',
    fontSize: 20,
    // color: gbColor.primary,
  },
  containerVerse: {
    flexDirection: 'row',
    marginHorizontal: 15,
    marginVertical: 5,
    width: '85%',
  },
  numVerse: {
    fontFamily: 'Poppins-ExtraBold',
    fontSize: 16,
    // color: gbColor.fontPrimary,
    marginRight: 10,
  },
  texVerse: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    // color: gbColor.fontPrimary,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flexDirection: 'row',
    // width: 35,
    height: 40,
    marginRight: 10,
    marginLeft: 15,
    // backgroundColor: gbColor.primary,
    borderRadius: 10,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  textButton: {
    fontFamily: 'Poppins-ExtraBold',
    paddingTop: 3,
    color: gbColor.fontSecondary,
    alignSelf: 'center',
  },
  textButtonPrevious: {
    fontFamily: 'Poppins-ExtraBold',
    paddingTop: 3,
    color: gbColor.fontPrimary,
    alignSelf: 'center',
  },
  previousButton: {
    marginRight: 10,
    // backgroundColor: gbColor.background,
  },
});
