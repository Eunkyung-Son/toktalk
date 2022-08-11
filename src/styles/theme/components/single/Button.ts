import { theme as baseTheme } from 'native-base';

type AccessibleColor = {
  bg?: string;
  color?: string;
  hover?: string;
  pressed?: string;
  border?: string;
};

const accessibleColorMap: { [key: string]: AccessibleColor } = {
  kakao: {
    bg: 'kakao.500',
    color: '#1A1A1A',
    hover: 'kakao.600',
    pressed: 'kakao.700',
  },
  naver: {
    bg: 'naver.500',
    color: '#FFFFFF',
    hover: 'naver.600',
    pressed: 'naver.700',
  },
  facebook: {
    bg: 'facebook.500',
    color: '#FFFFFF',
    hover: 'facebook.600',
    pressed: 'facebook.700',
  },
  apple: {
    bg: 'apple.500',
    color: '#FFFFFF',
    hover: 'apple.600',
    pressed: 'apple.700',
  },
  google: {
    bg: 'google.500',
    color: '#808080',
    hover: 'google.600',
    pressed: 'google.700',
    border: '#DDDDDD',
  },
};

const variantSolid = ({ colorScheme }: Record<string, any>) => {
  if (colorScheme === 'gray') {
    const bg = 'gray.100';
    return {
      _light: {
        bg,
        _hover: {
          bg: 'gray.100',
        },
        _pressed: { bg: 'gray.300' },
        _disabled: {
          bg,
        },
      },
    };
  }

  const {
    bg = `${colorScheme}.500`,
    color = `${accessibleColorMap[colorScheme].color}`,
    hover = `${colorScheme}.600`,
    pressed = `${colorScheme}.700`,
    border = `${colorScheme}.500`,
  } = accessibleColorMap[colorScheme] ?? {};

  const background = bg;
  const borderColor = border;

  return {
    borderColor: borderColor,
    _text: {
      color: color,
    },
    _light: {
      bg: background,
      _hover: {
        bg: hover,
      },
      _pressed: {
        bg: pressed,
      },
    },
  };
};

export const Button = {
  baseStyle: {
    ...baseTheme.components.Button.baseStyle,
    _focus: { boxShadow: 'none' },
  },
  variants: {
    solid: variantSolid,
  },
  sizes: {
    lg: {
      h: '50px',
      _text: {
        fontSize: ['16px', '14px', '15px'],
      },
      px: '15px',
    },
    md: {
      h: '40px',
      _text: {
        fontSize: ['12px', '10px', '12px'],
      },
      px: '15px',
    },
    sm: {
      h: '30px',
      _text: {
        fontSize: ['12px', '10px', '12px'],
      },
      px: '15px',
    },
    xs: {
      h: '26px',
      _text: {
        fontSize: ['12px', '10px', '12px'],
      },
      px: '8px',
    },
  },
};
