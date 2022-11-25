import React, {useState, useEffect} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {addPrayer, getPrayers} from '../actions/prayers';

export const NoticesScreen = () => {
  const [prayers, setPrayers] = useState([]);

  const loadPrayers = async () => {
    const prayers = await getPrayers('families');
    setPrayers(prayers);
  };

  useEffect(() => {
    loadPrayers();
  }, [prayers]);

  const addPrayerData = () => {
    console.log('add prayer noticias');
    addPrayer('families', {name: 'prayer 1'});
  };

  return (
    // <ScrollView>
    //   <View style={styles.container}>
    //     <Text style={styles.text}>Anuncios Screen</Text>
    //     <Button onPress={addPrayerData} title="Agregar Oración" />
    //     {<Text style={styles.text}>{JSON.stringify(prayers, null, 2)}</Text>}
    //   </View>
    // </ScrollView>

    <View style={styles.container}>
      <Text style={styles.text}>Anuncios Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});
