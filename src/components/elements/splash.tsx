import React from 'react';
import { Box, Center, Image, Text, View } from 'native-base';
import { MY_IMAGES } from '@generated/images/images';

interface Type {
  onLayoutRootView: any;
}
const SplashScreen = ({ onLayoutRootView }: Type) => {
  // 애니메이션을 추가할 수 있습니다.
  // lottie, gif, RN 내장 라이브러리 Animated 등을 활용하시면 됩니다.
  return (
    <View bgColor="red" w="100%" h="100%" color="#7B61FF">
      <Center
        flex="1"
        w="100%"
        h="100%"
        onLayout={onLayoutRootView}
        bgColor="#7B61FF"
      >
        <Image
          size={350}
          source={MY_IMAGES.MUNGMUNG}
          alt="splash_logo"
          key="cat"
        />
        <Text
          fontWeight="700"
          fontSize="48"
          lineHeight="71px"
          mt="40px"
          color="#F8F8F8"
        >
          TOKCAT
        </Text>
      </Center>
    </View>
  );
};

export default SplashScreen;
