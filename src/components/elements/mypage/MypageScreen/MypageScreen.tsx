import React from 'react';
import {
  View,
  Text,
  Image,
  Center,
  HStack,
  Divider,
  Box,
  Pressable,
} from 'native-base';
import CommonLayout from '@components/common/@Layout/CommonLayout';
import CommonHeader from '@components/common/@Layout/CommonHeader';
import { MY_IMAGES } from '@generated/images/images';
import { useNavigation } from '@react-navigation/native';

interface MypageScreenProps {}

function MypageScreen({}: MypageScreenProps) {
  const navigation = useNavigation<any>();
  return (
    <CommonLayout h="100%" p="16px" bgColor="#FFFFFF">
      <CommonHeader text="마이페이지" />
      <Center>
        <Image
          source={MY_IMAGES.PROFILE}
          w="68px"
          h="68px"
          mt="16px"
          alt="profile"
        />
        <HStack>
          <Text fontSize={'26px'} lineHeight="38px" fontWeight="700" mt="8px">
            손은경
          </Text>
          <Image
            source={MY_IMAGES.PEN}
            w="16px"
            h="16px"
            ml="5px"
            mt="20px"
            alt="pen"
          />
        </HStack>
        <Divider mx="4" mt="40px" />
      </Center>
      <Pressable onPress={() => navigation.navigate('CommuteManage')}>
        <HStack justifyContent={'space-between'}>
          <HStack>
            <Image
              source={MY_IMAGES.SCHEDULE}
              w="22px"
              h="22px"
              ml="5px"
              mt="20px"
              alt="schedule"
              mr="6px"
            />
            <Text
              fontSize={'16px'}
              lineHeight="28px"
              fontWeight={'700'}
              mt="15px"
            >
              출/퇴근 관리
            </Text>
          </HStack>
          <Image
            source={MY_IMAGES.RIGHT_ARROW}
            w="22px"
            h="22px"
            ml="5px"
            mt="20px"
            alt="arrow"
            mr="6px"
          />
        </HStack>
      </Pressable>
      <Divider mt="12px" />

      <HStack justifyContent={'space-between'}>
        <HStack>
          <Image
            source={MY_IMAGES.PRESENT}
            w="22px"
            h="22px"
            ml="5px"
            mt="20px"
            alt="present"
            mr="6px"
          />
          <Text
            fontSize={'16px'}
            lineHeight="28px"
            fontWeight={'700'}
            mt="15px"
          >
            쿠폰함
          </Text>
        </HStack>
        <Box>
          <Image
            source={MY_IMAGES.RIGHT_ARROW}
            w="22px"
            h="22px"
            ml="5px"
            mt="20px"
            alt="arrow"
            mr="6px"
          />
        </Box>
      </HStack>
      <Divider mt="12px" />
    </CommonLayout>
  );
}

export default MypageScreen;
