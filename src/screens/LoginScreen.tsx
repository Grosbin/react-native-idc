import React, {useContext, useEffect} from 'react';
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

interface Props extends StackScreenProps<any, any> {}

export const LoginScreen = ({navigation}: Props) => {
  // const { signIn, errorMessage, removeError } = useContext( AuthContext );
  const {
    theme: {colors},
  } = useContext(ThemeContex);

  const {email, password, onChange} = useForm({
    email: '',
    password: '',
  });

  useEffect(() => {
    changeNavigationBarColor(colors.primary, false, true);
    SplashScreen.hide();
  }, []);

  // useEffect(() => {
  //     if( errorMessage.length === 0 ) return;

  //     Alert.alert( 'Login incorrecto', errorMessage,[{
  //         text: 'Ok',
  //         onPress: removeError
  //     }]);

  // }, [ errorMessage ])

  const onLogin = () => {
    console.log({email, password});
    Keyboard.dismiss();
    // signIn({ correo: email, password });
  };

  return (
    <>
      {/* Background */}
      {/* <Background /> */}
      <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
      <KeyboardAvoidingView
        style={{flex: 1, backgroundColor: colors.primary}}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={loginStyles.formContainer}>
          {/* Keyboard avoid view */}
          <LogoIDC />

          <Text style={loginStyles.title}>Iniciar Sesión</Text>

          {/* <Text style={loginStyles.label}>correo:</Text> */}
          <View style={loginStyles.inputContainer}>
            <TextInput
              placeholder="Correo:"
              //   placeholderTextColor="rgba(255,255,255,0.4)"
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
              //   placeholderTextColor="rgba(255,255,255,0.4)"
              //   underlineColorAndroid="white"
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

          {/* Boton login */}
          <View style={loginStyles.buttonContainer}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={loginStyles.button}
              onPress={onLogin}>
              <Text style={loginStyles.buttonText}>Entrar</Text>
            </TouchableOpacity>
          </View>

          {/* Crear una nueva cuenta */}
          <View style={loginStyles.newUserContainer}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.replace('RegisterScreen')}>
              <Text style={loginStyles.buttonText}>Nueva cuenta </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </>
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
