import auth from '@react-native-firebase/auth';

import {Alert} from 'react-native';

interface UserAUTH {
  email: string;
  password: string;
}

export const register = async ({email, password}: UserAUTH) => {
  try {
    await auth().createUserWithEmailAndPassword(email, password);
  } catch (error: any) {
    if (error.code === 'auth/email-already-in-use') {
      return Alert.alert(
        'Error',
        'Esa dirección de correo electrónico ya está en uso.',
      );
    }

    if (error.code === 'auth/invalid-email') {
      return Alert.alert(
        'Error',
        'Esa dirección de correo electrónico no es válida.',
      );
    }
  }
};

export const login = async (email: string, password: string) => {
  try {
    await auth().signInWithEmailAndPassword(email, password);
  } catch (error: any) {
    if (error.code === 'auth/email-already-in-use') {
      return Alert.alert('Esa dirección de correo electrónico ya está en uso.');
    }

    if (error.code === 'auth/invalid-email') {
      return Alert.alert(
        'Error',
        'Esa dirección de correo electrónico no es válida.',
      );
    }

    if (error.code === 'auth/wrong-password') {
      return Alert.alert('Error', 'Contraseña incorrecta.');
    }

    if (error.code === 'auth/too-many-requests') {
      return Alert.alert(
        'Error',
        'El acceso a esta cuenta se ha desactivado temporalmente debido a muchos intentos fallidos de inicio de sesión. Puede hablar con el ministerio de medios o puede volver a intentarlo más tarde.',
      );
    }
  }
};

export const logout = async () => {
  try {
    await auth().signOut();
  } catch (error: any) {
    console.error(error);
  }
};
