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
    bibleState: {book: bookData},
  } = useContext(BibleContext);

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
        onChangeBook(bookText, book);
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
    width: 171,
    height: 60,
    borderRadius: 10,
    marginVertical: 5,
    // marginHorizontal: 14,
    marginLeft: 15,
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
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    // color: gbColor.fontPrimary,
    textAlign: 'center',
  },
});
