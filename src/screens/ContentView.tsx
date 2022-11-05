import {useContext} from 'react';
import {View} from 'react-native';
import {SafeAreaInsetsContext} from 'react-native-safe-area-context';

export const ContentView = props => {
  const safeInsets = useContext(SafeAreaInsetsContext);
  return (
    <View
      style={[
        {
          // marginLeft: safeInsets?.left,
          // marginTop: safeInsets?.top,
          // marginRight: safeInsets?.right,
          marginBottom: safeInsets?.bottom,
        },
      ]}>
      {props.children}
    </View>
  );
};
