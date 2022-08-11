import React from 'react';
import { UseFormReturn } from 'react-hook-form';

import { Box, IPressableProps, Image, Input, Pressable } from 'native-base';

import BottomBotton from '@components/common/BottomButton';
import FormHelper from '@components/common/FormHelper';

import { FormDataType } from '../_hooks/useLoginFormSchema';
import { MY_IMAGES } from '@generated/images/images';

interface LoginFormProps extends IPressableProps {
  formData: UseFormReturn<FormDataType>;
}

// TODO: 입력하신 정보와 일치하는 계정이 없어요
const LoginFormContentView = ({
  formData: {
    formState: { errors },
    watch,
    control,
  },
  onPress,
}: LoginFormProps) => {
  const [show, setShow] = React.useState(false);
  const checkEmailLength = watch('email')?.length;
  const checkPwdLength = watch('password')?.length;
  const successEmailValidation = checkEmailLength && !errors?.email?.message;
  const successLoginValidation =
    checkEmailLength &&
    !errors?.email?.message &&
    checkPwdLength &&
    !errors?.password?.message;

  return (
    <Box mt="26px">
      <FormHelper
        name="email"
        control={control}
        mb="10px"
        label="이메일"
        errorText={errors.email?.message}
      >
        {({ field: { onChange } }) => {
          return (
            <Input
              onChangeText={(email) => onChange(email)}
              w="100%"
              h="50px"
              _focus={{
                borderColor: 'gray.800',
                backgroundColor: '#FFFFFF',
              }}
              placeholder="이메일 입력"
            />
          );
        }}
      </FormHelper>

      <FormHelper
        name="password"
        control={control}
        label="비밀번호"
        errorText={errors.password?.message}
      >
        {({ field: { onChange } }) => {
          return (
            <Input
              w="100%"
              h="50px"
              _focus={{
                borderColor: 'gray.800',
                backgroundColor: '#FFFFFF',
              }}
              placeholder="비밀번호 입력"
              type={show ? 'text' : 'password'}
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
        bgColor={successLoginValidation ? '#7B61FF' : 'gray.400'}
        disabled={successLoginValidation ? false : true}
        type="submit"
        onPress={onPress}
      >
        로그인
      </BottomBotton>
    </Box>
  );
};

export default LoginFormContentView;
