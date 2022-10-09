import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Text} from 'react-native';
import {NewTestament} from '../components/bible/NewTestament';
import {gbColor} from '../theme/themeGlobal';
import {OldTestament} from '../components/bible/OldTestament';

const Tab = createMaterialTopTabNavigator();

export const TopTabsBible = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: gbColor.background,
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10,
      }}
      screenOptions={{
        tabBarIndicatorStyle: {backgroundColor: gbColor.secundary},
        tabBarPressColor: 'transparent',
        tabBarStyle: {
          backgroundColor: gbColor.background,
          borderTopWidth: 0,
          elevation: 0,
          borderRadius: 10,
        },
      }}>
      <Tab.Screen
        name="OldTestament"
        component={OldTestament}
        options={{
          title: 'Antiguo Testamento',
        }}
      />
      <Tab.Screen
        name="NewTestament"
        component={NewTestament}
        options={{
          title: 'Nuevo Testamento',
        }}
      />
    </Tab.Navigator>
  );
};
