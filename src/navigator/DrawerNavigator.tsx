import React, {useContext, useEffect, useState} from 'react';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';

import {
  Image,
  Text,
  useWindowDimensions,
  View,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {HomeScreen} from '../screens/HomeScreen';
import {gbColor} from '../theme/themeGlobal';
import {ThemeContext} from '../context/ThemeContext';
import {useLocalStorage} from '../hooks/useLocalStorage';
import {SwitchFuntion} from '../components/ui/SwitchFuntion';
import {AuthContext} from '../context/AuthContext';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {
  const dimension = useWindowDimensions();
  const {theme} = useContext(ThemeContext);

  return (
    <Drawer.Navigator
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
  );
};

const MenuInterno = (props: DrawerContentComponentProps) => {
  const {
    theme: {colors, dark},
    setDarkTheme,
    setLightTheme,
  } = useContext(ThemeContext);

  const {logout} = useContext(AuthContext);

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
          onPress={() => props.navigation.navigate('DetailBible')}>
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
          onPress={() => props.navigation.navigate('DetailApp')}>
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
          onPress={() => props.navigation.navigate('DonationsScreen')}>
          <Text
            style={{
              fontFamily: 'Poppins-Medium',
              textAlign: 'center',
              fontSize: 15,
              color: gbColor.foco,
            }}>
            {' '}
            Donaciones
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
          marginHorizontal: 20,
        }}>
        <Text
          style={{
            textAlign: 'center',
            color: gbColor.foco,
          }}>
          Ministerio de Medios
        </Text>
        <Text
          style={{
            textAlign: 'center',
            color: gbColor.foco,
          }}>
          Todos los derechos reservados, 2023
        </Text>
      </View>
    </View>
  );
};
