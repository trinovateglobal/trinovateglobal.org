'use client';

import navLinks from '@/components/navbar/nav-links';
import { Button } from '@/components/ui/button';
import { cn, scrollTo } from '@/lib/utils';

const NavMenu = () => {
  // const [activeSection, setActiveSection] = useState<string>('about');
  // const sections = useRef<HTMLElement[]>([]);
  // const handleScroll = () => {
  //   const pageYOffset = window.scrollY;
  //   sections.current.forEach((section) => {
  //     const { offsetTop, offsetHeight } = section;
  //     if (pageYOffset >= offsetTop && pageYOffset < offsetTop + offsetHeight) {
  //       setActiveSection(section.id);
  //     }
  //   });
  // };
  //
  // useEffect(() => {
  //   sections.current = Array.from(
  //     document.querySelectorAll<HTMLElement>('[data-section]'),
  //   );
  //   window.addEventListener('scroll', handleScroll);
  //
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);
  return (
    <div className="flex justify-center items-center gap-5">
      {navLinks.map(({ id, label }) => (
        <Button
          key={id}
          onClick={() => scrollTo(id)}
          variant={'ghost'}
          className={cn(
            // activeSection === id && 'bg-accent text-accent-foreground',
            'font-medium',
          )}
        >
          {label}
        </Button>
      ))}
    </div>
  );
};

export default NavMenu;
