import { UseFormProps, useForm } from 'react-hook-form';

import * as yup from 'yup';

import { yupResolver } from '@hookform/resolvers/yup';

export type FormDataType = {
  joinCode: string | number;
};

export const joinFormSchema = yup.object().shape({
  joinCode: yup
    .string()
    .required('합류코드를 입력해주세요')
    .max(6, '최대 길이는 6자 입니다.'),
});

const useJoinForm = (options?: UseFormProps<FormDataType>) => {
  return useForm<FormDataType>({
    resolver: yupResolver(joinFormSchema),
    mode: 'onChange',
    ...options,
  });
};

export default useJoinForm;
