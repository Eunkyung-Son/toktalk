import React from 'react';
import { useDispatch } from 'react-redux';

import { signupSliceAction } from '@features/Signup/signupSlice';

import useEmailValidationSchema from '../_hooks/useEmailValidationSchema';
import EmailValidationContentView from './EmailValidationContent.view';

function EmailValidationContent() {
  const dispatch = useDispatch();

  const formData = useEmailValidationSchema();
  const { handleSubmit, setError } = formData;

  const onSubmit = handleSubmit(({ email }) => {
    dispatch(
      signupSliceAction.setSingnupStepInfo({
        step: 3,
        range: 75,
      }),
    );
    console.log(`submitted: ${email}`);
  });

  return <EmailValidationContentView formData={formData} onPress={onSubmit} />;
}

export default EmailValidationContent;
