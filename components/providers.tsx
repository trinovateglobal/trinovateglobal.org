import { ThemeProvider } from 'next-themes';
import { PropsWithChildren } from 'react';

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider
      disableTransitionOnChange
      storageKey="theme"
      attribute="class"
      defaultTheme="system"
      enableSystem
    >
      {children}
    </ThemeProvider>
  );
};

export default Providers;
