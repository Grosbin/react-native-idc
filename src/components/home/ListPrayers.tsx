import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack/lib/typescript/src/types';
import React, {useContext} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {ThemeContext} from '../../context/ThemeContext';
import {RootStackParams} from '../../navigator/StackNavigator';

interface Props {
  listPrayers: string[];
  titleDetail: string;
}

export const ListPrayers = ({listPrayers, titleDetail}: Props) => {
  const navigate = useNavigation<StackNavigationProp<RootStackParams>>();
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  const paramers = {title: titleDetail, data: listPrayers};
  const list = listPrayers.slice(0, 5);
  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      <View>
        {list.map((item, i) => (
          <Text key={i} style={[styles.name, {color: colors.fontPrimary}]}>
            {item}
          </Text>
        ))}
      </View>
      <View>
        <TouchableOpacity
          onPress={() => navigate.navigate('DetailPrayers', paramers)}
          activeOpacity={0.8}
          style={{
            width: 45,
            height: 35,
            borderRadius: 10,
            backgroundColor: colors.blueSecondary,

            marginTop: 5,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}>
          <Icon name="chevron-forward" size={19} color={colors.background} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginVertical: 5,

    borderRadius: 10,
    padding: 10,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,

    elevation: 2,
  },

  name: {
    fontFamily: 'Poppins-Medium',
    fontSize: 15,
  },
});
