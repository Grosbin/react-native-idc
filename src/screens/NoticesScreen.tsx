import React, {useState, useEffect, useContext} from 'react';
import {
  Button,
  Dimensions,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {ItemNotices} from '../components/notices/ItemNotices';
import {ThemeContex} from '../context/ThemeContex';
import {addFirebase, getFirebase} from '../database/firebase';

export const NoticesScreen = () => {
  const [noticesLoading, setNoticesLoading] = useState(true);
  const [notices, setNotices] = useState([]);
  const {
    theme: {colors},
  } = useContext(ThemeContex);

  const loadNotices = async () => {
    const notices = await getFirebase('notices');
    console.log(notices, 'notices');
    setNotices(notices);
    setNoticesLoading(false);
  };

  useEffect(() => {
    loadNotices();
    // addFirebase('notices', {
    //   title: 'Anuncio 1',
    //   description: 'Anuncio 1',
    // });
  }, []);

  const renderItem = ({item}) => <ItemNotices {...item} />;
  const keyExtractor = (item, index) => index + item.toString();
  const listFooterComponent = () => <View style={{marginBottom: 50}}></View>;
  // const ITEM_HEIGHT = 55;
  // const getItemLayout = (data, index) => {
  //   return {
  //     length: ITEM_HEIGHT,
  //     offset: ITEM_HEIGHT * data.length,
  //     index,
  //   };
  // };
  return (
    <SafeAreaView style={[styles.container]}>
      {notices.length === 0 ? (
        <View style={styles.containerText}>
          <Text style={[styles.text, {color: colors.blueSecondary}]}>
            No hay Anuncios
          </Text>
        </View>
      ) : (
        <FlatList
          keyboardShouldPersistTaps="always"
          keyboardDismissMode="on-drag"
          data={notices}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          // getItemLayout={getItemLayout}
          onEndReachedThreshold={0.4}
          showsVerticalScrollIndicator={false}
          // style={{marginTop: 10}}
          ListFooterComponent={listFooterComponent}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 5,
  },
  text: {
    fontSize: 15,
    fontFamily: 'Poppins-Regular',
  },
  containerText: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
