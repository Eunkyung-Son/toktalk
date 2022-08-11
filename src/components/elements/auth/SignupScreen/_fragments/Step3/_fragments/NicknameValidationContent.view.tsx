import React from 'react';
import { UseFormReturn } from 'react-hook-form';

import { Box, IPressableProps, Image, Input } from 'native-base';

import BottomBotton from '@components/common/BottomButton';
import FormHelper from '@components/common/FormHelper';

import { MY_IMAGES } from '@generated/images/images';

import { FormDataType } from '../_hooks/useNicknameValidationSchema';

interface NicknameValidationFormProps extends IPressableProps {
  formData: UseFormReturn<FormDataType>;
}

// TODO: 입력하신 정보와 일치하는 계정이 없어요
const NicknameValidationFormContentView = ({
  formData: {
    formState: { errors },
    control,
    watch,
  },
  onPress,
}: NicknameValidationFormProps) => {
  const checkNicknameLength = watch('nickname')?.length;
  const successNicknameValidaton =
    checkNicknameLength && !errors.nickname?.message;

  return (
    <Box mt="26px">
      <FormHelper
        name="nickname"
        control={control}
        errorText={errors.nickname?.message}
      >
        {({ field: { onChange } }) => {
          return (
            <Input
              w="100%"
              h="50px"
              placeholder="닉네임 입력 (최대 10자)"
              _focus={{
                borderColor: 'gray.800',
                backgroundColor: '#FFFFFF',
              }}
              onChangeText={(nickname) => onChange(nickname)}
              InputRightElement={
                successNicknameValidaton ? (
                  <Image
                    alt="password-show"
                    key="password-show"
                    source={MY_IMAGES.LOGIN.CHECK_ICON}
                    w="24px"
                    h="24px"
                    m="13px"
                  />
                ) : undefined
              }
            />
          );
        }}
      </FormHelper>

      <BottomBotton
        mt="20px"
        bgColor={successNicknameValidaton ? 'primary.500' : 'gray.400'}
        disabled={successNicknameValidaton ? false : true}
        type="submit"
        onPress={onPress}
      >
        가입 완료
      </BottomBotton>
    </Box>
  );
};

export default NicknameValidationFormContentView;
