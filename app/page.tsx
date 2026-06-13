import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'

export default function Home() {
  const recentPosts = getAllPosts().slice(0, 3)

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      {/* Hero */}
      <section className="mb-20">
        <h1 className="text-4xl font-bold text-navy mb-3">
          Hi, I&apos;m Nam Nguyen 👋
        </h1>
        <p className="text-xl text-slate-custom mb-4">ML Engineer &amp; Tech Writer</p>
        <p className="text-gray-700 max-w-2xl leading-relaxed mb-8">
          I build production-grade machine learning systems and write about AI/ML, MLOps, and software engineering.
          Based in Vietnam, I&apos;m passionate about making ML accessible through clear technical writing and open-source projects.
          My work spans NLP, computer vision, and scalable data pipelines.
        </p>

        {/* Social links */}
        <div className="flex flex-wrap gap-3">
          <a
            href="https://github.com/namnguyen"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-navy text-navy rounded text-sm font-medium hover:bg-navy hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/namnguyen"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-navy text-navy rounded text-sm font-medium hover:bg-navy hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:namnguyen61031@gmail.com"
            className="px-4 py-2 border border-navy text-navy rounded text-sm font-medium hover:bg-navy hover:text-white transition-colors"
          >
            Email
          </a>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-navy">Recent Posts</h2>
          <Link href="/blog" className="text-sm text-slate-custom hover:text-navy">
            View all &rarr;
          </Link>
        </div>
        <div className="space-y-4">
          {recentPosts.map((post: any) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
              <div className="p-4 border border-gray-100 rounded-lg hover:border-navy transition-colors">
                <h3 className="font-semibold text-gray-900 group-hover:text-navy mb-1">{post.title}</h3>
                <p className="text-sm text-slate-custom">
                  {post.date} &middot; {post.readingTime}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-navy">Featured Projects</h2>
          <Link href="/projects" className="text-sm text-slate-custom hover:text-navy">
            View all &rarr;
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="p-4 border border-gray-100 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-1">NLP Sentiment Analyzer</h3>
            <p className="text-sm text-gray-600">Fine-tuned BERT model for Vietnamese sentiment analysis.</p>
          </div>
          <div className="p-4 border border-gray-100 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-1">MLOps Pipeline Template</h3>
            <p className="text-sm text-gray-600">Production-ready ML pipeline with experiment tracking.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
