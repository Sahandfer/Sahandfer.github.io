import React from 'react';

interface SectionHeaderProps {
  pretitle?: string;
  title: string;
  description?: string;
  note?: string;
  centered?: boolean;
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  pretitle,
  title,
  description,
  note ="",
  centered = false,
  className = '',
}) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}>
      {pretitle && (
        <h4 className="text-sm font-semibold uppercase tracking-wider text-accent mb-2">
          {pretitle}
        </h4>
      )}
      <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
      {description && (
        <p className="text-lg text-text/70 max-w-2xl mx-auto">{description}</p>
      )}
      {note && (
        <p className="text-sm text-text/70 max-w-2xl mx-auto mt-2">{note}</p>
      )}
    </div>
  );
};

export default SectionHeader;