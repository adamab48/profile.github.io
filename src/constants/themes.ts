export type Theme = (typeof THEMES)[number];

export const MODES = {
  dark: 'dark',
  light: 'light',
} as const;

export const DEFAULT_THEMES = {
  light: {
    mode: MODES.light,
    name: 'default-light',
  },
  dark: {
    mode: MODES.dark,
    name: 'default-dark',
  },
} as const;

export const THEMES = [
  DEFAULT_THEMES.light,
  DEFAULT_THEMES.dark,
  {
    mode: MODES.light,
    name: 'blue-light',
  },
  {
    mode: MODES.dark,
    name: 'blue-dark',
  },
] as const;

export const MODE_CLASS = 'dark' as const;
export const THEME_ATTRIBUTE = 'data-theme' as const;
export const THEME_CHANGE_EVENT = 'theme-change' as const;

export const LOCAL_STORAGE_THEME_KEY = 'theme' as const;
