import { cn } from '@/lib/utils';
import { Kavoon } from 'next/font/google';
import Image from 'next/image';
const font_kavoon = Kavoon({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
  variable: '--kavoon-font-family',
});
const NavLogo = () => {
  return (
    <button
      onClick={() =>
        scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth',
        })
      }
      className="flex justify-center items-center"
    >
      <div className="size-[60px] relative">
        <Image src={'/icon.png'} alt={'logo'} fill priority sizes={'80'} />
      </div>
      <h1 className={cn('text-2xl font-black', font_kavoon.className)}>
        Trinovate <span className="hidden md:inline-block">Global</span>
      </h1>
    </button>
  );
};

export default NavLogo;
