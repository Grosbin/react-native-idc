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
import {StatusBar} from 'react-native';
import {LogoIDC} from '../components/ui/LogoIDC';
import {CalendarModal} from '../components/CalendarModal';
import {SwitchFuntion} from '../components/ui/SwitchFuntion';
import {Background} from '../components/ui/Background';
import Icon from 'react-native-vector-icons/Ionicons';
import {AlertModal} from '../components/ui/AlertModal';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {AuthContext} from '../context/AuthContext';
import {LoginLoading} from '../components/ui/LoginLoading';

interface Props extends StackScreenProps<any, any> {}

export const RegisterScreen = ({navigation}: Props) => {
  const {
    theme: {colors},
  } = useContext(ThemeContext);

  const {addAlert, register, addUser} = useContext(AuthContext);

  const [birthday, setBirthday] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isBaptized, setIsBaptized] = useState(false);
  const [isVisiblePassword, setIsVisiblePassword] = useState(true);

  const {name, email, password, number_phone, onChange} = useForm({
    name: '',
    email: '',
    password: '',
    number_phone: '',
    birthday: birthday,
  });

  useEffect(() => {}, []);

  const onPasswordVisible = () => {
    setIsVisiblePassword(!isVisiblePassword);
  };

  const onLogin = () => {
    const userAuth = {
      email,
      password,
    };

    const user = {
      name,
      email,
      birthday,
      baptized: isBaptized,
      number_phone,
    };

    if (
      email.length === 0 ||
      password.length === 0 ||
      name.length === 0 ||
      birthday.length === 0 ||
      number_phone.length === 0
    ) {
      addAlert('Todos los campos son obligatorios');
      return;
    }

    register(userAuth);
    addUser(user);
  };
  return (
    <>
      <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
      <Background />
      <AlertModal />
      <LoginLoading message="Creando cuenta" />
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="always"
        keyboardDismissMode="on-drag">
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
        <View style={registerStyles.formContainer}>
          <LogoIDC />
          <Text style={registerStyles.title}>Registro</Text>
          <View style={registerStyles.inputContainer}>
            <TextInput
              cursorColor={colors.primary}
              placeholder="Nombre:"
              placeholderTextColor={'rgba(0,0,0,0.4)'}
              style={[registerStyles.inputField]}
              selectionColor="white"
              onChangeText={value => onChange(value, 'name')}
              value={name}
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>

          <View style={registerStyles.inputContainer}>
            <TextInput
              cursorColor={colors.primary}
              placeholder="Correo:"
              placeholderTextColor={'rgba(0,0,0,0.4)'}
              keyboardType="email-address"
              style={[registerStyles.inputField]}
              selectionColor="white"
              onChangeText={value => onChange(value, 'email')}
              value={email}
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>
          <View style={registerStyles.inputContainer}>
            <TextInput
              cursorColor={colors.primary}
              placeholder="N. Celular:"
              placeholderTextColor={'rgba(0,0,0,0.4)'}
              keyboardType="number-pad"
              style={[registerStyles.inputField]}
              selectionColor="white"
              onChangeText={value => onChange(value, 'number_phone')}
              value={number_phone}
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>

          <View style={[registerStyles.inputContainer]}>
            <TextInput
              cursorColor={colors.primary}
              placeholder="Contraseña:"
              placeholderTextColor={'rgba(0,0,0,0.4)'}
              secureTextEntry={isVisiblePassword}
              style={[registerStyles.inputField]}
              selectionColor="white"
              onChangeText={value => onChange(value, 'password')}
              value={password}
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
            title={isBaptized ? '¿Esta bautizado? Si' : '¿Esta bautizado? No'}
            isEnabled={isBaptized}
          />

          <View style={registerStyles.buttonContainer}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={registerStyles.button}
              onPress={onLogin}>
              <Text style={registerStyles.buttonText}>Crear cuenta</Text>
            </TouchableOpacity>
          </View>

          <View style={registerStyles.newUserContainer}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.replace('LoginScreen')}>
              <Text style={registerStyles.buttonText}>Iniciar Sesión</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </>
  );
};

const registerStyles = StyleSheet.create({
  formContainer: {
    flex: 1,
    paddingHorizontal: 30,
    justifyContent: 'center',
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
