import React, {useContext, useEffect, useRef, useState} from 'react';
import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
  FlatList,
  Text,
  TouchableOpacity,
  View,
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

export const BibleScreen = () => {
  const [disabledButton, setDisabledButton] = useState(false);
  const ref = useRef<FlatList>(null);

  const {
    getChapter,
    getVerses,
    nextChapter,
    previousChapter,
    bibleOpacityButtonOffset,
    buttonOpacityBibleStyle,
    buttonOpacityPreviousStyle,
  } = useBible();
  const lastContentOffset = useRef(0);

  const {
    bibleState: {activeCard, chapter, verse},
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

  const widthOffset = useSharedValue('0%');
  const heightOffset = useSharedValue('0%');

  const cardScaleStyle = useAnimatedStyle(() => {
    return {
      width: widthOffset.value,
      height: heightOffset.value,
    };
  });

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


  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{getChapter()}</Text>
        <View style={styles.buttonContainer}>
          <Animated.View style={[buttonOpacityPreviousStyle]}>
            <TouchableOpacity
              disabled={chapter === 1 || activeCard}
              activeOpacity={0.8}
              onPress={previousChapter}
              style={[styles.button, styles.previousButton]}>
              <Icon name="caret-back" size={20} color={gbColor.primary} />
              {/* <Text style={styles.textButtonPrevious}>Anterior</Text> */}
            </TouchableOpacity>
          </Animated.View>

          <TouchableOpacity
            disabled={activeCard}
            activeOpacity={0.8}
            style={styles.button}
            onPress={nextChapter}>
            {/* <Text style={styles.textButton}>Siguiente</Text> */}
            <Icon
              name="caret-forward"
              size={20}
              color={gbColor.fontSecundary}
            />
          </TouchableOpacity>
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
            <Text style={styles.numVerse}>{index + 1}</Text>
            <Text style={styles.texVerse}>{item}</Text>
          </View>
        )}
        onScroll={e => onScroll(e)}
      />
      <CardBook style={cardScaleStyle} />

      <FloatButtonBible
        style={buttonOpacityBibleStyle}
        widthOffset={widthOffset}
        heightOffset={heightOffset}
        disabledButton={disabledButton}
      />
      {activeCard && (
        <CloseCard widthOffset={widthOffset} heightOffset={heightOffset} />
      )}
    </View>
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
    fontSize: 22,
    color: gbColor.primary,
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
    color: gbColor.fontPrimary,
    marginRight: 10,
  },
  texVerse: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: gbColor.fontPrimary,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flexDirection: 'row',
    // width: 120,
    width: 80,
    height: 40,
    backgroundColor: gbColor.primary,
    borderRadius: 10,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  textButton: {
    fontFamily: 'Poppins-ExtraBold',
    paddingTop: 3,
    color: 'white',
    alignSelf: 'center',
  },
  textButtonPrevious: {
    fontFamily: 'Poppins-ExtraBold',
    paddingTop: 3,
    color: gbColor.fontPrimary,
    alignSelf: 'center',
  },
  previousButton: {
    // borderWidth: 1,
    // borderColor: gbColor.terthiary,
    marginRight: 10,
    backgroundColor: gbColor.background,
  },
});
