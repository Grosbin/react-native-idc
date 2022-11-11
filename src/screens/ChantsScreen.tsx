import React, {useEffect, useState} from 'react';
import {
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {SearchInput} from '../components/chants/SearchInput';
import {gbColor} from '../theme/themeGlobal';

import {chants} from '../data/chant/chants';
import {ItemChants} from '../components/chants/ItemChants';

export const ChantsScreen = () => {
  const [term, setTerm] = useState('');
  const [chantsFiltered, setChantsFiltered] = useState(chants);

  useEffect(() => {
    if (term.length === 0) return setChantsFiltered(chants);

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

  return (
    <View
      // behavior="padding"
      // keyboardVerticalOffset={10}
      style={[styles.container]}>
      <SearchInput onChange={setTerm} />

      {/* <View style={{alignItems: 'center', zIndex: 999}}> */}
      <FlatList
        data={chantsFiltered}
        keyExtractor={(item, index) => index + item.toString()}
        renderItem={({item}) => (
          <ItemChants id={item.id} name={item.name} lyrics={item.lyrics} />
        )}
        onEndReachedThreshold={0.4}
        showsVerticalScrollIndicator={false}
        style={{marginTop: 10}}
        ListFooterComponent={() => <View style={{marginBottom: 50}}></View>}
      />
      {/* </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginHorizontal: 20,
    marginVertical: 15,
  },
});
