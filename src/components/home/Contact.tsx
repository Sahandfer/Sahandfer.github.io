import { useRef, useState } from 'react';
import { useInView } from '../hooks/useInView';
import SectionHeader from '../ui/SectionHeader';
import { Mail, MapPin, Github, Twitter, Linkedin  } from 'lucide-react';

const Contact = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, url: 'https://github.com/', label: 'GitHub' },
    { icon: <Twitter className="w-5 h-5" />, url: 'https://twitter.com/', label: 'Twitter' },
    { icon: <Linkedin className="w-5 h-5" />, url: 'https://linkedin.com/in/', label: 'LinkedIn' },
  ];
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Simulating form submission
    setTimeout(() => {
      setFormSubmitted(true);
    }, 500);
  };

  return (
    <section id="contact" className="section py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <SectionHeader
          pretitle="Let's Connect"
          title="Contact Me"
          description="Interested in collaborating on research or have questions? Feel free to reach out."
          centered={true}
        />

        <div
          ref={ref}
          className="max-w-5xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-12"
        >

          <div
            className={`transition-all duration-700 ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            
            <div className="space-y-6">

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-1 rounded-full">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-base font-medium mb-1">Office</h4>
                  <p className="text-text/70">
                    FIT Building, Room 4-504<br />
                    Department of Computer Science and Technology<br />
                    Tsinghua University<br />
                    Beijing, China
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`transition-all duration-700 ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-1 rounded-full">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-base font-medium mb-1">Email</h4>
                  <a
                    href="mailto:contact@example.com"
                    className="text-text/70 hover:text-primary transition-colors"
                  >
                    Sahandfer@gmail.com
                  </a>
                  <br/>
                  <a
                    href="mailto:contact@example.com"
                    className="text-text/70 hover:text-primary transition-colors"
                  >
                    Sm22@mails.tsinghua.edu.cn
                  </a>
                </div>
              </div>

            </div>
          </div>

       
        </div>
      </div>
    </section>
  );
};

export default Contact;