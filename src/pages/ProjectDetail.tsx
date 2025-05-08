import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { projectsData, Project } from '../data/projects';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching
    setTimeout(() => {
      if (id) {
        const foundProject = projectsData.find(p => p.id === parseInt(id)) || null;
        setProject(foundProject);
        
        if (foundProject) {
          document.title = `${foundProject.title} | NLP Researcher Portfolio`;
        }
      }
      setLoading(false);
    }, 300);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="animate-pulse">
          <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen pt-20 flex flex-col items-center justify-center">
        <h2 className="text-2xl font-semibold mb-4">Project Not Found</h2>
        <p className="text-text/70 mb-6">The project you're looking for doesn't exist.</p>
        <Link to="/#research" className="btn btn-primary">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Research
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      <article className="max-w-5xl mx-auto px-4 py-12">
        <Link to="/#research" className="inline-flex items-center text-sm font-medium text-primary hover:text-accent transition-colors mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Research
        </Link>

        <div className="mb-12">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, idx) => (
              <span 
                key={idx}
                className="text-xs font-medium bg-primary/80 text-white px-2 py-1 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h1>
          <p className="text-lg text-text/70 mb-8">{project.description}</p>

          <div className="relative h-80 md:h-96 rounded-xl overflow-hidden mb-8">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold mb-6">Overview</h2>
            <div className="prose prose-lg max-w-none">
              <p>
                {project.fullDescription || project.description}
              </p>
              
              {project.objectives && (
                <>
                  <h3>Objectives</h3>
                  <ul>
                    {project.objectives.map((objective, idx) => (
                      <li key={idx}>{objective}</li>
                    ))}
                  </ul>
                </>
              )}
              
              {project.approach && (
                <>
                  <h3>Approach</h3>
                  <p>{project.approach}</p>
                </>
              )}
              
              {project.outcomes && (
                <>
                  <h3>Outcomes</h3>
                  <p>{project.outcomes}</p>
                </>
              )}
              
              {project.publications && (
                <>
                  <h3>Related Publications</h3>
                  <ul>
                    {project.publications.map((pub, idx) => (
                      <li key={idx}>
                        <a href={pub.url} target="_blank" rel="noopener noreferrer">
                          {pub.title}
                        </a> - {pub.venue}, {pub.year}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-secondary/30 rounded-lg p-6 border border-border sticky top-24">
              <h3 className="text-xl font-semibold mb-4">Project Details</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-text/70 mb-1">Duration</h4>
                  <p>{project.duration}</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-text/70 mb-1">Status</h4>
                  <p>
                    <span className={`inline-block w-2 h-2 rounded-full mr-2 ${
                      project.status === 'Completed' ? 'bg-success' : 
                      project.status === 'In Progress' ? 'bg-warning' : 'bg-primary'
                    }`}></span>
                    {project.status}
                  </p>
                </div>
                
                {project.collaborators && (
                  <div>
                    <h4 className="text-sm font-medium text-text/70 mb-1">Collaborators</h4>
                    <ul className="space-y-1">
                      {project.collaborators.map((collaborator, idx) => (
                        <li key={idx}>{collaborator}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {project.funding && (
                  <div>
                    <h4 className="text-sm font-medium text-text/70 mb-1">Funding</h4>
                    <p>{project.funding}</p>
                  </div>
                )}
                
                {project.links && (
                  <div>
                    <h4 className="text-sm font-medium text-text/70 mb-1">Links</h4>
                    <ul className="space-y-2">
                      {project.links.map((link, idx) => (
                        <li key={idx}>
                          <a 
                            href={link.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-primary hover:text-accent transition-colors"
                          >
                            {link.label}
                            <ExternalLink className="ml-1 h-3 w-3" />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default ProjectDetail;