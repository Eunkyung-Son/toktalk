import React from 'react';
import { Box, Flex, Text } from 'native-base';

const ExampleModalScreen = () => {
  return (
    <Flex
      position="absolute"
      top={0}
      left={0}
      right={0}
      bottom={0}
      flex={1}
      w="100%"
      justifyContent="center"
      px="16px"
      zIndex="999"
    >
      <Box bgColor="#FFFFFF">
        <Text style={{ fontSize: 20 }}>This is a modal!</Text>
      </Box>
    </Flex>
  );
};

export default ExampleModalScreen;
