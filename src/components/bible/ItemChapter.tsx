import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import {gbColor} from '../../theme/themeGlobal';

interface Props {
  chapterText: number;
}

export const ItemChapter = ({chapterText}: Props) => {
  return (
    <TouchableHighlight
      underlayColor={'#78A0FF'}
      style={styles.container}
      onPress={() => console.log(chapterText)}>
      <Text style={styles.chapterText}>{chapterText}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: gbColor.primary,
    width: 80,
    height: 80,
    justifyContent: 'center',
    marginHorizontal: 5,
    marginVertical: 5,
    borderRadius: 10,
  },
  chapterText: {
    fontSize: 19,
    fontFamily: 'Poppins-Bold',
    color: gbColor.foco,
    textAlign: 'center',
  },
});
