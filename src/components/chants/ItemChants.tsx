import React, {useContext, useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Keyboard,
  Dimensions,
} from 'react-native';
import {ThemeContext} from '../../context/ThemeContext';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParams} from '../../navigator/StackNavigator';
import {ChantContext} from '../../context/ChantContext';
interface Props {
  id: string;
  name: string;
  lyrics: string[];
}

export const ItemChants = ({id, name, lyrics}: Props) => {
  const navigate = useNavigation<StackNavigationProp<RootStackParams>>();
  const width = Dimensions.get('screen').width;

  const [windowWidth, setWindowWidth] = useState(width);

  const {
    theme: {colors},
  } = useContext(ThemeContext);

  const {
    chantState: {chantsFavArray},
  } = useContext(ChantContext);

  useEffect(() => {
    setWindowWidth(width);
  }, []);

  const handleNavigate = () => {
    Keyboard.dismiss();
    navigate.navigate('ContentChants', {id, name, lyrics});
  };

  let nameLength;

  if (windowWidth < 300 && name.length > 25) {
    nameLength = name.substring(0, 20) + '...';
  } else if (windowWidth < 400 && name.length > 30) {
    nameLength = name.substring(0, 25) + '...';
  } else {
    nameLength = name;
  }

  return (
    <TouchableOpacity
      onPress={handleNavigate}
      activeOpacity={0.8}
      style={[styles.container, {backgroundColor: colors.foco}]}>
      <Text style={[styles.text, {color: colors.fontPrimary}]}>
        {chantsFavArray.includes(id) && (
          <Icon name={'star'} size={15} color={colors.fontPrimary} />
        )}
        {`  ${id}`}
      </Text>
      <Text style={[styles.text, {color: colors.fontPrimary}]}>
        {nameLength}
      </Text>
      <Icon name="chevron-forward" size={25} color={colors.fontPrimary} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 5,
    marginHorizontal: 5,
    borderRadius: 10,
    height: 55,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,

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
  },
});
