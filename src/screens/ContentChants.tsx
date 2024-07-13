import {StackScreenProps} from '@react-navigation/stack';
import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {ButtonPrevious} from '../components/ui/ButtonPrevious';
import {ThemeContext} from '../context/ThemeContext';
import {RootStackParams} from '../navigator/StackNavigator';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import {useLocalStorage} from '../hooks/useLocalStorage';
import {ChantContext} from '../context/ChantContext';

interface Props extends StackScreenProps<RootStackParams, 'ContentChants'> {}

export const ContentChants = ({route, navigation}: Props) => {
  const {storeData, getData, removeData} = useLocalStorage();
  const {
    theme: {colors},
  } = useContext(ThemeContext);

  const {
    chantState: {chantsFav},
    addChant,
    removeChant,
  } = useContext(ChantContext);

  const {id, name, lyrics} = route.params;

  const [isFavorite, setIsFavorite] = useState(false);

  const setFavoriteChants = async () => {
    const dataFavorite = await getData('@favoritesChants');
    const dataFavoriteArray = dataFavorite.split(',');
    if (dataFavoriteArray.includes(id)) {
      setIsFavorite(true);
    }
  };
  useEffect(() => {
    setFavoriteChants();
  }, []);

  const setFavoriteChange = async () => {
    setIsFavorite(!isFavorite);
    const dataFavorite = await getData('@favoritesChants');
    const dataFavoriteArray = dataFavorite.split(',');

    if (!isFavorite) {
      if (!dataFavoriteArray.includes(id)) {
        const data = dataFavorite + ',' + id;
        storeData('@favoritesChants', data);
        addChant(data);
      }
    }

    if (isFavorite) {
      const dataFavoriteArrayFilter = dataFavoriteArray.filter(
        item => item !== id,
      );

      const data = dataFavoriteArrayFilter.join(',');
      storeData('@favoritesChants', data);
      removeChant(data);
    }
  };
  return (
    <View style={{flex: 1}}>
      <ButtonPrevious
        navigation={navigation}
        title={`${name}`}
        sizeTitle={18}
      />
      <TouchableOpacity
        onPress={setFavoriteChange}
        style={{
          position: 'absolute',
          right: 25,
          top: 18,
          width: 22,
          height: 22,
        }}>
        <Icon
          name={isFavorite ? 'star' : 'star-outline'}
          size={22}
          color={colors.fontPrimary}
        />
      </TouchableOpacity>
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
    marginHorizontal: 30,
    marginVertical: 10,
  },
  text: {
    fontFamily: 'Poppins-Medium',
    fontSize: 15,
  },
});
