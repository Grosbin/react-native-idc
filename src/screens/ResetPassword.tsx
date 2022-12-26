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
import {ThemeContex} from '../context/ThemeContex';
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import SplashScreen from 'react-native-splash-screen';

import {StatusBar} from 'react-native';
import {LogoIDC} from '../components/ui/LogoIDC';
import {Background} from '../components/ui/Background';

import {AlertModal} from '../components/ui/AlertModal';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {AuthContext} from '../context/AuthContext';
import {LoginLoading} from '../components/ui/LoginLoading';

interface Props extends StackScreenProps<any, any> {}

export const ResetPassword = ({navigation}: Props) => {
  const {
    theme: {colors},
  } = useContext(ThemeContex);

  const {addAlert, resetPassword} = useContext(AuthContext);

  const {email, onChange} = useForm({
    email: '',
  });

  useEffect(() => {
    changeNavigationBarColor(colors.primary, false, true);
    SplashScreen.hide();
  }, []);

  const onResetPassword = async () => {
    console.log({email});
    if (email.length === 0) {
      addAlert('El correo es requerido');
      return;
    }

    resetPassword(email);
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
        <View style={resetStyles.formContainer}>
          <LogoIDC />
          <Text style={resetStyles.title}></Text>
          <View style={resetStyles.inputContainer}>
            <TextInput
              cursorColor={colors.primary}
              placeholder="Correo:"
              placeholderTextColor={'rgba(0,0,0,0.4)'}
              keyboardType="email-address"
              style={[resetStyles.inputField]}
              selectionColor="white"
              onChangeText={value => onChange(value, 'email')}
              value={email}
              onSubmitEditing={onResetPassword}
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>
          <View style={resetStyles.buttonContainer}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={resetStyles.button}
              onPress={onResetPassword}>
              <Text style={resetStyles.buttonText}>Enviar</Text>
            </TouchableOpacity>
          </View>
          <View style={{alignItems: 'flex-end', paddingTop: 20}}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.replace('LoginScreen')}>
              <Text style={resetStyles.buttonText}>Iniciar Sesión</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </>
  );
};

const resetStyles = StyleSheet.create({
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
    marginTop: 5,
  },
  button: {
    backgroundColor: '#0dc4ae',
    width: '100%',
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
  linkUserContainer: {
    alignItems: 'flex-end',
    // marginTop: 5,
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
