import React from 'react';
import {Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface Props {
  isVisible: boolean;
  setIsVisible: (value: boolean) => void;
  title: string;
}

export const AlertModal = ({isVisible, setIsVisible, title}: Props) => {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent
        presentationStyle="overFullScreen"
        onRequestClose={() => setIsVisible(false)}
        visible={isVisible}>
        <View style={styles.modalView}>
          <Text style={[styles.modalText]}>{title}</Text>
          <TouchableOpacity
            activeOpacity={0.8}
            style={[styles.button, styles.buttonClose]}
            onPress={() => setIsVisible(!isVisible)}>
            <Text style={styles.textStyle}>Cerrar</Text>
          </TouchableOpacity>
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
    padding: 20,
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
    marginBottom: 50,
    textAlign: 'center',
    fontFamily: 'Poppins-SemiBold',
    color: '#020052',
  },
});
