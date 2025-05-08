interface ProjectLink {
  label: string;
  url: string;
}

interface ProjectPublication {
  title: string;
  venue: string;
  year: string;
  url: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription?: string;
  image: string;
  tags: string[];
  duration: string;
  status: 'Completed' | 'In Progress' | 'Planned';
  collaborators?: string[];
  funding?: string;
  objectives?: string[];
  approach?: string;
  outcomes?: string;
  publications?: ProjectPublication[];
  links?: ProjectLink[];
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Cross-Lingual Knowledge Transfer for Low-Resource Languages",
    description: "Developing methods to transfer NLP capabilities to languages with limited training data.",
    fullDescription: "This project addresses the challenge of building effective NLP systems for languages with limited available data. By leveraging cross-lingual transfer techniques and adapter modules, we're able to extend the capabilities of large language models to previously underserved languages.",
    image: "https://images.pexels.com/photos/8386435/pexels-photo-8386435.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Low-Resource NLP", "Transfer Learning", "Multilingual Models"],
    duration: "2022 - Present",
    status: "In Progress",
    collaborators: [
      "Dr. Research Partner (University Name)",
      "Industry Collaborator (Company Name)",
      "PhD Student Collaborator"
    ],
    funding: "Funded by Research Grant XYZ",
    objectives: [
      "Develop adapter-based approaches for efficient cross-lingual transfer",
      "Create evaluation benchmarks for 10+ low-resource languages",
      "Reduce the data requirements for new language adaptation by 80%",
      "Deploy practical NLP applications for target languages"
    ],
    approach: "Our approach combines multilingual pretraining with language-specific adapter modules that can be efficiently fine-tuned with minimal data. We utilize linguistic knowledge about language families and structural similarities to bootstrap models for related languages.",
    outcomes: "Thus far, we've successfully deployed models for 8 previously unsupported languages, achieving performance within 85% of high-resource baselines while using less than 5% of the typical training data requirements.",
    publications: [
      {
        title: "Efficient Cross-Lingual Transfer with Lightweight Adapters",
        venue: "ACL 2023",
        year: "2023",
        url: "https://example.com/paper1"
      },
      {
        title: "Low-Resource Language Benchmark (LRB): A Standardized Evaluation Framework",
        venue: "EMNLP 2022",
        year: "2022",
        url: "https://example.com/paper2"
      }
    ],
    links: [
      { label: "Project Website", url: "https://example.com/project" },
      { label: "GitHub Repository", url: "https://github.com/username/project" },
      { label: "Demo", url: "https://huggingface.co/spaces/username/demo" }
    ]
  },
  {
    id: 2,
    title: "Improving Factual Consistency in Text Generation",
    description: "Developing methods to enhance factual accuracy in abstractive summarization and text generation systems.",
    image: "https://images.pexels.com/photos/6153354/pexels-photo-6153354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Text Generation", "Factuality", "Summarization"],
    duration: "2021 - 2023",
    status: "Completed",
    collaborators: [
      "Prof. Senior Researcher (University Name)",
      "Research Lab Collaborators"
    ],
    funding: "Industry Research Grant",
    links: [
      { label: "Paper", url: "https://example.com/paper" },
      { label: "GitHub Repository", url: "https://github.com/username/factual-gen" }
    ]
  },
  {
    id: 3,
    title: "Neural Approaches to Semantic Parsing",
    description: "Exploring how neural models can effectively map natural language to structured meaning representations.",
    image: "https://images.pexels.com/photos/7516363/pexels-photo-7516363.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Semantic Parsing", "Structured Prediction", "Neural Networks"],
    duration: "2020 - 2022",
    status: "Completed",
    links: [
      { label: "Project Page", url: "https://example.com/semantic-parsing" }
    ]
  }
];