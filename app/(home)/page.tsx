import Footer from '@/components/home/footer';
import Hero from '@/components/home/hero';
import Services from '@/components/home/services';
import TrustClients from '@/components/home/trust-clients';
import Navbar from '@/components/navbar';

const Page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <TrustClients />
      <Footer />
    </div>
  );
};

export default Page;
