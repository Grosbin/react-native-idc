import {StackScreenProps} from '@react-navigation/stack';
import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {RootStackParams} from '../navigator/StackNavigator';
import {ListPrayers} from '../components/home/ListPrayers';
import {gbColor} from '../theme/themeGlobal';
import {ScrollView} from 'react-native-gesture-handler';
import {ButtonPressIcon} from '../components/ui/ButtonPressIcon';
import {ThemeContex} from '../context/ThemeContex';
import {ButtonPrevious} from '../components/ui/ButtonPrevious';

interface Props extends StackScreenProps<RootStackParams, 'DetailPrayers'> {}

export const DetailPrayers = ({route, navigation}: Props) => {
  const {
    theme: {colors},
  } = useContext(ThemeContex);

  const listPrayers = route.params;
  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      <ScrollView style={{width: '100%'}}>
        {/* <View style={styles.containerButton}>
          <ButtonPressIcon
            style={styles.button}
            PressFuntion={() => navigation.pop()}
            nameIcon={'caret-back'}
            colorIcon={colors.white}
          />
          <Text style={[styles.title, {color: colors.fontPrimary}]}>
            {listPrayers.title}
          </Text>
        </View> */}

        <ButtonPrevious
          navigation={navigation}
          title={listPrayers.title}
          sizeTitle={20}
        />

        {listPrayers.data.map(item => (
          <View
            key={item.id}
            style={[styles.containerText, {backgroundColor: colors.foco}]}>
            <Text style={[styles.text, {color: colors.fontPrimary}]}>
              {item.name}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  containerText: {
    height: 50,
    marginVertical: 6,
    marginHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,

    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 3,
    // },
    // shadowOpacity: 0.27,
    // shadowRadius: 4.65,

    // elevation: 6,

    shadowColor: '#020052',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,

    elevation: 2,
  },
  text: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
  },
});
