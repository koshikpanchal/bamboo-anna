import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { defaultTheme, ThemeKey } from './themes';

type ThemeContextValue = {
  theme: ThemeKey;
  setTheme: (theme: ThemeKey) => void;
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

const STORAGE_KEY = 'bamboo-anna-theme';

const readStoredTheme = (): ThemeKey => {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === 'midnight' || stored === 'ocean') {
      return stored;
    }
  } catch {
    // ignore
  }

  return defaultTheme;
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setThemeState] = useState<ThemeKey>(() => {
    if (typeof window === 'undefined') return defaultTheme;
    return readStoredTheme();
  });

  useEffect(() => {
    document.body.dataset.theme = theme;

    try {
      window.localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // ignore
    }
  }, [theme]);

  const value = useMemo(
    () => ({ theme, setTheme: setThemeState }),
    [theme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};
