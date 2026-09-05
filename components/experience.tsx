'use client'

import { Briefcase, Calendar, CheckCircle2, Award } from 'lucide-react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/components/language-provider'
import { SectionHeading } from '@/components/about'

export function Experience() {
  const { t } = useLanguage()

  return (
    <section id="experience" className="scroll-mt-16 px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <SectionHeading>{t.experience.heading}</SectionHeading>
        <p className="-mt-4 mb-12 max-w-xl text-pretty leading-relaxed text-muted-foreground">
          {t.experience.subheading}
        </p>

        {/* Timeline track container */}
        <div className="relative ps-6 sm:ps-8">
          {/* Vertical timeline line with pastel-pink gradient */}
          <div
            aria-hidden="true"
            className="absolute top-3 bottom-3 start-2 w-0.5 -translate-x-1/2 bg-gradient-to-b from-primary/60 via-primary/30 to-primary/5 sm:start-3"
          />

          <div className="flex flex-col gap-10">
            {t.experience.items.map((item, index) => (
              <motion.div
                key={item.organization}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                {/* Glowing timeline node */}
                <div
                  aria-hidden="true"
                  className="absolute -start-6 top-5 flex size-8 -translate-x-1/2 items-center justify-center rounded-full border-2 border-primary bg-card shadow-md shadow-primary/20 sm:-start-8 sm:size-9"
                >
                  <span className="size-2.5 rounded-full bg-primary" />
                </div>

                {/* Experience card */}
                <div className="group rounded-3xl border border-border bg-card/80 p-6 shadow-sm backdrop-blur-xs transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 sm:p-8">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                        <Award className="size-3.5" aria-hidden="true" />
                        {item.organization}
                      </span>
                      <h3 className="mt-2.5 font-serif text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                        {item.role}
                      </h3>
                    </div>

                    <span className="inline-flex shrink-0 items-center gap-1.5 self-start rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium text-muted-foreground">
                      <Calendar className="size-3.5 text-primary" aria-hidden="true" />
                      {item.period}
                    </span>
                  </div>

                  <p className="mt-4 text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {item.description}
                  </p>

                  {/* Highlights checklist */}
                  <ul className="mt-5 space-y-2.5 border-t border-border/50 pt-5">
                    {item.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2.5 text-sm text-foreground/90">
                        <CheckCircle2
                          className="mt-0.5 size-4 shrink-0 text-primary"
                          aria-hidden="true"
                        />
                        <span className="leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="mt-6 flex flex-wrap gap-2 pt-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-secondary/80 px-2.5 py-1 text-xs font-medium text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

