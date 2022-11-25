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
import {Background} from '../components/ui/Background';
import {login} from '../actions/auth';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import {AlertModal} from '../components/ui/AlertModal';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

interface Props extends StackScreenProps<any, any> {}

export const LoginScreen = ({navigation}: Props) => {
  const {
    theme: {colors},
  } = useContext(ThemeContex);

  const {email, password, onChange} = useForm({
    email: '',
    password: '',
  });

  const [isVisiblePassword, setIsVisiblePassword] = useState(true);
  const [isAlertModal, setIsAlertModal] = useState(false);

  useEffect(() => {
    changeNavigationBarColor(colors.primary, false, true);
    SplashScreen.hide();
  }, []);

  const onPasswordVisible = () => {
    setIsVisiblePassword(!isVisiblePassword);
  };

  const onLogin = async () => {
    console.log({email, password});
    if (email.length === 0 || password.length === 0) {
      setIsAlertModal(true);
      return;
    }
    login(email, password);
  };

  return (
    <>
      <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
      <Background />
      <AlertModal
        isVisible={isAlertModal}
        setIsVisible={setIsAlertModal}
        title="Correo o contraseña incorrectos"
      />
      <KeyboardAwareScrollView>
        {/* <ScrollView> */}
        <View style={loginStyles.formContainer}>
          {/* Keyboard avoid view */}
          <LogoIDC />

          <Text style={loginStyles.title}>Iniciar Sesión</Text>

          {/* <Text style={loginStyles.label}>correo:</Text> */}
          <View style={loginStyles.inputContainer}>
            <TextInput
              cursorColor={colors.primary}
              placeholder="Correo:"
              placeholderTextColor={'rgba(0,0,0,0.4)'}
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

          <View style={loginStyles.inputContainer}>
            <TextInput
              cursorColor={colors.primary}
              placeholder="Contraseña:"
              placeholderTextColor={'rgba(0,0,0,0.4)'}
              secureTextEntry={isVisiblePassword}
              style={[loginStyles.inputField]}
              selectionColor="white"
              onChangeText={value => onChange(value, 'password')}
              value={password}
              onSubmitEditing={onLogin}
              autoCapitalize="none"
              autoCorrect={false}
            />
            <Icon
              name={isVisiblePassword ? 'eye-off-outline' : 'eye-outline'}
              size={25}
              style={{position: 'absolute', right: 15, top: 12}}
              onPress={onPasswordVisible}
              color={'rgba(0,0,0,0.4)'}
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
        {/* </ScrollView> */}
      </KeyboardAwareScrollView>
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
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#020052',
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
    paddingHorizontal: 12,
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
