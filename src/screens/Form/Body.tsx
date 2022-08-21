import React, {useCallback, useRef} from 'react';
import * as yup from 'yup';
import {useForm} from 'react-hook-form';
import {EMAIL_REGEX, PHONE_REGEX} from 'utils';
import {StyleSheet, TextInput} from 'react-native';
import {yupResolver} from '@hookform/resolvers/yup';
import {colors, Input, spacing, Text, View} from 'ui';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {setFormState} from 'core';
import Animated from 'react-native-reanimated';
import {FormBodyProps} from 'screens/types';

type FormData = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  age: string;
};

export const Body = ({
  actions: {toStart, toEnd = () => null},
}: FormBodyProps) => {
  const ageRef = useRef<TextInput>(null);
  const emailRef = useRef<TextInput>(null);
  const lastNameRef = useRef<TextInput>(null);
  const phoneNumberRef = useRef<TextInput>(null);
  const {
    control,
    handleSubmit,
    formState: {errors, isDirty, isValid},
    reset,
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
    defaultValues: {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      age: '',
    },
  });

  // actions
  const resolveSubmit = useCallback(_resp => {
    reset();
    setFormState('resolved');
    setTimeout(toEnd, 0);
  }, []);
  const rejectSubmit = useCallback(_err => {
    reset();
    setFormState('rejected');
    setTimeout(toEnd, 0);
  }, []);
  const onSubmit = useCallback((_data: FormData) => {
    // we are sure data is valid
    // time to create a promise that randomly resolve or reject
    const promise = createSubmitPromise();
    promise.then(resolveSubmit).catch(rejectSubmit);
  }, []);

  return (
    <Animated.View style={[styles.container]}>
      <View>
        <Input
          control={control}
          name="firstName"
          placeholder="First name"
          style={styles.input}
          returnKeyType="done"
          onSubmitEditing={focusInputWithRef(lastNameRef)}
          blurOnSubmit={false}
        />
        <Input
          ref={lastNameRef}
          control={control}
          name="lastName"
          placeholder="Last name"
          style={styles.input}
          returnKeyType="done"
          onSubmitEditing={focusInputWithRef(phoneNumberRef)}
          blurOnSubmit={false}
        />

        <Input
          ref={phoneNumberRef}
          keyboardType="phone-pad"
          control={control}
          name="phoneNumber"
          placeholder="Phone number"
          style={styles.input}
          returnKeyType="done"
          onSubmitEditing={focusInputWithRef(emailRef)}
          blurOnSubmit={false}
        />

        <Input
          ref={emailRef}
          keyboardType="email-address"
          control={control}
          name="email"
          placeholder="Email"
          style={styles.input}
          returnKeyType="done"
          onSubmitEditing={focusInputWithRef(ageRef)}
          blurOnSubmit={false}
        />
        <Input
          ref={ageRef}
          keyboardType="numeric"
          control={control}
          name="age"
          placeholder="Age"
          style={styles.input}
          returnKeyType="done"
        />

        {errors && Object.keys(errors).length > 0 && (
          <View>
            {Object.keys(errors).map((key: string) => {
              return (
                <Text key={key} color="red">
                  {errors[key].message}
                </Text>
              );
            })}
          </View>
        )}

        <TouchableOpacity
          disabled={!isDirty || !isValid}
          style={[
            styles.button,
            {
              backgroundColor:
                !isDirty || !isValid
                  ? colors.primary_transparent
                  : colors.primary,
            },
          ]}
          onPress={handleSubmit(onSubmit)}>
          <Text fontSize={18} color={!isDirty || !isValid ? 'text' : 'white'}>
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {padding: 20},
  button: {
    marginTop: 32,
    padding: spacing.m,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  input: {
    fontSize: 18.5,
    color: colors.white,
    padding: spacing.m,
    borderRadius: spacing.s,
    borderWidth: spacing.x,
    marginBottom: spacing.ml,
    backgroundColor: colors.white_transparent_background,
  },
});

const schema = yup
  .object({
    firstName: yup.string().min(3, 'First name too short!').required(),
    lastName: yup.string().min(3, 'Last name too short!').required(),
    phoneNumber: yup
      .string()
      .matches(PHONE_REGEX, 'Invalid Phone number')
      .required(),
    email: yup
      .string()
      .matches(EMAIL_REGEX, 'Invalid Email address')
      .required(),
    age: yup
      .number()
      .typeError('Age must be a number!')
      .positive('Age must be an positive!')
      .integer('Age must be an integer!')
      .required(),
  })
  .required();

const focusInputWithRef = (ref: React.RefObject<TextInput>) => () =>
  ref.current?.focus();
const createSubmitPromise = () =>
  new Promise((resolve, reject) => {
    const random = Math.random();
    const randomSubmitCase = Math.random() >= 0.5;
    console.log('random -> randomSubmitCase: ', random, randomSubmitCase);
    if (randomSubmitCase) {
      resolve('resolved');
    } else {
      reject('rejected');
    }
  });
