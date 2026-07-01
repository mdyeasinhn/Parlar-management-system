import Banner from '@/components/home/Banner';
import ContactForm from '@/components/home/contact';
import ServiceSection from '@/components/home/services';
import Testimonials from '@/components/home/Testimonials';

const HomePage = () => {
  return (
    <div>
      <Banner />
      <ServiceSection/>
      <Testimonials/>
      <ContactForm/>
    </div>
  );
};

export default HomePage;