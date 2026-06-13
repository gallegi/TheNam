const experience = [
  {
    role: 'ML Engineer',
    company: 'SomeCompany',
    period: '2024 – Present',
    bullets: [
      'Designed and deployed a real-time recommendation system serving 2M+ daily active users with p99 latency under 50ms.',
      'Reduced model retraining costs by 40% by introducing incremental fine-tuning and feature caching in the MLOps pipeline.',
      'Led migration of legacy batch inference jobs to streaming architecture using Kafka and Python consumers.',
    ],
  },
  {
    role: 'Data Scientist',
    company: 'AnotherCo',
    period: '2022 – 2024',
    bullets: [
      'Built Vietnamese NLP models for sentiment classification and named entity recognition, integrated into the customer support platform.',
      'Established A/B testing framework that reduced experiment cycle time from two weeks to three days.',
      'Mentored two junior data scientists and introduced code review practices for the ML team.',
    ],
  },
]

const education = [
  {
    degree: 'B.S. Computer Science',
    school: 'University of Science, HCMC',
    period: '2018 – 2022',
  },
]

const skills = [
  { category: 'Languages', items: ['Python', 'TypeScript', 'SQL', 'Bash'] },
  { category: 'ML / AI', items: ['PyTorch', 'TensorFlow', 'scikit-learn', 'HuggingFace'] },
  { category: 'Web', items: ['Next.js', 'FastAPI', 'React'] },
  { category: 'Tools', items: ['Docker', 'Git', 'PostgreSQL', 'AWS'] },
]

export default function ResumePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <div className="flex items-center justify-between mb-10 flex-wrap gap-4">
        <h1 className="text-3xl font-bold text-navy">Resume</h1>
        <a
          href="/resume.pdf"
          className="px-4 py-2 bg-navy text-white text-sm font-medium rounded hover:bg-opacity-90 transition"
        >
          ⬇ Download PDF
        </a>
      </div>

      {/* Experience */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-navy mb-4 border-b border-gray-200 pb-2">
          Experience
        </h2>
        <div className="flex flex-col gap-6">
          {experience.map((job) => (
            <div key={job.company}>
              <div className="flex items-baseline justify-between flex-wrap gap-1 mb-1">
                <span className="font-semibold text-gray-900">
                  {job.role}{' '}
                  <span className="text-slate-custom">@ {job.company}</span>
                </span>
                <span className="text-sm text-slate-custom">{job.period}</span>
              </div>
              <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                {job.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-navy mb-4 border-b border-gray-200 pb-2">
          Education
        </h2>
        {education.map((edu) => (
          <div key={edu.school} className="flex items-baseline justify-between flex-wrap gap-1">
            <span className="font-semibold text-gray-900">
              {edu.degree}{' '}
              <span className="text-slate-custom">— {edu.school}</span>
            </span>
            <span className="text-sm text-slate-custom">{edu.period}</span>
          </div>
        ))}
      </section>

      {/* Skills */}
      <section>
        <h2 className="text-xl font-bold text-navy mb-4 border-b border-gray-200 pb-2">
          Skills
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {skills.map(({ category, items }) => (
            <div key={category}>
              <h3 className="text-xs font-semibold text-slate-custom uppercase tracking-wide mb-1">
                {category}
              </h3>
              <div className="flex flex-wrap gap-1">
                {items.map((item) => (
                  <span
                    key={item}
                    className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs rounded"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
