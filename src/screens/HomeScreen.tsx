import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native';
import {gbColor} from '../theme/themeGlobal';
import SplashScreen from 'react-native-splash-screen';
import {HorizontalActivities} from '../components/home/HorizontalActivities';
import {ListPrayers} from '../components/home/ListPrayers';
import {Header} from '../components/Header';
import Icon from 'react-native-vector-icons/Ionicons';
import {ItemPrayers} from '../components/home/ItemPrayers';
import {StackScreenProps} from '@react-navigation/stack';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {ThemeContex} from '../context/ThemeContex';
import {useLocalStorage} from '../hooks/useLocalStorage';

// Generar objeto con id y nombre aleatorios
const listPrayers = [
  {id: 1, name: 'Fernado Ramirez'},
  {id: 2, name: 'Juan Perez'},
  {id: 3, name: 'Maria Lopez'},
  {id: 4, name: 'Jose Martinez'},
  {id: 5, name: 'Luisa Garcia'},
  {id: 6, name: 'Pedro Sanchez'},
  {id: 7, name: 'Maria Rodriguez'},
];

// Generar lista de 2 apellidos aleatorios
const listLastNames = [
  {id: 1, name: 'Ramirez Perez'},
  {id: 2, name: 'Perez Martinez'},
  {id: 3, name: 'Lopez Garcia'},
  {id: 4, name: 'Martinez Sanchez'},
  {id: 5, name: 'Garcia Rodriguez'},
  {id: 6, name: 'Sanchez Perez'},
  {id: 7, name: 'Rodriguez Martinez'},
];

// interface Props extends StackScreenProps<any, any> {}
interface Props extends DrawerScreenProps<any, any> {}

export const HomeScreen = ({navigation, route}: Props) => {
  const {getData} = useLocalStorage();
  const {
    theme: {colors},
    setDarkTheme,
    setLightTheme,
  } = useContext(ThemeContex);

  const getDataStorage = async () => {
    const data = await getData('@theme');
    if (data === 'dark') {
      setDarkTheme();
    }

    if (data === 'light') {
      setLightTheme();
    }
    SplashScreen.hide();
  };

  useEffect(() => {
    getDataStorage();
  }, []);

  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header navigation={navigation} route={route} />
        <HorizontalActivities />
        <View
          style={[
            styles.container,
            styles.itemSeparator,
            {backgroundColor: colors.foco},
          ]}>
          {/* <View style={styles.itemSeparator}> */}
          {/* </View> */}

          <View
            style={[
              // styles.itemSeparator,
              {
                padding: 18,
                backgroundColor: colors.yellow,
                borderRadius: 10,
                marginHorizontal: 10,
                marginVertical: 10,
              },
            ]}>
            <Text
              style={{
                textAlign: 'center',
                fontFamily: 'Poppins-Medium',
                fontSize: 14,
                color: colors.fontTertiary,
                opacity: 0.7,
              }}>
              Las oraciones se actualizan todos los domingos
            </Text>
          </View>

          <ItemPrayers
            title="Salud"
            iconName="fitness"
            listPrayers={listPrayers}
          />
          <ItemPrayers
            title="Familias"
            iconName="people"
            listPrayers={listLastNames}
          />
          <ItemPrayers
            title="Seguridad"
            iconName="lock-closed"
            listPrayers={listPrayers}
          />
          <ItemPrayers
            title="Fortaleza"
            iconName="sad"
            listPrayers={listPrayers}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: gbColor.foco,
  },
  nowActivitie: {
    height: 175,
  },
  itemSeparator: {
    // backgroundColor: gbColor.background,
    borderRadius: 10,
    marginBottom: 15,
    marginHorizontal: 9,
  },
  // textHeader: {
  //   fontFamily: 'Poppins-Bold',
  //   fontSize: 16,
  //   color: gbColor.fontPrimary,
  //   top: 10,
  //   left: 10,
  //   marginBottom: 10,
  //   opacity: 0.7,
  // },
});
