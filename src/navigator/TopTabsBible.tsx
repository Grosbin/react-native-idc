import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {StyleSheet, Text} from 'react-native';
import {NewTestament} from '../components/bible/NewTestament';
import {OldTestament} from '../components/bible/OldTestament';
import {useContext} from 'react';
import {BibleContext} from '../context/BibleContext';
import {newTestament, oldTestament} from '../types/bible';
import Icon from 'react-native-vector-icons/Ionicons';
import {ThemeContext} from '../context/ThemeContext';

const Tab = createMaterialTopTabNavigator();
interface Props {
  widthOffset: any;
  heightOffset: any;
}
export const TopTabsBible = ({widthOffset, heightOffset}: Props) => {
  const {
    theme: {colors},
  } = useContext(ThemeContext);

  const {
    bibleState: {bookOnPress, verseOnPress, chapterOnPress, book},
  } = useContext(BibleContext);

  return (
    <Tab.Navigator
      showPageIndicator={false}
      sceneContainerStyle={{
        backgroundColor: colors.background,
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
                {
                  color: colors.blueSecondary,
                },
              ]}>
              {(chapterOnPress || verseOnPress) && (
                <Icon name="search" size={20} color={colors.blueSecondary} />
              )}
              {title}
            </Text>
          );
        },
        swipeEnabled: bookOnPress,
        tabBarIndicatorStyle: [{backgroundColor: colors.secondary, height: 3}],
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
          backgroundColor: colors.background,
          borderTopWidth: 0,
          elevation: 0,
          borderRadius: 10,
        },
      })}>
      {bookOnPress && (
        <>
          <Tab.Screen name="OldTestament">
            {() => (
              <OldTestament
                widthOffset={widthOffset}
                heightOffset={heightOffset}
              />
            )}
          </Tab.Screen>
          <Tab.Screen name="NewTestament">
            {() => (
              <NewTestament
                widthOffset={widthOffset}
                heightOffset={heightOffset}
              />
            )}
          </Tab.Screen>
        </>
      )}

      {oldTestament.includes(book) && !bookOnPress && (
        <Tab.Screen name="OldTestament">
          {() => (
            <OldTestament
              widthOffset={widthOffset}
              heightOffset={heightOffset}
            />
          )}
        </Tab.Screen>
      )}
      {newTestament.includes(book) && !bookOnPress && (
        <Tab.Screen name="NewTestament">
          {() => (
            <NewTestament
              widthOffset={widthOffset}
              heightOffset={heightOffset}
            />
          )}
        </Tab.Screen>
      )}
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  textTitle: {
    fontSize: 18,
    fontFamily: 'Poppins-ExtraBold',
  },
});
