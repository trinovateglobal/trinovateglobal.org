import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const scrollTo = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    console.log('scrolled...');
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
