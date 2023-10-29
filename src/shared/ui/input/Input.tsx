import { Box, FormControl, Input as NativeInput, Text, WarningOutlineIcon } from 'native-base';
import { InterfaceInputProps } from 'native-base/lib/typescript/components/primitives/Input/types';
import { FunctionComponent } from 'react';

type InputProps = InterfaceInputProps & {
  label?: string;
  placeholder: string;
  rightIcon?: any;
  errorMessage?: string | null;
};

const Input: FunctionComponent<InputProps> = ({ label, placeholder, rightIcon, errorMessage, ...rest }) => {
  return (
    <FormControl isInvalid={!!errorMessage}>
      <NativeInput {...rest} variant="filled" InputRightElement={rightIcon} size="xl" placeholder={placeholder} />
      <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>{errorMessage}</FormControl.ErrorMessage>
    </FormControl>
  );
};

export default Input;
