interface ProjectCardProps {
  title: string
  description: string
  stack: string[]
  github: string
  demo: string | null
}

export default function ProjectCard({ title, description, stack, github, demo }: ProjectCardProps) {
  return (
    <div className="border border-gray-200 rounded-lg p-5 flex flex-col gap-4 hover:border-navy transition-colors">
      <div>
        <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
      </div>

      <div className="flex flex-wrap gap-1.5">
        {stack.map((tech) => (
          <span
            key={tech}
            className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded text-xs"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-3 mt-auto">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-navy hover:underline"
        >
          GitHub
        </a>
        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-navy hover:underline"
          >
            Demo
          </a>
        )}
      </div>
    </div>
  )
}
