import Link from 'next/link'

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      {/* Hero */}
      <section className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-navy mb-3">
          Hi, I&apos;m Nam Nguyen 👋
        </h1>
        <p className="text-xl text-slate-custom font-medium mb-4">
          ML Engineer &amp; Tech Writer
        </p>
        <p className="text-gray-700 leading-relaxed max-w-2xl">
          I build production-grade machine learning systems and write about AI/ML
          to make complex ideas accessible. Based in Vietnam, I care about robust
          pipelines, clean code, and sharing knowledge with the community.
        </p>
        {/* Social links */}
        <div className="flex gap-3 mt-6 flex-wrap">
          <a
            href="https://github.com/namnguyen"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-4 py-2 border border-navy text-navy rounded hover:bg-navy hover:text-white transition-colors text-sm font-medium"
          >
            🐙 GitHub
          </a>
          <a
            href="https://linkedin.com/in/namnguyen"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-4 py-2 border border-navy text-navy rounded hover:bg-navy hover:text-white transition-colors text-sm font-medium"
          >
            💼 LinkedIn
          </a>
          <a
            href="mailto:namnguyen61031@gmail.com"
            className="inline-flex items-center gap-1 px-4 py-2 border border-navy text-navy rounded hover:bg-navy hover:text-white transition-colors text-sm font-medium"
          >
            ✉️ Email
          </a>
        </div>
      </section>

      {/* Teasers */}
      <div className="grid md:grid-cols-2 gap-8">
        <section className="border border-gray-200 rounded-lg p-6">
          <h2 className="text-lg font-bold text-navy mb-2">Recent Posts</h2>
          <p className="text-gray-600 text-sm mb-4">
            Thoughts on machine learning, MLOps, and software engineering.
          </p>
          <Link
            href="/blog"
            className="text-navy text-sm font-medium hover:underline"
          >
            View all posts →
          </Link>
        </section>
        <section className="border border-gray-200 rounded-lg p-6">
          <h2 className="text-lg font-bold text-navy mb-2">Featured Projects</h2>
          <p className="text-gray-600 text-sm mb-4">
            Open-source tools, models, and experiments I&apos;ve built.
          </p>
          <Link
            href="/projects"
            className="text-navy text-sm font-medium hover:underline"
          >
            View all projects →
          </Link>
        </section>
      </div>
    </div>
  )
}
