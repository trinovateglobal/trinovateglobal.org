'use client';

import { MoonIcon, SunIcon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  /*
   * // useEffect only runs on the client, so now we can safely show the UI
   * // Other way to handle this client component with dynamic imports
   * // dyanmic(()=> import('./components/ThemeToggle'), { ssr: false})
   * */
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="flex size-10 items-center justify-center rounded-full opacity-80 outline-none transition-opacity hover:opacity-100"
    >
      {theme === 'light' ? (
        <SunIcon className="size-5" />
      ) : (
        <MoonIcon className="size-5" />
      )}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
};

export default ThemeToggle;
