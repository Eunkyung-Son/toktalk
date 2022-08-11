import React from 'react';

import { Button, IButtonProps, IPressableProps } from 'native-base';

interface BottomBottonProps extends IButtonProps {
  onPress?: IPressableProps['onPress'];
  children?: JSX.Element | JSX.Element[] | string;
}
function BottomBotton({
  onPress,
  children,
  ...buttonProps
}: BottomBottonProps) {
  return (
    <Button
      {...buttonProps}
      h="50px"
      w="100%"
      borderRadius="6px"
      _text={{
        fontWeight: 'bold',
        fontSize: 'btn',
        lineHeight: 'btn',
        color: 'white',
      }}
      onPress={onPress}
    >
      {children}
    </Button>
  );
}

export default BottomBotton;
