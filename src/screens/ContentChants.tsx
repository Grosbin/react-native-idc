import {StackScreenProps} from '@react-navigation/stack';
import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ButtonPrevious} from '../components/ui/ButtonPrevious';
import {ThemeContex} from '../context/ThemeContex';
import {RootStackParams} from '../navigator/StackNavigator';
import {ScrollView} from 'react-native-gesture-handler';

interface Props extends StackScreenProps<RootStackParams, 'ContentChants'> {}

export const ContentChants = ({route, navigation}: Props) => {
  const {
    theme: {colors},
  } = useContext(ThemeContex);
  const {id, name, lyrics} = route.params;
  return (
    <View style={{flex: 1}}>
      <ButtonPrevious
        navigation={navigation}
        title={`${name}`}
        sizeTitle={20}
      />
      <ScrollView showsVerticalScrollIndicator={true}>
        {lyrics.map((lyric, index) => (
          <View key={index} style={[styles.container]}>
            <Text style={[styles.text, {color: colors.fontPrimary}]}>
              {lyric}
            </Text>
          </View>
        ))}
        <View style={{marginBottom: 100}}></View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 50,
    marginVertical: 10,
  },
  text: {
    fontFamily: 'Poppins-Medium',
    fontSize: 15,
  },
});
