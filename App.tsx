import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {BibleProvider} from './src/context/BibleContext';
import {ThemeProvider} from './src/context/ThemeContext';
import {StackNavigator} from './src/navigator/StackNavigator';
import {AuthProvider} from './src/context/AuthContext';
import {ChantProvider} from './src/context/ChantContext';
import {Alert} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import {
  getFcmToken,
  notificationListener,
  requestUserPermission,
} from './src/helpers/pushnotification';

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
  // useEffect(() => {
  //   const foregroundSubscriber = messaging().onMessage(async remoteMessage => {
  //     console.log('A new FCM message arrived!', JSON.stringify(remoteMessage));
  //   });

  //   const backgroundSubscriber = messaging().setBackgroundMessageHandler(
  //     async remoteMessage => {
  //       console.log('Message handled in the background!', remoteMessage);
  //     },
  //   );

  //   return () => {
  //     foregroundSubscriber();
  //     backgroundSubscriber;
  //   };
  // }, []);

  useEffect(() => {
    // getFcmToken();
    requestUserPermission();
    notificationListener();
  }, []);

  return (
    <BibleState>
      <StackNavigator />
    </BibleState>
  );
};

export default App;
