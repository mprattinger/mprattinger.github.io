import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Home',
};

function TermLine({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay: string;
}) {
  return (
    <div className="term-line" style={{ animationDelay: delay }}>
      {children}
    </div>
  );
}

const projects = [
  {
    title: 'Project Alpha',
    description:
      'A full-stack .NET + React application demonstrating clean architecture and domain-driven design patterns.',
    tags: ['.NET', 'React', 'TypeScript'],
    github: 'https://github.com/mprattinger',
  },
  {
    title: 'Project Beta',
    description:
      'IBM i modernization toolkit — RPG utilities and data-transformation helpers for legacy-system integration.',
    tags: ['IBM i', 'RPG', 'Node.js'],
    github: 'https://github.com/mprattinger',
  },
  {
    title: 'Project Gamma',
    description:
      'SAP CRM integration layer built with Node.js enabling real-time synchronisation with external systems via REST.',
    tags: ['SAP CRM', 'Node.js', 'REST API'],
    github: 'https://github.com/mprattinger',
  },
];

const blogPosts = [
  {
    title: 'Clean Architecture in .NET: A Practical Guide',
    date: '2026-03-15',
    excerpt:
      'How I structure large .NET solutions using Clean Architecture principles — layers, dependencies, and testability.',
    slug: 'clean-architecture-dotnet',
  },
  {
    title: 'React Server Components: When to Use Them',
    date: '2026-02-28',
    excerpt:
      'A hands-on look at React Server Components in Next.js 14, when they shine and when to reach for client components.',
    slug: 'react-server-components',
  },
  {
    title: 'Modernising IBM i Applications with Node.js',
    date: '2026-01-20',
    excerpt:
      'Practical strategies for wrapping legacy RPG programs in modern REST APIs without a full rewrite.',
    slug: 'ibm-i-nodejs-modernisation',
  },
];

const skills = [
  { label: '.NET / C#', highlight: true },
  { label: 'React', highlight: false },
  { label: 'TypeScript', highlight: false },
  { label: 'Node.js', highlight: false },
  { label: 'SQL Server', highlight: false },
  { label: 'SAP CRM', highlight: true },
  { label: 'IBM i / RPG', highlight: true },
  { label: 'Azure', highlight: false },
  { label: 'Docker', highlight: false },
  { label: 'Next.js', highlight: false },
  { label: 'REST APIs', highlight: false },
  { label: 'Git', highlight: false },
];

const GitHubIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path
      fillRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      clipRule="evenodd"
    />
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export default function HomePage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section
        id="hero"
        className="relative min-h-[calc(100vh-65px)] flex flex-col items-center justify-center px-6 py-20 overflow-hidden"
      >
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: 'radial-gradient(circle, #374151 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
          aria-hidden="true"
        />
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.06) 0%, transparent 65%)' }}
          aria-hidden="true"
        />

        <div className="relative z-10 w-full max-w-3xl mx-auto text-center">
          <p className="font-mono text-sm text-accent mb-4 tracking-widest uppercase">
            &gt; Hello, world
          </p>
          <h1 className="font-mono text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-3 leading-tight">
            Michael Prattinger
          </h1>
          <p className="text-gray-400 text-lg mb-10">
            Software Developer &middot;{' '}
            <span className="text-accent">20+ years</span> of experience
          </p>

          {/* Terminal window */}
          <div className="mx-auto max-w-2xl text-left rounded-xl overflow-hidden border border-[#2a2a2a] shadow-2xl shadow-black/70">
            <div className="flex items-center gap-2 bg-[#1a1a1a] px-4 py-3 border-b border-[#2a2a2a]">
              <span className="w-3 h-3 rounded-full bg-red-500/80" aria-hidden="true" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" aria-hidden="true" />
              <span className="w-3 h-3 rounded-full bg-green-500/80" aria-hidden="true" />
              <span className="ml-3 font-mono text-xs text-gray-500">
                terminal — michael@mprattinger.dev
              </span>
            </div>

            <div className="bg-[#0d0d0d] p-5 font-mono text-sm leading-7 overflow-x-auto">
              <TermLine delay="0.2s">
                <span className="text-green-400">visitor@mprattinger</span>
                <span className="text-gray-600">:</span>
                <span className="text-blue-400">~</span>
                <span className="text-gray-500">$ </span>
                <span className="text-white">whoami</span>
              </TermLine>
              <TermLine delay="0.7s">
                <span className="text-accent">michael_prattinger</span>
              </TermLine>
              <TermLine delay="0.9s">
                <span className="select-none opacity-0">&nbsp;</span>
              </TermLine>
              <TermLine delay="1.1s">
                <span className="text-green-400">visitor@mprattinger</span>
                <span className="text-gray-600">:</span>
                <span className="text-blue-400">~</span>
                <span className="text-gray-500">$ </span>
                <span className="text-white">cat profile.json</span>
              </TermLine>
              <TermLine delay="1.5s">
                <span className="text-gray-400">&#123;</span>
              </TermLine>
              <TermLine delay="1.7s">
                <span className="text-gray-600">&nbsp;&nbsp;</span>
                <span className="text-accent">&quot;name&quot;</span>
                <span className="text-gray-500">:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <span className="text-amber-300">&quot;Michael Prattinger&quot;</span>
                <span className="text-gray-500">,</span>
              </TermLine>
              <TermLine delay="1.9s">
                <span className="text-gray-600">&nbsp;&nbsp;</span>
                <span className="text-accent">&quot;title&quot;</span>
                <span className="text-gray-500">:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <span className="text-amber-300">&quot;Software Developer&quot;</span>
                <span className="text-gray-500">,</span>
              </TermLine>
              <TermLine delay="2.1s">
                <span className="text-gray-600">&nbsp;&nbsp;</span>
                <span className="text-accent">&quot;experience&quot;</span>
                <span className="text-gray-500">: </span>
                <span className="text-amber-300">&quot;20+ years&quot;</span>
                <span className="text-gray-500">,</span>
              </TermLine>
              <TermLine delay="2.3s">
                <span className="text-gray-600">&nbsp;&nbsp;</span>
                <span className="text-accent">&quot;stack&quot;</span>
                <span className="text-gray-500">:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <span className="text-gray-400">[</span>
                <span className="text-green-400">&quot;.NET&quot;</span>
                <span className="text-gray-500">, </span>
                <span className="text-green-400">&quot;React&quot;</span>
                <span className="text-gray-500">, </span>
                <span className="text-green-400">&quot;Node.js&quot;</span>
                <span className="text-gray-500">, </span>
                <span className="text-green-400">&quot;TypeScript&quot;</span>
                <span className="text-gray-400">]</span>
                <span className="text-gray-500">,</span>
              </TermLine>
              <TermLine delay="2.5s">
                <span className="text-gray-600">&nbsp;&nbsp;</span>
                <span className="text-accent">&quot;available&quot;</span>
                <span className="text-gray-500">: </span>
                <span className="text-purple-400">true</span>
              </TermLine>
              <TermLine delay="2.7s">
                <span className="text-gray-400">&#125;</span>
              </TermLine>
              <TermLine delay="2.9s">
                <span className="select-none opacity-0">&nbsp;</span>
              </TermLine>
              <TermLine delay="3.1s">
                <span className="text-green-400">visitor@mprattinger</span>
                <span className="text-gray-600">:</span>
                <span className="text-blue-400">~</span>
                <span className="text-gray-500">$ </span>
                <span className="term-cursor">&#9608;</span>
              </TermLine>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link
              href="/#projects"
              className="font-mono text-sm px-6 py-3 bg-accent text-[#0a0a0a] font-semibold rounded-lg hover:bg-white transition-colors"
            >
              View Projects
            </Link>
            <Link
              href="/blog"
              className="font-mono text-sm px-6 py-3 border border-[#2a2a2a] text-gray-300 rounded-lg hover:border-accent hover:text-accent transition-colors"
            >
              Read Blog
            </Link>
          </div>
        </div>
      </section>

      {/* ── About ─────────────────────────────────────────────── */}
      <section id="about" className="py-24 px-6 border-t border-[#1f1f1f]">
        <div className="max-w-3xl mx-auto">
          <p className="font-mono text-xs text-accent tracking-widest uppercase mb-3">01. about</p>
          <h2 className="font-mono text-3xl font-bold text-white mb-8">About Me</h2>
          <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
            <p>
              I&rsquo;m a software developer with over 20 years of hands-on experience building
              everything from enterprise .NET applications and SAP CRM integrations to React
              front-ends and IBM&nbsp;i / RPG modernisation projects.
            </p>
            <p>
              I care deeply about clean code, pragmatic architecture, and shipping software that
              actually solves problems. I&rsquo;m equally comfortable in legacy codebases and
              greenfield projects — the best solutions come from understanding the business context,
              not just the technology.
            </p>
            <p>
              Outside of work I contribute to open-source, write about development on this blog,
              and build small tools that scratch my own itches.
            </p>
          </div>
        </div>
      </section>

      {/* ── Skills ────────────────────────────────────────────── */}
      <section id="skills" className="py-24 px-6 border-t border-[#1f1f1f] bg-[#0d0d0d]">
        <div className="max-w-3xl mx-auto">
          <p className="font-mono text-xs text-accent tracking-widest uppercase mb-3">02. skills</p>
          <h2 className="font-mono text-3xl font-bold text-white mb-10">Tech Stack</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill.label}
                className={
                  skill.highlight
                    ? 'font-mono text-sm px-4 py-2 rounded-lg border border-accent/40 text-accent bg-accent/5 transition-colors'
                    : 'font-mono text-sm px-4 py-2 rounded-lg border border-[#2a2a2a] text-gray-300 bg-[#111111] hover:border-accent/40 hover:text-accent transition-colors'
                }
              >
                {skill.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Projects ──────────────────────────────────────────── */}
      <section id="projects" className="py-24 px-6 border-t border-[#1f1f1f]">
        <div className="max-w-5xl mx-auto">
          <p className="font-mono text-xs text-accent tracking-widest uppercase mb-3">03. projects</p>
          <h2 className="font-mono text-3xl font-bold text-white mb-10">Projects</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group flex flex-col bg-[#111111] border border-[#2a2a2a] rounded-xl p-6 hover:border-accent/40 transition-colors"
              >
                <div className="flex items-start justify-between mb-4">
                  <svg
                    className="w-8 h-8 text-accent/70"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                    />
                  </svg>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-accent transition-colors"
                    aria-label={'GitHub — ' + project.title}
                  >
                    <GitHubIcon />
                  </a>
                </div>
                <h3 className="font-mono text-white font-semibold mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-xs text-accent bg-accent/5 border border-accent/20 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Blog Teaser ───────────────────────────────────────── */}
      <section id="blog" className="py-24 px-6 border-t border-[#1f1f1f] bg-[#0d0d0d]">
        <div className="max-w-3xl mx-auto">
          <p className="font-mono text-xs text-accent tracking-widest uppercase mb-3">04. blog</p>
          <div className="flex items-end justify-between mb-10">
            <h2 className="font-mono text-3xl font-bold text-white">Latest Posts</h2>
            <Link
              href="/blog"
              className="font-mono text-sm text-accent hover:text-white transition-colors"
            >
              All posts &rarr;
            </Link>
          </div>
          <div className="space-y-4">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="group p-6 bg-[#111111] border border-[#2a2a2a] rounded-xl hover:border-accent/40 transition-colors"
              >
                <time className="font-mono text-xs text-gray-500 block mb-2">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
                <h3 className="font-mono text-white font-semibold mb-2 group-hover:text-accent transition-colors">
                  <Link href={'/blog/' + post.slug}>{post.title}</Link>
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{post.excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ───────────────────────────────────────────── */}
      <section id="contact" className="py-24 px-6 border-t border-[#1f1f1f]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-mono text-xs text-accent tracking-widest uppercase mb-3">05. contact</p>
          <h2 className="font-mono text-3xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-gray-400 text-lg mb-10 max-w-lg mx-auto">
            Have a project in mind, a question, or just want to connect? I&rsquo;d love to hear
            from you.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="mailto:hello@mprattinger.dev"
              className="font-mono text-sm px-6 py-3 bg-accent text-[#0a0a0a] font-semibold rounded-lg hover:bg-white transition-colors"
            >
              Send an Email
            </a>
            <a
              href="https://github.com/mprattinger"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm px-6 py-3 border border-[#2a2a2a] text-gray-300 rounded-lg hover:border-accent hover:text-accent transition-colors flex items-center gap-2"
            >
              <GitHubIcon />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/mprattinger"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm px-6 py-3 border border-[#2a2a2a] text-gray-300 rounded-lg hover:border-accent hover:text-accent transition-colors flex items-center gap-2"
            >
              <LinkedInIcon />
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
