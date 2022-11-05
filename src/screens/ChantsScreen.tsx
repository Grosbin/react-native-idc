import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {SearchInput} from '../components/chants/SearchInput';
import {gbColor} from '../theme/themeGlobal';

import {chants} from '../data/chant/chants';
import {ItemChants} from '../components/chants/ItemChants';

export const ChantsScreen = () => {
  return (
    <View style={[styles.container]}>
      <SearchInput onChange={() => {}} />

      {/* <View style={{alignItems: 'center', zIndex: 999}}> */}
      <FlatList
        data={chants}
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
