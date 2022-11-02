import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screens/HomeScreen';
import {BottonTabs} from './BottonTabs';
import {DetailPrayers} from '../screens/DetailPrayers';
import {MenuLateral} from './DrawerNavigator';
import {gbColor} from '../theme/themeGlobal';
import {useContext} from 'react';
import {ThemeContex} from '../context/ThemeContex';

export type RootStackParams = {
  BottonTabs: undefined;
  MenuLateral: undefined;
  DetailPrayers: {title: string; data: {id: number; name: string}[]};
};

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  const {
    theme: {colors},
  } = useContext(ThemeContex);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: {
          elevation: 0,
        },
      }}>
      <Stack.Screen name="BottonTabs" component={BottonTabs} />
      <Stack.Screen name="MenuLateral" component={MenuLateral} />
      <Stack.Screen name="DetailPrayers" component={DetailPrayers} />
    </Stack.Navigator>
  );
};
