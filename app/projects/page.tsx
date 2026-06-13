import ProjectCard from '@/components/ProjectCard'

const projects = [
  {
    title: 'NLP Sentiment Analyzer',
    description:
      'Fine-tuned BERT model for Vietnamese sentiment analysis, achieving state-of-the-art results on the UIT-VSFC benchmark. Served as a REST API with FastAPI.',
    stack: ['Python', 'HuggingFace', 'FastAPI', 'Docker'],
    github: 'https://github.com/namnguyen/nlp-sentiment-analyzer',
    demo: null,
  },
  {
    title: 'MLOps Pipeline Template',
    description:
      'Production-ready ML pipeline template with experiment tracking, model versioning, and automated retraining. Used as a starting point for multiple projects.',
    stack: ['Python', 'Docker', 'MLflow', 'PostgreSQL'],
    github: 'https://github.com/namnguyen/mlops-pipeline-template',
    demo: null,
  },
  {
    title: 'TheNam.dev',
    description:
      'This personal website — built with Next.js 14, Tailwind CSS, and MDX for blog posts. Designed to be fast, accessible, and easy to maintain.',
    stack: ['Next.js', 'Tailwind CSS', 'TypeScript', 'MDX'],
    github: 'https://github.com/namnguyen/thenam.dev',
    demo: 'https://thenam.dev',
  },
]

export default function Projects() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-navy mb-2">Projects</h1>
      <p className="text-slate-custom mb-10">A selection of things I have built.</p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  )
}
