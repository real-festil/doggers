import React from 'react';

import { Formik } from 'formik';
import { Pressable, Stack } from 'native-base';

import EyeIcon from 'src/assets/svg';
import { SignInSchema } from 'src/features/auth/sign-in-by-email/model';
import { useSignIn } from 'src/features/auth/sign-in-by-email/model';
import Button from 'src/shared/ui/button';
import NativeInput from 'src/shared/ui/input';

const Form = () => {
  const { loginUser, isLoading, show, setShow, error } = useSignIn();

  return (
    <>
      <Stack mb="2.5" mt="1.5" direction="column" space={3} maxHeight={300}>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={SignInSchema}
          onSubmit={values => loginUser(values)}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
            <>
              <NativeInput
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                placeholder="email"
                errorMessage={errors.email && touched.email ? errors.email : error}
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

export default Form;
