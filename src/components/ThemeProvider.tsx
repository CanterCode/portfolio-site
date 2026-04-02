/**
 * ThemeProvider - Applies active theme to document
 * Syncs Redux theme state with data-theme attribute
 */
import { useEffect } from 'react';
import { useAppSelector } from '../store/hooks';

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useAppSelector((state) => state.theme.current);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem('portfolio-theme', theme);
    } catch {
      /* ignore */
    }
  }, [theme]);

  return <>{children}</>;
}
