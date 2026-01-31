/**
 * Theme slice - Global UI Design Mode
 * Five themes: minimalistic, neoBrutalism, retro, dark, flat
 */
import { createSlice } from "@reduxjs/toolkit";

export type ThemeId =
  | "minimalistic"
  | "neoBrutalism"
  | "retro"
  | "dark"
  | "flat";

export const themeLabels: Record<ThemeId, string> = {
  minimalistic: "Minimalistic / Modern",
  neoBrutalism: "Neo-Brutalism",
  retro: "Retro",
  dark: "Dark Mode",
  flat: "Flat Design",
};

interface ThemeState {
  current: ThemeId;
}

const STORAGE_KEY = "portfolio-theme";

function loadTheme(): ThemeId {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && ["minimalistic", "neoBrutalism", "retro", "dark", "flat"].includes(stored)) {
      return stored as ThemeId;
    }
  } catch {
    /* ignore */
  }
  return "minimalistic";
}

const initialState: ThemeState = {
  current: loadTheme(),
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action: { payload: ThemeId }) => {
      state.current = action.payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
