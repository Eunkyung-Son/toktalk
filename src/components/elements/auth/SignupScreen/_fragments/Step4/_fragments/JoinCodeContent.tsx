import { signupSliceAction } from '@features/Signup/signupSlice';
import { Box } from 'native-base';
import React from 'react';
import { useDispatch } from 'react-redux';
import useJoinForm from '../_hooks/useJoinFormSchema';
import JoinCodeContentView from './JoinCodeContent.view';

function JoinCodeContent() {
  const dispatch = useDispatch();

  const formData = useJoinForm();
  const { handleSubmit, setError } = formData;

  const onSubmit = handleSubmit(({ joinCode }) => {
    dispatch(signupSliceAction.setJoinCode(joinCode));
    dispatch(
      signupSliceAction.setSingnupStepInfo({
        step: 2,
        range: 50,
      }),
    );
    console.log(`submitted: ${joinCode}`);
  });
  return <JoinCodeContentView formData={formData} onPress={onSubmit} />;
}

export default JoinCodeContent;
