import React from 'react';
import { Box, Button, Input } from 'native-base';

const HomeScreen = ({ navigation }: ScreenType) => {
  return (
    <Box flex={1}>
      <Button
        onPress={() => navigation.navigate('CountTab')}
        bgColor="naver.700"
        _text={{
          fontWeight: 800,
        }}
      >
        Go to CountScreen
      </Button>
      <Button colorScheme="kakao" variant="solid">
        Kakao Login Button
      </Button>
      <Input variant="outline" />
    </Box>
  );
};

export default HomeScreen;
