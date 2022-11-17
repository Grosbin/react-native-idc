import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

export const useCardAnimation = () => {
  const widthOffsetCard = useSharedValue('0%');
  const heightOffsetCard = useSharedValue('0%');

  const cardScaleStyle = useAnimatedStyle(() => {
    return {
      width: widthOffsetCard.value,
      height: heightOffsetCard.value,
    };
  });

  const closedCardOffset = useSharedValue(1);

  const closedCardScaleStyle = useAnimatedStyle(() => {
    closedCardOffset.value = withSpring(1, {damping: 20});
    return {
      transform: [{scale: withSpring(closedCardOffset.value)}],
    };
  });

  const closedCard = () => {
    console.log('closedCard');
    closedCardOffset.value = 0.8;
    widthOffsetCard.value = '100%';
    heightOffsetCard.value = withSpring('0%', {damping: 20});
  };

  return {
    widthOffsetCard,
    heightOffsetCard,
    cardScaleStyle,
    closedCardOffset,
    closedCardScaleStyle,
    closedCard,
  };
};
