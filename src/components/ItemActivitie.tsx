import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {gbColor} from '../theme/themeGlobal';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  title: string;
  day: string;
  hour: string;
}

export const ItemActivitie = ({title, day, hour}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.hourContainer}>
        <Icon name="time" size={20} color={gbColor.foco} />
        <Text style={styles.hour}>{hour}</Text>
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.day}>{day}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    height: 100,
    width: 200,
    backgroundColor: gbColor.foco,
    borderRadius: 10,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  title: {
    fontFamily: 'Poppins-ExtraBold',
    fontSize: 18,
    top: 10,
    left: 10,
    color: gbColor.primary,
  },

  day: {
    marginHorizontal: 10,
    fontFamily: 'Poppins-Bold',
    fontSize: 14,
    marginBottom: -5,
    color: gbColor.fontPrimary,
  },
  hourContainer: {
    flexDirection: 'row',
    width: 90,
    height: 40,
    borderRadius: 10,
    backgroundColor: gbColor.blueSecundary,
    position: 'absolute',
    bottom: 10,
    right: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  hour: {
    color: 'white',
    fontFamily: 'Poppins-ExtraBold',
    alignSelf: 'center',
    textAlign: 'center',
    paddingTop: 3,
  },
  button: {
    position: 'absolute',
    bottom: 15,
    left: 10,
    width: 120,
    height: 40,
    backgroundColor: gbColor.primary,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    fontFamily: 'Poppins-ExtraBold',
    fontSize: 15,
    paddingTop: 3,
    color: 'white',
    alignSelf: 'center',
  },
});
