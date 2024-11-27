import {
  DollarSign,
  MessagesSquare,
  PersonStanding,
  Timer,
  Zap,
  ZoomIn,
} from 'lucide-react';

const services = [
  {
    title: 'Performance',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, accusantium quam. Temporibus quae quos deserunt!',
    icon: <Timer className="size-4 md:size-6" />,
  },
  {
    title: 'Innovation',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, accusantium quam. Temporibus quae quos deserunt!',
    icon: <Zap className="size-4 md:size-6" />,
  },
  {
    title: 'Quality',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, accusantium quam. Temporibus quae quos deserunt!',
    icon: <ZoomIn className="size-4 md:size-6" />,
  },
  {
    title: 'Accessibility',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, accusantium quam. Temporibus quae quos deserunt!',
    icon: <PersonStanding className="size-4 md:size-6" />,
  },
  {
    title: 'Affordability',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, accusantium quam. Temporibus quae quos deserunt!',
    icon: <DollarSign className="size-4 md:size-6" />,
  },
  {
    title: 'Customer Support',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, accusantium quam. Temporibus quae quos deserunt!',
    icon: <MessagesSquare className="size-4 md:size-6" />,
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="md:p-5 scroll-mt-[60px]"
      data-section="services"
    >
      <section className="min-h-dvh bg-secondary md:rounded-lg p-7">
        <div className="container max-w-screen-xl">
          <div className="mb-9">
            <span className="text-sm font-semibold">Services</span>
            <h1 className="mb-3 mt-1 text-balance text-3xl font-semibold md:text-4xl">
              Our Core Services
            </h1>
          </div>
          <div className="mx-auto grid gap-x-20 gap-y-8 md:grid-cols-3 md:gap-y-6">
            {services.map((feature, idx) => (
              <div className="flex gap-6 rounded-lg md:block md:p-5" key={idx}>
                <span className="mb-3 flex size-10 shrink-0 items-center justify-start rounded-full bg-accent md:size-12">
                  {feature.icon}
                </span>
                <div>
                  <h3 className="font-medium md:mb-2 md:text-xl">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground md:text-base">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default Services;
