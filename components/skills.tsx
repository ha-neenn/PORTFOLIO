'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Code2, Layers, Cpu, Sparkles, Check } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'
import { SectionHeading } from '@/components/about'
import type { SkillCategory } from '@/lib/i18n'

const categoryIcons = [Code2, Layers, Cpu]

export function Skills() {
  const { t } = useLanguage()

  return (
    <section id="skills" className="relative scroll-mt-16 overflow-hidden bg-secondary/30 px-4 py-20 sm:px-6">
      {/* Ambient pink glow circles */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-12 -inset-s-12 size-80 rounded-full bg-primary/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-12 -inset-e-12 size-96 rounded-full bg-primary/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl">
        <SectionHeading>{t.skills.heading}</SectionHeading>
        <p className="-mt-4 mb-12 max-w-xl text-pretty leading-relaxed text-muted-foreground">
          {t.skills.subheading}
        </p>

        {/* 3 Categorized Glassmorphic Cards with 3D Tilt */}
        <div className="grid grid-cols-1 gap-7 md:grid-cols-3">
          {t.skills.categories.map((category, index) => {
            const Icon = categoryIcons[index] || Sparkles
            return (
              <SkillCard
                key={category.title}
                category={category}
                Icon={Icon}
                index={index}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

function SkillCard({
  category,
  Icon,
  index,
}: {
  category: SkillCategory
  Icon: React.ComponentType<{ className?: string }>
  index: number
}) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    // subtle 3D tilt calculation
    setTilt({
      x: -y / 18,
      y: x / 18,
    })
  }

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 })
    setIsHovered(false)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: 'preserve-3d',
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
      }}
      className="group relative flex flex-col justify-between rounded-3xl border border-border/80 bg-card/75 p-6 shadow-sm backdrop-blur-xl transition-all duration-200 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/15 sm:p-7"
    >
      {/* Soft inner glow gradient on hover */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-3xl bg-linear-to-br from-primary/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />

      <div className="relative z-10">
        {/* Header with Icon and Title */}
        <div className="flex items-center gap-3.5">
          <span className="flex size-11 items-center justify-center rounded-2xl border border-primary/25 bg-primary/10 text-primary shadow-xs transition-transform duration-300 group-hover:scale-110">
            <Icon className="size-5.5" />
          </span>
          <h3 className="font-serif text-lg font-bold tracking-tight text-foreground sm:text-xl">
            {category.title}
          </h3>
        </div>

        <p className="mt-3.5 text-xs sm:text-sm leading-relaxed text-muted-foreground">
          {category.description}
        </p>

        {/* Skill Pills */}
        <ul className="mt-6 flex flex-wrap gap-2">
          {category.skills.map((skill) => (
            <li key={skill}>
              <span className="inline-flex items-center gap-1.5 rounded-xl border border-border/90 bg-secondary/60 px-3 py-1.5 text-xs font-medium text-foreground transition-all duration-200 hover:border-primary/50 hover:bg-primary/10 hover:text-primary">
                <Check className="size-3 text-primary" aria-hidden="true" />
                {skill}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Subtle indicator bar at the bottom */}
      <div className="relative z-10 mt-6 pt-4 border-t border-border/40 flex items-center justify-between text-xs text-muted-foreground">
        <span className="font-medium text-foreground/80">{category.skills.length} competencies</span>
        <span className="text-primary font-semibold transition-transform duration-300 group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5">
          ●
        </span>
      </div>
    </motion.div>
  )
}