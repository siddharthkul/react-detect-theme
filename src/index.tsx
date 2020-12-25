import * as React from 'react';

export const useIsDark = () => {
  const [theme, setTheme] = React.useState(false);
  React.useEffect(() => {
    const themeDetect = (e: any) => {
      if (e.matches) {
        setTheme(true);
      } else {
        setTheme(false);
      }
    }
    const m = window.matchMedia("(prefers-color-scheme: dark)")
    setTheme(m.matches);
    m.addEventListener('change', themeDetect);
    return () => {
      m.removeEventListener('change', themeDetect);
    }
  }, []);
  return theme;
}