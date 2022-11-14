import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import {HomeScreen} from '../screens/HomeScreen';
import {BottonTabs} from './BottonTabs';
import {DetailPrayers} from '../screens/DetailPrayers';
import {MenuLateral} from './DrawerNavigator';
import {ContentChants} from '../screens/ContentChants';
import {gbColor} from '../theme/themeGlobal';
import {useContext} from 'react';
import {ThemeContex} from '../context/ThemeContex';
import {NavigationContainer} from '@react-navigation/native';

export type RootStackParams = {
  BottonTabs: undefined;
  // MenuLateral: undefined;
  DetailPrayers: {title: string; data: {id: number; name: string}[]};
  ContentChants: {id: string; name: string; lyrics: string[]};
};

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  const {theme} = useContext(ThemeContex);

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          headerShown: false,
          headerStyle: {
            elevation: 0,
          },
        }}>
        {/* <Stack.Screen name="MenuLateral" component={MenuLateral} /> */}
        <Stack.Screen name="BottonTabs" component={BottonTabs} />
        <Stack.Screen name="DetailPrayers" component={DetailPrayers} />
        <Stack.Screen name="ContentChants" component={ContentChants} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
