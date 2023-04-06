import React, {useContext} from 'react';
import SkeletonContent from 'react-native-skeleton-content-nonexpo';
import {ThemeContext} from '../context/ThemeContext';

export const SkeletonPrayers = () => {
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  return (
    <SkeletonContent
      containerStyle={{
        flex: 1,
        marginHorizontal: 10,
        marginVertical: 5,

        borderRadius: 10,
      }}
      animationDirection="horizontalLeft"
      boneColor={colors.skeleton}
      highlightColor={colors.foco}
      isLoading={true}
      layout={[
        {
          key: 'PrayerId',
          width: 120,
          height: 25,
          borderRadius: 10,
          marginBottom: 10,
        },
        {
          key: 'NameId',
          width: '100%',
          height: 120,
          marginBottom: 5,
          borderRadius: 10,
        },
      ]}></SkeletonContent>
  );
};
