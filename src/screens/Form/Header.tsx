import React from 'react';
import {StyleSheet} from 'react-native';
import Animated, {
  useAnimatedStyle,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {HeaderProps} from 'screens/types';

export const Header = ({animationTrigger}: HeaderProps) => {
  const textHeaderAnimatedStyle = useAnimatedStyle(() => {
    return {
      fontSize: withSpring(animationTrigger ? 20 : 24),
      padding: withTiming(animationTrigger ? 15 : 25, {duration: 350}),
      marginTop: withTiming(animationTrigger ? 0 : 50, {duration: 350}),
    };
  }, [animationTrigger]);
  return (
    <Animated.Text style={[styles.text, textHeaderAnimatedStyle]}>
      Add your info
    </Animated.Text>
  );
};

const styles = StyleSheet.create({
  text: {
    width: '100%',
    color: 'white',
    textAlign: 'center',
  },
});
