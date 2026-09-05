'use client'

import { useState, useEffect } from 'react'
import { ExternalLink, Eye, X, CheckCircle2, Sparkles, Layers } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { buttonVariants } from '@/components/ui/button'
import { useLanguage } from '@/components/language-provider'
import { SectionHeading } from '@/components/about'
import { GithubIcon } from '@/components/brand-icons'
import { cn } from '@/lib/utils'
import type { Project } from '@/lib/i18n'

export function Projects() {
  const { t } = useLanguage()
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  // Close modal on Escape key and lock body scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProject(null)
      }
    }
    if (selectedProject) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedProject])

  return (
    <section id="projects" className="scroll-mt-16 px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading>{t.projects.heading}</SectionHeading>
        <p className="-mt-4 mb-12 max-w-xl text-pretty leading-relaxed text-muted-foreground">
          {t.projects.subheading}
        </p>

        {/* 3 Projects Grid (1 on mobile, 2/3 on desktop) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {t.projects.items.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: [0, 1], y: [15, 0] }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 1.2, delay: index * 0.1, ease: 'easeOut' }}
              whileHover={{ y: -3 }}
              style={{ transition: 'box-shadow 0.4s ease, border-color 0.4s ease' }}
              className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm hover:border-primary/35 hover:shadow-md hover:shadow-primary/8"
            >
              {/* Image Preview with Click-to-open indicator */}
              <div
                onClick={() => setSelectedProject(project)}
                className="relative aspect-16/10 w-full cursor-pointer overflow-hidden bg-secondary"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Subtle overlay hint */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 backdrop-blur-xs transition-opacity duration-300 group-hover:opacity-100">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-black/60 px-4 py-2 text-xs font-semibold text-white shadow-lg backdrop-blur-md">
                    <Eye className="size-3.5" />
                    {t.projects.viewDetails}
                  </span>
                </div>

                {/* Category tag over image */}
                <div className="absolute top-3.5 inset-s-3.5">
                  <span className="rounded-full border border-white/20 bg-black/60 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur-md">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col p-6">
                {/* Tags */}
                <div className="mb-3 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-secondary/80 px-2.5 py-0.5 text-[11px] font-medium text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3
                  onClick={() => setSelectedProject(project)}
                  className="cursor-pointer font-serif text-lg font-bold tracking-tight text-foreground transition-colors hover:text-primary sm:text-xl"
                >
                  {project.title}
                </h3>

                <p className="mt-2.5 flex-1 text-pretty text-xs leading-relaxed text-muted-foreground sm:text-sm">
                  {project.description}
                </p>

                {/* Card Action Buttons */}
                <div className="mt-6 flex flex-wrap items-center gap-2.5 pt-4 border-t border-border/50">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      buttonVariants({ size: 'sm' }),
                      'group/btn flex-1 rounded-full px-4 text-xs font-semibold shadow-sm shadow-primary/20 transition-all hover:bg-primary/90 hover:shadow-md hover:shadow-primary/30'
                    )}
                  >
                    <ExternalLink
                      className="size-3.5 transition-transform group-hover/btn:rotate-12"
                      aria-hidden="true"
                    />
                    {t.projects.liveDemo}
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      buttonVariants({ size: 'sm', variant: 'outline' }),
                      'rounded-full border-primary/30 bg-transparent px-3 text-xs font-semibold text-foreground hover:bg-secondary'
                    )}
                    aria-label={`GitHub repository for ${project.title}`}
                  >
                    <GithubIcon className="size-3.5" />
                    {t.projects.github}
                  </a>

                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex size-8 items-center justify-center rounded-full border border-border bg-secondary/60 text-muted-foreground transition-colors hover:border-primary/40 hover:bg-primary/15 hover:text-primary"
                    aria-label={`View details of ${project.title}`}
                  >
                    <Eye className="size-3.5" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>

      {/* Interactive Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm"
              aria-hidden="true"
            />

            {/* Modal Dialog Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', duration: 0.45, bounce: 0.2 }}
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
              className="relative z-10 max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-primary/25 bg-card p-6 shadow-2xl shadow-primary/20 sm:p-8"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 inset-e-5 inline-flex size-9 items-center justify-center rounded-full border border-border bg-secondary/80 text-muted-foreground transition-colors hover:border-primary/40 hover:bg-primary/15 hover:text-primary"
                aria-label={t.projects.modal.close}
              >
                <X className="size-4" />
              </button>

              {/* Modal Header */}
              <div className="pe-10">
                <span className="inline-block rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  {selectedProject.category}
                </span>
                <h2
                  id="modal-title"
                  className="mt-3 font-serif text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
                >
                  {selectedProject.title}
                </h2>
              </div>

              {/* Large Image Preview */}
              <div className="mt-6 aspect-video w-full overflow-hidden rounded-2xl border border-border bg-secondary shadow-sm">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="size-full object-cover"
                />
              </div>

              {/* Overview */}
              <div className="mt-6">
                <h3 className="font-serif text-base font-semibold text-foreground sm:text-lg">
                  {t.projects.modal.overview}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {selectedProject.overview}
                </p>
              </div>

              {/* Key Technical Features */}
              <div className="mt-6 border-t border-border/60 pt-6">
                <h3 className="font-serif text-base font-semibold text-foreground sm:text-lg">
                  {t.projects.modal.keyFeatures}
                </h3>
                <ul className="mt-3 space-y-2.5">
                  {selectedProject.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/90">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Pills */}
              <div className="mt-6 border-t border-border/60 pt-6">
                <h3 className="font-serif text-base font-semibold text-foreground sm:text-lg">
                  {t.projects.modal.techStack}
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons inside Modal */}
              <div className="mt-8 flex flex-col gap-3 border-t border-border/60 pt-6 sm:flex-row sm:items-center sm:justify-end">
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ size: 'default' }),
                    'rounded-full px-6 text-sm font-semibold shadow-sm hover:bg-primary/90'
                  )}
                >
                  <ExternalLink className="size-4" />
                  {t.projects.modal.visitLive}
                </a>

                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ size: 'default', variant: 'outline' }),
                    'rounded-full border-primary/30 bg-transparent px-6 text-sm font-semibold text-foreground hover:bg-secondary'
                  )}
                >
                  <GithubIcon className="size-4" />
                  {t.projects.modal.viewCode}
                </a>

                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="rounded-full border border-border bg-secondary/50 px-5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  {t.projects.modal.close}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}
