export default function About() {
  const skills = [
    { category: 'Languages', items: ['Python', 'TypeScript', 'SQL', 'Bash'] },
    { category: 'ML / AI', items: ['PyTorch', 'TensorFlow', 'scikit-learn', 'HuggingFace'] },
    { category: 'Web', items: ['Next.js', 'FastAPI', 'React'] },
    { category: 'Tools', items: ['Docker', 'Git', 'PostgreSQL', 'AWS'] },
  ]

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-navy mb-6">About Me</h1>

      <section className="mb-10 prose prose-gray max-w-none">
        <p className="text-gray-700 leading-relaxed mb-4">
          I&apos;m Nam Nguyen, a Machine Learning Engineer and Tech Writer based in Ho Chi Minh City,
          Vietnam. I specialize in building end-to-end ML systems — from data ingestion and model
          training to deployment and monitoring in production environments.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          My background is in computer science with a focus on natural language processing and deep
          learning. I enjoy working at the intersection of research and engineering, turning
          state-of-the-art models into reliable, scalable services. I&apos;ve worked on sentiment
          analysis, recommendation systems, and MLOps infrastructure at several companies.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Beyond code, I write about AI/ML on this blog — covering practical tutorials, paper
          summaries, and engineering lessons learned the hard way. I believe knowledge-sharing is
          what moves the field forward.
        </p>
      </section>

      {/* Skills */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-navy mb-4">Skills</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {skills.map(({ category, items }) => (
            <div key={category} className="border border-gray-200 rounded-lg p-4">
              <h3 className="text-sm font-semibold text-slate-custom uppercase tracking-wide mb-2">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interests */}
      <section>
        <h2 className="text-xl font-bold text-navy mb-3">Interests</h2>
        <p className="text-gray-700 leading-relaxed">
          Outside of work I enjoy reading research papers, contributing to open-source projects,
          and exploring the mountains of Vietnam on a motorbike. I&apos;m also an avid reader of
          technical blogs and enjoy experimenting with new frameworks and languages.
        </p>
      </section>
    </div>
  )
}
