import React, {useContext, useEffect, useState} from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {useForm} from '../hooks/useForm';
import {ThemeContex} from '../context/ThemeContex';
import {StatusBar} from 'react-native';
import {LogoIDC} from '../components/ui/LogoIDC';
import {CalendarModal} from '../components/CalendarModal';
import {SwitchFuntion} from '../components/ui/SwitchFuntion';
import {Background} from '../components/ui/Background';
import {register} from '../actions/auth';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import {AlertModal} from '../components/ui/AlertModal';
import {addUser} from '../actions/user';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

interface Props extends StackScreenProps<any, any> {}

export const RegisterScreen = ({navigation}: Props) => {
  const {
    theme: {colors},
  } = useContext(ThemeContex);

  const [birthday, setBirthday] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isBaptized, setIsBaptized] = useState(false);
  const [isVisiblePassword, setIsVisiblePassword] = useState(true);
  const [isAlertModal, setIsAlertModal] = useState(false);

  const {name, email, password, onChange} = useForm({
    name: '',
    email: '',
    password: '',
    birthday: birthday,
  });

  useEffect(() => {}, []);

  const onPasswordVisible = () => {
    setIsVisiblePassword(!isVisiblePassword);
    // Keyboard.dismiss();
  };

  const onLogin = () => {
    const userAuth = {
      email: email,
      password: password,
    };

    const user = {
      name: name,
      email: email,
      birthday: birthday,
      baptized: isBaptized,
    };

    if (
      email.length === 0 ||
      password.length === 0 ||
      name.length === 0 ||
      birthday.length === 0
    ) {
      setIsAlertModal(true);
      return;
    }
    register(userAuth);
    addUser(user);
  };
  return (
    <>
      <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
      <Background />
      <AlertModal
        isVisible={isAlertModal}
        setIsVisible={setIsAlertModal}
        title="Tiene que llenar todos los campos"
      />
      {/* <ScrollView> */}
      <KeyboardAwareScrollView>
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
          <LogoIDC />

          <Text style={loginStyles.title}>Registro</Text>

          <View style={loginStyles.inputContainer}>
            <TextInput
              cursorColor={colors.primary}
              placeholder="Nombre:"
              placeholderTextColor={'rgba(0,0,0,0.4)'}
              style={[loginStyles.inputField]}
              selectionColor="white"
              onChangeText={value => onChange(value, 'name')}
              value={name}
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>

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
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>

          <View style={[loginStyles.inputContainer]}>
            <TextInput
              cursorColor={colors.primary}
              placeholder="Contraseña:"
              placeholderTextColor={'rgba(0,0,0,0.4)'}
              secureTextEntry={isVisiblePassword}
              style={[loginStyles.inputField]}
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
            title={isBaptized ? 'Si estoy bautizado' : 'No estoy bautizado'}
            isEnabled={isBaptized}
          />

          <View style={loginStyles.buttonContainer}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={loginStyles.button}
              onPress={onLogin}>
              <Text style={loginStyles.buttonText}>Crear cuenta</Text>
            </TouchableOpacity>
          </View>

          <View style={loginStyles.newUserContainer}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.replace('LoginScreen')}>
              <Text style={loginStyles.buttonText}>Iniciar Sesión</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
      {/* </ScrollView> */}
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
