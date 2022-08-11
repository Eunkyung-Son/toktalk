import { UseFormProps, useForm } from 'react-hook-form';

import * as yup from 'yup';
import { addMethod } from 'yup';

import { yupResolver } from '@hookform/resolvers/yup';

export type FormDataType = {
  nickname: string;
};

export const nicknameValidationSchema = yup.object().shape({
  nickname: yup
    .string()
    .required('닉네임을 입력해주세요')
    .max(10, '최대 길이는 10자 입니다.'),
});

const useNicknameValidationForm = (options?: UseFormProps<FormDataType>) => {
  return useForm<FormDataType>({
    resolver: yupResolver(nicknameValidationSchema),
    mode: 'onChange',
    ...options,
  });
};

export default useNicknameValidationForm;
