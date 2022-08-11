import React from 'react';
import { useDispatch } from 'react-redux';

import { modalSliceAction } from '@features/Modal/modalSlice';
import { signupSliceAction } from '@features/Signup/signupSlice';

import ModalLayout from '@components/common/@Layout/ModalLayout';

import { CommonActions, useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import { useAppStore } from '@features/useAppStore';

function CommuteModal() {
  const navigation = useNavigation<any>();
  const dispatch = useDispatch();
  const isOpenModal = useAppStore((store) => store.MODAL.isOpenModal);

  const handleClose = () => {
    dispatch(modalSliceAction.toggleModal(''));
    navigation.navigate('CommuteTab', {
      screen: 'Roulette',
    });
    // navigation.dispatch(
    //   CommonActions.reset({
    //     index: 0,
    //     routes: [{ name: 'Roulette' }],
    //   }),
    // );
  };

  const handleOk = () => {
    handleClose();
    dispatch(signupSliceAction.resetSignupInfo());
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'StartLoginSignup' }],
      }),
    );
  };

  return (
    <ModalLayout
      isOpen={isOpenModal === 'commute'}
      onOk={handleOk}
      onClose={handleClose}
      title={'출근처리되었습니다!'}
      subTitle={'룰렛 페이지로 이동합니다.'}
      subTitleBold={''}
      nextLineSubTitle={''}
      closeBtnText={'확인'}
      okBtnText={'계속 가입하기'}
      twoButton
    />
  );
}

export default CommuteModal;
