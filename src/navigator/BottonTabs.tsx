import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BibleScreen} from '../screens/BibleScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import {ParamListBase, RouteProp} from '@react-navigation/native';
import {StyleSheet, Text} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {useContext} from 'react';
import {ThemeContext} from '../context/ThemeContext';
import {MenuLateral} from './DrawerNavigator';

const Tab = createBottomTabNavigator();

export const BottonTabs = () => {
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  const widthOffset = useSharedValue(90);
  const opacityOffset = useSharedValue(1);

  const focusedIconStyle = useAnimatedStyle(() => {
    return {
      width: withSpring(widthOffset.value, {damping: 10}),
      backgroundColor: colors.primary,
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
      case 'MenuLateral':
        // iconName = 'home';
        iconName = 'musical-notes';
        break;
      case 'NoticesScreen':
        iconName = 'notifications';
        break;
    }

    return (
      <Animated.View style={[styles.focusedIcon, focused && focusedIconStyle]}>
        <Text>
          <Icon
            name={`${iconName}`}
            size={30}
            color={focused ? colors.foco : colors.fontPrimary}
          />
        </Text>
      </Animated.View>
    );
  };

  return (
    <Tab.Navigator
      initialRouteName="MenuLateral"
      sceneContainerStyle={{
        backgroundColor: colors.background,
      }}
      screenOptions={({route}) => ({
        lazy: false,
        headerShown: false,

        tabBarIcon: ({color, focused}) => tabBarIcon(route, focused),
        tabBarStyle: {
          backgroundColor: colors.background,
          elevation: 0,
          borderTopWidth: 0,
          height: 70,
          paddingHorizontal: 5,
          paddingVertical: 10,
        },
        tabBarItemStyle: {
          width: 90,
          height: 50,
          bottom: 0,
          borderRadius: 50,
          marginBottom: 5,
        },
        tabBarShowLabel: false,
      })}>
      <Tab.Screen
        name="MenuLateral"
        component={MenuLateral}
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
      />
      {/* <Tab.Screen
        name="ChantsScreen"
        component={ChantsScreen}
        listeners={{
          tabPress: () => onPress(),
        }}
      /> */}
      {/* <Tab.Screen
        name="NoticesScreen"
        component={NoticesScreen}
        listeners={{
          tabPress: () => onPress(),
        }}
      /> */}
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  focusedIcon: {
    width: 90,
    height: 50,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
