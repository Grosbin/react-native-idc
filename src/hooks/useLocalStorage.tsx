import AsyncStorage from '@react-native-async-storage/async-storage';

export const useLocalStorage = () => {
  const storeData = async (key: string, value: string) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (e) {
      console.log(e);
    }
  };

  const getData = async (key: string) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        return value;
      }
    } catch (e) {
      console.log(e);
    }
    // console.log('Entro al getData');
  };

  return {
    storeData,
    getData,
  };
};
