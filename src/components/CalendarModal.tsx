import React from 'react';
import {Modal, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import DatePicker from 'react-native-modern-datepicker-es';

interface Props {
  isVisible: boolean;
  setIsVisible: (value: boolean) => void;
  setDate: (date: string) => void;
  date: string;
}

export const CalendarModal = ({
  isVisible,
  setDate,
  setIsVisible,
  date,
}: Props) => {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent
        presentationStyle="overFullScreen"
        onRequestClose={() => setIsVisible(false)}
        visible={isVisible}>
        <View style={styles.modalView}>
          <View style={{justifyContent: 'center', paddingTop: 10}}>
            <Text
              style={{fontSize: 20, fontWeight: 'bold', color: '#0dc4ae'}}>{`${
              date
                ? `${date[8]}${date[9]}/${date[5]}${date[6]}/${date[0]}${date[1]}${date[2]}${date[3]}`
                : 'No ha seleccionado'
            }`}</Text>
          </View>
          <DatePicker
            current={'1990-01-01'}
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
