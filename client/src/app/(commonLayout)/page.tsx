import Banner from '@/components/home/Banner';
import ContactForm from '@/components/home/contact';
import Services from '@/components/home/Service';
import ServiceOverview from '@/components/home/ServiceOverview';
import Testimonials from '@/components/home/Testimonials';

const HomePage = () => {
  return (
    <div>
      <Banner />
      <Services />
      <ServiceOverview />
      <Testimonials />
      <ContactForm />
    </div>
  );
};

export default HomePage;