import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import HowItWorks from '@/components/HowItWorks';
import WhyThalor from '@/components/WhyThalor';
import Projects from '@/components/Projects';
import Team from '@/components/Team';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <HowItWorks />
      <WhyThalor />
      <Projects />
      <Team />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
