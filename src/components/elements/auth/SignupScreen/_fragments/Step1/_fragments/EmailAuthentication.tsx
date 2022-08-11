import React from 'react';
import { useDispatch } from 'react-redux';

import { Box, Divider, Text } from 'native-base';

import { signupSliceAction } from '@features/Signup/signupSlice';
import { useAppStore } from '@features/useAppStore';

function EmailSendout() {
  const dispatch = useDispatch();
  const emailVerifierInfo = useAppStore(
    (store) => store.SIGNUP.emailVerifierInfo,
  );

  React.useEffect(() => {
    if (!emailVerifierInfo) return;
    const ids = setInterval(() => {
      dispatch(
        signupSliceAction.setSingnupStepInfo({
          step: 3,
          range: 75,
        }),
      );
      dispatch(signupSliceAction.setEmailAuthenticated(true));
    }, 3000);
    return () => clearInterval(ids);
  }, [emailVerifierInfo]);

  return (
    <Box mt="30px">
      <Text fontSize="lg" lineHeight="lg" fontWeight="extrabold">
        인증 이메일이 발송되었습니다!
      </Text>
      <Text
        mt="15px"
        color="gray.700"
        fontWeight="medium"
        fontSize="md"
        lineHeight="md"
      >
        인증 메일이 <Text color="black">{emailVerifierInfo.email}</Text>(으)로
        발송되었습니다. 이메일의 {`'인증하기'`} 버튼을 클릭해주세요
      </Text>
      <Divider my="2" mt="30px" color="gray.200" />
      <Text fontSize="sm" lineHeight="sm" color="gray.600">
        이메일을 받지 못하셨나요?
      </Text>
      <Text fontSize="sm" lineHeight="sm" color="gray.600">
        스팸메일함 확인 또는 <Text underline>인증 메일 재발송</Text>
      </Text>
    </Box>
  );
}

export default EmailSendout;
