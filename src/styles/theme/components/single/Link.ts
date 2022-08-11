import { ComponentTheme } from 'native-base';
import { theme as baseTheme } from 'native-base';

export const Link: ComponentTheme = {
  baseStyle: {
    ...baseTheme.components.Link.baseStyle,
    textDecoration: 'none',
  },
  defaultProps: {},
  sizes: {},
  variants: {},
};
