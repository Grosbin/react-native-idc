import firestore from '@react-native-firebase/firestore';
import {Alert} from 'react-native';

interface User {
  name: string;
  email: string;
  birthday: string;
  baptized: boolean;
}
export const addUser = async (user: User) => {
  try {
    const addUser = await firestore().collection('users').add(user);
    console.log('Usuario agregado', addUser);
  } catch (error) {
    console.log('Error', error);
    Alert.alert('Error', 'No se pudo agregar el usuario');
  }
};
