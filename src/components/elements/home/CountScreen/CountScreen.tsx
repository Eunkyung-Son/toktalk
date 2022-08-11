import React from 'react';
import { useDispatch } from 'react-redux';
import { HStack, Text, Button } from 'native-base';

import { useAppStore } from '@features/useAppStore';
import { counterSliceAction } from '@features/Count/counterSlice';

const CountScreen = ({ navigation }: ScreenType) => {
  const dispatch = useDispatch();
  const { value } = useAppStore((state) => state.COUNTER);

  return (
    <HStack space={10} alignItems="center">
      <Button w="50px" onPress={() => dispatch(counterSliceAction.decrement())}>
        -
      </Button>
      <Text>{value}</Text>
      <Button w="50px" onPress={() => dispatch(counterSliceAction.increment())}>
        +
      </Button>
      <Button onPress={() => navigation.navigate('Modal')}>modal open!</Button>
    </HStack>
  );
};

export default CountScreen;
