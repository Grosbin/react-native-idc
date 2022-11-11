import {useNavigation} from '@react-navigation/native';
import {
  StackNavigationProp,
  StackScreenProps,
} from '@react-navigation/stack/lib/typescript/src/types';
import React, {useContext} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {ThemeContex} from '../../context/ThemeContex';
import {RootStackParams} from '../../navigator/StackNavigator';
import {gbColor} from '../../theme/themeGlobal';

interface Props {
  listPrayers: {id: number; name: string}[];
  titleDetail: string;
}

export const ListPrayers = ({listPrayers, titleDetail}: Props) => {
  const navigate = useNavigation<StackNavigationProp<RootStackParams>>();
  const {
    theme: {colors},
  } = useContext(ThemeContex);
  const paramers = {title: titleDetail, data: listPrayers};
  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      <View>
        {listPrayers.map(item => (
          // <View style={styles.containerText} key={item.id}>
          <Text
            key={item.id}
            style={[styles.name, {color: colors.fontPrimary}]}>
            {item.name}
          </Text>
          // </View>
        ))}
      </View>
      <View>
        <TouchableOpacity
          onPress={() => navigate.navigate('DetailPrayers', paramers)}
          activeOpacity={0.8}
          style={{
            width: 90,
            height: 35,
            borderRadius: 10,
            backgroundColor: colors.green,

            marginTop: 5,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontFamily: 'Poppins-Bold',
              color: colors.background,
              fontSize: 12,
              marginLeft: 5,
              paddingTop: 2,
            }}>
            Ver todas
          </Text>
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
    // color: gbColor.fontPrimary,
  },
});
