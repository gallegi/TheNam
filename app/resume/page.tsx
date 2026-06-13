const experience = [
  {
    role: 'ML Engineer',
    company: 'SomeCompany',
    period: '2024 – Present',
    bullets: [
      'Designed and deployed a Vietnamese NLP system processing 500K+ documents per day with 94% accuracy.',
      'Reduced model inference latency by 40% through quantization and batching optimizations.',
      'Established MLOps practices including experiment tracking, model versioning, and automated retraining pipelines.',
    ],
  },
  {
    role: 'Data Scientist',
    company: 'AnotherCo',
    period: '2022 – 2024',
    bullets: [
      'Built end-to-end recommendation system serving 1M+ active users, improving CTR by 18%.',
      'Automated data quality monitoring pipeline, reducing data incidents by 60%.',
      'Collaborated with product teams to translate business requirements into ML problem formulations.',
    ],
  },
]

const education = [
  {
    degree: 'B.S. Computer Science',
    institution: 'University of Science, Ho Chi Minh City',
    period: '2018 – 2022',
  },
]

const skills = [
  { category: 'Languages', items: ['Python', 'TypeScript', 'SQL', 'Bash'] },
  { category: 'ML / AI', items: ['PyTorch', 'TensorFlow', 'scikit-learn', 'HuggingFace'] },
  { category: 'Web', items: ['Next.js', 'FastAPI', 'React'] },
  { category: 'Tools', items: ['Docker', 'Git', 'PostgreSQL', 'AWS'] },
]

export default function Resume() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="flex items-center justify-between mb-10">
        <h1 className="text-3xl font-bold text-navy">Resume</h1>
        <a
          href="/resume.pdf"
          className="px-4 py-2 bg-navy text-white rounded text-sm font-medium hover:bg-opacity-90 transition-opacity"
        >
          Download PDF
        </a>
      </div>

      {/* Experience */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-navy mb-6 border-b border-gray-200 pb-2">Experience</h2>
        <div className="space-y-8">
          {experience.map(({ role, company, period, bullets }) => (
            <div key={`${role}-${company}`}>
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
                <div>
                  <span className="font-semibold text-gray-900">{role}</span>
                  <span className="text-slate-custom"> @ {company}</span>
                </div>
                <span className="text-sm text-slate-custom">{period}</span>
              </div>
              <ul className="space-y-1.5">
                {bullets.map((bullet, i) => (
                  <li key={i} className="text-sm text-gray-700 flex gap-2">
                    <span className="text-navy mt-0.5">&#8211;</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-navy mb-6 border-b border-gray-200 pb-2">Education</h2>
        <div className="space-y-4">
          {education.map(({ degree, institution, period }) => (
            <div key={degree} className="flex flex-wrap items-baseline justify-between gap-2">
              <div>
                <span className="font-semibold text-gray-900">{degree}</span>
                <span className="text-slate-custom">, {institution}</span>
              </div>
              <span className="text-sm text-slate-custom">{period}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section>
        <h2 className="text-xl font-bold text-navy mb-6 border-b border-gray-200 pb-2">Skills</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {skills.map(({ category, items }) => (
            <div key={category} className="flex gap-3">
              <span className="text-sm font-semibold text-slate-custom w-24 shrink-0">{category}</span>
              <span className="text-sm text-gray-700">{items.join(', ')}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
