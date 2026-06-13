import ProjectCard from '@/components/ProjectCard'

const projects = [
  {
    title: 'NLP Sentiment Analyzer',
    description:
      'Fine-tuned BERT model for Vietnamese sentiment analysis achieving state-of-the-art results on public benchmarks. Served via a FastAPI REST API with async inference.',
    stack: ['Python', 'HuggingFace', 'FastAPI', 'Docker'],
    github: 'https://github.com/namnguyen/vn-sentiment',
  },
  {
    title: 'MLOps Pipeline Template',
    description:
      'Production-ready ML pipeline template with experiment tracking, model versioning, and automated retraining. Used internally at multiple projects.',
    stack: ['Python', 'Docker', 'MLflow', 'PostgreSQL'],
    github: 'https://github.com/namnguyen/mlops-template',
  },
  {
    title: 'TheNam.dev',
    description:
      'This personal website — a fast, statically generated blog and portfolio built with Next.js 14 and Tailwind CSS.',
    stack: ['Next.js', 'Tailwind CSS', 'TypeScript', 'MDX'],
    github: 'https://github.com/namnguyen/thenam.dev',
    demo: 'https://thenam.dev',
  },
]

export default function ProjectsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-navy mb-2">Projects</h1>
      <p className="text-slate-custom mb-10">Open-source tools, models, and experiments.</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  )
}
