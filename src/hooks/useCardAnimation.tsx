import {useAnimatedStyle, useSharedValue} from 'react-native-reanimated';

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
    closedCardOffset.value = 1;
    return {
      transform: [{scale: closedCardOffset.value}],
    };
  });

  const closedCard = () => {
    closedCardOffset.value = 0.8;
    widthOffsetCard.value = '100%';
    heightOffsetCard.value = '0%';
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
