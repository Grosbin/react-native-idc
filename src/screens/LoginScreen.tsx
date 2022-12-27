import React, {useContext, useEffect, useState} from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {useForm} from '../hooks/useForm';
import {ThemeContext} from '../context/ThemeContext';
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import SplashScreen from 'react-native-splash-screen';
import {StatusBar} from 'react-native';
import {LogoIDC} from '../components/ui/LogoIDC';
import {Background} from '../components/ui/Background';
import Icon from 'react-native-vector-icons/Ionicons';
import {AlertModal} from '../components/ui/AlertModal';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {AuthContext} from '../context/AuthContext';
import {LoginLoading} from '../components/ui/LoginLoading';

interface Props extends StackScreenProps<any, any> {}

export const LoginScreen = ({navigation}: Props) => {
  const {
    theme: {colors},
  } = useContext(ThemeContext);

  const {addAlert, login} = useContext(AuthContext);

  const {email, password, onChange} = useForm({
    email: '',
    password: '',
  });

  const [isVisiblePassword, setIsVisiblePassword] = useState(true);

  useEffect(() => {
    changeNavigationBarColor(colors.primary, false, true);
    SplashScreen.hide();
  }, []);

  const onPasswordVisible = () => {
    setIsVisiblePassword(!isVisiblePassword);
  };

  const onLogin = async () => {
    if (email.length === 0 || password.length === 0) {
      addAlert('Todos los campos son obligatorios');
      return;
    }
    login({email, password});
  };

  return (
    <>
      <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
      <Background />
      <AlertModal />
      <LoginLoading message="Iniciando Sesión" />
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="always"
        keyboardDismissMode="on-drag">
        <View style={loginStyles.formContainer}>
          <LogoIDC />
          <Text style={loginStyles.title}>Iniciar Sesión</Text>
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
          <View style={loginStyles.linkUserContainer}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.replace('ResetPassword')}>
              <Text style={loginStyles.linkText}>Olvide mi contraseña </Text>
            </TouchableOpacity>
          </View>
          <View style={loginStyles.buttonContainer}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={loginStyles.button}
              onPress={onLogin}>
              <Text style={loginStyles.buttonText}>Entrar</Text>
            </TouchableOpacity>
          </View>
          <View style={{alignItems: 'flex-end', paddingTop: 20}}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.replace('RegisterScreen')}>
              <Text style={loginStyles.buttonText}>Registrarse</Text>
            </TouchableOpacity>
          </View>
        </View>
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
    marginTop: 20,
  },
  button: {
    backgroundColor: '#0dc4ae',
    width: '100%',
    height: 50,
    justifyContent: 'center',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
  },
  linkUserContainer: {
    alignItems: 'flex-end',
  },
  linkText: {
    fontSize: 15,
    fontFamily: 'Poppins-Medium',
    color: 'white',
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
    paddingHorizontal: 12,
    marginBottom: 15,

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
