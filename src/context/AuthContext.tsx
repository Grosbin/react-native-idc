import {createContext, useReducer} from 'react';
import {authReducer} from '../reducer/authReducer';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

interface User {
  name: string;
  email: string;
  birthday: string;
  baptized: boolean;
  number_phone: string;
}

interface UserAUTH {
  email: string;
  password: string;
}

export interface AuthState {
  isLoggedIn: boolean;
  alertMessage: string;
  isAlert: boolean;
}

export interface AuthContextProps {
  authState: AuthState;
  removeAlert: () => void;
  login: (user: UserAUTH) => void;
  register: (user: UserAUTH) => void;
  logout: () => void;
  loggedIn: (logeed: boolean) => void;
  addUser: (user: User) => void;
  addAlert: (message: string) => void;
}

export const initialStateAuth: AuthState = {
  isLoggedIn: false,
  alertMessage: '',
  isAlert: false,
};

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({children}: any) => {
  const [authState, dispatch] = useReducer(authReducer, initialStateAuth);

  const login = async (user: UserAUTH) => {
    console.log('Entro a login');
    dispatch({type: 'isLoggedIn', payload: true});

    try {
      await auth().signInWithEmailAndPassword(user.email, user.password);
      console.log('Cuenta de usuario iniciada.');
    } catch (error: any) {
      if (error.code === 'auth/email-already-in-use') {
        console.log('Esa dirección de correo electrónico ya está en uso.');
        dispatch({
          type: 'addAlert',
          payload: 'Esa dirección de correo electrónico ya está en uso.',
        });
      }

      if (error.code === 'auth/invalid-email') {
        console.log('Esa dirección de correo electrónico no es válida.');
        dispatch({
          type: 'addAlert',
          payload: 'Esa dirección de correo electrónico no es válida.',
        });
      }

      if (error.code === 'auth/wrong-password') {
        console.log('Contraseña incorrecta.');
        dispatch({type: 'addAlert', payload: 'Contraseña incorrecta.'});
      }

      if (error.code === 'auth/too-many-requests') {
        console.log(
          'Demasiados intentos de inicio de sesión fallidos. Inténtalo de nuevo más tarde.',
        );
        dispatch({
          type: 'addAlert',
          payload:
            'Demasiados intentos fallidos. Inténtalo de nuevo más tarde.',
        });
      }
    }
    dispatch({type: 'isLoggedIn', payload: false});
  };

  const register = async (user: UserAUTH) => {
    console.log('Entro a register');
    dispatch({type: 'isLoggedIn', payload: true});

    try {
      await auth().createUserWithEmailAndPassword(user.email, user.password);
      console.log('Cuenta de usuario creada e iniciada.');
    } catch (error: any) {
      if (error.code === 'auth/email-already-in-use') {
        console.log('Esa dirección de correo electrónico ya está en uso.');
        dispatch({
          type: 'addAlert',
          payload: 'Esa dirección de correo electrónico ya está en uso.',
        });
      }

      if (error.code === 'auth/invalid-email') {
        console.log('Esa dirección de correo electrónico no es válida.');
        dispatch({
          type: 'addAlert',
          payload: 'Esa dirección de correo electrónico no es válida.',
        });
      }
    }
    dispatch({type: 'isLoggedIn', payload: false});
  };

  const logout = async () => {
    try {
      await auth().signOut();
      console.log('Cuenta de usuario cerrada.');
    } catch (error: any) {
      console.error(error);
      dispatch({type: 'addAlert', payload: 'Error al cerrar sesión.'});
    }
  };

  const addUser = async (user: User) => {
    try {
      const addUser = await firestore().collection('users').add(user);
      console.log('Usuario agregado', addUser);
    } catch (error) {
      console.log('Error', error);
      dispatch({type: 'addAlert', payload: 'Error al agregar usuario.'});
    }
  };

  const loggedIn = (logged: boolean) => {
    dispatch({type: 'isLoggedIn', payload: logged});
  };

  const addAlert = (message: string) => {
    dispatch({type: 'addAlert', payload: message});
  };

  const removeAlert = () => {
    dispatch({type: 'removeAlert'});
  };

  return (
    <AuthContext.Provider
      value={{
        authState,
        login,
        register,
        logout,
        loggedIn,
        addUser,
        addAlert,
        removeAlert,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
