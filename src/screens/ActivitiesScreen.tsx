import React, {useEffect} from 'react';
import {StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native';
import {gbColor} from '../theme/themeGlobal';
import SplashScreen from 'react-native-splash-screen';
import {HorizontalActivities} from '../components/home/HorizontalActivities';
import {ListPrayers} from '../components/home/ListPrayers';
import {Header} from '../components/Header';
import Icon from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native-gesture-handler';

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
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={styles.textHeader}>
                <Icon
                  name={'fitness'}
                  size={20}
                  color={gbColor.blueSecundary}
                />
                {' Salud'}
              </Text>
              <TouchableOpacity
                style={{
                  width: 85,
                  height: 29,
                  borderRadius: 10,
                  backgroundColor: gbColor.green,
                  marginRight: 10,
                  marginTop: 10,
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontFamily: 'Poppins-Bold',
                    color: gbColor.foco,
                    fontSize: 11,
                    marginLeft: 5,
                  }}>
                  Ver todas
                </Text>
                <Icon name="chevron-forward" size={19} color={gbColor.foco} />
              </TouchableOpacity>
            </View>
            <ListPrayers />
          </View>

          <View style={[styles.itemSeparator, {paddingBottom: 10}]}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.textHeader}>
                <Icon name={'people'} size={20} color={gbColor.blueSecundary} />
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
                  color={gbColor.blueSecundary}
                />
                {' Seguridad'}
              </Text>
            </View>
            <ListPrayers />
          </View>

          <View style={[styles.itemSeparator, {paddingBottom: 10}]}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.textHeader}>
                <Icon name={'sad'} size={20} color={gbColor.blueSecundary} />
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
