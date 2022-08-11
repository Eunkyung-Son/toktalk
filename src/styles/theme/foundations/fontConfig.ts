/**
 * react-native.config.js 내에서 폰트 파일을 조회하여
 * 사용할 폰트를 정의합니다.
 *
 * ltalic 글꼴을 사용해야 할 경우 italic에 폰트명을 정의합니다.
 *
 *
 * @see https://docs.nativebase.io/next/customizing-fonts
 *
 * */

const fontConfig = {
  Pretendard: {
    100: {
      normal: 'Pretendard-Thin',
    },
    200: {
      normal: 'Pretendard-ExtraLight',
    },
    300: {
      normal: 'Pretendard-Light',
    },
    400: {
      normal: 'Pretendard-Regular',
    },
    500: {
      normal: 'Pretendard-Medium',
    },
    600: {
      normal: 'Pretendard-SemiBold',
    },
    700: {
      normal: 'Pretendard-Bold',
    },
    800: {
      normal: 'Pretendard-ExtraBold',
    },
    900: {
      normal: 'Pretendard-Bold',
    },
  },
};

export default fontConfig;
