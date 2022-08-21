import React from 'react';
import {Dimensions} from 'react-native';
import {Text, View} from 'ui';

const SCREEN_HEIGHT = Dimensions.get('screen').height;

export const Resolved = () => {
  return (
    <View
      height={SCREEN_HEIGHT / 2}
      justifyContent="flex-end"
      alignItems="center">
      <Text>resolved</Text>
    </View>
  );
};
