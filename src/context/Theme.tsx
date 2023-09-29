import React, { createContext, useContext } from 'react';
import { usePersistedState } from '../hooks/usePersistedState';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import dark from '../styles/themes/dark';
import light from '../styles/themes/light';

interface ThemeContextData {
  toggleTheme(): void;
  state: DefaultTheme;
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

export const useTheme = () => useContext(ThemeContext);

export const CustomThemeProvider: React.FC = ({ children }) => {
  const { state, setState } = usePersistedState<DefaultTheme>('@Theme', light);

  const toggleTheme = () => {
    state.title === 'light' ? setState(dark) : setState(light);
  };

  return (
    <ThemeContext.Provider
      value={{ 
        state,
        toggleTheme,
      }}
    >
      <ThemeProvider theme={state}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
