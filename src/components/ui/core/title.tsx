import React from 'react';
import {Text} from './text';
import {View} from './view';

type Props = {
  text: string;
};

export const Title = ({text}: Props) => {
  return (
    <View className="flex-row items-center justify-center pt-4 pb-2">
      <Text variant="xl" className="pr-2 text-black text-[22px] bold">
        {text}
      </Text>
    </View>
  );
};