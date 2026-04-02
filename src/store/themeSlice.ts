/**
 * Theme slice - Global UI Design Mode
 * Four Design Personalities: seniorEngineer, ruleBreaker, paperJournal, hacker
 */
import { createSlice } from '@reduxjs/toolkit';

export type ThemeId = 'seniorEngineer' | 'ruleBreaker' | 'paperJournal' | 'hacker';

export const themeLabels: Record<ThemeId, string> = {
  seniorEngineer: 'The Senior Engineer',
  ruleBreaker: 'The Rule Breaker',
  paperJournal: 'The Paper Journal',
  hacker: 'The Hacker',
};

interface ThemeState {
  current: ThemeId;
}

const STORAGE_KEY = 'portfolio-theme';

function loadTheme(): ThemeId {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && ['seniorEngineer', 'ruleBreaker', 'paperJournal', 'hacker'].includes(stored)) {
      return stored as ThemeId;
    }
  } catch {
    /* ignore */
  }
  return 'seniorEngineer';
}

const initialState: ThemeState = {
  current: loadTheme(),
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: { payload: ThemeId }) => {
      state.current = action.payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
