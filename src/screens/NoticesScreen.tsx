import React, {useState, useEffect, useContext} from 'react';
import {
  FlatList,
  RefreshControl,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {ItemNotices} from '../components/notices/ItemNotices';
import {ThemeContex} from '../context/ThemeContex';
import {getFirebase} from '../database/firebase';

export const NoticesScreen = () => {
  const [noticesLoading, setNoticesLoading] = useState(true);
  const [notices, setNotices] = useState([]);
  const {
    theme: {colors},
  } = useContext(ThemeContex);

  const loadNotices = async () => {
    setNoticesLoading(true);
    const notices = await getFirebase('notices');
    setNotices(notices);
    setNoticesLoading(false);
  };

  useEffect(() => {
    loadNotices();
  }, []);

  const renderItem = ({item}) => <ItemNotices {...item} />;
  const keyExtractor = (item, index) => index + item.toString();
  const listFooterComponent = () => <View style={{marginBottom: 50}}></View>;

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
          onEndReachedThreshold={0.4}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={listFooterComponent}
          refreshControl={
            <RefreshControl
              refreshing={noticesLoading}
              onRefresh={loadNotices}
              colors={[colors.primary]}
              progressBackgroundColor={colors.foco}
              progressViewOffset={-20}
            />
          }
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
