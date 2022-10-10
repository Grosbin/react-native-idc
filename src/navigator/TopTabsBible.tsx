import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {StyleSheet, Text} from 'react-native';
import {NewTestament} from '../components/bible/NewTestament';
import {gbColor} from '../theme/themeGlobal';
import {OldTestament} from '../components/bible/OldTestament';
import {color} from 'react-native-reanimated';

const Tab = createMaterialTopTabNavigator();

export const TopTabsBible = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: gbColor.background,
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10,
      }}
      screenOptions={({route}) => ({
        tabBarLabel({focused}) {
          let title: string = '';
          switch (route.name) {
            case 'OldTestament':
              title = 'Antiguo';
              break;
            case 'NewTestament':
              title = 'Nuevo';
              break;
          }
          return (
            <Text
              style={[
                styles.textTitle,
                !focused && {color: 'rgba(34,86,242,0.5)'},
              ]}>
              {title}
            </Text>
          );
        },
        tabBarIndicatorStyle: {backgroundColor: gbColor.secundary, height: 3},
        tabBarPressColor: 'transparent',
        tabBarStyle: {
          backgroundColor: gbColor.background,
          borderTopWidth: 0,
          elevation: 0,
          borderRadius: 10,
        },
      })}>
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

const styles = StyleSheet.create({
  textTitle: {
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    color: gbColor.primary,
  },
});
