import React, {useEffect, useState} from 'react';
import {
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import {SearchInput} from '../components/chants/SearchInput';
import {gbColor} from '../theme/themeGlobal';

import {chants} from '../data/chant/chants';
import {ItemChants} from '../components/chants/ItemChants';
import {RecyclerListView, DataProvider, LayoutProvider} from 'recyclerlistview';

export const ChantsScreen = () => {
  const [term, setTerm] = useState('');
  const [chantsFiltered, setChantsFiltered] = useState(chants);

  useEffect(() => {
    if (term.length === 0) return setChantsFiltered(chants.slice(0, 9));

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
      <FlatList
        data={chantsFiltered}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        getItemLayout={getItemLayout}
        onEndReachedThreshold={0.4}
        showsVerticalScrollIndicator={false}
        style={{marginTop: 10}}
        ListFooterComponent={listFooterComponent}
      />
      {/* <ScrollView showsVerticalScrollIndicator={false} style={{marginTop: 10}}>
        {chantsFiltered.map((item, index) => (
          <ItemChants key={index} {...item} />
        ))}
        <View style={{marginBottom: 100}}></View>
      </ScrollView> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginHorizontal: 15,
    marginVertical: 15,
  },
});
