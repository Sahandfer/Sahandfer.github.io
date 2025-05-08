import { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import SectionHeader from '../ui/SectionHeader';
import { Heart, Bot, Gauge, Scale } from 'lucide-react';

const Research = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const researchAreas = [
    {
      icon: <Heart className="h-10 w-10 text-primary" />,
      title: 'Emotional Intelligence Evaluation',
      description: 'Developing benchmarks like EmoBench to assess LLMs\' emotional understanding and application capabilities in mental health contexts.',
      delay: 100,
    },
    {
      icon: <Bot className="h-10 w-10 text-primary" />,
      title: 'Empathetic Dialogue Systems',
      description: 'Creating emotionally aware chatbots using novel architectures that demonstrate human-like empathy and support strategies.',
      delay: 200,
    },
    {
      icon: <Gauge className="h-10 w-10 text-primary" />,
      title: 'AI for Mental Health Support',
      description: 'Pioneering conversational agents (e.g., Emohaa) that reduce mental distress through clinically validated support frameworks.',
      delay: 300,
    },
    {
      icon: <Scale className="h-10 w-10 text-primary" />,
      title: 'Human-AI Interaction Ethics',
      description: 'Investigating AI\'s persuasive capabilities and developing safeguards against manipulative behaviors in social chatbots.',
      delay: 400,
    },
  ];

  return (
    <section id="research" className="section py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <SectionHeader
          pretitle="Research Focus"
          title="Emotionally Intelligent AI Systems"
          description="My research develops socially-aware language technologies that balance technical innovation with ethical considerations, particularly in mental health applications."
          centered={true}
        />

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
        >
          {researchAreas.map((area, index) => (
            <div
              key={index}
              className={`bg-background p-8 rounded-xl border border-border shadow-sm overflow-hidden relative transition-all duration-700 ${
                isInView
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${area.delay}ms` }}
            >
              <div className="flex items-start gap-5">
                <div className="bg-accent/10 p-3 rounded-lg">{area.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">{area.title}</h3>
                  <p className="text-text/70">{area.description}</p>
                </div>
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;
