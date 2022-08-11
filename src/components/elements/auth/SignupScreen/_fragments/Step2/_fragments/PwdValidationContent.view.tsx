import React from 'react';
import { UseFormReturn } from 'react-hook-form';

import { Box, IPressableProps, Image, Input, Pressable } from 'native-base';

import BottomBotton from '@components/common/BottomButton';
import FormHelper from '@components/common/FormHelper';

import { MY_IMAGES } from '@generated/images/images';

import { FormDataType } from '../_hooks/usePwdValidationSchema';

interface PwdValidationFormProps extends IPressableProps {
  formData: UseFormReturn<FormDataType>;
}

// TODO: 입력하신 정보와 일치하는 계정이 없어요
const PwdValidationFormContentView = ({
  formData: {
    formState: { errors },
    control,
    watch,
  },
  onPress,
}: PwdValidationFormProps) => {
  const [show, setShow] = React.useState(false);
  const checkPwdLength = watch('password')?.length;
  const checkPwdConfirmLength = watch('passwordConfirm')?.length;
  const successPwdValidation =
    checkPwdLength &&
    checkPwdConfirmLength &&
    !errors.password?.message &&
    !errors.passwordConfirm?.message;

  return (
    <Box mt="26px">
      <FormHelper
        name="password"
        control={control}
        errorText={errors.password?.message}
      >
        {({ field: { onChange } }) => {
          return (
            <Input
              w="100%"
              h="50px"
              placeholder="비밀번호 입력"
              type={show ? 'text' : 'password'}
              _focus={{
                borderColor: 'gray.800',
                backgroundColor: '#FFFFFF',
              }}
              onChangeText={(password) => onChange(password)}
              InputRightElement={
                show ? (
                  <Pressable onPress={() => setShow(false)} m="13px">
                    <Image
                      alt="password-show"
                      key="password-show"
                      source={MY_IMAGES.LOGIN.EYE_ICON}
                      w="24px"
                      h="24px"
                    />
                  </Pressable>
                ) : (
                  <Pressable onPress={() => setShow(true)} m="13px">
                    <Image
                      alt="password-non-show"
                      key="password-non-show"
                      source={MY_IMAGES.LOGIN.CLOSE_EYE_ICON}
                      w="22px"
                      h="24px"
                    />
                  </Pressable>
                )
              }
            />
          );
        }}
      </FormHelper>

      <FormHelper
        mt="15px"
        name="passwordConfirm"
        control={control}
        errorText={errors.passwordConfirm?.message}
      >
        {({ field: { onChange } }) => {
          return (
            <Input
              w="100%"
              h="50px"
              placeholder="비밀번호 확인 입력"
              type={show ? 'text' : 'password'}
              _focus={{
                borderColor: 'gray.800',
                backgroundColor: '#FFFFFF',
              }}
              onChangeText={(password) => onChange(password)}
              InputRightElement={
                show ? (
                  <Pressable onPress={() => setShow(false)} m="13px">
                    <Image
                      alt="password-show"
                      key="password-show"
                      source={MY_IMAGES.LOGIN.EYE_ICON}
                      w="24px"
                      h="24px"
                    />
                  </Pressable>
                ) : (
                  <Pressable onPress={() => setShow(true)} m="13px">
                    <Image
                      alt="password-non-show"
                      key="password-non-show"
                      source={MY_IMAGES.LOGIN.CLOSE_EYE_ICON}
                      w="22px"
                      h="24px"
                    />
                  </Pressable>
                )
              }
            />
          );
        }}
      </FormHelper>

      <BottomBotton
        mt="20px"
        bgColor={successPwdValidation ? 'primary.500' : 'gray.400'}
        disabled={successPwdValidation ? false : true}
        type="submit"
        onPress={onPress}
      >
        확인
      </BottomBotton>
    </Box>
  );
};

export default PwdValidationFormContentView;
