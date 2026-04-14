# Skill: Terminal Hero Section (Pure CSS)

## What it does

Renders a macOS-style terminal window as a hero section with staggered CSS fade-in animation — no JS, no dependencies, works with Next.js static export.

## Pattern

### 1. CSS animations in globals.css

```css
@keyframes termLine {
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes blink {
  0%, 49% { opacity: 1; }
  50%, 100% { opacity: 0; }
}

.term-line {
  opacity: 0;
  animation: termLine 0.3s ease forwards;
}

.term-cursor {
  animation: blink 1.2s step-end infinite;
  color: #00d4ff;
}
```

### 2. TermLine React component (Server Component)

```tsx
function TermLine({ children, delay }: { children: React.ReactNode; delay: string }) {
  return (
    <div className="term-line" style={{ animationDelay: delay }}>
      {children}
    </div>
  );
}
```

### 3. Terminal window JSX structure

```tsx
<div className="rounded-xl overflow-hidden border border-[#2a2a2a] shadow-2xl">
  {/* macOS title bar */}
  <div className="flex items-center gap-2 bg-[#1a1a1a] px-4 py-3 border-b border-[#2a2a2a]">
    <span className="w-3 h-3 rounded-full bg-red-500/80" />
    <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
    <span className="w-3 h-3 rounded-full bg-green-500/80" />
    <span className="ml-3 font-mono text-xs text-gray-500">terminal — user@host</span>
  </div>
  {/* Terminal body */}
  <div className="bg-[#0d0d0d] p-5 font-mono text-sm leading-7">
    <TermLine delay="0.2s">
      <span className="text-green-400">user@host</span>
      <span className="text-gray-500">$ </span>
      <span className="text-white">command</span>
    </TermLine>
    <TermLine delay="0.7s">
      <span className="text-accent">output</span>
    </TermLine>
    {/* blinking cursor on last line */}
    <TermLine delay="3.0s">
      <span className="text-gray-500">$ </span>
      <span className="term-cursor">&#9608;</span>
    </TermLine>
  </div>
</div>
```

## Color conventions for terminal syntax

| Element | Class |
|---------|-------|
| Prompt (user@host) | `text-green-400` |
| Tilde (~) | `text-blue-400` |
| Dollar sign | `text-gray-500` |
| Command text | `text-white` |
| JSON keys | `text-accent` (`#00d4ff`) |
| String values | `text-amber-300` |
| Array values | `text-green-400` |
| Booleans/numbers | `text-purple-400` |
| Braces/punctuation | `text-gray-400` |

## Notes

- Each `TermLine` uses CSS `animation-fill-mode: forwards` so it stays visible after animating
- Delay increments of ~0.2–0.4s work well; longer content needs bigger gaps
- Avoid JS template literals with `${...}` — use ternary directly in className or string concatenation
- Works with `next build --output export` (no client runtime needed)
