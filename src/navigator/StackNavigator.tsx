import {useContext} from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import {BottonTabs} from './BottonTabs';
import {DetailPrayers} from '../screens/DetailPrayers';
import {ContentChants} from '../screens/ContentChants';
import {ThemeContext} from '../context/ThemeContext';
import {NavigationContainer} from '@react-navigation/native';
import {DetailBible} from '../screens/DetailBible';
import {DetailApp} from '../screens/DetailApp';
import {ProfileScreen} from '../screens/ProfileScreen';
import {DonationsScreen} from '../screens/DonationsScreen';
import {TermsConditions} from '../screens/TermsConditions';

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
  TermsConditions: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  const {theme} = useContext(ThemeContext);
  // const [initializing, setInitializing] = useState(true);
  // const [user, setUser] = useState();

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
        <>
          <Stack.Screen name="BottonTabs" component={BottonTabs} />
          <Stack.Screen name="DetailPrayers" component={DetailPrayers} />
          <Stack.Screen name="ContentChants" component={ContentChants} />
          <Stack.Screen name="DetailBible" component={DetailBible} />
          <Stack.Screen name="DetailApp" component={DetailApp} />
          <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
          <Stack.Screen name="DonationsScreen" component={DonationsScreen} />
          <Stack.Screen name="TermsConditions" component={TermsConditions} />
        </>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
