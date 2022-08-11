import React from 'react';
import { useDispatch } from 'react-redux';

import { modalSliceAction } from '@features/Modal/modalSlice';
import { signupSliceAction } from '@features/Signup/signupSlice';

import ModalLayout from '@components/common/@Layout/ModalLayout';

import { CommonActions, useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import { useAppStore } from '@features/useAppStore';

function RouletteModal() {
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
      isOpen={isOpenModal === 'roulette'}
      onOk={handleOk}
      onClose={handleClose}
      title={'축!'}
      subTitle={'쿠폰함에서 쿠폰을 확인해 주세요'}
      subTitleBold={'당첨 축하드립니다!'}
      nextLineSubTitle={''}
      closeBtnText={'확인'}
      okBtnText={'계속 가입하기'}
      twoButton
    />
  );
}

export default RouletteModal;
