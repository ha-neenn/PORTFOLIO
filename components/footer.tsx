'use client'

import { useLanguage } from '@/components/language-provider'
import { GithubIcon } from '@/components/brand-icons'
import { motion } from 'framer-motion'

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-border/60 bg-background px-4 py-8 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-start"
      >
        {/* Brand name & GitHub link */}
        <div className="flex items-center gap-3">
          <p className="font-serif text-base font-bold text-foreground">
            {t.name}
            <span className="text-primary">.</span>
          </p>

          <a
            href="https://Github.com/ha-neenn"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex size-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="size-4" />
          </a>
        </div>

        {/* Copyright notice */}
        <p className="text-xs text-muted-foreground">
          {t.footer.copyright}
        </p>
      </motion.div>
    </footer>
  )
}

