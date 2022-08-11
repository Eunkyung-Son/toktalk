import React from 'react';
import { View, Text, Divider, HStack, Image, Box } from 'native-base';
import CommonLayout from '@components/common/@Layout/CommonLayout';
import CommonHeader from '@components/common/@Layout/CommonHeader';
import { MY_IMAGES } from '@generated/images/images';

interface CommuteManageScreenProps {}

function CommuteManageScreen({}: CommuteManageScreenProps) {
  return (
    <CommonLayout bgColor="#FFFFFF" px="16px">
      <CommonHeader text="출/퇴근 관리" />
      <Divider mt="10px" />
      <HStack mt="16px">
        <Text fontSize="16px" lineHeight="28px" fontWeight={'700'} mr="19px">
          오늘 근무
        </Text>
        <Text
          mt="5px"
          fontWeight={'700'}
          fontSize="12px"
          lineHeight={'18px'}
          color="gray.700"
        >
          2022.08.10
        </Text>
      </HStack>
      <HStack alignContent={'center'}>
        <Box mr="24px">
          <Text>출근 시간</Text>
          <HStack>
            <Image source={MY_IMAGES.TIME} w="24px" h="24px" mr="4px" />
            <Text>기록 없음</Text>
          </HStack>
        </Box>
        <Box h="43px" mr="24px">
          <Divider orientation="vertical" mx="2" mt="2px" />
        </Box>
        <Box>
          <Text>출근 시간</Text>
          <HStack>
            <Image source={MY_IMAGES.TIME} w="24px" h="24px" mr="4px" />
            <Text>기록 없음</Text>
          </HStack>
        </Box>
      </HStack>
    </CommonLayout>
  );
}

export default CommuteManageScreen;
