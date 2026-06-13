import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'

export default function Blog() {
  const posts = getAllPosts()

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-navy mb-2">Blog</h1>
      <p className="text-slate-custom mb-10">Writing about ML engineering, MLOps, and software craft.</p>

      <div className="space-y-6">
        {posts.map((post: any) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
            <article className="p-5 border border-gray-100 rounded-lg hover:border-navy transition-colors">
              <h2 className="text-lg font-semibold text-gray-900 group-hover:text-navy mb-2">
                {post.title}
              </h2>
              <div className="flex flex-wrap items-center gap-3 text-sm text-slate-custom mb-3">
                <span>{post.date}</span>
                <span>&middot;</span>
                <span>{post.readingTime}</span>
              </div>
              {post.tags && (
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </article>
          </Link>
        ))}
      </div>
    </div>
  )
}
