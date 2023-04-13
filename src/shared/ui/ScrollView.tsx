import React, { forwardRef } from 'react';

import { ScrollViewProps, ScrollView as ScrollViewRN } from 'react-native';

const ScrollView = forwardRef<ScrollViewRN, ScrollViewProps>(({ children, contentContainerStyle, ...rest }, ref) => {
  return (
    <ScrollViewRN
      {...rest}
      ref={ref}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={[{ minHeight: '100%' }, contentContainerStyle]}
    >
      {children}
    </ScrollViewRN>
  );
});

export default ScrollView;
