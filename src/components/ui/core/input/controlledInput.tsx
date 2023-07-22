import React from 'react';
import {useController} from 'react-hook-form';
import {Input} from './input';

type InputProps = {
  name: any;
  control: any;
  rules?: any;
};

export function ControlledInput({
  name,
  control,
  rules,
  ...inputProps
}: InputProps) {
  const {field, fieldState} = useController({control, name, rules});

  return (
    <Input
      ref={field.ref}
      onChangeText={field.onChange}
      autoCapitalize="none"
      value={field.value}
      {...inputProps}
      error={fieldState.error?.message}
      placeholder={name}
    />
  );
}