'use client';
import NavLogo from '@/components/navbar/nav-logo';
import NavMenu from '@/components/navbar/nav-menu';
import ThemeToggle from '@/components/theme-toggle';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

const Index = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        isScrolled && 'shadow sticky top-0 z-20 w-full backdrop-blur',
      )}
    >
      <nav className="container flex justify-between items-center">
        <NavLogo />
        <div className="flex justify-center items-center gap-5">
          <NavMenu />
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Index;
