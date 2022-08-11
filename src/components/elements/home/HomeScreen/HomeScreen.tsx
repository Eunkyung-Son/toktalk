import React from 'react';
import { Box, Button, Flex, Image, Input, Text, View } from 'native-base';
import CommonLayout from '@components/common/@Layout/CommonLayout';
import CommonHeader from '@components/common/@Layout/CommonHeader';
import { ImageBackground, StyleSheet } from 'react-native';
import { MY_IMAGES } from '@generated/images/images';

const HomeScreen = ({ navigation }: ScreenType) => {
  console.log('@@');
  return (
    <CommonLayout h="100%">
      <CommonHeader text="출/퇴근" />
      <View w="100%" px="16px">
        <View flexDirection="row" justifyContent="space-between" h="124.94">
          <Box mt="40px" h="500px">
            <Text
              fontSize="40px"
              lineHeight="40px"
              color="#C1B4FF"
              fontWeight="700"
            >
              TOKCAT
            </Text>
          </Box>
          <Box w="177px" h="124.94px">
            <ImageBackground
              style={{
                width: '100%',
                height: '100%',
              }}
              source={MY_IMAGES.MAP}
            />
          </Box>
        </View>
        <View flexDirection="column" mb="40px">
          <Text fontSize="16px" lineHeight="16px" color="#292A2E" mb="10px">
            2022년 08월 12일 (금)
          </Text>
          <View flexDirection="column">
            <Text fontSize="26px" lineHeight="30px" fontWeight="700">
              홍길동 님은
            </Text>
            <Text fontSize="26px" lineHeight="45px" fontWeight="700">
              <Text color="#755AFF">출근 전</Text> 상태입니다.
            </Text>
          </View>
        </View>
        <View
          bgColor="#FAFAFA"
          h="100px"
          flexDirection="column"
          p="26px 43px"
          alignItems="center"
        >
          <Text fontSize="16px" lineHeight="28px" color="#757983" mb="16px">
            출근시간을 선택해 주세요
          </Text>
          <View>
            <View>
              <Image source={MY_IMAGES.CHECKED} />
            </View>
          </View>
        </View>
      </View>
    </CommonLayout>
  );
};

export default HomeScreen;
