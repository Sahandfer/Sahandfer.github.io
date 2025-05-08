import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/30 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* <div>
            <Link to="/" className="flex items-center space-x-2 font-medium text-lg mb-4">
              <span className="text-primary font-semibold">Sahand Sabour</span>
            </Link>
            <p className="text-text/70 max-w-md">
              I am a PhD researcher in Natural Language Processing (NLP) at Tsinghua University, focusing on advancing the field through innovative research and applications. 
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/#research" className="text-text/70 hover:text-primary transition-colors">
                  Research Areas
                </Link>
              </li>
              <li>
                <Link to="/#publications" className="text-text/70 hover:text-primary transition-colors">
                  Publications
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-text/70 hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/#contact" className="text-text/70 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div> */}

          <div>
            <h3 className="font-semibold text-lg mb-4">Connect</h3>
            <div className="flex space-x-4 mb-6">
              <a
                href="https://github.com/Sahandfer"
                target="_blank"
                rel="noreferrer"
                className="text-text/70 hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/sahandsabour"
                target="_blank"
                rel="noreferrer"
                className="text-text/70 hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/sahandsabour/"
                target="_blank"
                rel="noreferrer"
                className="text-text/70 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:contact@Sahandfer@gmail.com"
                className="text-text/70 hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <p className="text-text/60 text-sm">
              © {currentYear} Sahand Sabour. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;