import { MY_IMAGES } from '@generated/images/images';
import { Box, Center, Image, Text } from 'native-base';
import React from 'react';

function SelectAuthentication() {
  return (
    <Box>
      <Center>
        <Text>권한 선택</Text>
        <Text>본인에게 해당하는 권한을 선택해주세요</Text>
        <Box borderRadius={'30px'} w="232px" h="215px" bgColor="#D9D9D9">
          <Center>
            <Image
              mt="20px"
              source={MY_IMAGES.SIGNUP.EMPLOYEE}
              alt="employee"
              w="68px"
              h="77px"
            />
            <Text fontWeight={'700'} fontSize="24px" lineHeight={'28px'}>
              똑개 직원
            </Text>
            <Text fontSize={'20px'} lineHeight="24px" mt="14px">
              직장에 합류하길 원해요
            </Text>
          </Center>
        </Box>
        <Box
          borderRadius={'30px'}
          w="232px"
          h="215px"
          bgColor="#D9D9D9"
          mt="33px"
        >
          <Center>
            <Image
              mt="20px"
              source={MY_IMAGES.SIGNUP.EMPLOYEE}
              alt="employee"
              w="68px"
              h="77px"
            />
            <Text fontWeight={'700'} fontSize="24px" lineHeight={'28px'}>
              똑개 직원
            </Text>
            <Text fontSize={'20px'} lineHeight="24px" mt="14px">
              직장에 합류하길 원해요
            </Text>
          </Center>
        </Box>
        <Box></Box>
      </Center>
    </Box>
  );
}

export default SelectAuthentication;
