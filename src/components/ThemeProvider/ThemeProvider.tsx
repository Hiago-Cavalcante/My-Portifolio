import React, { createContext, useContext, useState, ReactNode } from 'react';
import { ThemeProvider as MuiThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Tema claro (padrão)
  const lightTheme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: "#000000",
      },
      secondary: {
        main: "#0077B5",
      },
      background: {
        default: "#FFFFFF",
        paper: "#FFFFFF",
      },
      text: {
        primary: "#000000",
        secondary: "#666666",
      },
    },
    typography: {
      fontFamily: "'Montserrat', sans-serif",
    },
  });

  // Tema escuro (cores invertidas)
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: "#FFFFFF",
      },
      secondary: {
        main: "#89CFF0",
      },
      background: {
        default: "#000000",
        paper: "#000000",
      },
      text: {
        primary: "#FFFFFF",
        secondary: "#CCCCCC",
      },
    },
    typography: {
      fontFamily: "'Montserrat', sans-serif",
    },
  });

  const currentTheme = responsiveFontSizes(isDarkMode ? darkTheme : lightTheme);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <MuiThemeProvider theme={currentTheme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;