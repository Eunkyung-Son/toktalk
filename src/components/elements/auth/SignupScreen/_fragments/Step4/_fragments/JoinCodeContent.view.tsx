import BottomBotton from '@components/common/BottomButton';
import FormHelper from '@components/common/FormHelper';
import { Box, Input, IPressableProps, Text } from 'native-base';
import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import { FormDataType } from '../_hooks/useJoinFormSchema';

interface JoinValidationFormProps extends IPressableProps {
  formData: UseFormReturn<FormDataType>;
}
function JoinCodeContentView({
  formData: {
    formState: { errors },
    control,
    watch,
  },
  onPress,
}: JoinValidationFormProps) {
  const checkJoinCodeLength = (watch('joinCode') as string)?.length === 6;
  const successJoinCodeValidation =
    checkJoinCodeLength && !errors?.joinCode?.message;
  return (
    <Box>
      <Text fontSize="20px" lineHeight="29px" fontWeight={'700'} mt="50px">
        합류코드를 입력해주세요
      </Text>
      <Text fontSize="16px" lineHeight="28px" color="#757983" mt="6px">
        합류코드(6자리 숫자)를 입력하고 직장에 합류하세요
      </Text>
      <FormHelper
        name="joinCode"
        control={control}
        mb="10px"
        errorText={errors.joinCode?.message}
      >
        {({ field: { onChange } }) => {
          return (
            <Input
              onChangeText={(joinCode) => onChange(joinCode)}
              w="100%"
              h="50px"
              mt="15px"
              placeholder="예: 435326"
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
        bgColor={successJoinCodeValidation ? '#7B61FF' : 'gray.400'}
        type="submit"
        disabled={successJoinCodeValidation ? false : true}
        onPress={onPress}
      >
        확인
      </BottomBotton>
    </Box>
  );
}

export default JoinCodeContentView;
