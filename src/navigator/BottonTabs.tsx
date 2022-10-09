import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BibleScreen} from '../screens/BibleScreen';
import {ChantsScreen} from '../screens/ChantsScreen';
import {ActivitiesScreen} from '../screens/ActivitiesScreen';
import {NoticesScreen} from '../screens/NoticesScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import {ParamListBase, RouteProp} from '@react-navigation/native';
import {StyleSheet, Text, View} from 'react-native';
import {gbColor} from '../theme/themeGlobal';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const Tab = createBottomTabNavigator();

export const BottonTabs = () => {
  const widthOffset = useSharedValue(90);
  const opacityOffset = useSharedValue(1);

  const focusedIconStyle = useAnimatedStyle(() => {
    return {
      width: withSpring(widthOffset.value, {damping: 10}),
      backgroundColor: gbColor.primary,
      opacity: withTiming(opacityOffset.value, {duration: 300}),
    };
  });

  const onPress = () => {
    widthOffset.value = 40;
    opacityOffset.value = 0.5;
    setTimeout(() => {
      opacityOffset.value = 1;
      widthOffset.value = 90;
    }, 200);
  };

  const tabBarIcon = (
    route: RouteProp<ParamListBase, string>,
    focused: boolean = false,
  ) => {
    let iconName: string = '';

    switch (route.name) {
      case 'BibleScreen':
        iconName = 'book';
        break;
      case 'ChantsScreen':
        iconName = 'musical-notes';
        break;
      case 'ActivitiesScreen':
        iconName = 'home';
        break;
      case 'NoticesScreen':
        iconName = 'notifications';
        break;
    }

    return (
      // <TouchableWithoutFeedback onPress={() => onPress()}>
      <Animated.View style={[styles.focusedIcon, focused && focusedIconStyle]}>
        <Text>
          <Icon
            name={`${iconName}`}
            size={30}
            color={focused ? 'white' : gbColor.fontPrimary}
          />
        </Text>
      </Animated.View>
      // </TouchableWithoutFeedback>
    );
  };

  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: gbColor.foco,
      }}
      screenOptions={({route}) => ({
        headerShown: false,
        // tabBarActiveBackgroundColor: gbColor.primary,
        tabBarIcon: ({color, focused}) => tabBarIcon(route, focused),
        tabBarStyle: {
          backgroundColor: gbColor.foco,
          elevation: 0,
          borderTopWidth: 0,
          height: 70,
          paddingHorizontal: 5,
          paddingVertical: 10,
        },
        tabBarItemStyle: {
          borderRadius: 50,
          marginBottom: 5,
        },
        tabBarShowLabel: false,
      })}>
      <Tab.Screen
        name="ActivitiesScreen"
        component={ActivitiesScreen}
        listeners={{
          tabPress: () => onPress(),
        }}
      />
      <Tab.Screen
        name="BibleScreen"
        component={BibleScreen}
        listeners={{
          tabPress: () => onPress(),
        }}
        // options={{tabBarStyle: {backgroundColor: gbColor.foco}}}
      />
      <Tab.Screen
        name="ChantsScreen"
        component={ChantsScreen}
        listeners={{
          tabPress: () => onPress(),
        }}
      />
      <Tab.Screen
        name="NoticesScreen"
        component={NoticesScreen}
        listeners={{
          tabPress: () => onPress(),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  focusedIcon: {
    width: 90,
    height: 50,
    // backgroundColor: gbColor.primary,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
