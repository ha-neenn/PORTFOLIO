'use client'

import { ArrowRight, Sparkles, ChevronDown, Code2, Palette, Download } from 'lucide-react'
import { motion } from 'framer-motion'
import { buttonVariants } from '@/components/ui/button'
import { useLanguage } from '@/components/language-provider'
import { cn } from '@/lib/utils'

export function Hero() {
  const { t } = useLanguage()

  return (
    <section
      id="home"
      className="relative overflow-hidden px-4 pt-32 pb-20 sm:px-6 sm:pt-36 sm:pb-28"
    >
      {/* Soft ambient background glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 h-96 w-3xl -translate-x-1/2 rounded-full bg-primary/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 -inset-e-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8"
        >
          {/* Left / Main Text Column */}
          <div className="flex flex-col items-start text-start lg:col-span-7">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-secondary/70 px-4 py-1.5 text-xs font-medium text-secondary-foreground shadow-xs">
              <Sparkles className="size-3.5 text-primary" aria-hidden="true" />
              {t.hero.badge}
            </span>

            {/* Name as primary headline with pastel-pink gradient */}
            <h1 className="text-gradient-pink font-serif text-4xl font-bold leading-[1.15] tracking-tight sm:text-5xl lg:text-6xl">
              {t.name}
            </h1>

            {/* Role subtitle directly below the name */}
            <p className="mt-3.5 font-sans text-xl font-semibold tracking-tight text-foreground/90 sm:text-2xl">
              {t.hero.role}
            </p>

            <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              {t.hero.tagline}
            </p>

            <div className="mt-8 flex w-full flex-col gap-3.5 sm:w-auto sm:flex-row sm:items-center">
              <a
                href="#projects"
                className={cn(
                  buttonVariants({ size: 'lg' }),
                  'group h-11 w-full rounded-full px-6 text-sm shadow-sm hover:bg-primary/90 sm:w-auto'
                )}
              >
                {t.hero.viewProjects}
                <ArrowRight
                  className="size-4 transition-transform group-hover:translate-x-0.5 rtl:rotate-180 rtl:group-hover:-translate-x-0.5"
                  aria-hidden="true"
                />
              </a>
              <a
                href="#contact"
                className={cn(
                  buttonVariants({ size: 'lg', variant: 'outline' }),
                  'h-11 w-full rounded-full border-primary/30 bg-card/60 px-6 text-sm text-foreground backdrop-blur-xs hover:bg-secondary sm:w-auto'
                )}
              >
                {t.hero.contactMe}
              </a>
              <a
                href="/cv.pdf"
                download
                className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-full border border-pink-300 bg-pink-50/50 px-5 text-sm font-medium text-pink-900 transition-all hover:bg-pink-100 sm:w-auto"
              >
                <Download className="size-4 shrink-0" aria-hidden="true" />
                {t.hero.downloadCv}
              </a>
            </div>

            {/* Quick highlight pills */}
            <div className="mt-10 flex flex-wrap items-center gap-2.5 border-t border-border/60 pt-6">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-secondary/50 px-3 py-1 text-xs font-medium text-muted-foreground">
                <Code2 className="size-3 text-primary" aria-hidden="true" />
                React.js & Next.js
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-secondary/50 px-3 py-1 text-xs font-medium text-muted-foreground">
                <Palette className="size-3 text-primary" aria-hidden="true" />
                Tailwind CSS & UI/UX
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-secondary/50 px-3 py-1 text-xs font-medium text-muted-foreground">
                <Sparkles className="size-3 text-primary" aria-hidden="true" />
                DEPI Front-End Trainee
              </span>
            </div>
          </div>

          {/* Right / Side-Aligned Profile Image Column */}
          <div className="flex justify-center lg:col-span-5 lg:justify-end">
            <div className="relative w-full max-w-sm">
              {/* Radial glow around the profile frame */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-3 rounded-[2.5rem] bg-linear-to-tr from-primary/25 via-primary/10 to-transparent blur-xl"
              />

              {/* Card container with soft rounded corners and subtle pastel pink border */}
              <div className="relative overflow-hidden rounded-3xl border-2 border-primary/25 bg-linear-to-b from-card via-card/90 to-secondary/30 p-2.5 shadow-xl shadow-primary/10">
                <div className="relative aspect-3/4 w-full overflow-hidden rounded-2xl bg-secondary">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/profile.jpg"
                    alt={t.hero.profileAlt}
                    className="size-full object-cover object-top transition-transform duration-700 hover:scale-105"
                  />
                  {/* Subtle inner gradient shade */}
                  <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent" />
                </div>
              </div>

              {/* Floating tech badge 1 (Top / Start) */}
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: [-4, 4, -4] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                className="absolute -top-3 -inset-s-4 rounded-2xl border border-primary/30 bg-card/90 px-3.5 py-2 shadow-lg shadow-primary/10 backdrop-blur-md"
              >
                <div className="flex items-center gap-2">
                  <span className="flex size-7 items-center justify-center rounded-full bg-primary/15 text-primary">
                    <Code2 className="size-4" aria-hidden="true" />
                  </span>
                  <span className="text-xs font-semibold text-foreground">
                    {t.hero.techBadges.react}
                  </span>
                </div>
              </motion.div>

              {/* Floating tech badge 2 (Bottom / End) */}
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: [4, -4, 4] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}
                className="absolute -bottom-3 -inset-s-4 rounded-2xl border border-primary/30 bg-card/90 px-3.5 py-2 shadow-lg shadow-primary/10 backdrop-blur-md"
              >
                <div className="flex items-center gap-2">
                  <span className="flex size-7 items-center justify-center rounded-full bg-primary/15 text-primary">
                    <Sparkles className="size-4" aria-hidden="true" />
                  </span>
                  <span className="text-xs font-semibold text-foreground">
                    {t.hero.techBadges.uiux}
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Pulsing scroll-down indicator */}
        <div className="mt-16 flex justify-center">
          <a
            href="#about"
            aria-label={t.hero.scroll}
            className="group inline-flex flex-col items-center gap-2"
          >
            <span className="text-xs font-medium tracking-widest text-muted-foreground uppercase transition-colors group-hover:text-primary">
              {t.hero.scroll}
            </span>
            <span className="flex size-9 items-center justify-center rounded-full border border-primary/30 bg-secondary/40 text-primary transition-colors group-hover:bg-secondary">
              <ChevronDown className="size-4 animate-scroll-hint" aria-hidden="true" />
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
