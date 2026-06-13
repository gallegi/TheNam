import { getPost, getAllPosts } from '@/lib/posts'
import { MDXRemote } from 'next-mdx-remote/rsc'

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post: any) => ({ slug: post.slug }))
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const { frontmatter, content, readingTime } = getPost(params.slug)

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <header className="mb-10">
        <h1 className="text-3xl font-bold text-navy mb-3">{frontmatter.title}</h1>
        <div className="flex flex-wrap items-center gap-3 text-sm text-slate-custom mb-4">
          <span>{frontmatter.date}</span>
          <span>&middot;</span>
          <span>{readingTime}</span>
        </div>
        {frontmatter.tags && (
          <div className="flex flex-wrap gap-2">
            {frontmatter.tags.map((tag: string) => (
              <span
                key={tag}
                className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>

      <article className="prose prose-gray max-w-none">
        <MDXRemote source={content} />
      </article>
    </div>
  )
}
