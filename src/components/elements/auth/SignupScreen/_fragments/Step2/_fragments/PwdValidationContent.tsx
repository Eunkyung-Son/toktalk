import React from 'react';
import { useDispatch } from 'react-redux';

import { signupSliceAction } from '@features/Signup/signupSlice';

import usePwdValidationSchema from '../_hooks/usePwdValidationSchema';
import PwdValidationContentView from './PwdValidationContent.view';
import { useAppStore } from '@features/useAppStore';

function EmailValidationContent() {
  const dispatch = useDispatch();
  const signupFormData = useAppStore((state) => state.SIGNUP.signupFormData);

  const formData = usePwdValidationSchema();
  const { handleSubmit } = formData;

  const onSubmit = handleSubmit(({ password, passwordConfirm }) => {
    dispatch(
      signupSliceAction.setSingnupStepInfo({
        step: 3,
        range: 100,
      }),
    );
    dispatch(signupSliceAction.setEmailAuthenticated(false));
    dispatch(
      signupSliceAction.setSignupFormData({
        ...signupFormData,
        password,
        passwordConfirm,
      }),
    );
    console.log(`submitted: ${password}, ${passwordConfirm}`);
  });

  return <PwdValidationContentView formData={formData} onPress={onSubmit} />;
}

export default EmailValidationContent;
