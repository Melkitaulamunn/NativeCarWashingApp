import React, {useCallback, useState} from 'react';
import type {TextInputProps} from 'react-native';
import {TextInput as NTextInput} from 'react-native';

import {styled, useColorScheme} from 'nativewind';
import {View} from '../view';
import {Text} from '../text';
import colors from '@components/ui/theme/colors';

const STextInput = styled(NTextInput);

interface Props extends TextInputProps {
  disabled?: boolean;
  label?: string;
  error?: string;
}

export const Input = ({
  label = '',
  disabled = false,
  error = '',

  ...props
}: Props) => {
  const [isFocused, setIsFocused] = useState(false);

  const {colorScheme} = useColorScheme();

  const isDark = colorScheme === 'dark';

  const borderColor = error
    ? 'border-danger-600'
    : isFocused
    ? 'border-danger-300'
    : 'border-neutral-600';

  const bgColor = isDark
    ? 'bg-charcoal-800'
    : error
    ? 'bg-danger-500'
    : 'bg-neutral-100';

  const onFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const onBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  return (
    <View className="mb-4">
      {label && (
        <Text
          variant="md"
          className={
            error
              ? 'text-danger-600'
              : isDark
              ? 'text-charcoal-100'
              : 'text-black'
          }>
          {label}
        </Text>
      )}
      <STextInput
        className={`border-[1px] py-4 px-2 ${borderColor} rounded-md ${bgColor} text-[16px]`}
        {...props}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      {error && <Text variant="error">{error}</Text>}
    </View>
  );
};