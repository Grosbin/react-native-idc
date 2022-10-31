import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screens/HomeScreen';
import {BottonTabs} from './BottonTabs';
import {DetailPrayers} from '../screens/DetailPrayers';
import {MenuLateral} from './DrawerNavigator';
import {gbColor} from '../theme/themeGlobal';

export type RootStackParams = {
  BottonTabs: undefined;
  DetailPrayers: undefined;
};

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: {
          elevation: 0,
        },
        cardStyle: {
          backgroundColor: gbColor.foco,
        },
      }}>
      <Stack.Screen name="BottonTabs" component={BottonTabs} />
      <Stack.Screen name="MenuLateral" component={MenuLateral} />
      <Stack.Screen name="DetailPrayers" component={DetailPrayers} />
    </Stack.Navigator>
  );
};
