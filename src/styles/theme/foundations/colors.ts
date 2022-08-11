import { getColorSchema } from '@utils/color-generator';

const Light = {
  primary: {
    50: '#F5FFFA',
    100: '#bafdde',
    200: '#7ffbc1',
    300: '#18e786',
    400: '#21D782',
    500: '#06BC67',
    600: '#048b4c',
    700: '#035931',
    800: '#063D23',
    900: '#012816',
  },
  secondary: {
    50: '#fefcf2',
    100: '#fdf5cb',
    200: '#fcf1b7',
    300: '#fbeda4',
    400: '#fae990',
    500: '#F9E57D',
    600: '#f6d634',
    700: '#d3b30a',
    800: '#8a7506',
    900: '#413703',
  },
  warning: getColorSchema('#FF6060'),
  success: getColorSchema('#4850FF'),
  gray: {
    50: '#FAFAFA',
    100: '#F7F7F7',
    200: '#F2F3F4',
    300: '#E5E7EC',
    400: '#D1D4DD',
    500: '#B8BCC8',
    600: '#8C919F',
    700: '#757983',
    800: '#4A4D55',
    900: '#292A2E',
  },
  black: '#1A1A1A',
  white: '#FFFFFF',
  background: {
    primary: '#FFFFFF',
    secondary: '#FAFAFA',
    tertiary: '#F0F0F0',
  },
  modal: '#FFFFFF',
};

const Dark = {
  primary: {
    50: '#D5E3FE',
    100: '#B8D0FF',
    200: '#8D9DE0',
    300: '#687CD8',
    400: '#5667FF',
    500: '#485BFF',
    600: '#232CE4',
    700: '#0007BB',
    800: '#00187B',
    900: '#001159',
  },
  secondary: {
    50: '#EDE8FF',
    100: '#E0DAFF',
    200: '#D5CAFF',
    300: '#BDAFFF',
    400: '#9480FF',
    500: '#755AFF',
    600: '#5B3AFF',
    700: '#411FEF',
    800: '#3100BD',
    900: '#20007B',
  },
  warning: getColorSchema('#FF6060'),
  success: getColorSchema('#4850FF'),
  gray: {
    50: '#292A2E',
    100: '#313236',
    200: '#39393D',
    300: '#4A4D55',
    400: '#5C606A',
    500: '#757983',
    600: '#8C919F',
    700: '#B8BCC8',
    800: '#D1D4DD',
    900: '#DFE1E7',
  },
  black: '#E5E7EC',
  white: '#232325',
  background: {
    primary: '#FFFFFF',
    secondary: '#FAFAFA',
    tertiary: '#F0F0F0',
  },
  modal: '#FFFFFF',
};

const Brand = {
  kakao: {
    500: '#FFDE32',
    600: '#F5D322',
    700: '#EFCC1A',
  },
  naver: {
    500: '#20CF5D',
    600: '#17c554',
    700: '#14bf50',
  },
  facebook: {
    500: '#1877F3',
    600: '#1874eb',
    700: '#146cdf',
  },
  google: {
    500: '#FFFFFF',
    600: '#F5F5F5',
    700: '#EEEEEE',
  },
  apple: {
    500: '#000000',
    600: '#111111',
    700: '#222222',
  },
};

const Dim = {
  primary: '#1A1A1A80',
  secondary: '#1A1A1A33',
};

const mode = {
  light: Light,
  dark: Dark,
};

const colors = {
  ...Light,
  ...Brand,
  dim: {
    ...Dim,
  },
};

export { mode, Brand, Light, Dark, Dim };

export default colors;
