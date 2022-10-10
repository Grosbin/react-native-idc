import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import {gbColor} from '../../theme/themeGlobal';
import {useContext} from 'react';
import {BibleContext} from '../../context/BibleContext';
import {useBible} from '../../hooks/useBible';

interface Props {
  chapterText: number;
}

export const ItemChapter = ({chapterText}: Props) => {
  const {onChangeChapter} = useContext(BibleContext);
  // const {setNumChapter} = useBible();

  const onPressChapter = () => {
    onChangeChapter(chapterText);
  };

  return (
    <TouchableHighlight
      underlayColor={'#78A0FF'}
      style={styles.container}
      onPress={() => onPressChapter()}>
      <Text style={styles.chapterText}>{chapterText}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: gbColor.foco,
    width: 75,
    height: 75,
    justifyContent: 'center',
    marginHorizontal: 8,
    marginVertical: 8,
    borderRadius: 10,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  chapterText: {
    fontSize: 19,
    fontFamily: 'Poppins-Bold',
    color: gbColor.fontPrimary,
    textAlign: 'center',
  },
});
