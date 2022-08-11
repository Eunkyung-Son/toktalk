import React from 'react';
import { View, Text, Image } from 'native-base';
import { MY_IMAGES } from '@generated/images/images';
import {
  Animated,
  TouchableOpacity,
  Easing,
  ImageBackground,
} from 'react-native';

interface RouletteScreenProps {}

function RouletteScreen({}: RouletteScreenProps) {
  const spinValue = new Animated.Value(0);
  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View
      bgColor="#7B61FF"
      h="100%"
      w="100%"
      // justifyContent="center"
      alignItems="center"
    >
      <View mt="20px" alignItems="center">
        <Text fontSize="16px" color="gray.200">
          출근 룰렛돌리고{' '}
          <Text fontSize="16px" color="white" fontWeight="700">
            최대 100만원
          </Text>{' '}
          상당의
        </Text>
        <Text fontSize="16px" color="gray.200" mb="12px">
          상품을 받아가세요!
        </Text>
        <Text fontSize="45px" fontWeight="800" color="white" lineHeight="45px">
          똑캣 룰렛
        </Text>
        {/* 룰렛 */}
        <View position="relative">
          <View
            width="400px"
            height="440px"
            borderRadius="350px"
            overflow="hidden"
            ml="40px"
          >
            <View w="90%" h="90%">
              <TouchableOpacity
                onPress={() => {
                  Animated.loop(
                    Animated.timing(spinValue, {
                      toValue: 1,
                      duration: 500,
                      easing: Easing.inOut(Easing.ease), // Easing is an additional import from react-native
                      useNativeDriver: true, // To make use of native driver for performance
                    }),
                  ).start();
                  setTimeout(() => {
                    Animated.loop(
                      Animated.timing(spinValue, {
                        toValue: 1,
                        duration: 500,
                        easing: Easing.inOut(Easing.ease), // Easing is an additional import from react-native
                        useNativeDriver: true, // To make use of native driver for performance
                      }),
                    ).stop();
                  }, 4000);
                }}
              >
                <Animated.View style={{ transform: [{ rotate: spin }] }}>
                  <ImageBackground
                    style={{
                      width: '100%',
                      height: '100%',
                    }}
                    source={MY_IMAGES.RULETTE}
                  />
                </Animated.View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View w="100%" justifyContent="flex-end" flexDirection="row">
          <Image source={MY_IMAGES.RULETTE_BOTTOM} alt="test" />
        </View>
      </View>
    </View>
  );
}

export default RouletteScreen;
