import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native';

import SplashScreen from 'react-native-splash-screen';
import {HorizontalActivities} from '../components/home/HorizontalActivities';

import {Header} from '../components/Header';

import {ItemPrayers} from '../components/home/ItemPrayers';

import {DrawerScreenProps} from '@react-navigation/drawer';
import {ThemeContex} from '../context/ThemeContex';
import {useLocalStorage} from '../hooks/useLocalStorage';
import {getPrayers} from '../actions/prayers';

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

  const [families, setFamilies] = useState([]);
  const [fortress, setFortress] = useState([]);
  const [health, setHealth] = useState([]);
  const [security, setSecurity] = useState([]);

  const loadPrayers = async () => {
    const familiesData = await getPrayers('families');
    const fortressData = await getPrayers('fortress');
    const healthData = await getPrayers('health');
    const securityData = await getPrayers('security');

    // const promise = await Promise.all([
    //   familiesData,
    //   fortressData,
    //   healthData,
    //   securityData,
    // ]);
    setFamilies(familiesData);
    setFortress(fortressData);
    setHealth(healthData);
    setSecurity(securityData);
  };

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
    if (data === '') {
      setLightTheme();
    }
    SplashScreen.hide();
  };

  useEffect(() => {
    getDataStorage();
    loadPrayers();
  }, []);

  // useEffect(() => {
  //   loadPrayers();
  // }, [families]);

  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header navigation={navigation} route={route} />
        <HorizontalActivities />
        <View
          style={[
            styles.container,
            {
              borderTopRightRadius: 10,
              borderTopLeftRadius: 10,
            },
            {backgroundColor: colors.foco},
          ]}>
          <View
            style={[
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

          <ItemPrayers title="Salud" iconName="fitness" listPrayers={health} />
          <ItemPrayers
            title="Familias"
            iconName="people"
            listPrayers={families}
          />
          <ItemPrayers
            title="Seguridad"
            iconName="lock-closed"
            listPrayers={security}
          />
          <ItemPrayers
            title="Fortaleza"
            iconName="sad"
            listPrayers={fortress}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  nowActivitie: {
    height: 175,
  },
  itemSeparator: {
    borderRadius: 10,
    marginBottom: 15,
    marginHorizontal: 9,
  },
});
