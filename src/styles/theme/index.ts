import { extendTheme } from 'native-base';

import components from './components';
import foundations from './foundations';

const theme = {
  ...foundations,
  components,
};

type CustomThemeType = typeof theme;

declare module 'native-base' {
  interface ICustomTheme extends CustomThemeType {}
}

export default extendTheme(theme);
