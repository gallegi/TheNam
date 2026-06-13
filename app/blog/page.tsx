import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-navy mb-2">Blog</h1>
      <p className="text-slate-custom mb-10">Thoughts on ML, MLOps, and software engineering.</p>

      <div className="flex flex-col gap-8">
        {posts.map((post) => (
          <article key={post.slug} className="border-b border-gray-200 pb-8">
            <Link href={`/blog/${post.slug}`} className="group">
              <h2 className="text-xl font-bold text-navy group-hover:underline mb-1">
                {post.title}
              </h2>
            </Link>
            <div className="flex items-center gap-3 text-sm text-slate-custom mb-2">
              <time>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
              <span>·</span>
              <span>{post.readingTime}</span>
            </div>
            <div className="flex gap-2 flex-wrap">
              {post.tags?.map((tag: string) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 bg-blue-50 text-navy text-xs rounded-full border border-blue-100"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
