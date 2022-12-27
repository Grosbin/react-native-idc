import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import {ItemChapterVerse} from './ItemChapterVerse';
import {useContext} from 'react';
import {BibleContext} from '../../context/BibleContext';
import {useBible} from '../../hooks/useBible';
import {withSpring} from 'react-native-reanimated';
interface Props {
  widthOffset: any;
  heightOffset: any;
}
export const ScrollVerse = ({widthOffset, heightOffset}: Props) => {
  const {onChangeVerse, onActiveCard} = useContext(BibleContext);

  const {getVerses} = useBible();

  const verses = getVerses();

  const onChange = (item: number) => {
    onChangeVerse(item);
    widthOffset.value = '100%';
    heightOffset.value = withSpring('0%', {damping: 20});
    onActiveCard(false);
  };

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={4}
        columnWrapperStyle={{
          justifyContent: 'flex-start',
        }}
        keyExtractor={(item, index) => index + item.toString()}
        data={verses}
        style={{marginBottom: 150}}
        renderItem={({index}) => (
          <ItemChapterVerse
            chapterNum={index + 1}
            onPress={() => onChange(index + 1)}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
