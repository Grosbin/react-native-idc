/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
// import 'react-native-gesture-handler';

// import {NavigationContainer} from '@react-navigation/native';
// import React from 'react';

// import {SafeAreaView, Text, View} from 'react-native';

// function App(): React.JSX.Element {
//   return (
//     <NavigationContainer>
//       <SafeAreaView>
//         <View>
//           <Text>Hola Mundo</Text>
//         </View>
//       </SafeAreaView>
//     </NavigationContainer>
//   );
// }

// export default App;

import 'react-native-gesture-handler';
import React from 'react';
import {BibleProvider} from './src/context/BibleContext';
import {ThemeProvider} from './src/context/ThemeContext';
import {StackNavigator} from './src/navigator/StackNavigator';
import {ChantProvider} from './src/context/ChantContext';

const BibleState = ({children}: any) => {
  return (
    <ThemeProvider>
      <ChantProvider>
        <BibleProvider>{children}</BibleProvider>
      </ChantProvider>
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
