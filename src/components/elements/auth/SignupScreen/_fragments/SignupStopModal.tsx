// import React from 'react';
// import { useDispatch } from 'react-redux';

// import { modalSliceAction } from '@features/Modal/modalSlice';
// import { signupSliceAction } from '@features/Signup/signupSlice';
// import useAppStore from '@features/useAppStore';

// import ModalLayout from '@components/common/@Layout/ModalLayout';
// import { AuthStackParamList } from '@components/elements/type';

// import { CommonActions } from '@react-navigation/core';
// import { StackNavigationProp } from '@react-navigation/stack';

// interface SignupNavigationProps {
//   navigation: StackNavigationProp<AuthStackParamList, 'Signup'>;
// }

// function SignupStopModal({ navigation }: SignupNavigationProps) {
//   const dispatch = useDispatch();
//   const isOpenModal = useAppStore((store) => store.MODAL.isOpenModal);

//   const handleClose = () => {
//     dispatch(modalSliceAction.toggleModal(''));
//   };

//   const handleOk = () => {
//     handleClose();
//     dispatch(signupSliceAction.resetSignupInfo());
//     navigation.dispatch(
//       CommonActions.reset({
//         index: 0,
//         routes: [{ name: 'StartLoginSignup' }],
//       }),
//     );
//   };

//   return (
//     <ModalLayout
//       isOpen={isOpenModal === 'signup'}
//       onOk={handleOk}
//       onClose={handleClose}
//       title={'회원가입을 그만하시겠습니까?'}
//       subTitle={'하고'}
//       subTitleBold={'계속 가입'}
//       nextLineSubTitle={'다양한 기념일 경험을 공유하세요!'}
//       closeBtnText={'그만하기'}
//       okBtnText={'계속 가입하기'}
//       twoButton
//     />
//   );
// }

// export default SignupStopModal;

export default '';
