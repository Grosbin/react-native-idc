import React from 'react';
import {StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native';
import {ItemActivitie} from '../components/ItemActivitie';
import {NowActivitie} from '../components/NowActivitie';
import {gbColor} from '../theme/themeGlobal';

export const ActivitiesScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.nowActivitie}>
            <NowActivitie />
          </View>
          <View style={styles.itemSeparator}>
            <Text style={styles.textHeader}>Actividades</Text>

            <ItemActivitie />
            <ItemActivitie />
            <ItemActivitie />
          </View>

          <View style={styles.itemSeparator}>
            <Text style={styles.textHeader}>Oraciones por Salud</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: gbColor.foco,
  },
  nowActivitie: {
    height: 175,
  },
  itemSeparator: {
    backgroundColor: gbColor.background,
    borderRadius: 15,
    paddingBottom: 10,
    marginBottom: 15,
  },
  textHeader: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    color: gbColor.fontPrimary,
    top: 10,
    left: 10,
    marginBottom: 10,
  },
});
