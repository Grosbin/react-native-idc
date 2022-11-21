import React, {useContext, useEffect, useState} from 'react';
import {
  Text,
  View,
  TextInput,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  Alert,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {useForm} from '../hooks/useForm';
import {ThemeContex} from '../context/ThemeContex';
import changeNavigationBarColor, {
  hideNavigationBar,
  showNavigationBar,
} from 'react-native-navigation-bar-color';
import SplashScreen from 'react-native-splash-screen';
// import { Background } from '../components/Background';
// import { WhiteLogo } from '../components/WhiteLogo';
// import { loginStyles } from '../theme/loginTheme';
// import { AuthContext } from '../context/AuthContext';
import {StatusBar} from 'react-native';
import {LogoIDC} from '../components/ui/LogoIDC';
import DatePicker from 'react-native-modern-datepicker-es';
import {ScrollView} from 'react-native-gesture-handler';
import {CalendarModal} from '../components/CalendarModal';
import {SwitchFuntion} from '../components/ui/SwitchFuntion';

interface Props extends StackScreenProps<any, any> {}

export const RegisterScreen = ({navigation}: Props) => {
  // const { signIn, errorMessage, removeError } = useContext( AuthContext );
  const {
    theme: {colors},
  } = useContext(ThemeContex);

  const [birthday, setBirthday] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isBaptized, setIsBaptized] = useState(false);

  const {name, email, password, onChange} = useForm({
    name: '',
    email: '',
    password: '',
    birthday: birthday,
  });

  // useEffect(() => {
  //     if( errorMessage.length === 0 ) return;

  //     Alert.alert( 'Login incorrecto', errorMessage,[{
  //         text: 'Ok',
  //         onPress: removeError
  //     }]);

  // }, [ errorMessage ])

  const onLogin = () => {
    console.log({name, email, password, birthday, isBaptized});
    Keyboard.dismiss();
    // signIn({ correo: email, password });
  };
  return (
    <KeyboardAvoidingView
      style={{flex: 1, backgroundColor: colors.primary}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      {/* Background */}
      {/* <Background /> */}
      <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
      <View
        style={{
          alignSelf: 'center',
          justifyContent: 'center',
        }}>
        <CalendarModal
          setDate={setBirthday}
          isVisible={isVisible}
          setIsVisible={setIsVisible}
        />
      </View>
      <View style={loginStyles.formContainer}>
        {/* Keyboard avoid view */}
        <LogoIDC />

        <Text style={loginStyles.title}>Registro</Text>

        <View style={loginStyles.inputContainer}>
          <TextInput
            placeholder="Nombre:"
            placeholderTextColor="rgba(0,0,0,0.4)"
            //   underlineColorAndroid="white"
            // secureTextEntry
            style={[loginStyles.inputField]}
            selectionColor="white"
            onChangeText={value => onChange(value, 'name')}
            value={name}
            onSubmitEditing={onLogin}
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>

        {/* <Text style={loginStyles.label}>correo:</Text> */}
        <View style={loginStyles.inputContainer}>
          <TextInput
            placeholder="Correo:"
            placeholderTextColor="rgba(0,0,0,0.4)"
            keyboardType="email-address"
            style={[loginStyles.inputField]}
            selectionColor="white"
            onChangeText={value => onChange(value, 'email')}
            value={email}
            onSubmitEditing={onLogin}
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>
        {/* <Text style={loginStyles.label}>Contraseña:</Text> */}

        <View style={loginStyles.inputContainer}>
          <TextInput
            placeholder="Contraseña:"
            placeholderTextColor="rgba(0,0,0,0.4)"
            secureTextEntry
            style={[loginStyles.inputField]}
            selectionColor="white"
            onChangeText={value => onChange(value, 'password')}
            value={password}
            onSubmitEditing={onLogin}
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>
        <View style={{alignItems: 'flex-start'}}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              width: '100%',
              height: 50,
              backgroundColor: '#0dc4ae',
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => setIsVisible(true)}>
            <Text
              style={[
                {
                  paddingVertical: 9,
                  marginLeft: 5,
                  fontFamily: 'Poppins-Bold',
                  fontSize: 16,
                  color: '#fff',
                },
              ]}>
              {birthday === '' ? 'Fecha de nacimiento' : birthday}
            </Text>
          </TouchableOpacity>
        </View>

        <SwitchFuntion
          toggleSwitch={() => setIsBaptized(!isBaptized)}
          title={isBaptized ? 'Si estoy bautizado' : 'No estoy bautizado'}
          isEnabled={isBaptized}
          // setIsEnabled={setIsBaptized}
        />

        {/* Boton login */}
        <View style={loginStyles.buttonContainer}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={loginStyles.button}
            onPress={onLogin}>
            <Text style={loginStyles.buttonText}>Crear cuenta</Text>
          </TouchableOpacity>
        </View>

        {/* Crear una nueva cuenta */}
        <View style={loginStyles.newUserContainer}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.replace('LoginScreen')}>
            <Text style={loginStyles.buttonText}>Iniciar Sesión</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const loginStyles = StyleSheet.create({
  formContainer: {
    flex: 1,
    paddingHorizontal: 30,
    justifyContent: 'center',
    height: 600,
    marginBottom: 50,
  },
  title: {
    color: 'white',
    textAlign: 'center',
    fontSize: 27,
    fontFamily: 'Poppins-Bold',
  },
  label: {
    marginTop: 25,
    color: 'white',
    fontWeight: 'bold',
  },
  inputField: {
    fontSize: 17,
    fontFamily: 'Poppins-SemiBold',
    justifyContent: 'center',
    alignItems: 'center',
    top: 3,
  },

  buttonContainer: {
    alignItems: 'center',
    marginTop: 30,
  },
  button: {
    backgroundColor: '#0dc4ae',
    width: 200,
    height: 50,
    justifyContent: 'center',
    // alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
  },
  newUserContainer: {
    alignItems: 'flex-end',
    marginTop: 10,
  },
  buttonReturn: {
    position: 'absolute',
    top: 50,
    left: 20,
    borderWidth: 1,
    borderColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 100,
  },
  inputContainer: {
    borderRadius: 50,
    backgroundColor: 'white',
    // height: 50,
    // marginHorizontal: 5,
    paddingHorizontal: 10,
    // paddingVertical: 5,
    marginBottom: 15,
    // justifyContent: 'center',
    // alignItems: 'center',
    // flexDirection: 'row',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
});
