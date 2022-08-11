import React from 'react';

import { Button, Center, HStack, Modal, Text } from 'native-base';

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
  const onPress = () => {
    onClose();
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Modal.Content maxWidth="400px" w="300px">
        {isCloseBtn && <Modal.CloseButton />}
        <Modal.Body mt="20px">
          <Center>
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
              fontSize="md"
              lineHeight="md"
              fontWeight="400"
              color="#757983"
            >
              <Text>{subTitleBold}</Text>
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
          </Center>
        </Modal.Body>
        <Center mt="10px">
          <HStack flexDir="row" w="100%" space="10px" bgColor="#7B61FF">
            <Button
              _text={{
                fontSize: 'md',
                lineHeight: 'md',
                color: 'white',
                fontWeight: 'extrabold',
              }}
              colorScheme="blueGray"
              h="50px"
              w="100%"
              //   bgColor="gray.300"
              onPress={onPress}
            >
              {closeBtnText}
            </Button>
          </HStack>
        </Center>
      </Modal.Content>
    </Modal>
  );
}

export default ModalLayout;
