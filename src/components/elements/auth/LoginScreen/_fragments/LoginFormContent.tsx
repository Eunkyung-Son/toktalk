import React from 'react';

// import { usePostUserLoginMutation } from '@apis/user/UserApi.mutation';

// import { AuthStackParamList } from '@components/elements/type';

import { StackNavigationProp } from '@react-navigation/stack';
import { setToken } from '@utils/localStorage/token';

import useLoginFormSchema from '../_hooks/useLoginFormSchema';
import LoginFormContentView from './LoginFormContent.view';

interface LoginNavigationProps {
  navigation: any;
}

const LoginFormContent = ({ navigation }: LoginNavigationProps) => {
  const formData = useLoginFormSchema();
  const { handleSubmit, setError } = formData;

  const onSubmit = handleSubmit(({ email, password }) => {
    navigation.navigate('HomeTabs');
  });
  return <LoginFormContentView formData={formData} onPress={onSubmit} />;
};

export default LoginFormContent;
