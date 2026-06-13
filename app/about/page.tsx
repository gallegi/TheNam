export default function About() {
  const skills = [
    {
      category: 'Languages',
      items: ['Python', 'TypeScript', 'SQL', 'Bash'],
    },
    {
      category: 'ML / AI',
      items: ['PyTorch', 'TensorFlow', 'scikit-learn', 'HuggingFace'],
    },
    {
      category: 'Web',
      items: ['Next.js', 'FastAPI', 'React'],
    },
    {
      category: 'Tools',
      items: ['Docker', 'Git', 'PostgreSQL', 'AWS'],
    },
  ]

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-navy mb-8">About Me</h1>

      {/* Bio */}
      <section className="mb-12 prose prose-gray max-w-none">
        <p className="text-gray-700 leading-relaxed mb-4">
          I&apos;m Nam Nguyen, a Machine Learning Engineer based in Vietnam. I graduated with a B.S. in Computer Science
          from the University of Science, Ho Chi Minh City, and have since worked on building and deploying ML systems
          at scale — from NLP pipelines for Vietnamese language processing to computer vision systems for real-world applications.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          My engineering work focuses on the full ML lifecycle: data collection and preprocessing, model training and evaluation,
          and production deployment with monitoring. I care deeply about reproducibility and treat MLOps as a first-class concern
          in every project I undertake.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Beyond engineering, I write about machine learning, software architecture, and the craft of technical communication.
          I believe that writing is thinking — and that sharing knowledge openly accelerates progress for everyone in the field.
        </p>
      </section>

      {/* Skills */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-navy mb-6">Skills</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {skills.map(({ category, items }) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-slate-custom uppercase tracking-wider mb-3">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Personal interests */}
      <section>
        <h2 className="text-2xl font-bold text-navy mb-4">Personal Interests</h2>
        <p className="text-gray-700 leading-relaxed">
          When I&apos;m not writing code or blog posts, I enjoy reading about cognitive science, linguistics, and the history
          of mathematics. I&apos;m a strong believer in the intersection of good writing and good engineering — clear
          communication is as important as clean code. I also enjoy contributing to open-source projects and mentoring
          early-career engineers in the Vietnamese tech community.
        </p>
      </section>
    </div>
  )
}
