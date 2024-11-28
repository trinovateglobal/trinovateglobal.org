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
    title: 'Our Vision',
    description:
      'At Trinnovate Global, we strive to deliver the best service and provide innovative solutions that not only meet but exceed client expectations. Our goal is to build trust, establish lasting relationships, and foster a strong brand image that resonates with our clients and partners.',
    icon: <Timer className="size-4 md:size-6" />,
  },
  {
    title: 'Our Mission',
    description:
      'To be the leading software company in our industry by delivering high-quality, reliable solutions. We aim to be a trusted name in technology, with a focus on excellence and building lasting customer loyalty.',
    icon: <Zap className="size-4 md:size-6" />,
  },
  {
    title: 'Innovation',
    description:
      'We continuously push the boundaries of technology, creating cutting-edge solutions that keep our clients ahead of the curve. Innovation drives us to develop tools that revolutionize industries and enhance user experiences.',
    icon: <ZoomIn className="size-4 md:size-6" />,
  },
  {
    title: 'Quality',
    description:
      'Our commitment to quality ensures that every product and service we deliver meets the highest standards. We focus on precision, consistency, and reliability, ensuring that our clients receive nothing less than the best.',
    icon: <PersonStanding className="size-4 md:size-6" />,
  },
  {
    title: 'Performance',
    description:
      'We prioritize performance in everything we do. Our solutions are designed for speed, scalability, and efficiency, ensuring optimal results for your business, no matter the challenge.',
    icon: <DollarSign className="size-4 md:size-6" />,
  },
  {
    title: 'Customer Support',
    description:
      'At Trinnovate Global, we believe in the power of support. Our dedicated team is here to assist you every step of the way, providing timely, expert help and ensuring your satisfaction with our solutions',
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
            <h1 className="mb-3 mt-1 text-balance text-3xl font-bold md:text-4xl">
              Our Services
            </h1>
          </div>
          <div className="mx-auto grid gap-y-8 md:grid-cols-3 md:gap-y-6">
            {services.map((feature, idx) => (
              <div className="flex gap-6 rounded-lg md:block md:p-5" key={idx}>
                <span className="mb-3 flex size-10 shrink-0 items-center justify-start rounded-full bg-accent md:size-12">
                  {feature.icon}
                </span>
                <div>
                  <h3 className="font-semibold md:mb-2 md:text-xl">
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
