import React, {useContext, useEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {BibleContext} from '../../context/BibleContext';
import {gbColor} from '../../theme/themeGlobal';
import Icon from 'react-native-vector-icons/Ionicons';
import {useCardAnimation} from '../../hooks/useCardAnimation';

interface Props {
  widthOffset?: any;
  heightOffset?: any;
}

export const CloseCard = ({widthOffset, heightOffset}: Props) => {
  const {
    onActiveCard,
    bibleState: {activeCard, verseOnPress},
  } = useContext(BibleContext);

  const {closedCardOffset, closedCardScaleStyle} = useCardAnimation();

  // const closedOffset = useSharedValue(1);

  // const closedScaleStyle = useAnimatedStyle(() => {
  //   closedOffset.value = withSpring(1, {damping: 20});
  //   return {
  //     transform: [{scale: withSpring(closedOffset.value)}],
  //   };
  // });

  const onClosedCard = () => {
    closedCardOffset.value = 0.8;

    if (activeCard) {
      widthOffset.value = '100%';
      heightOffset.value = withSpring('0%', {damping: 20});
      onActiveCard(false);
    }
  };

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.9}
      onPress={onClosedCard}>
      <Animated.View style={[styles.containerText, closedCardScaleStyle]}>
        <Icon name="close-circle" size={20} color={gbColor.foco} />
        <Text style={styles.closeText}> Cerrar</Text>
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    // alignItems: 'center',
    // position: 'absolute',
    zIndex: 999,
    // bottom: 0,
    // marginHorizontal: 30,
    // width: '100%',
    // flex: 1,
  },
  containerText: {
    backgroundColor: gbColor.primary,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    bottom: 0,
    marginHorizontal: 30,
    borderRadius: 10,
    marginBottom: 10,
  },
  closeText: {
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    color: gbColor.foco,
    textAlign: 'center',
  },
});
