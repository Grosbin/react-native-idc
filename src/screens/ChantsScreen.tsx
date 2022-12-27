import React, {useContext, useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {SearchInput} from '../components/chants/SearchInput';
import {chants} from '../data/chant/chants';
import {ItemChants} from '../components/chants/ItemChants';
import {useLocalStorage} from '../hooks/useLocalStorage';
import {ChantContext} from '../context/ChantContext';
import {ThemeContext} from '../context/ThemeContext';

export const ChantsScreen = () => {
  const {storeDataObject, getData} = useLocalStorage();
  const {
    theme: {colors},
  } = useContext(ThemeContext);

  const [term, setTerm] = useState('');
  const [chantsFiltered, setChantsFiltered] = useState<any>([]);

  const {
    chantState: {chantsRemove, chantsFav},
    addChantArray,
  } = useContext(ChantContext);

  const getFavoritesChants = async () => {
    const favoritesChantsData = await getData('@favoritesChants');
    const favoritesChantsArray = favoritesChantsData.split(',');

    const favoritesChantsArrayData = chants.filter(item => {
      if (favoritesChantsArray.includes(item.id)) {
        return item;
      }
    });

    setChantsFiltered(favoritesChantsArrayData);
    addChantArray(favoritesChantsArray);
  };

  useEffect(() => {
    getFavoritesChants();
  }, []);

  useEffect(() => {
    getFavoritesChants();
  }, [chantsFav]);

  useEffect(() => {
    if (term.length === 0) {
      getFavoritesChants();
    }

    if (isNaN(Number(term))) {
      setChantsFiltered(
        chants.filter(chant =>
          chant.name.toLocaleLowerCase().includes(term.toLocaleLowerCase()),
        ),
      );
    } else {
      const chantById = chants.find(chant => chant.id === term);
      setChantsFiltered(chantById ? [chantById] : []);
    }
  }, [term]);

  const renderItem = ({item}) => <ItemChants {...item} />;
  const keyExtractor = (item, index) => index + item.toString();
  const listFooterComponent = () => <View style={{marginBottom: 50}}></View>;
  const ITEM_HEIGHT = 55;
  const getItemLayout = (data, index) => {
    return {
      length: ITEM_HEIGHT,
      offset: ITEM_HEIGHT * data.length,
      index,
    };
  };

  return (
    <SafeAreaView style={[styles.container]}>
      <SearchInput onChange={setTerm} />

      {chantsFiltered.length === 0 ? (
        <View style={styles.containerText}>
          <Text style={[styles.text, {color: colors.blueSecondary}]}>
            No hay cantos favoritos
          </Text>
        </View>
      ) : (
        <FlatList
          keyboardShouldPersistTaps="always"
          keyboardDismissMode="on-drag"
          data={chantsFiltered}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          getItemLayout={getItemLayout}
          onEndReachedThreshold={0.4}
          showsVerticalScrollIndicator={false}
          style={{marginTop: 10}}
          ListFooterComponent={listFooterComponent}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
    marginVertical: 15,
  },
  text: {
    fontSize: 15,
    fontFamily: 'Poppins-Regular',
  },
  containerText: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
