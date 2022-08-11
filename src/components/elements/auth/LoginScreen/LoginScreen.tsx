import React from 'react';

import { Box, Center, HStack, Pressable } from 'native-base';

import CommonHeader from '@components/common/@Layout/CommonHeader';
import CommonLayout from '@components/common/@Layout/CommonLayout';
// import { AuthStackParamList } from '@components/elements/type';

import { StackNavigationProp } from '@react-navigation/stack';

import LoginFormContent from './_fragments/LoginFormContent';

interface LoginNavigationProps {
  navigation: StackNavigationProp<any>;
}

function LoginScreen({ navigation }: LoginNavigationProps) {
  return (
    <CommonLayout bgColor="#FFFFFF" p="16px">
      <CommonHeader text={'로그인'} />
      <LoginFormContent navigation={navigation} />
      <Center justifyContent="space-between" px="50px" mt="20px">
        <HStack>
          <Pressable onPress={() => navigation.navigate('FindPwd')}>
            <Box
              _text={{
                fontSize: 'md',
                lineHeight: 'md',
                color: 'gray.600',
                fontWeight: 'medium',
              }}
            >
              비밀번호 찾기
            </Box>
          </Pressable>
          <Box
            mx="10px"
            _text={{
              fontSize: 'md',
              lineHeight: 'md',
              color: 'gray.400',
              fontWeight: 'medium',
            }}
          >
            |
          </Box>
          <Pressable onPress={() => navigation.navigate('Signup')}>
            <Box
              _text={{
                fontSize: 'md',
                lineHeight: 'md',
                color: 'gray.600',
                fontWeight: 'medium',
              }}
            >
              회원가입
            </Box>
          </Pressable>
        </HStack>
      </Center>
    </CommonLayout>
  );
}

export default LoginScreen;
