import React, {useContext} from 'react';
import {ActivityIndicator, Modal, StyleSheet, Text, View} from 'react-native';
import {AuthContext} from '../../context/AuthContext';

interface Props {
  message: string;
}

export const LoginLoading = ({message}: Props) => {
  const {
    authState: {isLoggedIn},
  } = useContext(AuthContext);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent
        presentationStyle="overFullScreen"
        visible={isLoggedIn}>
        <View style={styles.modalView}>
          <Text style={[styles.modalText]}>{message}</Text>
          <ActivityIndicator size={20} color="#3b46f1" />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    marginHorizontal: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    margin: 10,
    borderRadius: 10,
    padding: 10,
  },

  buttonClose: {
    width: 100,
    backgroundColor: '#3b46f1',
  },
  textStyle: {
    color: 'white',
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
  },
  modalText: {
    textAlign: 'center',
    fontFamily: 'Poppins-SemiBold',
    color: '#020052',
  },
});
