import {useContext, useEffect, useState} from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import {BottonTabs} from './BottonTabs';
import {DetailPrayers} from '../screens/DetailPrayers';
import {ContentChants} from '../screens/ContentChants';
import {ThemeContext} from '../context/ThemeContext';
import {NavigationContainer} from '@react-navigation/native';
import {LoginScreen} from '../screens/LoginScreen';
import {RegisterScreen} from '../screens/RegisterScreen';
import auth from '@react-native-firebase/auth';
import {DetailBible} from '../screens/DetailBible';
import {DetailApp} from '../screens/DetailApp';
import {ResetPassword} from '../screens/ResetPassword';
import {ProfileScreen} from '../screens/ProfileScreen';
import {DonationsScreen} from '../screens/DonationsScreen';
import {PrivacyPolicy} from '../screens/PrivacyPolicy';

export type RootStackParams = {
  BottonTabs: undefined;
  DetailPrayers: {title: string; data: string[]};
  ContentChants: {id: string; name: string; lyrics: string[]};
  LoginScreen: undefined;
  RegisterScreen: undefined;
  DetailBible: undefined;
  DetailApp: undefined;
  ResetPassword: undefined;
  ProfileScreen: undefined;
  DonationsScreen: undefined;
  PrivacyPolicy: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  const {theme} = useContext(ThemeContext);
  // const [initializing, setInitializing] = useState(true);
  // const [user, setUser] = useState();
  const [anyAccess, setAnyAccess] = useState(true);

  // const onAuthStateChanged = user => {
  //   setUser(user);
  //   if (initializing) setInitializing(false);
  // };

  // useEffect(() => {
  //   const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
  //   return subscriber;
  // }, []);

  // if (initializing) return null;

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
          cardStyle: {
            backgroundColor: theme.colors.background,
          },
        }}>
        {!anyAccess ? (
          <>
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
            <Stack.Screen name="ResetPassword" component={ResetPassword} />
            <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
          </>
        ) : (
          <>
            <Stack.Screen name="BottonTabs" component={BottonTabs} />
            <Stack.Screen name="DetailPrayers" component={DetailPrayers} />
            <Stack.Screen name="ContentChants" component={ContentChants} />
            <Stack.Screen name="DetailBible" component={DetailBible} />
            <Stack.Screen name="DetailApp" component={DetailApp} />
            <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
            <Stack.Screen name="DonationsScreen" component={DonationsScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
