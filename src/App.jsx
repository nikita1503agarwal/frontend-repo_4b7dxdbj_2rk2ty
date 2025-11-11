import React, { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Download, Sun, Moon, ArrowRight, BadgeCheck } from 'lucide-react'
import Spline from '@splinetool/react-spline'

function useTheme() {
  const [theme, setTheme] = useState(() => {
    const stored = localStorage.getItem('theme')
    if (stored) return stored
    // fallback to system
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  return { theme, setTheme }
}

const skills = [
  { category: 'Python Development', tools: 'Django, FastAPI, Automation', level: 90 },
  { category: 'Frontend Development', tools: 'React, TailwindCSS', level: 85 },
  { category: 'AI + ML Programming', tools: 'PyTorch, Transformers, NLP', level: 80 },
  { category: 'Backend Engineering', tools: 'Django REST, ASP.NET Core', level: 75 },
  { category: 'Dev Tools & Workflow', tools: 'Git, Docker, Linux', level: 85 },
]

export default function App() {
  const { theme, setTheme } = useTheme()

  const badges = useMemo(
    () => ['Python', 'React', 'AI/ML', 'Django', 'ASP.NET Core', 'FastAPI', 'Docker', 'Git'],
    []
  )

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-white dark:from-gray-950 dark:via-gray-950 dark:to-gray-900 text-gray-800 dark:text-gray-100">
      {/* Navigation */}
      <header className="relative z-20 sticky top-0 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-gray-900/40 border-b border-gray-200/60 dark:border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="size-9 rounded-lg bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center text-white font-semibold">A</div>
            <div>
              <p className="font-semibold tracking-tight">A. Developer</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Full‑Stack • Python & AI</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-white/10 transition-colors" aria-label="GitHub">
              <Github className="size-5" />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-white/10 transition-colors" aria-label="LinkedIn">
              <Linkedin className="size-5" />
            </a>
            <a href="mailto:you@example.com" className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-white/10 transition-colors" aria-label="Email">
              <Mail className="size-5" />
            </a>
            <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="ml-2 inline-flex items-center gap-2 rounded-md border border-gray-200 dark:border-white/10 px-3 py-1.5 text-sm hover:bg-gray-50 dark:hover:bg-white/10 transition-colors" aria-label="Toggle theme">
              {theme === 'dark' ? <Sun className="size-4" /> : <Moon className="size-4" />}
              <span className="hidden sm:inline">{theme === 'dark' ? 'Light' : 'Dark'} mode</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero with Spline cover */}
      <section className="relative h-[70vh] min-h-[520px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          {/* Soft gradient overlay to blend with content - ensure interactions pass through */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-black/20 to-white/80 dark:to-gray-950/85"></div>
        </div>
        <div className="relative z-10 max-w-6xl mx-auto h-full px-4 flex items-center">
          <div className="max-w-2xl">
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
              Full‑Stack Developer
              <span className="block text-white/90 text-xl sm:text-2xl md:text-3xl font-medium mt-3">Python & AI Engineer</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.05 }} className="mt-5 text-lg text-white/90 max-w-xl">
              I build performant web apps and intelligent systems. Passionate about Python development, frontend engineering, and AI/ML — with solid experience in Django and a growing focus on ASP.NET Core.
            </motion.p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="/resume.pdf" className="inline-flex items-center gap-2 rounded-md bg-white text-gray-900 px-4 py-2.5 font-medium shadow hover:shadow-md transition-shadow">
                <Download className="size-4" />
                Download Resume
              </a>
              <a href="#projects" className="inline-flex items-center gap-2 rounded-md border border-white/30 text-white px-4 py-2.5 font-medium hover:bg-white/10 transition-colors">
                View Projects <ArrowRight className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Me */}
      <section id="about" className="relative py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-10 items-start">
          <div className="md:col-span-1">
            <div className="w-40 h-40 rounded-2xl overflow-hidden ring-1 ring-gray-900/10 dark:ring-white/10 shadow-md">
              <img src="https://avatars.githubusercontent.com/u/9919?s=200&v=4" alt="Profile" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="md:col-span-2">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">About Me</h2>
            <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm a full‑stack developer who loves crafting clean, scalable experiences. My core stack centers on Python and modern frontend engineering, and I enjoy bringing AI/ML capabilities into real products. Previously focused on Django ecosystems, I'm currently expanding into ASP.NET Core and distributed AI systems.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {badges.map((b) => (
                <span key={b} className="inline-flex items-center gap-1 rounded-full border border-gray-200 dark:border-white/15 bg-white/70 dark:bg-white/5 px-3 py-1 text-sm text-gray-700 dark:text-gray-200">
                  <BadgeCheck className="size-4 text-indigo-600" /> {b}
                </span>
              ))}
            </div>
            <div className="mt-6">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Currently exploring: <span className="font-medium text-gray-900 dark:text-gray-100">ASP.NET Core</span>, <span className="font-medium text-gray-900 dark:text-gray-100">distributed AI systems</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="relative py-16 sm:py-20 bg-gradient-to-b from-white to-indigo-50/40 dark:from-gray-900 dark:to-gray-950">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Skills & Capabilities</h2>
          <p className="mt-3 text-gray-600 dark:text-gray-400 max-w-2xl">A snapshot of tools I use and areas I thrive in. Bars animate to reflect my current proficiency.</p>

          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {skills.map((s, i) => (
              <motion.div
                key={s.category}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="rounded-xl border border-gray-200 dark:border-white/10 bg-white/70 dark:bg-white/5 p-5 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold">{s.category}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{s.tools}</p>
                  </div>
                  <p className="font-semibold text-indigo-600">{s.level}%</p>
                </div>
                <div className="mt-4 h-2.5 w-full rounded-full bg-gray-200 dark:bg-white/10 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.1, ease: 'easeOut' }}
                    className="h-full rounded-full bg-gradient-to-r from-indigo-600 via-violet-500 to-fuchsia-500"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects placeholder anchor for CTA in hero */}
      <section id="projects" className="relative py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Featured Projects</h2>
          <p className="mt-3 text-gray-600 dark:text-gray-400">Add a few case studies or GitHub links here. Each card can include a quick summary, stack, and links.</p>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[1,2,3].map((n) => (
              <div key={n} className="rounded-xl border border-gray-200 dark:border-white/10 bg-white/70 dark:bg-white/5 p-5 shadow-sm">
                <div className="h-36 rounded-lg bg-gradient-to-br from-gray-100 to-indigo-50 dark:from-gray-800 dark:to-gray-700 mb-4" />
                <p className="font-semibold">Project Title {n}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Short one-liner about what it does and your role.</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {['Python','React','AI'].map(t => (
                    <span key={t} className="text-xs px-2 py-1 rounded-full bg-indigo-50 text-indigo-700 dark:bg-indigo-500/15 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-500/20">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-gray-200 dark:border-white/10 py-10">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600 dark:text-gray-400">© {new Date().getFullYear()} A. Developer — Open to opportunities</p>
          <div className="flex items-center gap-3">
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-white/10 transition-colors" aria-label="GitHub"><Github className="size-5" /></a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-white/10 transition-colors" aria-label="LinkedIn"><Linkedin className="size-5" /></a>
            <a href="mailto:you@example.com" className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-white/10 transition-colors" aria-label="Email"><Mail className="size-5" /></a>
          </div>
        </div>
      </footer>
    </div>
  )
}
