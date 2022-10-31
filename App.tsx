import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {BottonTabs} from './src/navigator/BottonTabs';
import {BibleProvider} from './src/context/BibleContext';
import {StatusBar} from 'react-native';
import {color} from 'react-native-reanimated';
import {StackNavigator} from './src/navigator/StackNavigator';
import {MenuLateral} from './src/navigator/DrawerNavigator';

const BibleState = ({children}: any) => {
  return <BibleProvider>{children}</BibleProvider>;
};

const App = () => {
  return (
    <NavigationContainer>
      <BibleState>
        <StatusBar backgroundColor={'white'} barStyle="dark-content" />

        {/* <BottonTabs /> */}
        {/* <StackNavigator /> */}
        <MenuLateral />
      </BibleState>
    </NavigationContainer>
  );
};

export default App;
