import 'react-native-gesture-handler';
import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {BottonTabs} from './src/navigator/BottonTabs';
import {BibleProvider} from './src/context/BibleContext';
import {StatusBar} from 'react-native';
import {color} from 'react-native-reanimated';
import {StackNavigator} from './src/navigator/StackNavigator';
import {MenuLateral} from './src/navigator/DrawerNavigator';
import {ThemeContex, ThemeProvider} from './src/context/ThemeContex';
import {ContentView} from './src/screens/ContentView';

const BibleState = ({children}: any) => {
  // return <BibleProvider>{children}</BibleProvider>;
  return (
    <ThemeProvider>
      <BibleProvider>{children}</BibleProvider>
    </ThemeProvider>
  );
};

const App = () => {
  // const {
  //   theme: {colors},
  // } = useContext(ThemeContex);

  return (
    // <NavigationContainer>
    <BibleState>
      {/* <StatusBar backgroundColor={'white'} barStyle="dark-content" /> */}

      {/* <BottonTabs /> */}
      {/* <StackNavigator /> */}
      <MenuLateral />
    </BibleState>
    // </NavigationContainer>
  );
};

export default App;
