import React from 'react';
import {View} from './view';

type Props = {
  children: React.ReactNode;
};

export const Screen = ({children}: Props) => (
  <View className="flex flex-1 justify-center bg-white dark:bg-charcoal-850 px-6">
    {children}
  </View>
);