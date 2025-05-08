import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollY = window.scrollY;
      const opacity = Math.max(1 - scrollY / 500, 0);
      const transform = `translateY(${scrollY * 0.4}px)`;
      
      heroRef.current.style.opacity = opacity.toString();
      heroRef.current.style.transform = transform;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Updated background pattern with emotional tone */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(rgba(234, 84, 106, 0.1) 1px, transparent 1px)', 
          backgroundSize: '30px 30px' 
        }}></div>
      </div>
      
      <div 
        ref={heroRef}
        className="container mx-auto px-4 pt-20 relative z-10"
      >
        <div className="max-w-3xl mx-auto text-center">
          <p className="inline-block rounded-full bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent mb-4 animate-fade-in">
            Sahand Sabour • PhD Candidate @ Tsinghua University
          </p>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 tracking-tight animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Humanizing AI Through Emotional Intelligence
          </h1>
          
          <p className="text-xl text-text/70 max-w-2xl mx-auto mb-8 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            Developing empathetic conversational agents that understand mental health needs,
            powered by novel evaluation frameworks and clinically-validated support systems.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 animate-fade-up" style={{ animationDelay: '0.6s' }}>
            <Link 
              to="/#research" 
              className="btn bg-accent text-background hover:bg-accent/90 px-6 py-3 rounded-md transition-colors"
            >
              Explore Research Interests
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            
            <a 
              href="/cv.pdf" 
              className="btn bg-secondary text-text hover:bg-secondary/80 px-6 py-3 rounded-md"
              target="_blank"
              rel="noopener noreferrer"
            >
              View CV
              <Download className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Updated scroll indicator with emotional tone */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <div className="w-0.5 h-6 bg-accent/20 rounded-full"></div>
        <div className="w-1 h-1 bg-accent/40 rounded-full mt-1"></div>
      </div>
    </section>
  );
};

export default Hero;
