export type ThemeKey = 'midnight' | 'ocean';

type ThemeOption = {
  key: ThemeKey;
  label: string;
  description: string;
};

export const themeOptions: ThemeOption[] = [
  {
    key: 'midnight',
    label: 'Dark',
    description: 'Low-light, high contrast',
  },
  {
    key: 'ocean',
    label: 'Light',
    description: 'Bright, clean, minimal',
  },
];

export const defaultTheme: ThemeKey = 'ocean';
