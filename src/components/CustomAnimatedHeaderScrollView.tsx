import React from 'react';
import {
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  ScrollViewProps,
  StyleSheet,
} from 'react-native';
import {View} from 'ui';

const SCREEN_HEIGHT = Dimensions.get('screen').height;

export const CustomAnimatedHeaderScrollView = React.forwardRef(
  ({children, ...props}: ScrollViewProps, ref) => (
    <KeyboardAvoidingView
      enabled
      behavior="padding"
      style={styles.container}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 56 : 0}>
      <ScrollView
        ref={ref}
        showsVerticalScrollIndicator={false}
        keyboardDismissMode="interactive"
        scrollEventThrottle={16}
        {...props}>
        {children}

        {/* Two purposes for this View
          1- simulate long screen to enable scrolling
          2- [IMPORTANT]: in case of resolving or rejecting
              screen will scroll to the end and we need to give impression 
              that we have a scrolling to another view so SCREEN_HEIGHT / 2 
              for this view and the other half will be taken by the resolve or reject screen
        */}
        <View height={SCREEN_HEIGHT / 2} />
      </ScrollView>
    </KeyboardAvoidingView>
  ),
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
