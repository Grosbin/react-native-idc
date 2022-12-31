import {StackScreenProps} from '@react-navigation/stack';
import React, {useContext} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {ThemeContext} from '../context/ThemeContext';
import {RootStackParams} from '../navigator/StackNavigator';
import {Background} from '../components/ui/Background';

interface Props extends StackScreenProps<RootStackParams, 'PrivacyPolicy'> {}

export const PrivacyPolicy = ({navigation}: Props) => {
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
      <Background />
      <ScrollView>
        <View style={[styles.container]}>
          <Text
            style={[styles.text, {fontSize: 20, fontFamily: 'Poppins-Bold'}]}>
            Políticas de Privacidad
          </Text>
          <Text style={[styles.text]}>
            Para poder utilizar la aplicación es necesario que el usuario se
            registre. Por consecuencia el usuario tendrá que proporcionarnos:
          </Text>
          <Text style={[styles.text]}>
            {
              ' 1. Nombre\n 2. Correo\n 3. Número de celular\n 4. Contraseña\n 5. Fecha de nacimiento\n 6. Confirmar si esta bautizado o no.'
            }
          </Text>
          <Text style={[styles.text]}>
            Los datos de correo y contraseña son totalmente confidenciales y los
            demás datos se usarán para estadísticas de nuestra congregación.
          </Text>
          <Text style={[styles.text]}>
            En algunos casos se usará la fecha de nacimiento para felicitar al
            usuario.
          </Text>
          <Text style={[styles.text]}>
            En algunos casos se usará su número de celular para comunicarse con
            el usuario.
          </Text>
          <Text style={[styles.text]}>
            Para borrar sus datos tiene que contactarse con el Ministerio de
            Medios a:
          </Text>
          <Text style={[styles.text]}>medioslavega@gmail.com</Text>
          <Text style={[styles.text]}>robertobetancourth96@gmail.com</Text>
          <View style={{marginHorizontal: 20, marginTop: 10}}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.button}
              onPress={() => navigation.replace('RegisterScreen')}>
              <Text style={styles.textButton}>Ir a registrarse</Text>
            </TouchableOpacity>
          </View>
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
    marginVertical: 5,
    color: 'white',
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#0dc4ae',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    paddingVertical: 9,
    marginLeft: 5,
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    color: '#fff',
  },
});
