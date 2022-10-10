import React, {useContext} from 'react';
import {StyleSheet, Text, TouchableHighlight} from 'react-native';
import {BibleContext} from '../../context/BibleContext';
import {gbColor} from '../../theme/themeGlobal';
import {Bible} from '../../types/bible';

interface Props {
  book: string;
  bookText: string;
  chapters: number;
}

export const ItemBook = ({bookText, book}: Props) => {
  const {
    onChangeBook,
    bibleState: {book: bookData},
  } = useContext(BibleContext);

  return (
    <TouchableHighlight
      underlayColor={gbColor.foco}
      style={[
        styles.container,
        // bookData === book && {backgroundColor: gbColor.},
      ]}
      onPress={() => {
        onChangeBook(bookText, book);
      }}>
      <Text
        style={[
          styles.text,
          bookData === book && {color: gbColor.blueSecundary},
        ]}>
        {bookText}
      </Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: gbColor.foco,
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
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  text: {
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    color: gbColor.fontPrimary,
    textAlign: 'center',
  },
});
