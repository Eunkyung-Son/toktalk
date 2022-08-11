import { theme as baseTheme } from 'native-base';

export const Container = {
  baseStyle: {
    ...baseTheme.components.Container.baseStyle,
    maxW: ['100%', '780px', '980px', '1280px', '1480px', '1780px'],
  },
};
