import {StackScreenProps} from '@react-navigation/stack';
import React, {useContext} from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {ButtonPrevious} from '../components/ui/ButtonPrevious';
import {ThemeContext} from '../context/ThemeContext';
import {RootStackParams} from '../navigator/StackNavigator';

interface Props extends StackScreenProps<RootStackParams, 'TermsConditions'> {}

export const TermsConditions = ({route, navigation}: Props) => {
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
            Términos y Condiciones
          </Text>
          <Text style={[styles.text, {color: colors.fontPrimary}]}>
            Bienvenido a la aplicación móvil IDC Connect. Esta aplicación, aún
            en desarrollo, proporciona acceso a un himnario bíblico y a la
            versión de la Biblia NTV (Nueva Traducción Viviente). Al descargar y
            utilizar esta aplicación, aceptas cumplir con los siguientes
            términos y condiciones.
          </Text>
          <Text style={[styles.text, {color: colors.fontPrimary}]}>
            Todos los derechos reservados. Esta aplicación y su contenido,
            incluyendo pero no limitándose a su diseño, funcionalidad,
            características, y estilo visual, son propiedad de Roberto
            Betancourth. No se permite la reproducción, distribución, o uso
            comercial del contenido sin el permiso expreso del propietario.
            Cualquier intento de copiar, modificar o distribuir el diseño y las
            funcionalidades de esta aplicación será considerado una violación de
            estos términos y estará sujeto a acciones legales.
          </Text>
          <Text style={[styles.text, {color: colors.fontPrimary}]}>
            Al utilizar esta aplicación, autorizas a IDC Connect a recopilar y
            utilizar datos personales, como nombre y edad, con fines
            estadísticos y para mejorar los servicios proporcionados. La
            información recopilada se utilizará exclusivamente para las
            necesidades de la congregación y no será compartida con terceros sin
            tu consentimiento previo.
          </Text>
          <Text style={[styles.text, {color: colors.fontPrimary}]}>
            Actualmente, esta aplicación es gratuita. Sin embargo, Roberto
            Betancourth se reserva el derecho de implementar una tarifa de
            suscripción o pago único en el futuro. Los usuarios serán informados
            con antelación sobre cualquier cambio en los términos de acceso.
          </Text>

          {/* <Text style={[styles.text, {color: colors.blueSecondary}]}>
            La Santa Biblia, Nueva Traducción Viviente, © Tyndale House
            Foundation, 2010. Todos los derechos reservados.
          </Text> */}

          <Text style={[styles.text, {color: colors.fontPrimary}]}>
            Roberto Betancourth se reserva el derecho de modificar estos
            términos y condiciones en cualquier momento. Las modificaciones
            serán efectivas a partir de su publicación en la aplicación. Se
            recomienda revisar regularmente estos términos para estar al tanto
            de cualquier cambio.
          </Text>

          <Text style={[styles.text, {color: colors.fontPrimary}]}>
            Aunque se realizan todos los esfuerzos para garantizar la precisión
            y funcionalidad de la aplicación, IDC Connect no se hace responsable
            de cualquier error, fallo o pérdida de datos que pueda ocurrir
            durante el uso de la aplicación. El uso de la aplicación es bajo tu
            propio riesgo.
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
