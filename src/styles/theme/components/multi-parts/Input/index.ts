import { sizes } from './sizes';
import { variants } from './variants';
import { theme as baseTheme } from 'native-base';

export const Input = {
  sizes,
  variants: {
    ...baseTheme.components.Input.variants,
    variants,
  },
  baseStyle: {
    ...baseTheme.components.Input.baseStyle,
    field: {
      width: '100%',
      minWidth: 0,
      outline: 0,
      position: 'relative',
      appearance: 'none',
      transitionProperty: 'common',
      transitionDuration: 'normal',
    },
  },
  defaultProps: {
    ...baseTheme.components.Input.defaultProps,
    size: 'md',
    variant: 'outline',
  },
};
