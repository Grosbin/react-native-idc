import {StackScreenProps} from '@react-navigation/stack';
import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {RootStackParams} from '../navigator/StackNavigator';
import {ScrollView} from 'react-native-gesture-handler';
import {ThemeContext} from '../context/ThemeContext';
import {ButtonPrevious} from '../components/ui/ButtonPrevious';

interface Props extends StackScreenProps<RootStackParams, 'DetailPrayers'> {}

export const DetailPrayers = ({route, navigation}: Props) => {
  const {
    theme: {colors},
  } = useContext(ThemeContext);

  const listPrayers = route.params;
  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      <ScrollView style={{width: '100%'}}>
        <ButtonPrevious
          navigation={navigation}
          title={listPrayers.title}
          sizeTitle={20}
        />

        {listPrayers.data.map((item, i) => (
          <View
            key={i}
            style={[styles.containerText, {backgroundColor: colors.foco}]}>
            <Text style={[styles.text, {color: colors.fontPrimary}]}>
              {item}
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

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  text: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
  },
});
