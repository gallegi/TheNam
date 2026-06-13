interface Project {
  title: string
  description: string
  stack: string[]
  github?: string
  demo?: string
}

export default function ProjectCard({ title, description, stack, github, demo }: Project) {
  return (
    <div className="border border-gray-200 rounded-lg p-6 flex flex-col gap-3 hover:shadow-md transition-shadow">
      <h2 className="text-lg font-bold text-navy">{title}</h2>
      <p className="text-gray-600 text-sm flex-1">{description}</p>
      <div className="flex flex-wrap gap-2">
        {stack.map((tech) => (
          <span
            key={tech}
            className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs rounded"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-3 text-sm mt-1">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-navy hover:underline font-medium"
          >
            🐙 GitHub
          </a>
        )}
        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-navy hover:underline font-medium"
          >
            🔗 Demo
          </a>
        )}
      </div>
    </div>
  )
}
