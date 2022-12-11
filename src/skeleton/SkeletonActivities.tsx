import React, {useContext, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import SkeletonContent from 'react-native-skeleton-content-nonexpo';
import {ThemeContex} from '../context/ThemeContex';
import {Background} from '../components/ui/Background';

const activities = [0, 1];

export const SkeletonActivities = () => {
  const [loading, setLoading] = useState(true);
  const {
    theme: {colors},
  } = useContext(ThemeContex);

  const SkeletonActivities = () => (
    <SkeletonContent
      containerStyle={{
        flex: 1,

        // width: '100%',
        marginHorizontal: 10,
        // marginVertical: 5,

        borderRadius: 10,
      }}
      animationDirection="horizontalLeft"
      boneColor={colors.skeleton}
      highlightColor={colors.foco}
      isLoading={true}
      layout={[
        // {
        //   key: 'someOtherId',
        //   width: 120,
        //   height: 25,
        //   borderRadius: 10,
        //   marginBottom: 5,
        // },
        {
          key: 'someId',
          width: 230,
          height: 120,
          marginBottom: 5,
          borderRadius: 10,
        },
      ]}></SkeletonContent>
  );

  return (
    <View style={{paddingVertical: 12}}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        keyExtractor={index => index.toString()}
        data={activities}
        renderItem={() => <SkeletonActivities />}
      />
    </View>
  );
};
