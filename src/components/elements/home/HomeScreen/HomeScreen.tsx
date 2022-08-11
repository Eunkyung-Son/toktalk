import React, { useState } from 'react';
import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  Modal,
  Pressable,
  Text,
  View,
} from 'native-base';
import CommonLayout from '@components/common/@Layout/CommonLayout';
import CommonHeader from '@components/common/@Layout/CommonHeader';
import { ImageBackground, StyleSheet } from 'react-native';
import { MY_IMAGES } from '@generated/images/images';
import { modalSliceAction } from '@features/Modal/modalSlice';
import { useDispatch } from 'react-redux';
import CommuteModal from './CommuteModal';

const HomeScreen = ({ navigation }: ScreenType) => {
  const dispatch = useDispatch();
  const [check1, setCheck1] = useState([false, false]);

  const onPress1 = (idx: number) => {
    const copyArr = [false, false];
    copyArr[idx] = true;
    setCheck1(copyArr);
  };

  return (
    <>
      <CommonLayout h="100%" bgColor="white">
        <CommonHeader text="출/퇴근" />
        <View w="100%" px="16px" h="95%" justifyContent="space-between">
          <View>
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
              h="125px"
              flexDirection="column"
              p="26px 43px"
              alignItems="center"
              w="100%"
            >
              <Text fontSize="16px" lineHeight="28px" color="#757983" mb="16px">
                출근시간을 선택해 주세요
              </Text>
              <View
                flexDirection="row"
                alignItems="center"
                w="257px"
                justifyContent="space-between"
              >
                <Button onPress={() => onPress1(0)}>
                  <View flexDirection="row" alignItems="center">
                    {check1[0] ? (
                      <Image
                        source={MY_IMAGES.CHECKED}
                        mr="6px"
                        alt="check"
                        key="check"
                      />
                    ) : (
                      <Image
                        source={MY_IMAGES.UNCHECKED}
                        mr="6px"
                        alt="un-check"
                        key="un-check"
                      />
                    )}

                    <Text fontSize="20px" fontWeight="700">
                      09:00
                    </Text>
                  </View>
                </Button>
                <Button onPress={() => onPress1(1)}>
                  <View
                    flexDirection="row"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    {check1[1] ? (
                      <Image
                        source={MY_IMAGES.CHECKED}
                        mr="6px"
                        alt="check"
                        key="check"
                      />
                    ) : (
                      <Image
                        source={MY_IMAGES.UNCHECKED}
                        mr="6px"
                        alt="un-check"
                        key="un-check"
                      />
                    )}
                    <Text fontSize="20px" fontWeight="700">
                      10:00
                    </Text>
                  </View>
                </Button>
              </View>
            </View>
          </View>
          <View flexDirection="row" justifyContent="space-between">
            <Button
              w="166px"
              h="45px"
              bgColor="#7B61FF"
              borderRadius="5px"
              onPress={() => dispatch(modalSliceAction.toggleModal('commute'))}
            >
              <Text fontSize="15px" fontWeight="700" color="white">
                출근 체크 하기
              </Text>
            </Button>

            <Button w="166px" h="45px" bgColor="#D1D4DD" borderRadius="5px">
              <Text fontSize="15px" fontWeight="700" color="white">
                퇴근 체크 하기
              </Text>
            </Button>
          </View>
        </View>
        <CommuteModal />
      </CommonLayout>
    </>
  );
};

export default HomeScreen;
