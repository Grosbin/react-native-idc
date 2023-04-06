import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {ThemeContext} from '../context/ThemeContext';

interface Props {
  title: string;
  day: string;
  hour: string;
}

export const ItemActivitie = ({title, day, hour}: Props) => {
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  return (
    <View style={[styles.container, {backgroundColor: colors.primary}]}>
      <View style={[styles.hourContainer]}>
        <Icon name="time" size={27} color={colors.green} />
        <Text style={[styles.hour, {color: colors.white}]}>{hour}</Text>
      </View>
      <View style={{width: 200}}>
        <Text style={[styles.title, {color: colors.white}]}>{title}</Text>
      </View>
      <Text style={[styles.day, {color: colors.white, paddingTop: 5}]}>
        {day}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    height: 120,
    width: 230,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,

    elevation: 2,
  },
  title: {
    fontFamily: 'Poppins-ExtraBold',
    fontSize: 19,
    top: 10,
    left: 10,
  },

  day: {
    marginHorizontal: 10,
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    marginBottom: -5,
  },
  hourContainer: {
    flexDirection: 'row',
    borderRadius: 10,

    position: 'absolute',
    bottom: 10,
    right: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  hour: {
    fontSize: 18,
    fontFamily: 'Poppins-ExtraBold',
    alignSelf: 'center',
    textAlign: 'center',
    paddingTop: 3,
  },
});
