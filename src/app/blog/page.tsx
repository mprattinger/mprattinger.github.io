import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Blog',
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <p className="font-mono text-xs text-accent tracking-widest uppercase mb-3">writing</p>
      <h1 className="font-mono text-4xl font-bold text-white mb-10">Blog</h1>

      {posts.length === 0 ? (
        <p className="text-gray-500 font-mono">No posts yet — check back soon.</p>
      ) : (
        <div className="space-y-4">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group p-6 bg-[#111111] border border-[#2a2a2a] rounded-xl hover:border-accent/40 transition-colors"
            >
              <time
                dateTime={post.frontmatter.date}
                className="font-mono text-xs text-gray-500 block mb-2"
              >
                {new Date(post.frontmatter.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
              <h2 className="font-mono text-white font-semibold mb-2 group-hover:text-accent transition-colors">
                <Link href={'/blog/' + post.slug}>{post.frontmatter.title}</Link>
              </h2>
              {post.frontmatter.excerpt && (
                <p className="text-gray-400 text-sm leading-relaxed">{post.frontmatter.excerpt}</p>
              )}
              {post.frontmatter.tags && post.frontmatter.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {post.frontmatter.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-xs text-accent bg-accent/5 border border-accent/20 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
