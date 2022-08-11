import { UseFormProps, useForm } from 'react-hook-form';

import * as yup from 'yup';

import { yupResolver } from '@hookform/resolvers/yup';

export type FormDataType = {
  email: string;
  password: string;
};

export const loginFormSchema = yup.object().shape({
  email: yup
    .string()
    .email('올바르지 않은 이메일 입니다.')
    .required('이메일을 입력해주세요'),
  password: yup
    .string()
    .required('비밀번호를 입력해주세요')
    .matches(
      /^(?=.*[a-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      '숫자, 문자, 특수문자를 포함해야 합니다.',
    )
    .min(8, '최소 길이는 8자 입니다.'),
});

const useLoginForm = (options?: UseFormProps<FormDataType>) => {
  return useForm<FormDataType>({
    resolver: yupResolver(loginFormSchema),
    mode: 'onChange',
    ...options,
  });
};

export default useLoginForm;
