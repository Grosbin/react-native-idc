import React, {useContext, useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {SearchInput} from '../components/chants/SearchInput';
import {chants} from '../data/chant/chants';
import {ItemChants} from '../components/chants/ItemChants';
import {useLocalStorage} from '../hooks/useLocalStorage';
import {ChantContext} from '../context/ChantContext';
import {ThemeContext} from '../context/ThemeContext';
import {ButtonChants} from '../components/chants/ButtonChants';
import {FloatButtonChants} from '../components/chants/FloatButtonChants';
import {set} from 'react-native-reanimated';

export const ChantsScreen = () => {
  const {getData} = useLocalStorage();
  const {
    theme: {colors},
  } = useContext(ThemeContext);

  const [term, setTerm] = useState('');
  const [chantsFiltered, setChantsFiltered] = useState<any>([]);
  const [chantsFavorites, setChantsFavorites] = useState(true);
  const [chantsAll, setChantsAll] = useState(false);
  // const [countChant, setCountChant] = useState(50);
  // const [chantsAllData, setChantsAllData] = useState<any>([
  //   ...chants.slice(0, 50),
  // ]);
  const [startChant, setStartChant] = useState(350);
  const [countChant, setCountChant] = useState(0);
  const [chantsAllData, setChantsAllData] = useState([...chants.slice(0, 40)]);

  const {
    chantState: {chantsFav},
    addChantArray,
  } = useContext(ChantContext);

  const getFavoritesChants = async () => {
    const favoritesChantsData = await getData('@favoritesChants');
    const favoritesChantsArray = favoritesChantsData.split(',');

    const favoritesChantsArrayData = chants.filter(item => {
      if (favoritesChantsArray.includes(item.id)) {
        return item;
      }
    });

    setChantsFiltered(favoritesChantsArrayData);
    addChantArray(favoritesChantsArray);
  };

  useEffect(() => {
    getFavoritesChants();
  }, []);

  useEffect(() => {
    getFavoritesChants();
  }, [chantsFav]);

  useEffect(() => {
    if (term.length === 0) {
      getFavoritesChants();
    }

    if (isNaN(Number(term))) {
      setChantsFiltered(
        chants.filter(
          chant => {
            const nameClear = clearText(chant.name);
            const termClear = clearText(term);
            return nameClear.toLowerCase().includes(termClear.toLowerCase());
          },
          // chant.name.toLowerCase().includes(term.toLowerCase()),
        ),
      );
    } else {
      const chantById = chants.find(chant => chant.id === term);
      setChantsFiltered(chantById ? [chantById] : []);
    }
  }, [term]);

  // useEffect(() => {
  //   console.log('Cambio la data');
  // }, [chantsAllData]);

  const clearText = (texto: string) => {
    return texto
      .toLowerCase() // Convertir todo a minúsculas
      .replace(/[áäàâ]/g, 'a') // Reemplazar acentos a -> a
      .replace(/[éëèê]/g, 'e') // Reemplazar acentos e -> e
      .replace(/[íïìî]/g, 'i') // Reemplazar acentos i -> i
      .replace(/[óöòô]/g, 'o') // Reemplazar acentos o -> o
      .replace(/[úüùû]/g, 'u') // Reemplazar acentos u -> u
      .replace(/[^a-zA-Z0-9 ]/g, ''); // Eliminar caracteres especiales excepto letras y números
  };

  const onNextChant = () => {
    const startIndex = countChant + 40;
    setStartChant(startIndex);
    const endIndex = startIndex + 40;
    console.log(startIndex, 'Siguiente', endIndex);
    if (endIndex <= chants.length) {
      console.log(startIndex, 'if siguiente', endIndex);
      const slicedData = chants.slice(startIndex, endIndex);
      setCountChant(startIndex);
      setChantsAllData([...slicedData]);
    } else {
      // Has llegado al final, vuelve al inicio
      const startIndex = 0;
      const endIndex = startIndex + 40;
      const slicedData = chants.slice(startIndex, endIndex);
      setCountChant(startIndex);
      setChantsAllData([...slicedData]);
    }
  };

  const onPrevChant = () => {
    const startIndex = Math.max(countChant - 40, 0);
    setStartChant(startChant);
    let endIndex = startIndex + 40; // Define endIndex aquí

    console.log(startIndex, 'Anterior', endIndex);
    console.log('startChant', startChant);

    if (startIndex === 0) {
      setStartChant(350);
    }

    if (startChant === 350) {
      // Estás al inicio, ve al final de la lista completa
      console.log('entro al if anterior');
      const lastIndex = chants.length - 1;
      endIndex = lastIndex; // Asigna el valor correcto a endIndex
      const slicedData = chants.slice(lastIndex - 40, lastIndex + 1);
      setCountChant(lastIndex - 40);
      setChantsAllData([...slicedData]);
      setStartChant(lastIndex - 40);
    } else {
      const slicedData = chants.slice(startIndex, endIndex);
      setCountChant(startIndex);
      setChantsAllData([...slicedData]);
    }
  };

  const renderItem = ({item}) => <ItemChants {...item} />;
  const keyExtractor = (item, index) => index + item.toString();
  const listFooterComponent = () => <View style={{marginBottom: 120}}></View>;
  const ITEM_HEIGHT = 55;
  const getItemLayout = (data, index) => {
    return {
      length: ITEM_HEIGHT,
      offset: ITEM_HEIGHT * data.length,
      index,
    };
  };

  return (
    <SafeAreaView style={[styles.container]}>
      <View
        style={{
          width: '100%',
          height: 35,
          // backgroundColor: 'red',
          // marginTop: 10,
          marginBottom: 10,
          flexDirection: 'row',
          justifyContent: 'flex-start',
        }}>
        <ButtonChants
          text="Favoritos"
          onPress={() => {
            setChantsFavorites(true);
            setChantsAll(false);
          }}
          styleButton={styles.styleButton}
          styleText={styles.styleButtonText}
          icon="star"
          colorIcon={colors.background}
        />
        <ButtonChants
          text="Todos"
          onPress={() => {
            setChantsFavorites(false);
            setChantsAll(true);
          }}
          styleButton={styles.styleButton}
          styleText={styles.styleButtonText}
          icon="list"
          colorIcon={colors.background}
        />
      </View>
      {chantsFavorites && <SearchInput onChange={setTerm} />}

      {chantsAll && (
        <FlatList
          keyboardShouldPersistTaps="always"
          keyboardDismissMode="on-drag"
          data={chantsAllData}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          getItemLayout={getItemLayout}
          onEndReachedThreshold={0.4}
          showsVerticalScrollIndicator={false}
          style={{marginTop: 10}}
          ListFooterComponent={listFooterComponent}
          // onScroll={e => {
          //   console.log(e.nativeEvent.contentOffset.y);
          //   if (
          //     e.nativeEvent.contentOffset.y >= 0 &&
          //     e.nativeEvent.contentOffset.y <= 2000
          //   ) {
          //     setChantsAllData([...chants.slice(0, 50)]);
          //     console.log('Tamaño', chantsAllData.length);
          //   }
          //   if (
          //     e.nativeEvent.contentOffset.y >= 2000 &&
          //     e.nativeEvent.contentOffset.y <= 4000
          //   ) {
          //     setChantsAllData([...chants.slice(0, 100)]);
          //     console.log('Tamaño', chantsAllData.length);
          //   }
          //   if (
          //     e.nativeEvent.contentOffset.y >= 4000 &&
          //     e.nativeEvent.contentOffset.y <= 6000
          //   ) {
          //     setChantsAllData([...chants.slice(0, 150)]);
          //     console.log('Tamaño', chantsAllData.length);
          //   }
          //   if (
          //     e.nativeEvent.contentOffset.y >= 6000 &&
          //     e.nativeEvent.contentOffset.y <= 8000
          //   ) {
          //     setChantsAllData([...chants.slice(0, 200)]);
          //     console.log('Tamaño', chantsAllData.length);
          //   }
          //   if (
          //     e.nativeEvent.contentOffset.y >= 8000 &&
          //     e.nativeEvent.contentOffset.y <= 10000
          //   ) {
          //     setChantsAllData([...chants.slice(0, 250)]);
          //     console.log('Tamaño', chantsAllData.length);
          //   }
          //   if (e.nativeEvent.contentOffset.y >= 10000) {
          //     setChantsAllData([...chants.slice(0, 300)]);
          //     console.log('Tamaño', chantsAllData.length);
          //   }
          // }}
        />
      )}

      {chantsAll && (
        <FloatButtonChants
          onNextChant={onNextChant}
          onPrevChant={onPrevChant}
        />
      )}

      {chantsFavorites &&
        (chantsFiltered.length === 0 ? (
          <View style={styles.containerText}>
            <Text style={[styles.text, {color: colors.blueSecondary}]}>
              No hay cantos favoritos
            </Text>
          </View>
        ) : (
          <FlatList
            keyboardShouldPersistTaps="always"
            keyboardDismissMode="on-drag"
            data={chantsFiltered}
            keyExtractor={keyExtractor}
            renderItem={renderItem}
            getItemLayout={getItemLayout}
            onEndReachedThreshold={0.4}
            showsVerticalScrollIndicator={false}
            style={{marginTop: 10}}
            ListFooterComponent={listFooterComponent}
          />
        ))}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
    marginVertical: 15,
  },
  text: {
    fontSize: 15,
    fontFamily: 'Poppins-Regular',
  },
  containerText: {flex: 1, justifyContent: 'center', alignItems: 'center'},

  styleButton: {
    width: 80,
    height: 40,
    marginHorizontal: 5,
    borderRadius: 10,
    // backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },

  styleButtonText: {
    // color: colors.fontSecondary,
    fontFamily: 'Poppins-SemiBold',
    fontSize: 12,
  },
});
