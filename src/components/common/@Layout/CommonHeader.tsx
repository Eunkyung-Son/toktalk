import React from 'react';
import { Pressable } from 'react-native';

import { Box, HStack, Image, Text } from 'native-base';

import { MY_IMAGES } from '@generated/images/images';

interface CommonHeaderProps {
  text?: string | number;
  isBackButton?: boolean;
  isCloseButton?: boolean;
  onPress?: () => void;
  px?: string | number;
}
function CommonHeader({
  text,
  isBackButton,
  isCloseButton = false,
  px,
  onPress,
}: CommonHeaderProps) {
  return (
    <HStack space={0} justifyContent="space-between" color="white" px={px}>
      {isBackButton ? (
        <Image
          source={MY_IMAGES.LOGIN.LEFT_ARROW_ICON}
          w="24px"
          h="24px"
          alt="left-arrow-icon"
        />
      ) : (
        <EmptyBox />
      )}
      <Text fontSize="lg" lineHeight="lg" fontWeight="bold">
        {text}
      </Text>
      {isCloseButton ? (
        <Pressable onPress={onPress}>
          <Image source={MY_IMAGES.X_ICON} w="24px" h="24px" alt="close-icon" />
        </Pressable>
      ) : (
        <EmptyBox />
      )}
    </HStack>
  );
}

export function EmptyBox() {
  return <Box w="24px" h="24px" />;
}

export default CommonHeader;
