import React, { FunctionComponent, useState } from 'react';

import { Formik } from 'formik';
import { Pressable, Stack, VStack } from 'native-base';
import { Text } from 'react-native';

import EyeIcon from 'src/assets/svg/eye';
import { useSignUp } from 'src/features/auth/sign-up-by-email/model';
import { RegisterSchema } from 'src/features/auth/sign-up-by-email/model';
import Button from 'src/shared/ui/button';
import NativeInput from 'src/shared/ui/input';

type Props = {
  userType: string;
};

const SignUpByEmailForm: FunctionComponent<Props> = ({ userType }) => {
  const { error, isLoading, show, setShow, signUp } = useSignUp();

  return (
    <>
      <Text>{userType}</Text>
      <Stack mb="2.5" mt="1.5" direction="column" space={3} maxHeight={300}>
        <Formik
          initialValues={{ name: '', email: '', password: '' }}
          validationSchema={RegisterSchema}
          onSubmit={values => signUp(values, userType)}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
            <>
              <NativeInput
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                value={values.name}
                placeholder="name"
                errorMessage={errors.name && touched.name ? errors.name : null}
              />
              <NativeInput
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                placeholder="email"
                errorMessage={errors.email && touched.email ? errors.email : null}
              />
              <NativeInput
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                type={show ? 'text' : 'password'}
                rightIcon={
                  <Pressable onPress={() => setShow(!show)}>
                    <EyeIcon />
                  </Pressable>
                }
                placeholder="password"
                errorMessage={errors.password && touched.password ? errors.password : error}
              />
              <Button isLoading={isLoading} type="submit" label="Sign up" onPress={handleSubmit} />
            </>
          )}
        </Formik>
      </Stack>
    </>
  );
};
export default SignUpByEmailForm;
