import React, {useContext} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {gbColor} from '../theme/themeGlobal';
import Icon from 'react-native-vector-icons/Ionicons';
import {ThemeContex} from '../context/ThemeContex';

interface Props {
  title: string;
  day: string;
  hour: string;
}

export const ItemActivitie = ({title, day, hour}: Props) => {
  const {
    theme: {colors},
  } = useContext(ThemeContex);
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
    // marginVertical: 8,
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
    // width: 90,
    // height: 40,
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
    // marginRight: 10,
  },
  // button: {
  //   position: 'absolute',
  //   bottom: 15,
  //   left: 10,
  //   width: 120,
  //   height: 40,
  //   backgroundColor: gbColor.primary,
  //   borderRadius: 10,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  // textButton: {
  //   fontFamily: 'Poppins-ExtraBold',
  //   fontSize: 15,
  //   paddingTop: 3,
  //   color: 'white',
  //   alignSelf: 'center',
  // },
});
