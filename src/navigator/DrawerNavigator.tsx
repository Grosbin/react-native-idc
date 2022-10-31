import React from 'react';
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
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {HomeScreen} from '../screens/HomeScreen';
import {gbColor} from '../theme/themeGlobal';
import {StackNavigator} from './StackNavigator';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {
  const dimension = useWindowDimensions();
  return (
    <Drawer.Navigator
      drawerContent={props => <MenuInterno {...props} />}
      screenOptions={{
        headerShown: false,
        // drawerType: dimension.width >= 768 ? 'permanent' : 'front',
        drawerType: 'back',
        drawerActiveBackgroundColor: gbColor.blueSecundary,
        drawerPosition: 'right',
        overlayColor: 'transparent',

        drawerStyle: {
          backgroundColor: gbColor.primary,
          borderTopLeftRadius: 10,
        },
      }}>
      <Drawer.Screen name="StackNavigator" component={StackNavigator} />
    </Drawer.Navigator>
  );
};

const MenuInterno = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
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
        }}>
        <TouchableOpacity
          style={{
            width: '100%',
            height: 50,
            // backgroundColor: '#3498bc',
            // justifyContent: 'center',
            // alignItems: 'center',
            paddingTop: 10,
            paddingHorizontal: 20,
            flexDirection: 'row',
          }}
          onPress={() => props.navigation.navigate('Tabs')}>
          <Text>
            <Icon name="globe-outline" size={30} color={gbColor.fontPrimary} />
          </Text>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 20,
              fontWeight: 'bold',
              color: 'white',
            }}>
            {' '}
            Navegacion
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            width: '100%',
            height: 50,
            // backgroundColor: '#3498bc',
            // justifyContent: 'center',
            // alignItems: 'center',
            paddingTop: 10,
            paddingHorizontal: 20,
            flexDirection: 'row',
          }}
          onPress={() => props.navigation.navigate('SettingsScreen')}>
          <Text>
            <Icon
              name="settings-outline"
              size={30}
              color={gbColor.fontPrimary}
            />
          </Text>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 20,
              fontWeight: 'bold',
              color: 'white',
            }}>
            {' '}
            Settings
          </Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};
