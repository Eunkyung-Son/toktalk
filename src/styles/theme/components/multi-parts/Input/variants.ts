import { getColor, useColorModeValue } from 'native-base';
import { InterfaceInputProps } from 'native-base/lib/typescript/components/primitives/Input/types';

export const variants = {
  outline: (props: Record<string, any>) => {
    const { theme } = props;
    console.log(theme, 'theme');
    const { focusOutlineColor: fc, invalidOutlineColor: ic } =
      getDefaults(props);

    return {
      field: {
        border: '1px solid',
        borderColor: 'inherit',
        borderRadius: 0,
        bg: 'inherit',
        _hover: {
          borderColor: useColorModeValue('gray.300', 'whiteAlpha.400')(props),
        },
        _readOnly: {
          boxShadow: 'none !important',
          userSelect: 'all',
        },
        _disabled: {
          opacity: 0.4,
          cursor: 'not-allowed',
        },
        _invalid: {
          borderColor: getColor(ic, '', theme),
          boxShadow: `0 0 0 1px ${getColor(ic, '', theme)}`,
        },
        _focus: {
          borderColor: getColor(fc, '', theme),
        },
      },
      addon: {
        border: '1px solid',
        borderRadius: 0,
        borderColor: useColorModeValue('inherit', 'whiteAlpha.50')(props),
        bg: useColorModeValue('gray.100', 'whiteAlpha.300')(props),
      },
    };
  },
  filled: (props: Record<string, any>) => {
    const { theme } = props;
    const { focusOutlineColor: fc, invalidOutlineColor: ic } =
      getDefaults(props);

    return {
      field: {
        border: '2px solid',
        borderColor: 'transparent',
        borderRadius: 0,
        bg: 'gray.100',
        _hover: {
          bg: 'gray.200',
        },
        _readOnly: {
          boxShadow: 'none !important',
          userSelect: 'all',
        },
        _disabled: {
          opacity: 0.4,
          cursor: 'not-allowed',
        },
        _invalid: {
          borderColor: `${getColor(ic, '', theme)} !important`,
        },
        _focus: {
          bg: 'gray.100',
          borderColor: getColor(fc, '', theme),
        },
      },
      addon: {
        border: '2px solid',
        borderColor: 'transparent',
        borderRadius: 0,
        bg: useColorModeValue('gray.100', 'whiteAlpha.50')(props),
      },
    };
  },
  flushed: (props: Record<string, any>) => {
    const { theme } = props;
    const { focusOutlineColor: fc, invalidOutlineColor: ic } =
      getDefaults(props);

    return {
      field: {
        borderBottom: '1px solid',
        borderColor: 'inherit',
        borderRadius: 0,
        px: 0,
        bg: 'transparent',
        _readOnly: {
          boxShadow: 'none !important',
          userSelect: 'all',
        },
        _invalid: {
          borderColor: `${getColor(ic, '', theme)} !important`,
          boxShadow: `0px 1px 0px 0px ${getColor(ic, '', theme)}`,
        },
        _focus: {
          borderColor: getColor(fc, '', theme),
        },
      },
      addon: {
        borderBottom: '2px solid',
        borderColor: 'inherit',
        borderRadius: 0,
        px: 0,
        bg: 'transparent',
      },
    };
  },
  unstyled: {
    field: {
      bg: 'transparent',
      px: 0,
      height: 'auto',
    },
    addon: {
      bg: 'transparent',
      px: 0,
      height: 'auto',
    },
  },
};

function getDefaults(props: InterfaceInputProps) {
  const { focusOutlineColor: fc, invalidOutlineColor: ic } = props;
  return {
    focusOutlineColor: fc || useColorModeValue('black', 'black')(props),
    invalidOutlineColor: ic || useColorModeValue('warning', 'warning')(props),
  };
}
