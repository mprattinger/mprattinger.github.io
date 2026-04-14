import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getAllPosts, getPostBySlug } from '@/lib/blog';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: post.frontmatter.title,
    description: post.frontmatter.excerpt,
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      {/* Back link */}
      <Link
        href="/blog"
        className="font-mono text-sm text-gray-500 hover:text-accent transition-colors mb-10 inline-block"
      >
        &larr; Back to blog
      </Link>

      <article>
        <header className="mb-10">
          <time
            dateTime={post.frontmatter.date}
            className="font-mono text-xs text-gray-500 block mb-3"
          >
            {new Date(post.frontmatter.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
          <h1 className="font-mono text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
            {post.frontmatter.title}
          </h1>
          {post.frontmatter.tags && post.frontmatter.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {post.frontmatter.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="font-mono text-xs text-accent bg-accent/5 border border-accent/20 px-2 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        <div className="prose prose-invert prose-neutral max-w-none prose-code:text-accent prose-pre:bg-[#111111] prose-pre:border prose-pre:border-[#2a2a2a]">
          <MDXRemote source={post.content} />
        </div>
      </article>
    </div>
  );
}
