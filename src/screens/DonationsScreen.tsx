import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ButtonPrevious} from '../components/ui/ButtonPrevious';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../navigator/StackNavigator';
import {ThemeContext} from '../context/ThemeContext';

interface Props extends StackScreenProps<RootStackParams, 'DonationsScreen'> {}

export const DonationsScreen = ({navigation}: Props) => {
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  return (
    <>
      <ButtonPrevious navigation={navigation} title="" sizeTitle={2} />
      <View style={styles.container}>
        <View>
          <Text style={[styles.text, {color: colors.fontPrimary}]}>
            Bendiciones, las donaciones nos ayudaran a actualizar la aplicación.
          </Text>
          <Text style={[styles.text, {color: colors.fontPrimary}]}>
            Para más información, por favor contactar a: medioslavega@gmail.com
          </Text>
          <Text style={[styles.text, {color: colors.fontPrimary}]}>
            Gracias por su apoyo.
          </Text>

          <Text
            style={[styles.text, {color: colors.blueSecondary, marginTop: 30}]}>
            Dios, de su gran variedad de dones espirituales, les ha dado un don
            a cada uno de ustedes. Úsenlos bien para servirse los unos a los
            otros.
          </Text>
          <Text
            style={[styles.text, {color: colors.blueSecondary, marginTop: 10}]}>
            1 Pedro 4:10
          </Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 15,
    fontFamily: 'Poppins-Regular',
  },
});
