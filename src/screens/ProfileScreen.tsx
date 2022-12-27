import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ThemeContext} from '../context/ThemeContext';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../navigator/StackNavigator';
import {ButtonPrevious} from '../components/ui/ButtonPrevious';

interface Props extends StackScreenProps<RootStackParams, 'ProfileScreen'> {}

export const ProfileScreen = ({navigation}: Props) => {
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  return (
    <>
      <ButtonPrevious navigation={navigation} title="" sizeTitle={2} />
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={[styles.text, {color: colors.blueSecondary}]}>
            Os saludan todas las Iglesias de Cristo
          </Text>
          <Text style={[styles.text, {color: colors.blueSecondary}]}>
            Romanos 16:16
          </Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textContainer: {
    marginTop: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 15,
    fontFamily: 'Poppins-Medium',
  },
});
