import React, { FunctionComponent } from 'react';

import { View } from 'react-native';

import Button from 'src/shared/ui/button';

type ToggleProps = {
  onPress: () => void;
  label: string;
};

const Toggle: FunctionComponent<ToggleProps> = ({ onPress, label }) => {
  return (
    <View>
      <Button label={label} onPress={onPress} />
    </View>
  );
};

export default Toggle;
