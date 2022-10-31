import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {StyleSheet, Text} from 'react-native';
import {NewTestament} from '../components/bible/NewTestament';
import {gbColor} from '../theme/themeGlobal';
import {OldTestament} from '../components/bible/OldTestament';
import {color} from 'react-native-reanimated';
import {useContext} from 'react';
import {BibleContext} from '../context/BibleContext';
import {newTestament, oldTestament} from '../types/bible';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialTopTabNavigator();

export const TopTabsBible = () => {
  const {
    bibleState: {bookOnPress, verseOnPress, chapterOnPress, book},
  } = useContext(BibleContext);

  return (
    <Tab.Navigator
      showPageIndicator={false}
      sceneContainerStyle={{
        backgroundColor: gbColor.background,
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10,
      }}
      screenOptions={({route}) => ({
        tabBarLabel({focused}) {
          let title: string = '';
          if (bookOnPress) {
            switch (route.name) {
              case 'OldTestament':
                title = 'Antiguo';
                break;
              case 'NewTestament':
                title = 'Nuevo';
                break;
            }
          }

          if (chapterOnPress) {
            title = 'Capítulos';
          }

          if (verseOnPress) {
            title = 'Versículos';
          }

          return (
            <Text
              style={[
                styles.textTitle,
                // !focused && {color: 'rgba(34,86,242,0.5)'},
              ]}>
              {(chapterOnPress || verseOnPress) && (
                <Icon name="search" size={20} color={gbColor.fontPrimary} />
              )}
              {title}
            </Text>
          );
        },
        swipeEnabled: bookOnPress,
        tabBarIndicatorStyle: [{backgroundColor: gbColor.secundary, height: 3}],
        tabBarIndicator: () => (
          <Text
            style={[
              {
                opacity: 0,
              },
            ]}
          />
        ),

        tabBarPressColor: 'transparent',
        tabBarStyle: {
          backgroundColor: gbColor.background,
          borderTopWidth: 0,
          elevation: 0,
          borderRadius: 10,
        },
      })}>
      {bookOnPress && (
        <>
          <Tab.Screen name="OldTestament" component={OldTestament} />
          <Tab.Screen name="NewTestament" component={NewTestament} />
        </>
      )}

      {oldTestament.includes(book) && !bookOnPress && (
        <Tab.Screen name="OldTestament" component={OldTestament} />
      )}
      {newTestament.includes(book) && !bookOnPress && (
        <Tab.Screen name="NewTestament" component={NewTestament} />
      )}
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  textTitle: {
    fontSize: 18,
    fontFamily: 'Poppins-ExtraBold',
    color: gbColor.fontPrimary,
  },
});
