import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

const postsDir = path.join(process.cwd(), 'content/posts')

export function getAllPosts() {
  const files = fs.readdirSync(postsDir)
  return files
    .filter((f) => f.endsWith('.mdx'))
    .map((filename) => {
      const slug = filename.replace('.mdx', '')
      const raw = fs.readFileSync(path.join(postsDir, filename), 'utf8')
      const { data, content } = matter(raw)
      return { slug, ...data, readingTime: readingTime(content).text } as {
        slug: string
        title: string
        date: string
        tags: string[]
        readingTime: string
      }
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPost(slug: string) {
  const raw = fs.readFileSync(path.join(postsDir, `${slug}.mdx`), 'utf8')
  const { data, content } = matter(raw)
  return {
    slug,
    frontmatter: data as { title: string; date: string; tags: string[] },
    content,
    readingTime: readingTime(content).text,
  }
}
