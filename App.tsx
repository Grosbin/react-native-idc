import 'react-native-gesture-handler';
import React from 'react';
import {BibleProvider} from './src/context/BibleContext';
import {ThemeProvider} from './src/context/ThemeContext';
import {StackNavigator} from './src/navigator/StackNavigator';
import {AuthProvider} from './src/context/AuthContext';
import {ChantProvider} from './src/context/ChantContext';

const BibleState = ({children}: any) => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <ChantProvider>
          <BibleProvider>{children}</BibleProvider>
        </ChantProvider>
      </AuthProvider>
    </ThemeProvider>
  );
};

const App = () => {
  return (
    <BibleState>
      <StackNavigator />
    </BibleState>
  );
};

export default App;
