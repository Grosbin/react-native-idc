import React, {useContext, useEffect, useState} from 'react';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';

import {
  Image,
  Text,
  useWindowDimensions,
  View,
  TouchableOpacity,
  Switch,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {HomeScreen} from '../screens/HomeScreen';
import {gbColor} from '../theme/themeGlobal';
import {StackNavigator} from './StackNavigator';
import {ThemeContex} from '../context/ThemeContex';
import {NavigationContainer} from '@react-navigation/native';
import {useLocalStorage} from '../hooks/useLocalStorage';
import {SwitchFuntion} from '../components/ui/SwitchFuntion';
import {logout} from '../actions/auth';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {
  const dimension = useWindowDimensions();
  const {theme} = useContext(ThemeContex);

  return (
    // <NavigationContainer theme={theme}>
    <Drawer.Navigator
      // detachInactiveScreens={false}
      // defaultStatus="closed"
      drawerContent={props => <MenuInterno {...props} />}
      screenOptions={{
        headerShown: false,
        drawerType: 'back',
        drawerActiveBackgroundColor: theme.colors.blueSecondary,
        drawerPosition: 'right',
        overlayColor: 'transparent',

        drawerStyle: {
          backgroundColor: theme.colors.background,
          backfaceVisibility: 'visible',
        },
      }}>
      <Drawer.Screen name="HomeScreen" component={HomeScreen} />
    </Drawer.Navigator>
    // </NavigationContainer>
  );
};

const MenuInterno = (props: DrawerContentComponentProps) => {
  const {
    theme: {colors, dark},
    setDarkTheme,
    setLightTheme,
  } = useContext(ThemeContex);

  const {storeData, getData} = useLocalStorage();

  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
    if (isEnabled) {
      setLightTheme();
      storeData('@theme', 'light');
    } else {
      setDarkTheme();
      storeData('@theme', 'dark');
    }
  };

  const getDataTheme = async () => {
    const data = await getData('@theme');
    if (data === 'dark') {
      setIsEnabled(true);
    } else {
      setIsEnabled(false);
    }
  };

  useEffect(() => {
    getDataTheme();
  }, []);

  return (
    // <DrawerContentScrollView>
    <View
      style={{
        flex: 1,
        backgroundColor: gbColor.primary,
        borderTopLeftRadius: 10,
      }}>
      <StatusBar
        backgroundColor={colors.background}
        barStyle={dark ? 'light-content' : 'dark-content'}
      />
      <View style={{alignItems: 'center'}}>
        <Image
          source={require('../assets/logo/Logo_Blanco.png')}
          style={{
            width: 90,
            height: 80,
            marginTop: 20,
          }}
        />
      </View>

      <View
        style={{
          paddingTop: 20,
          flex: 1,
        }}>
        {/* <View
          style={{
            width: '100%',
            height: 50,
            paddingTop: 10,
            paddingHorizontal: 20,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontFamily: 'Poppins-Medium',
              textAlign: 'center',
              fontSize: 15,
              color: gbColor.foco,
            }}>
            {' '}
            Tema oscuro
          </Text>
          <Switch
            trackColor={{false: gbColor.close, true: gbColor.green}}
            thumbColor={isEnabled ? gbColor.foco : gbColor.foco}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View> */}

        <SwitchFuntion
          title="Tema Oscuro"
          toggleSwitch={toggleSwitch}
          isEnabled={isEnabled}
          setIsEnabled={setIsEnabled}
        />

        <TouchableOpacity
          style={{
            width: '100%',
            height: 50,
            paddingTop: 10,
            paddingHorizontal: 20,
            flexDirection: 'row',
          }}
          onPress={() => props.navigation.navigate('HomeScreen')}>
          <Text
            style={{
              fontFamily: 'Poppins-Medium',
              textAlign: 'center',
              fontSize: 15,
              color: gbColor.foco,
            }}>
            {' '}
            Versión de la Biblia
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            width: '100%',
            height: 50,
            paddingTop: 10,
            paddingHorizontal: 20,
            flexDirection: 'row',
          }}
          onPress={() => props.navigation.navigate('HomeScreen')}>
          <Text
            style={{
              fontFamily: 'Poppins-Medium',
              textAlign: 'center',
              fontSize: 15,
              color: gbColor.foco,
            }}>
            {' '}
            Acerca de la app
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            width: '100%',
            height: 50,
            paddingTop: 10,
            paddingHorizontal: 20,
            flexDirection: 'row',
          }}
          onPress={logout}>
          <Text
            style={{
              fontFamily: 'Poppins-Medium',
              textAlign: 'center',
              fontSize: 15,
              color: gbColor.foco,
            }}>
            {' '}
            Cerrar sesión
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 20,
        }}>
        <Text
          style={{
            textAlign: 'center',
            color: gbColor.foco,
          }}>
          Desarrollada por el ministerio de medios, 2022
        </Text>
      </View>
    </View>
    // </DrawerContentScrollView>
  );
};
