import React, {useContext} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {BibleContext} from '../../context/BibleContext';
import {gbColor} from '../../theme/themeGlobal';

interface Props {
  widthOffset?: any;
  heightOffset?: any;
}

export const CloseCard = ({widthOffset, heightOffset}: Props) => {
  const {
    onActiveCard,
    bibleState: {activeCard},
  } = useContext(BibleContext);
  const closedOffset = useSharedValue(1);

  const closedScaleStyle = useAnimatedStyle(() => {
    closedOffset.value = withSpring(1, {damping: 10});
    return {
      transform: [{scale: withSpring(closedOffset.value)}],
    };
  });

  const onClosedCard = () => {
    closedOffset.value = 0.8;

    if (activeCard) {
      widthOffset.value = withSpring('95%');
      heightOffset.value = withSpring('0%', {damping: 30});
      onActiveCard(false);
    }
  };

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.9}
      onPress={onClosedCard}>
      <Animated.View style={[styles.containerText, closedScaleStyle]}>
        <Text style={styles.closeText}>Cerrar</Text>
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    position: 'absolute',
    zIndex: 999,
    bottom: 0,
    marginHorizontal: 30,
    width: '85%',
  },
  containerText: {
    backgroundColor: gbColor.secundary,
    // borderColor: gbColor.primary,
    // borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    width: '100%',
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
