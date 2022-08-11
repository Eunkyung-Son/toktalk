import { UseFormProps, useForm } from 'react-hook-form';

import * as yup from 'yup';

import { yupResolver } from '@hookform/resolvers/yup';

export type FormDataType = {
  password: string;
  passwordConfirm: string;
};

export const pwdValidationSchema = yup.object().shape({
  password: yup
    .string()
    .required('비밀번호를 입력해주세요')
    .matches(
      /^(?=.*[a-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      '숫자, 문자, 특수문자를 포함해야 합니다.',
    )
    .min(8, '최소 길이는 8자 입니다.'),
  passwordConfirm: yup
    .string()
    .required()
    .oneOf([yup.ref('password'), null], '입력한 비밀번호와 일치하지 않습니다'),
});

const usePwdValidationForm = (options?: UseFormProps<FormDataType>) => {
  return useForm<FormDataType>({
    resolver: yupResolver(pwdValidationSchema),
    mode: 'onChange',
    ...options,
  });
};

export default usePwdValidationForm;
