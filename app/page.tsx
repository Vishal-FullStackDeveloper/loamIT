import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Metrics from './components/Metrics';
import FeaturedCase from './components/FeaturedCase';
import Testimonials from './components/Testimonials';
import ContactStrip from './components/ContactStrip';

export default function HomePage() {
  return (
    <div className="animate-fade-in">
      <Hero />
      <Services />
      <WhyChooseUs />
      <Metrics />
      <FeaturedCase />
      <Testimonials />
      <ContactStrip />
    </div>
  );
}