import React from 'react';

import { Button, Center, HStack, Modal, Text, View } from 'native-base';
import { useNavigation } from '@react-navigation/native';

interface ModalLayoutProps {
  isOpen?: boolean;
  onClose?: any;
  isCloseBtn?: boolean;
  onOk?: () => void;
  twoButton?: boolean;
  title?: string;
  subTitle?: string;
  subTitleBold?: string;
  nextLineSubTitle?: string;
  closeBtnText?: string;
  okBtnText?: string;
}

function ModalLayout({
  isOpen,
  onClose,
  isCloseBtn,
  onOk,
  twoButton,
  title,
  subTitle,
  subTitleBold,
  nextLineSubTitle,
  closeBtnText,
  okBtnText,
}: ModalLayoutProps) {
  const navigation = useNavigation<any>();
  const onPress = () => {
    // navigation.navigate('Roulette');
    onClose();
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Modal.Content maxWidth="400px" w="300px">
        {isCloseBtn && <Modal.CloseButton />}
        <Modal.Body mt="20px">
          <Center>
            <View flexDirection="column" alignItems="center">
              <Text
                fontSize="lg"
                lineHeight="lg"
                fontWeight="extrabold"
                color="#7B61FF"
              >
                {title}
              </Text>

              <Text
                mt="10px"
                fontSize="lg"
                lineHeight="lg"
                fontWeight="extrabold"
                color="#7B61FF"
              >
                {subTitleBold}
              </Text>

              <Text color="gray.700" fontSize="14px">
                {subTitle}
              </Text>

              <Text
                fontSize="md"
                lineHeight="md"
                fontWeight="400"
                color="#1A1A1A"
              >
                {nextLineSubTitle}
              </Text>
            </View>
          </Center>
        </Modal.Body>
        <Center mt="10px">
          <HStack flexDir="row" w="100%" space="10px" bgColor="#7B61FF">
            <Button
              _text={{
                fontSize: 'md',
                lineHeight: 'md',
                color: '#000000',
              }}
              borderRadius="0"
              colorScheme="blueGray"
              h="50px"
              w="50%"
              bgColor="gray.300"
              onPress={onPress}
            >
              취소
            </Button>
            <Button
              _text={{
                fontSize: 'md',
                lineHeight: 'md',
                color: 'white',
                fontWeight: 'extrabold',
              }}
              colorScheme="blueGray"
              h="50px"
              w="44%"
              //   bgColor="gray.300"
              onPress={onPress}
            >
              확인
            </Button>
          </HStack>
        </Center>
      </Modal.Content>
    </Modal>
  );
}

export default ModalLayout;
