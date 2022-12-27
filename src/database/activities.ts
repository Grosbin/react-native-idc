import firestore from '@react-native-firebase/firestore';

export const getPrayers = async (collection: string) => {
  let data;
  try {
    const prayers = await firestore().collection(collection).get();
    data = prayers.docs.map(documentSnapshot => {
      return {
        id: documentSnapshot.id,
        ...documentSnapshot.data(),
      };
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};
