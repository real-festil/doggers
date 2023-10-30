import React, { FunctionComponent } from 'react';

import { Button as NativeButton, Text } from 'native-base';
import { InterfaceButtonProps } from 'native-base/lib/typescript/components/primitives/Button/types';
import { InterfaceTextProps } from 'native-base/lib/typescript/components/primitives/Text/types';
import { ActivityIndicator } from 'react-native';

type ButtonProps = InterfaceButtonProps & {
  label?: string;
  children?: React.ReactNode;
  textProps?: InterfaceTextProps;
  type?: string;
};

const Button: FunctionComponent<ButtonProps> = ({ label, children, textProps, type, ...rest }) => {
  return (
    <NativeButton {...rest}>
      {label && (
        <Text textAlign="center" {...textProps}>
          {label}
        </Text>
      )}
      {rest.isLoading && <ActivityIndicator style={{ alignSelf: 'center', flex: 1 }} size="large" />}
      {children && children}
    </NativeButton>
  );
};

export default Button;
