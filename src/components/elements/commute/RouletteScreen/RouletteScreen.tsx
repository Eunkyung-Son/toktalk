import React, { useEffect, useState } from 'react';
import { View, Text, Center, Image, Box, Button } from 'native-base';
import { MY_IMAGES } from '@generated/images/images';
import { Animated, TouchableOpacity, Easing, Alert } from 'react-native';
import RouletteModalLayout from '@components/common/@Layout/RouletteModalLayout';
import { useAppStore } from '@features/useAppStore';
import { useDispatch } from 'react-redux';
import { modalSliceAction } from '@features/Modal/modalSlice';
import { signupSliceAction } from '@features/Signup/signupSlice';
import { useNavigation, CommonActions } from '@react-navigation/native';
import RouletteModal from './RouletteModal';

const RouletteScreen = () => {
  const [randomDeg, setRandomDeg] = React.useState(0);
  const rotateValue = React.useRef(new Animated.Value(0)).current;
  const navigation = useNavigation<any>();
  const isOpenModal = useAppStore((store) => store.MODAL.isOpenModal);
  const [worked, setWorked] = useState(false);
  const dispatch = useDispatch();
  const rand = (start: number, end: number) => {
    return Math.floor(Math.random() * (end - start + 1) + start);
  };

  const rotate = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', `${randomDeg}deg`],
  });

  const startAnimation = () => {
    rotateValue.setValue(0);
    Animated.timing(rotateValue, {
      toValue: 1,
      duration: 2000,
      easing: Easing.inOut(Easing.ease), // Easing is an additional import from react-native
      useNativeDriver: true, // To make use of native driver for performance
    }).start();

    const randomCount = rand(3, 5);
    const randomDeg = rand(0, 360);
    setRandomDeg(randomCount * 360 + randomDeg);
    setTimeout(() => {
      dispatch(modalSliceAction.toggleModal('roulette'));
    }, 2000);
  };

  const handleClose = () => {
    dispatch(modalSliceAction.toggleModal(''));
    navigation.navigate('CommuteTab', {
      screen: 'Roulette',
    });
    // navigation.dispatch(
    //   CommonActions.reset({
    //     index: 0,
    //     routes: [{ name: 'Roulette' }],
    //   }),
    // );
  };

  const handleOk = () => {
    handleClose();
    dispatch(signupSliceAction.resetSignupInfo());
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'StartLoginSignup' }],
      }),
    );
  };
  // useEffect(() => {
  //   const randomCount = rand(3, 5);
  //   const randomDeg = rand(0, 360);
  //   setRandomDeg(randomCount);
  // }, []);
  return (
    <View
      bgColor="#7B61FF"
      flex={1}
      // h="100%"
      // w="100%"
      // justifyContent="center"
      alignItems="center"
    >
      <Text fontSize="16px" color="gray.200" mt="20px">
        출근 룰렛돌리고{' '}
        <Text fontSize="16px" color="white" fontWeight="700">
          최대 100만원
        </Text>{' '}
        상당의
      </Text>
      <Text fontSize="16px" color="gray.200" mb="12px">
        상품을 받아가세요!
      </Text>
      <Text
        fontSize="45px"
        fontWeight="800"
        color="white"
        lineHeight="45px"
        mb="30px"
      >
        똑캣 룰렛
      </Text>
      {/* 룰렛 */}
      <Center position="relative" justifyContent="flex-start">
        <Image
          mt="-20px"
          position="absolute"
          zIndex={1}
          source={MY_IMAGES.ROULETEE_ARROW}
          alt="img"
        />
        <TouchableOpacity onPress={startAnimation}>
          <Animated.View style={{ transform: [{ rotate: rotate }] }}>
            <Image source={MY_IMAGES.ROULETTE} alt="img" />
          </Animated.View>
        </TouchableOpacity>
      </Center>
      <View w="100%" justifyContent="flex-end" flexDirection="row" mt="47px">
        <Image source={MY_IMAGES.RULETTE_BOTTOM} alt="test" />
      </View>
      <RouletteModal />
    </View>
  );
};

export default RouletteScreen;
