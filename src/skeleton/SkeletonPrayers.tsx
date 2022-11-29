import React, {useContext, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SkeletonContent from 'react-native-skeleton-content-nonexpo';
import {ThemeContex} from '../context/ThemeContex';

export const SkeletonPrayers = () => {
  const [loading, setLoading] = useState(true);
  const {
    theme: {colors},
  } = useContext(ThemeContex);
  return (
    <SkeletonContent
      containerStyle={{
        flex: 1,

        // width: '100%',
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
