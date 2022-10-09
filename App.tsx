import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {BottonTabs} from './src/navigator/BottonTabs';
import {BibleProvider} from './src/context/BibleContext';

const BibleState = ({children}: any) => {
  return <BibleProvider>{children}</BibleProvider>;
};

const App = () => {
  return (
    <NavigationContainer>
      <BibleState>
        <BottonTabs />
      </BibleState>
    </NavigationContainer>
  );
};

export default App;
