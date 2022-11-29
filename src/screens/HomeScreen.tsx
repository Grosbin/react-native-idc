import React, {useContext, useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
} from 'react-native';

import SplashScreen from 'react-native-splash-screen';
import {HorizontalActivities} from '../components/home/HorizontalActivities';

import {Header} from '../components/Header';

import {ItemPrayers} from '../components/home/ItemPrayers';

import {DrawerScreenProps} from '@react-navigation/drawer';
import {ThemeContex} from '../context/ThemeContex';
import {useLocalStorage} from '../hooks/useLocalStorage';
import {getFirebase, addFirebase} from '../database/firebase';
import {SkeletonPrayers} from '../skeleton/SkeletonPrayers';
import {SkeletonActivities} from '../skeleton/SkeletonActivities';

interface Props extends DrawerScreenProps<any, any> {}

export const HomeScreen = ({navigation, route}: Props) => {
  const {getData} = useLocalStorage();

  const [families, setFamilies] = useState([]);
  const [fortress, setFortress] = useState([]);
  const [health, setHealth] = useState([]);
  const [security, setSecurity] = useState([]);
  const [activities, setActivities] = useState([]);
  const [prayersLoading, setPrayersLoading] = useState(true);
  const [activitiesLoading, setActivitiesLoading] = useState(true);

  const loadPrayers = async () => {
    const familiesData = await getFirebase('families');
    const fortressData = await getFirebase('fortress');
    const healthData = await getFirebase('health');
    const securityData = await getFirebase('security');

    setFamilies(familiesData);
    setFortress(fortressData);
    setHealth(healthData);
    setSecurity(securityData);
    setPrayersLoading(false);
  };

  const loadActivities = async () => {
    const activities = await getFirebase('activities');
    setActivities(activities);
    setActivitiesLoading(false);
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
    loadActivities();
  }, []);

  // useEffect(() => {
  //   loadPrayers();
  // }, [families]);

  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header navigation={navigation} route={route} />
        {activitiesLoading ? (
          <SkeletonActivities />
        ) : (
          <HorizontalActivities activities={activities} />
        )}

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
              styles.alertTextContainer,
              {backgroundColor: colors.yellow},
            ]}>
            <Text style={[styles.alertText, {color: colors.fontTertiary}]}>
              Las oraciones se actualizan todos los domingos
            </Text>
          </View>
          {prayersLoading ? (
            <View>
              <SkeletonPrayers />
              <SkeletonPrayers />
              <SkeletonPrayers />
              <SkeletonPrayers />
            </View>
          ) : (
            <View>
              <ItemPrayers
                title="Salud"
                iconName="fitness"
                listPrayers={health}
              />
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
          )}
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
  alertTextContainer: {
    padding: 18,

    borderRadius: 10,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  alertText: {
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    opacity: 0.7,
  },
});
