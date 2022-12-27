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
    await firestore().collection('users').add(user);
  } catch (error) {
    Alert.alert('Error', 'No se pudo agregar el usuario');
  }
};
