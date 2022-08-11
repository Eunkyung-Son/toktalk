import React from 'react';
import { UseFormReturn } from 'react-hook-form';

import { Box, IPressableProps, Input, Text } from 'native-base';

import BottomBotton from '@components/common/BottomButton';
import FormHelper from '@components/common/FormHelper';

import { FormDataType } from '../_hooks/useEmailValidationSchema';

interface EmailValidationFormProps extends IPressableProps {
  formData: UseFormReturn<FormDataType>;
}
function EmailValidationContentView({
  formData: {
    formState: { errors },
    control,
    watch,
  },
  onPress,
}: EmailValidationFormProps) {
  const checkEmailLength = watch('email')?.length;
  const successEmailValidation = checkEmailLength && !errors?.email?.message;

  return (
    <Box mt="30px">
      <Text fontSize="lg" lineHeight="lg" fontWeight="extrabold">
        이메일을 입력하세요
      </Text>
      <FormHelper
        name="email"
        control={control}
        mb="10px"
        errorText={errors.email?.message}
      >
        {({ field: { onChange } }) => {
          return (
            <Input
              onChangeText={(email) => onChange(email)}
              w="100%"
              h="50px"
              mt="15px"
              placeholder="회사 이메일 입력"
              _focus={{
                borderColor: 'gray.800',
                backgroundColor: '#FFFFFF',
              }}
            />
          );
        }}
      </FormHelper>
      <BottomBotton
        mt="20px"
        bgColor={successEmailValidation ? '#7B61FF' : 'gray.400'}
        type="submit"
        disabled={successEmailValidation ? false : true}
        onPress={onPress}
      >
        인증하기
      </BottomBotton>
    </Box>
  );
}

export default EmailValidationContentView;
