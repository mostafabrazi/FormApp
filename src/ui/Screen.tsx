import React from 'react';
import {View} from './View';

type Props = {
  children: React.ReactNode;
};

export const Screen = ({children}: Props) => (
  <View flex={1} bg="black">
    {children}
  </View>
);
