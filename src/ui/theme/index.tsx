import * as React from 'react';
import {
  ThemeProvider as ReThemeProvider,
  TextProps,
  BoxProps,
  useTheme as useRTheme,
} from '@shopify/restyle';

type BaseThemeType = typeof BaseTheme & {
  textVariants: {[key: string]: TextProps<typeof BaseTheme>};
  navigation: any;
  buttonVariants: {[key: string]: BoxProps<typeof BaseTheme>};
};
const createTheme = <T extends BaseThemeType>(themeObject: T): T => themeObject;

export const colors = {
  text: 'rgba(255,255,255,0.5)',
  primary: '#BB255B',
  secondary: '#FFFFFF',

  input_focused: '#5250BE',
  place_holder: 'rgba(255,255,255,0.35)',
  primary_transparent: 'rgba(187, 37, 91, 0.4)',

  black: '#090909',
  grey1: '#333333',
  grey2: '#666666',
  grey3: '#C3C3C3',
  grey4: '#E4E4E4',
  white: 'white',
  white_transparent: 'rgba(255,255,255,0.18)',
  white_transparent_background: 'rgba(247,198,255,0.1)',
  red: '#EB5757',
  warning: '#FFCC01',
};
export const spacing = {
  x: 1,
  xs: 4,
  s: 8,
  ms: 14,
  m: 16,
  ml: 18,
  l: 24,
  xl: 40,
};
const BaseTheme = {
  colors: colors,
  spacing,
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
};

export const theme = createTheme({
  ...BaseTheme,
  // TODO : Not sure if this the best way to handel navigation theme
  navigation: {
    dark: false,
    colors: {
      primary: 'rgb(0, 122, 255)',
      background: '#f8f8fa',
      card: '#f8f8fa',
      text: '#0c1245',
      border: 'rgb(199, 199, 204)',
      notification: 'red',
    },
  },
  buttonVariants: {
    defaults: {},
    primary: {
      backgroundColor: 'primary',
    },
    disabled: {
      backgroundColor: 'primary_transparent',
    },
    secondary: {
      backgroundColor: 'secondary',
    },
    outline: {
      backgroundColor: 'white',
      borderColor: 'primary',
      borderWidth: 1,
    },
    white_transp: {
      backgroundColor: 'white_transparent',
    },
  },
  textVariants: {
    defaults: {
      color: 'text',
    },
    header: {
      fontFamily: 'Inter',
      fontWeight: '500',
      fontSize: 24,
      color: 'white',
    },
    subheader: {
      fontFamily: 'Inter',
      fontSize: 14,
      color: 'text',
    },
    body: {
      fontFamily: 'Inter',
      fontSize: 15,
      color: 'grey2',
    },
    button_primary: {
      fontFamily: 'Inter',
      fontSize: 18,
      color: 'white',
    },
    button_disabled: {
      fontFamily: 'Inter',
      fontSize: 18,
      color: 'white',
    },
    button_secondary: {
      fontFamily: 'Inter',
      fontSize: 16,
      color: 'white',
    },
    button_outline: {
      fontFamily: 'Inter',
      fontSize: 16,
      color: 'text',
    },
    button_white_transp: {
      fontFamily: 'Inter',
      fontSize: 16,
      color: 'white',
    },
    label: {
      fontFamily: 'Inter',
      fontSize: 13,
      color: 'grey2',
      paddingVertical: 's',
    },
  },
});

export type Theme = typeof theme;
export const ThemeProvider = ({children}: {children: React.ReactNode}) => (
  <ReThemeProvider theme={theme}>{children}</ReThemeProvider>
);
export const useTheme = () => useRTheme<Theme>();
