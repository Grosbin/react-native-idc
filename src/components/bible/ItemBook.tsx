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
  const {onChangeBook} = useContext(BibleContext);

  return (
    <TouchableHighlight
      underlayColor={'#78A0FF'}
      style={[styles.container]}
      onPress={() => {
        onChangeBook(bookText, book);
        console.log(book);
      }}>
      <Text style={styles.text}>{bookText}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: gbColor.primary,
    width: 180,
    height: 50,
    borderRadius: 10,
    marginVertical: 5,
    marginLeft: 10,
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    color: gbColor.foco,
    textAlign: 'center',
  },
});
