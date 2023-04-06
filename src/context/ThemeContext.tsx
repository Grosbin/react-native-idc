import React, {createContext, useEffect, useReducer, useState} from 'react';
import changeNavigationBarColor from 'react-native-navigation-bar-color';

import {ThemeState, themeReducer, lightTheme} from '../reducer/themeReducer';

interface ThemeContexProps {
  theme: ThemeState;
  setDarkTheme: () => void;
  setLightTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContexProps);
export const ThemeProvider = ({children}: any) => {
  const [theme, dispatch] = useReducer(themeReducer, lightTheme);

  const setDarkTheme = () => {
    dispatch({type: 'set_dark_theme'});
    changeNavigationBarColor('#20262e', false, true);
  };
  const setLightTheme = () => {
    dispatch({type: 'set_lingt_theme'});
    changeNavigationBarColor('#ffffff', true, true);
  };

  return (
    <ThemeContext.Provider value={{theme, setDarkTheme, setLightTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};
