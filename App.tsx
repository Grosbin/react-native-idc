import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {BottonTabs} from './src/navigator/BottonTabs';
import {BibleProvider} from './src/context/BibleContext';
import {StatusBar} from 'react-native';
import {color} from 'react-native-reanimated';

const BibleState = ({children}: any) => {
  return <BibleProvider>{children}</BibleProvider>;
};

const App = () => {
  return (
    <NavigationContainer>
      <BibleState>
        <StatusBar backgroundColor={'white'} barStyle="dark-content" />
        <BottonTabs />
      </BibleState>
    </NavigationContainer>
  );
};

export default App;
