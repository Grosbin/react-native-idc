import {StackScreenProps} from '@react-navigation/stack';
import React, {useContext} from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {ButtonPrevious} from '../components/ui/ButtonPrevious';
import {ThemeContext} from '../context/ThemeContext';
import {RootStackParams} from '../navigator/StackNavigator';

interface Props extends StackScreenProps<RootStackParams, 'DetailApp'> {}

export const DetailApp = ({route, navigation}: Props) => {
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <ButtonPrevious navigation={navigation} title="" sizeTitle={2} />
        <View style={[styles.container]}>
          <Text
            style={[
              styles.text,
              {
                color: colors.blueSecondary,
              },
            ]}>
            Este software fue creado para el beneficio de la Iglesia de Cristo.
          </Text>
          <Text style={[styles.text, {color: colors.fontPrimary}]}>
            En ella podrá estar al pendiente de las actividades que se
            realizaran durante la semana.
          </Text>
          {/* <Text style={[styles.text, {color: colors.fontPrimary}]}>
            Podrá saber quienes son los hermanos que necesitan de su oración.
          </Text> */}
          <Text style={[styles.text, {color: colors.fontPrimary}]}>
            Tendrá acceso a la biblia Nueva Traducción Viviente (NTV).
          </Text>
          <Text style={[styles.text, {color: colors.fontPrimary}]}>
            Contara con un himnario el cual más 272 cantos.
          </Text>
          <Text style={[styles.text, {color: colors.fontPrimary}]}>
            También podrá estar al pendiente de los anuncios semanales.
          </Text>
          <Text style={[styles.text, {color: colors.blueSecondary}]}>
            Cualquier duda, consulta, sugerencia o comentario puede contactarse
            a:
          </Text>
          <Text style={[styles.text, {color: colors.blueSecondary}]}>
            medioslavega@gmail.com
          </Text>
          <Text style={[styles.text, {color: colors.blueSecondary}]}>
            robertobetancourth96@gmail.com
          </Text>
          <Text style={[styles.text, {color: colors.fontPrimary}]}>
            Desarrollado por Roberto Betancourth todos los derechos reservados
            2024.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    marginHorizontal: 25,
  },
  text: {
    fontFamily: 'Poppins-Regular',
    marginVertical: 10,
  },
});
