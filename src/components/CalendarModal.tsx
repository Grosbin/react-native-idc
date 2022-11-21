import React, {useState, useEffect} from 'react';
import {
  Alert,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import DatePicker, {getFormatedDate} from 'react-native-modern-datepicker-es';

interface Props {
  isVisible: boolean;
  setIsVisible: (value: boolean) => void;
  setDate: (date: string) => void;
}

export const CalendarModal = ({isVisible, setDate, setIsVisible}: Props) => {
  return (
    <View style={styles.centeredView}>
      <Modal
        // statusBarTranslucent={true}
        animationType="fade"
        transparent
        presentationStyle="overFullScreen"
        onRequestClose={() => setIsVisible(false)}
        visible={isVisible}>
        {/* <View style={styles.centeredView}> */}
        <View style={styles.modalView}>
          <DatePicker
            // dateFormat="dd/MM/yyyy"
            onSelectedChange={date => setDate(date)}
            options={{
              selectedTextColor: '#fff',
              mainColor: '#3b46f1',
            }}
            mode="calendar"
            style={{borderRadius: 10}}
          />

          <TouchableOpacity
            activeOpacity={0.8}
            style={[styles.button, styles.buttonClose]}
            onPress={() => setIsVisible(!isVisible)}>
            <Text style={styles.textStyle}>Cerrar</Text>
          </TouchableOpacity>
        </View>
        {/* </View> */}
      </Modal>
      {/* <TouchableOpacity
        activeOpacity={0.8}
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Show Modal</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 100,
    // position: 'absolute',
    // zIndex: 999,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    height: 420,
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
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
