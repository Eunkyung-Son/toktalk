import React from 'react';
import { Box, Button, Center, Flex, Image, Text, View } from 'native-base';
import { MY_IMAGES } from '@generated/images/images';
import { ImageBackground } from 'react-native';

const StartLoginSignupScreen = ({ navigation }: any) => {
  const handleLogin = () => {
    navigation.navigate('HomeTabs');
    //
  };

  return (
    <View
      bgColor="#7B61FF"
      h="100%"
      w="100%"
      justifyContent="center"
      alignItems="center"
    >
      <Box w="193px" h="240px" ml="40px">
        <ImageBackground
          style={{
            width: '100%',
            height: '100%',
          }}
          source={MY_IMAGES.CAT}
        />
      </Box>
      <Center mt="50px">
        <Text
          fontSize="22px"
          lineHeight="32px"
          fontWeight="800"
          color="white"
          letterSpacing="-0.02"
        >
          TOKCAT<Text fontWeight="medium"> 과</Text>
        </Text>
        <Text
          fontSize="22px"
          lineHeight="32px"
          fontWeight="400"
          color="white"
          letterSpacing="-0.02"
        >
          <Text fontWeight="700">똑개생활</Text>
          <Text fontWeight="700"> 함께</Text>
          해요 🤘
        </Text>
      </Center>
      <Box px="16px" w="100%" mt="50px">
        <Button
          w="100%"
          h="50px"
          bgColor="white"
          borderRadius="6px"
          _text={{
            color: '#7B61FF',
            fontSize: '15px',
            lineHeight: '25px',
            fontWeight: 'extrabold',
          }}
          onPress={handleLogin}
        >
          로그인
        </Button>
      </Box>
      <Box px="16px" w="100%" mt="17px">
        <Button
          w="100%"
          h="50px"
          bgColor="white"
          borderRadius="6px"
          _text={{
            color: '#7B61FF',
            fontSize: '15px',
            lineHeight: '25px',
            fontWeight: 'extrabold',
          }}
          onPress={() => navigation.navigate('Signup')}
        >
          회원가입
        </Button>
      </Box>
    </View>
  );
};

export default StartLoginSignupScreen;
