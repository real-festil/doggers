import React, { FunctionComponent } from 'react';

import { Button as NativeButton, Text } from 'native-base';
import { InterfaceButtonProps } from 'native-base/lib/typescript/components/primitives/Button/types';
import { InterfaceTextProps } from 'native-base/lib/typescript/components/primitives/Text/types';

interface IButtonProps extends InterfaceButtonProps {
  label?: string;
  children?: React.ReactNode;
  textProps?: InterfaceTextProps;
}

const Button: FunctionComponent<IButtonProps> = ({ label, children, textProps, ...rest }) => {
  return (
    <NativeButton {...rest}>
      {label && (
        <Text textAlign="center" {...textProps}>
          {label}
        </Text>
      )}
      {children && children}
    </NativeButton>
  );
};

export default Button;
