import React from 'react';
import { useDispatch } from 'react-redux';

import { Box, Center, Progress } from 'native-base';

// import { modalSliceAction } from '@features/Modal/modalSlice';

import CommonHeader from '@components/common/@Layout/CommonHeader';
import CommonLayout from '@components/common/@Layout/CommonLayout';

import { StackNavigationProp } from '@react-navigation/stack';

// import SignupStopModal from './_fragments/SignupStopModal';
import EmailAuthentication from './_fragments/Step1/_fragments/EmailAuthentication';
import EmailValidationContent from './_fragments/Step1/_fragments/EmailValidationContent';
import PwdValidation from './_fragments/Step2/_fragments/PwdValidationContent';
import NicknameValidationContent from './_fragments/Step3/_fragments/NicknameValidationContent';
import { useAppStore } from '@features/useAppStore';
import SelectAuthentication from './_fragments/Step4/_fragments/SelectAuthentication';
import JoinCodeContentView from './_fragments/Step4/_fragments/JoinCodeContent.view';
import JoinCodeContent from './_fragments/Step4/_fragments/JoinCodeContent';

interface SignupNavigationProps {
  navigation: StackNavigationProp<any>;
}

const SignupScreen = ({ navigation }: SignupNavigationProps) => {
  const dispatch = useDispatch();
  const signupStep = useAppStore((store) => store.SIGNUP.signupStepInfo);
  const role = useAppStore((store) => store.SIGNUP.role);
  const emailAuthenticated = useAppStore(
    (store) => store.SIGNUP.emailAuthenticated,
  );
  const { step, range } = signupStep;

  const handleStopSignup = () => {
    // dispatch(modalSliceAction.toggleModal('signup'));
  };

  return (
    <CommonLayout p="16px" bgColor="#FFFFFF">
      <CommonHeader
        text={'회원가입'}
        isBackButton={step === 1 && emailAuthenticated === null && true}
        isCloseButton={true}
        onPress={() => handleStopSignup()}
      />
      <Center w="100%" mt="16px">
        <Box w="100%">
          <Progress
            h="2px"
            value={range}
            bg="gray.300"
            _filledTrack={{
              bg: '#7B61FF',
            }}
          />
        </Box>
      </Center>
      {step === 1 ? (
        role === null ? (
          <SelectAuthentication />
        ) : (
          <JoinCodeContent />
        )
      ) : step === 2 ? (
        emailAuthenticated === null ? (
          <EmailValidationContent />
        ) : (
          <EmailAuthentication />
        )
      ) : step === 3 ? (
        <PwdValidation />
      ) : (
        <NicknameValidationContent navigation={navigation} />
      )}

      {/* <SignupStopModal navigation={navigation} /> */}
    </CommonLayout>
  );
};

export default SignupScreen;
