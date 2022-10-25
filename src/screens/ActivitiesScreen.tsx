import React, {useEffect} from 'react';
import {StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native';
import {gbColor} from '../theme/themeGlobal';
import SplashScreen from 'react-native-splash-screen';
import {HorizontalActivities} from '../components/home/HorizontalActivities';
import {ListPrayers} from '../components/home/ListPrayers';
import {Header} from '../components/Header';
import Icon from 'react-native-vector-icons/Ionicons';

export const ActivitiesScreen = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Header />
          <View style={styles.itemSeparator}>
            <HorizontalActivities />
          </View>

          <View style={[styles.itemSeparator, {paddingBottom: 10}]}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.textHeader}>
                <Icon name={'fitness'} size={20} color={gbColor.fontPrimary} />
                {' Salud'}
              </Text>
              {/* <Text style={styles.textHeader}>Oraciones por Salud</Text> */}
            </View>
            <ListPrayers />
          </View>

          <View style={[styles.itemSeparator, {paddingBottom: 10}]}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.textHeader}>
                <Icon name={'people'} size={20} color={gbColor.fontPrimary} />
                {' Familias'}
              </Text>
            </View>
            <ListPrayers />
          </View>

          <View style={[styles.itemSeparator, {paddingBottom: 10}]}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.textHeader}>
                <Icon
                  name={'lock-closed'}
                  size={20}
                  color={gbColor.fontPrimary}
                />
                {' Seguridad'}
              </Text>
            </View>
            <ListPrayers />
          </View>

          <View style={[styles.itemSeparator, {paddingBottom: 10}]}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.textHeader}>
                <Icon name={'sad'} size={20} color={gbColor.fontPrimary} />
                {' Fortaleza'}
              </Text>
            </View>
            <ListPrayers />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: gbColor.foco,
  },
  nowActivitie: {
    height: 175,
  },
  itemSeparator: {
    backgroundColor: gbColor.background,
    borderRadius: 15,
    marginBottom: 15,
    marginHorizontal: 9,
  },
  textHeader: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    color: gbColor.fontPrimary,
    top: 10,
    left: 10,
    marginBottom: 10,
    opacity: 0.7,
  },
});
