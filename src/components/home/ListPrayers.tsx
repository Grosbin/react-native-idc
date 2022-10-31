import {useNavigation} from '@react-navigation/native';
import {
  StackNavigationProp,
  StackScreenProps,
} from '@react-navigation/stack/lib/typescript/src/types';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {RootStackParams} from '../../navigator/StackNavigator';
import {gbColor} from '../../theme/themeGlobal';

interface Props {
  listPrayers: {id: number; name: string}[];
}

export const ListPrayers = ({listPrayers}: Props) => {
  const navigate = useNavigation<StackNavigationProp<RootStackParams>>();
  return (
    <View style={styles.container}>
      <View>
        {listPrayers.map(item => (
          // <View style={styles.containerText} key={item.id}>
          <Text key={item.id} style={styles.name}>
            {item.name}
          </Text>
          // </View>
        ))}
      </View>
      <View>
        <TouchableOpacity
          onPress={() => navigate.navigate('DetailPrayers')}
          activeOpacity={0.8}
          style={{
            width: 90,
            height: 35,
            borderRadius: 10,
            backgroundColor: gbColor.green,
            // marginRight: 10,
            marginTop: 5,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontFamily: 'Poppins-Bold',
              color: gbColor.foco,
              fontSize: 12,
              marginLeft: 5,
              paddingTop: 2,
            }}>
            Ver todas
          </Text>
          <Icon name="chevron-forward" size={19} color={gbColor.foco} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // width: 200,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginVertical: 5,
    backgroundColor: gbColor.foco,
    borderRadius: 10,
    padding: 10,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  containerText: {
    backgroundColor: gbColor.foco,
    borderRadius: 12,
    marginVertical: 4,
    padding: 10,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },

  name: {
    fontFamily: 'Poppins-Medium',
    fontSize: 15,
    color: gbColor.fontPrimary,
  },
});
