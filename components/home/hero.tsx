import { Star } from 'lucide-react';

import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { cn, font_kavoon } from '@/lib/utils';

const Hero7 = () => {
  return (
    <section className="min-h-[calc(100dvh-65px)] flex justify-center items-center">
      <div className="container text-center px-4 md:px-0">
        <div className="mx-auto flex max-w-screen-lg flex-col gap-6">
          <h1
            className={cn('text-3xl font- lg:text-6xl', font_kavoon.className)}
          >
            Empowering Your Vision with Innovative Solutions That Redefine
            Possibilities
          </h1>
          <p className="text-balance text-muted-foreground">
            From stunning Websites and intuitive Apps to bespoke Designs and
            seamless POS Systems, we bring your ideas to life with innovation
            and precision. Let’s create something extraordinary together
          </p>
        </div>
        <div className="mx-auto mt-10 flex w-fit flex-col items-center gap-2 sm:flex-row">
          <span className="mx-4 inline-flex items-center -space-x-4">
            <Avatar className="size-14 border">
              <AvatarImage
                src="https://www.shadcnblocks.com/images/block/avatar-1.webp"
                alt="placeholder"
              />
            </Avatar>
            <Avatar className="size-14 border">
              <AvatarImage
                src="https://www.shadcnblocks.com/images/block/avatar-2.webp"
                alt="placeholder"
              />
            </Avatar>
            <Avatar className="size-14 border">
              <AvatarImage
                src="https://www.shadcnblocks.com/images/block/avatar-3.webp"
                alt="placeholder"
              />
            </Avatar>
            <Avatar className="size-14 border">
              <AvatarImage
                src="https://www.shadcnblocks.com/images/block/avatar-4.webp"
                alt="placeholder"
              />
            </Avatar>
            <Avatar className="size-14 border">
              <AvatarImage
                src="https://www.shadcnblocks.com/images/block/avatar-5.webp"
                alt="placeholder"
              />
            </Avatar>
          </span>
          <div>
            <div className="flex items-center gap-1">
              <Star className="size-5 fill-yellow-400 text-yellow-400" />
              <Star className="size-5 fill-yellow-400 text-yellow-400" />
              <Star className="size-5 fill-yellow-400 text-yellow-400" />
              <Star className="size-5 fill-yellow-400 text-yellow-400" />
              <Star className="size-5 fill-yellow-400 text-yellow-400" />
              <span className="font-semibold">5.0</span>
            </div>
            <p className="text-left font-medium text-muted-foreground">
              from 200+ reviews
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero7;
