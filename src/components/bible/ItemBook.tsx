import React, {useContext} from 'react';
import {StyleSheet, Text, TouchableHighlight} from 'react-native';
import {BibleContext} from '../../context/BibleContext';
import {ThemeContex} from '../../context/ThemeContex';
import {gbColor} from '../../theme/themeGlobal';

interface Props {
  book: string;
  bookText: string;
  chapters: number;
}

export const ItemBook = ({bookText, book}: Props) => {
  const {
    theme: {colors},
  } = useContext(ThemeContex);

  const {
    onChangeBook,
    onPressChapterHandler,
    bibleState: {book: bookData},
  } = useContext(BibleContext);

  const onChange = (bookText: string, book: string) => {
    onChangeBook(bookText, book);
    onPressChapterHandler(true);
  };

  return (
    <TouchableHighlight
      underlayColor={colors.background}
      style={[
        styles.container,
        // bookData === book && {backgroundColor: gbColor.},
        {
          backgroundColor: colors.background,
        },
      ]}
      onPress={() => {
        onChange(bookText, book);
      }}>
      <Text
        style={[
          styles.text,
          {
            color: colors.fontPrimary,
          },
          bookData === book && {color: colors.blueSecondary},
        ]}>
        {bookText}
      </Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: gbColor.foco,
    width: '40%',
    // flex: 1,
    height: 60,
    borderRadius: 10,
    marginVertical: 5,
    // marginHorizontal: 14,
    // marginLeft: 15,
    marginHorizontal: 10,
    justifyContent: 'center',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,

    elevation: 2,
  },
  text: {
    fontSize: 15,
    fontFamily: 'Poppins-Bold',
    // color: gbColor.fontPrimary,
    textAlign: 'center',
  },
});
