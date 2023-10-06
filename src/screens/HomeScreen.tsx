import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet, Text, View, ScrollView, RefreshControl} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {HorizontalActivities} from '../components/home/HorizontalActivities';
import {Header} from '../components/Header';
import {ItemPrayers} from '../components/home/ItemPrayers';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {ThemeContext} from '../context/ThemeContext';
import {useLocalStorage} from '../hooks/useLocalStorage';
import {getFirebase} from '../database/firebase';
import {SkeletonPrayers} from '../skeleton/SkeletonPrayers';
import {SkeletonActivities} from '../skeleton/SkeletonActivities';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props extends DrawerScreenProps<any, any> {}

interface Prayers {
  id: string;
  names: string[];
  type: string;
}

export const HomeScreen = ({navigation, route}: Props) => {
  const {getData} = useLocalStorage();
  const [prayers, setPrayers] = useState([]);
  const [activities, setActivities] = useState([]);
  const [prayersLoading, setPrayersLoading] = useState(true);
  const [activitiesLoading, setActivitiesLoading] = useState(true);

  const loadPrayers = async () => {
    setPrayersLoading(true);
    const prayersData = await getFirebase('prayers');
    setPrayers(prayersData);

    setPrayersLoading(false);
  };

  const loadActivities = async () => {
    setActivitiesLoading(true);
    const activities = await getFirebase('activities');
    setActivities(activities);
    setActivitiesLoading(false);
  };

  const {
    theme: {colors},
    setDarkTheme,
    setLightTheme,
  } = useContext(ThemeContext);

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

  return (
    <View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={prayersLoading || activitiesLoading}
            onRefresh={() => {
              loadActivities();
              loadPrayers();
            }}
            colors={[colors.primary]}
            progressBackgroundColor={colors.foco}
            progressViewOffset={-20}
          />
        }>
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
              // {backgroundColor: colors.yellow},
            ]}>
            <Text
              style={[
                styles.alertText,
                // {color: colors.fontTertiary}
                {color: colors.fontPrimary},
              ]}>
              <Icon name={'heart'} size={20} color={'#ff144e'} /> Orar por:
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
              {prayers.map((prayer: Prayers, i) => {
                let icon: string = 'hand-left';

                switch (prayer.type) {
                  case 'Salud':
                    icon = 'fitness';
                    break;
                  case 'Familias':
                    icon = 'people';
                    break;
                  case 'Seguridad':
                    icon = 'lock-closed';
                    break;
                  case 'Fortaleza':
                    icon = 'sad';
                    break;
                  default:
                    icon = 'hand-left';
                    break;
                }
                return (
                  <ItemPrayers
                    key={i}
                    title={prayer.type}
                    iconName={icon}
                    listPrayers={prayer.names}
                  />
                );
              })}
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
  nowActivities: {
    height: 175,
  },
  itemSeparator: {
    borderRadius: 10,
    marginBottom: 15,
    marginHorizontal: 9,
  },
  alertTextContainer: {
    // padding: 18,
    borderRadius: 10,
    marginHorizontal: 10,
    // marginVertical: 10,
    marginTop: 10,
  },
  alertText: {
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
    fontSize: 17,
    // opacity: 0.7,
  },
});
