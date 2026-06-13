import { getPost, getAllPosts } from '@/lib/posts'
import { MDXRemote } from 'next-mdx-remote/rsc'

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((p) => ({ slug: p.slug }))
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const { frontmatter, content, readingTime } = getPost(params.slug)

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-navy mb-3">{frontmatter.title}</h1>
      <div className="flex items-center gap-3 text-sm text-slate-custom mb-4">
        <time>
          {new Date(frontmatter.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </time>
        <span>·</span>
        <span>{readingTime}</span>
      </div>
      <div className="flex gap-2 flex-wrap mb-8">
        {frontmatter.tags?.map((tag: string) => (
          <span
            key={tag}
            className="px-2 py-0.5 bg-blue-50 text-navy text-xs rounded-full border border-blue-100"
          >
            {tag}
          </span>
        ))}
      </div>
      <article className="prose prose-gray max-w-none">
        <MDXRemote source={content} />
      </article>
    </div>
  )
}
