import React from 'react';
import type {TouchableOpacityProps} from 'react-native';

import {Text} from './text';
import {TouchableOpacity} from './touchableOpacity';
import {ActivityIndicator} from './activityIndicator';

type Variant = {
  container: string;
  label: string;
  indicator: string;
};
type VariantName = 'defaults' | 'primary' | 'outline' | 'secondary';
type BVariant = {
  [key in VariantName]: Variant;
};

export const buttonVariants: BVariant = {
  defaults: {
    container:
      'flex-row items-center justify-center rounded-md px-12 py-3 my-2',
    label: 'text-[16px] font-medium text-white',
    indicator: 'text-white h-[30px]',
  },
  primary: {
    container: 'bg-primary-500',
    label: 'text-charcoal-100',
    indicator: 'text-inherit',
  },
  secondary: {
    container: 'bg-neutral-900',
    label: 'text-neutral-50',
    indicator: 'text-neutral-50',
  },
  outline: {
    container: 'border border-neutral-400',
    label: 'text-black dark:text-charcoal-100',
    indicator: 'text-black',
  },
};

interface Props extends TouchableOpacityProps {
  variant?: VariantName;
  label?: string;
  loading?: boolean;
}

export const Button = ({
  label,
  loading = false,
  variant = 'primary',
  disabled = false,
  ...props
}: Props) => {
  return (
    <TouchableOpacity
      disabled={disabled || loading}
      className={`
    ${buttonVariants.defaults.container}
     ${buttonVariants[variant].container}
     ${disabled ? 'opacity-50' : ''}
    `}
      {...props}>
      {loading ? (
        <ActivityIndicator
          size="small"
          className={`
          ${buttonVariants.defaults.indicator}
           ${buttonVariants[variant].indicator}
          `}
        />
      ) : (
        <Text
          className={`
          ${buttonVariants.defaults.label}
           ${buttonVariants[variant].label}
          `}>
          {label}
        </Text>
      )}
    </TouchableOpacity>
  );
};