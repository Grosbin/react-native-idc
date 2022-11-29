import {Theme} from '@react-navigation/native';
import {colors} from '../theme/appTheme';

type ThemeAction = {type: 'set_lingt_theme'} | {type: 'set_dark_theme'};

export interface ThemeState {
  currentTheme: 'lingt' | 'dark';
  dividirColor: string;
  dark: boolean;
  colors: any;
}

export const lightTheme: ThemeState = {
  currentTheme: 'lingt',
  dark: false,
  dividirColor: 'rgba(0, 0, 0, 0.7)',
  colors: {
    background: '#FFFFFF',
    foco: '#F2F5FF',
    primary: '#3b46f1',
    secondary: '#2256F2',
    tertiary: '#AABCF2',
    fontPrimary: '#020052',
    fontSecondary: '#FFFFFF',
    fontTertiary: '#020052',
    blueSecondary: '#5E83F2',
    yellowSecondary: '#F2EA77',
    close: '#88A2F2',
    green: '#0dc4ae',
    yellow: '#ffd554',
    white: '#FFFFFF',
    skeleton: '#C3D0E6',
  },
};

export const darkTheme: ThemeState = {
  currentTheme: 'dark',
  dark: true,
  dividirColor: 'rgba(255, 255, 255, 0.7)',
  colors: {
    background: '#2f3136',
    foco: '#36393f',
    primary: '#3b46f1',
    secondary: '#2256F2',
    tertiary: '#AABCF2',
    blueSecondary: '#5E83F2',
    fontPrimary: '#FFFFFF',
    fontSecondary: '#020052',
    fontTertiary: '#020052',
    close: '#88A2F2',
    green: '#0dc4ae',
    yellow: '#ffd554',
    yellowSecondary: '#F2EA77',
    white: '#FFFFFF',
    skeleton: '#4C5159',
  },
};

export const themeReducer = (
  state: ThemeState,
  action: ThemeAction,
): ThemeState => {
  switch (action.type) {
    case 'set_lingt_theme':
      return {
        ...lightTheme,
      };
    case 'set_dark_theme':
      return {
        ...darkTheme,
      };
    default:
      return state;
  }
};
