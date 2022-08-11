import { signupSliceAction } from '@features/Signup/signupSlice';
import { useAppStore } from '@features/useAppStore';
import { MY_IMAGES } from '@generated/images/images';
import { Box, Center, Image, Pressable, Text } from 'native-base';
import React from 'react';
import { useDispatch } from 'react-redux';

function SelectAuthentication() {
  const dispatch = useDispatch();
  const role = useAppStore((state) => state.SIGNUP.role);
  return (
    <Box>
      <Text fontSize="20px" lineHeight="29px" fontWeight={'700'} mt="50px">
        권한 선택
      </Text>
      <Text fontSize="16px" lineHeight="28px" color="#757983" mt="6px">
        본인에게 해당하는 권한을 선택해주세요
      </Text>
      <Center>
        <Pressable
          onPress={() => dispatch(signupSliceAction.setRole('Employee'))}
        >
          <Box
            borderRadius={'30px'}
            w="162px"
            h="162px"
            bgColor={role === 'Employee' ? '#7B61FF' : 'gray.200'}
            mt="80px"
          >
            <Center>
              <Image
                mt="20px"
                source={MY_IMAGES.SIGNUP.EMPLOYEE}
                alt="employee"
                w="47px"
                h="54px"
              />
              <Text
                fontWeight={'700'}
                fontSize="24px"
                lineHeight={'28px'}
                mt="6px"
                color={role === 'Employee' ? 'white' : 'gray.800'}
              >
                똑개 직원
              </Text>
              <Text
                fontSize={'12px'}
                lineHeight="18px"
                mt="4px"
                color={role === 'Employee' ? 'white' : 'gray.800'}
              >
                직장에 합류하길 원해요
              </Text>
            </Center>
          </Box>
        </Pressable>
        <Pressable onPress={() => dispatch(signupSliceAction.setRole('Admin'))}>
          <Box
            borderRadius={'30px'}
            w="162px"
            h="162px"
            bgColor={role === 'Admin' ? '#7B61FF' : 'gray.200'}
            mt="20px"
          >
            <Center>
              <Image
                mt="20px"
                source={MY_IMAGES.SIGNUP.ADMIN}
                alt="admin"
                w="47px"
                h="54px"
              />
              <Text
                fontWeight={'700'}
                fontSize="24px"
                lineHeight={'28px'}
                mt="6px"
                color={role === 'Admin' ? 'white' : 'gray.800'}
              >
                관리자
              </Text>
              <Text
                fontSize={'12px'}
                lineHeight="18px"
                mt="4px"
                color={role === 'Admin' ? 'white' : 'gray.800'}
              >
                직장에 합류하길 원해요
              </Text>
            </Center>
          </Box>
        </Pressable>
      </Center>
    </Box>
  );
}

export default SelectAuthentication;
