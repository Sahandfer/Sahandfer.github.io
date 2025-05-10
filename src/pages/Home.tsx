import Hero from '../components/home/Hero';
import About from '../components/home/About';
import Research from '../components/home/Research';
import Publications from '../components/home/Publications';
import Contact from '../components/home/Contact';
import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    document.title = 'Sahand Sabour';
  }, []);

  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Research />
      <Publications />
      <Contact />
    </div>
  );
};

export default Home;