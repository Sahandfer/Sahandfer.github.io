import { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import SectionHeader from '../ui/SectionHeader';
import { ExternalLink } from 'lucide-react';
import { publications } from '../../data/publications';

const Publications = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const get_authors = (authors: string) => {
    return authors.split(", ").map((author, idx) => {
      if (author === "Sahand Sabour" || author === "Sahand Sabour*") {
        return (
          <span key={author} className="font-bold">
            {author}
            {idx < authors.length - 1 ? ', ' : ''}
          </span>
        );
      }
      return (
        <span key={author}>
          {author}
          {idx < authors.split(", ").length - 1 ? ', ' : ''}
        </span>
      );
    });
  }

  return (
    <section id="publications" className="section py-24 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeader
          pretitle="Academic Portfolio"
          title="Publications & Proceedings"
          description="Papers published in top-tier international conferences and journals."
          note="* indicates equal contribution"
          centered={true}
        />

        <div 
          ref={ref} 
          className="mt-13 max-w-4xl mx-auto"
        >
          {publications.map((pub, index) => (
            <div
              key={index}
              className={`mb-10 transition-all duration-700 ${
                isInView
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4 bg-secondary/30 rounded-lg p-6 border border-border hover:border-primary/30 transition-colors">
                <div className="md:w-24 flex-shrink-0">
                  <div className="text-sm text-primary/80 font-medium">{pub.year}</div>
                  <div className="text-xs text-text/50 uppercase tracking-wider mt-1">{pub.type}</div>
                </div>
                
                <div className="flex-grow">
                  <h3 className="text-xl font-medium mb-2">{pub.title}</h3>
                  
                  <div className="text-sm text-text/70 mb-3">
                    <span className="font-medium">{get_authors(pub.authors)}</span>
                    <span className="mx-2">•</span>
                    <span className="italic">{pub.venue}</span>
                  </div>
                  
                  <p className="text-text/60 text-sm mb-4">{pub.abstract}</p>
                  
                  <div className="flex flex-wrap gap-3">
                    {pub.links.map((link, linkIndex) => (
                      <a
                        key={linkIndex}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm text-primary hover:text-accent transition-colors"
                      >
                        {link.label}
                        <ExternalLink className="ml-1 h-3 w-3" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;