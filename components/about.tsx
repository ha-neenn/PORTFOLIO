'use client'

import { Palette, MousePointerClick, Puzzle } from 'lucide-react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/components/language-provider'

const icons = [Palette, MousePointerClick, Puzzle]

export function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="scroll-mt-16 px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <SectionHeading>{t.about.heading}</SectionHeading>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="rounded-3xl border border-border bg-card p-8 shadow-sm sm:p-10"
        >
          <h3 className="font-serif text-xl font-semibold text-foreground sm:text-2xl">
            {t.about.lead}
          </h3>
          <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
            {t.about.body}
          </p>

          <ul className="mt-8 grid gap-4 sm:grid-cols-3">
            {t.about.points.map((point, i) => {
              const Icon = icons[i]
              return (
                <li
                  key={point}
                  className="flex flex-col gap-3 rounded-2xl bg-secondary/50 p-5"
                >
                  <span className="inline-flex size-10 items-center justify-center rounded-full bg-primary/15 text-primary">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <span className="text-sm font-medium leading-relaxed text-foreground">
                    {point}
                  </span>
                </li>
              )
            })}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}

export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-8 flex items-center gap-3">
      <span className="h-px w-8 bg-primary/50" aria-hidden="true" />
      <h2 className="font-serif text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
        {children}
      </h2>
    </div>
  )
}
