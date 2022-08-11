import React from 'react';
import { useDispatch } from 'react-redux';

import { signupSliceAction } from '@features/Signup/signupSlice';

import { StackNavigationProp } from '@react-navigation/stack';
import { setToken } from '@utils/localStorage/token';

import usePwdValidationSchema from '../_hooks/useNicknameValidationSchema';
import NicknameValidationContentView from './NicknameValidationContent.view';
import { useAppStore } from '@features/useAppStore';

interface SignupNavigationProps {
  navigation: StackNavigationProp<any>;
}

function NicknameValidationContent({ navigation }: SignupNavigationProps) {
  const dispatch = useDispatch();
  const signupFormData = useAppStore((state) => state.SIGNUP.signupFormData);

  const formData = usePwdValidationSchema();
  const { handleSubmit, setError } = formData;

  const onSubmit = handleSubmit(({ nickname }) => {
    console.log(`submitted: ${nickname}`);
    const { email, emailToken, password, passwordConfirm } = signupFormData;
    console.log(signupFormData);

    dispatch(signupSliceAction.setEmailAuthenticated(true));
    navigation.navigate('HomeTabs');
  });

  return (
    <NicknameValidationContentView formData={formData} onPress={onSubmit} />
  );
}

export default NicknameValidationContent;
