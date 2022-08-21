import React, {useCallback, useMemo, useRef, useState} from 'react';
import {IntroSection} from './IntroSection';
import {Body} from './Body';
import {CustomAnimatedHeaderScrollView} from 'components';
import {useTheme, View} from 'ui';
import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
} from 'react-native';
import {Header} from './Header';
import {Resolved} from './Resolved';
import {Rejected} from './Rejected';
import {useFormSubmit} from 'core';

export const FormScreen = () => {
  const {colors} = useTheme();
  const scrollRef = useRef<ScrollView>(null);
  const [showHeader, setShowHeader] = useState(false);
  const formState = useFormSubmit(state => state.formState);
  const hideHeader = useMemo(() => {
    return ['resolved', 'rejected'].indexOf(formState) !== -1;
  }, [formState]);

  const onScroll = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const scrolling = event.nativeEvent.contentOffset.y;
      setShowHeader(scrolling > 0);
    },
    [],
  );
  const scrollActions = useMemo(() => {
    return {
      toStart: () => scrollRef.current?.scrollTo({x: 0, y: 0, animated: true}),
      toEnd: () => scrollRef.current?.scrollToEnd(),
    };
  }, []);

  return (
    <View flex={1} bg="black">
      {!hideHeader && <Header animationTrigger={showHeader} />}
      <CustomAnimatedHeaderScrollView
        ref={scrollRef}
        onScroll={onScroll}
        style={{backgroundColor: colors.black}}
        scrollEnabled={!hideHeader}
        decelerationRate={0.5}>
        <IntroSection animationTrigger={showHeader} />
        <Body actions={scrollActions} />
        {formState === 'resolved' && <Resolved actions={scrollActions} />}
        {formState === 'rejected' && <Rejected actions={scrollActions} />}
      </CustomAnimatedHeaderScrollView>
    </View>
  );
};
