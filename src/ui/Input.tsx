import * as React from 'react';
import {TextInput, TextInputProps} from 'react-native';
import {Control, Path, RegisterOptions, useController} from 'react-hook-form';

import {Text} from './Text';
import {View} from './View';
import {useTheme} from './theme';

// types
type TRule = Omit<
  RegisterOptions,
  'valueAsNumber' | 'valueAsDate' | 'setValueAs'
>;

export type RuleType<T> = {[name in keyof T]: TRule};
export type InputControllerType<T> = {
  name: Path<T>;
  control: Control<T>;
  rules?: TRule;
};

interface Props<T> extends TextInputProps, InputControllerType<T> {
  disabled?: boolean;
  label?: string;
}

// PS. forward ref to pass ref to functional component
export const Input = React.forwardRef(
  ({label, name, control, rules, style, ...inputProps}: Props<any>, ref) => {
    const {colors} = useTheme();
    const {field, fieldState} = useController({control, name, rules});
    const [isFocussed, setIsFocussed] = React.useState(false);
    const onBlur = () => setIsFocussed(false);
    const onFocus = () => setIsFocussed(true);

    const borderColor = fieldState.invalid
      ? colors.red
      : isFocussed
      ? colors.input_focused
      : colors.white_transparent;
    return (
      <View key={`input-${name}`}>
        {label && (
          <Text
            variant="label"
            color={
              fieldState.invalid ? 'red' : isFocussed ? 'secondary' : 'grey1'
            }>
            {label}
          </Text>
        )}
        <TextInput
          ref={ref}
          placeholderTextColor={colors.place_holder}
          autoCapitalize="none"
          onChangeText={field.onChange}
          value={field.value.toString()}
          onBlur={onBlur}
          onFocus={onFocus}
          {...inputProps}
          style={[
            {
              borderColor,
            },
            style,
          ]}
        />
      </View>
    );
  },
);
