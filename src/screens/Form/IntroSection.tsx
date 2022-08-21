import React from 'react';
import Animated, {useAnimatedStyle, withTiming} from 'react-native-reanimated';
import {IntroSectionProps} from 'screens/types';
import {Text, View} from 'ui';

export const IntroSection = ({animationTrigger}: IntroSectionProps) => {
  const opacityAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(animationTrigger ? 0 : 1, {duration: 350}),
    };
  }, [animationTrigger]);

  return (
    <Animated.View style={opacityAnimatedStyle}>
      <View alignItems="center" mb="m">
        <Text variant="subheader" textAlign="center">
          To complete your profile please fill in all necessary information
        </Text>
      </View>
    </Animated.View>
  );
};
