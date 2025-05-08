import { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import SectionHeader from '../ui/SectionHeader';
import { Book, GraduationCap, Brain, Code } from 'lucide-react';

const About = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const skills = [
    {
      icon: <Brain className="h-7 w-7 mb-4 text-accent" />,
      title: 'Emotional Intelligence in NLP',
      description: 'Expertise in building emotionally intelligent dialogue systems and empathetic conversational agents',
    },
    {
      icon: <Code className="h-7 w-7 mb-4 text-accent" />,
      title: 'Programming & Frameworks',
      description: 'Proficient in Python and deep learning frameworks, with hands-on experience in large-scale NLP projects',
    },
    {
      icon: <Book className="h-7 w-7 mb-4 text-accent" />,
      title: 'Research & Publications',
      description: 'Published at top NLP venues (ACL, EMNLP, AAAI) on topics such as mental health chatbots and evaluation metrics',
    },
    {
      icon: <GraduationCap className="h-7 w-7 mb-4 text-accent" />,
      title: 'Academic Background',
      description: 'PhD student at Tsinghua University, MS in Computer Science (Tsinghua), BSc from Xi’an Jiaotong-Liverpool University',
    },
  ];

  return (
    <section id="about" className="section bg-secondary/30 py-20">
      <div className="container mx-auto px-4">
        <SectionHeader
          pretitle="About Me"
          title="Emotionally Intelligent AI for Human Wellbeing"
          description="I develop conversational AI systems that blend emotional intelligence with cutting-edge NLP, aiming to provide meaningful support in real-world scenarios."
          centered={true}
        />

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16"
        >
          <div 
            className={`transition-all duration-1000 ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <h3 className="text-2xl font-semibold mb-4">Research Journey</h3>
            <p className="text-text/80 mb-6">
              I am a PhD student at Tsinghua University's Conversational AI Lab (CoAI), advised by Prof. Minlie Huang. My research focuses on emotional intelligence in natural language processing, particularly in creating empathetic dialogue systems that can understand user emotions, demonstrate empathy, and provide effective support. 
            </p>
            <p className="text-text/80 mb-6">
              My recent work explores the application of conversational agents for mental health support, aiming to make emotional support more accessible and affordable. I have published at leading conferences (ACL, EMNLP, AAAI) on topics such as empathetic response generation, evaluation benchmarks for emotional intelligence in LLMs, and mental health chatbots.
            </p>
            <p className="text-text/80">
              I hold an MSc in Computer Science from Tsinghua University (2022) and a BSc from Xi’an Jiaotong-Liverpool University (2020). I am always open to collaborations on projects at the intersection of AI, language, and human wellbeing.
            </p>
          </div>

          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className={`bg-background rounded-lg p-6 border border-border shadow-sm transition-all duration-700 ${
                    isInView
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {skill.icon}
                  <h4 className="text-lg font-medium mb-2">{skill.title}</h4>
                  <p className="text-text/70 text-sm">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
