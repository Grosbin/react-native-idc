import {StackScreenProps} from '@react-navigation/stack';
import React, {useContext} from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {ButtonPrevious} from '../components/ui/ButtonPrevious';
import {ThemeContext} from '../context/ThemeContext';
import {RootStackParams} from '../navigator/StackNavigator';

interface Props extends StackScreenProps<RootStackParams, 'DetailBible'> {}

export const DetailBible = ({route, navigation}: Props) => {
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
                fontFamily: 'Poppins-Bold',
                fontSize: 18,
              },
            ]}>
            Nueva Traducción Viviente (NTV)
          </Text>
          <Text style={[styles.text, {color: colors.fontPrimary}]}>
            La Santa Biblia, Nueva Traducción Viviente (NTV), es una nueva
            traducción en la que se trabajó alrededor de diez años. Es fruto del
            trabajo de más de cincuenta eruditos en las áreas de teología,
            traducción, estudios lingüísticos, corrección de estilo, corrección
            de gramática, tipografía, edición y otros. También representa una
            asociación entre varios ministerios y editoriales como la editorial
            Tyndale, la Editorial Unilit y la Asociación Luis Palau.
          </Text>
          <Text style={[styles.text, {color: colors.fontPrimary}]}>
            La meta de cualquier tipo de traducción de la Biblia es compartir
            con los lectores contemporáneos, tan precisamente como sea posible,
            el significado y el contenido de los textos antiguos en hebreo,
            arameo y griego. El desafío para nuestros traductores, lingüistas y
            teólogos fue crear un texto contemporáneo que comunicara el mensaje
            a los lectores de hoy con la misma claridad, y causara el mismo
            impacto que los textos originales comunicaron y causaron a los
            lectores y oyentes de los tiempos bíblicos. En fin, esta traducción
            es de fácil lectura y comprensión, y al mismo tiempo comunica con
            precisión el significado y el contenido de los textos bíblicos
            originales. La NTV es una traducción ideal para el estudio, para la
            lectura devocional y para la alabanza.
          </Text>
          <Text style={[styles.text, {color: colors.fontPrimary}]}>
            Creemos que la Nueva Traducción Viviente —que utiliza la erudición
            más actualizada con un estilo claro y dinámico— comunicará
            poderosamente la Palabra de Dios a todos los que la lean. Publicamos
            la NTV pidiendo a Dios en oración que la use para transmitir de una
            manera impactante su verdad eterna a la iglesia y al mundo.
          </Text>
          <Text style={[styles.text, {color: colors.fontPrimary}]}>
            Visite Tyndale en Internet: www.BibliaNTV.com y
            www.tyndaleespanol.com.
          </Text>

          <Text style={[styles.text, {color: colors.blueSecondary}]}>
            La Santa Biblia, Nueva Traducción Viviente, © Tyndale House
            Foundation, 2010. Todos los derechos reservados.
          </Text>
          <Text style={[styles.text, {color: colors.fontPrimary}]}>
            Todo el texto bíblico ha sido tomado de la Santa Biblia, Nueva
            Traducción Viviente, © Tyndale House Foundation, 2010. Usado con
            permiso de Tyndale House Publishers, Inc., 351 Executive Dr., Carol
            Stream, IL 60188, Estados Unidos de América. Todos los derechos
            reservados.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    marginHorizontal: 20,
  },
  text: {
    fontFamily: 'Poppins-Regular',
    marginVertical: 10,
  },
});
