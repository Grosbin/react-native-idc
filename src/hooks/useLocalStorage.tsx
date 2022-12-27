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
      return '';
    } catch (e) {
      console.log(e);
    }
    return '';
  };

  const storeDataObject = async (key: string, value: any) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.log(e);
    }
  };

  const removeData = async (key: string) => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (e) {
      console.log(e);
    }
  };

  return {
    storeData,
    storeDataObject,
    getData,
    removeData,
  };
};
