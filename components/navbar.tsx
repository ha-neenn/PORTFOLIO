'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Languages, Sun, Moon } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/components/language-provider'
import { useTheme } from '@/components/theme-provider'
import { cn } from '@/lib/utils'

export function Navbar() {
  const { t, lang, toggleLang } = useLanguage()
  const { theme, toggleTheme } = useTheme()
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const links = [
    { id: 'home', href: '#home', label: t.nav.home },
    { id: 'about', href: '#about', label: t.nav.about },
    { id: 'skills', href: '#skills', label: t.nav.skills },
    { id: 'experience', href: '#experience', label: t.nav.experience },
    { id: 'projects', href: '#projects', label: t.nav.projects },
    { id: 'contact', href: '#contact', label: t.nav.contact },
  ]

  useEffect(() => {
    const sectionIds = ['home', 'about', 'skills', 'experience', 'projects', 'contact']

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i])
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i])
          return
        }
      }
      setActiveSection('home')
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a
          href="#home"
          className="font-serif text-lg font-semibold tracking-tight text-foreground transition-colors hover:text-primary"
        >
          {t.name}
          <span className="text-primary">.</span>
        </a>

        {/* Desktop Navigation with Active Section Capsule */}
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((link) => {
            const isActive = activeSection === link.id
            return (
              <li key={link.id} className="relative">
                <a
                  href={link.href}
                  className={cn(
                    'relative inline-block rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors duration-200',
                    isActive
                      ? 'text-primary font-semibold'
                      : 'text-muted-foreground hover:text-foreground hover:bg-secondary/60'
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 rounded-full bg-primary/15 border border-primary/25 shadow-xs"
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </a>
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={toggleTheme}
            className="size-9 rounded-full border-primary/30 bg-secondary/50 text-secondary-foreground hover:bg-secondary transition-colors"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? (
              <Sun className="size-4 text-primary" aria-hidden="true" />
            ) : (
              <Moon className="size-4 text-primary" aria-hidden="true" />
            )}
          </Button>

          <Button
            variant="outline"
            size="sm"
            onClick={toggleLang}
            className="gap-1.5 rounded-full border-primary/30 bg-secondary/50 text-secondary-foreground hover:bg-secondary transition-colors"
            aria-label="Switch language"
          >
            <Languages className="size-4" aria-hidden="true" />
            <span className={cn('text-xs font-semibold', lang === 'en' && 'text-primary')}>
              EN
            </span>
            <span className="text-muted-foreground">/</span>
            <span className={cn('text-xs font-semibold', lang === 'ar' && 'text-primary')}>
              AR
            </span>
          </Button>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-9 items-center justify-center rounded-full text-foreground transition-colors hover:bg-secondary md:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? (
              <X className="size-5" aria-hidden="true" />
            ) : (
              <Menu className="size-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu dropdown */}
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="flex flex-col gap-1 border-t border-border/60 bg-background/95 px-4 py-3 backdrop-blur-md md:hidden"
          >
            {links.map((link) => {
              const isActive = activeSection === link.id
              return (
                <li key={link.id}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      'block rounded-xl px-3.5 py-2.5 text-sm font-medium transition-colors',
                      isActive
                        ? 'bg-primary/15 font-semibold text-primary border border-primary/20'
                        : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
                    )}
                  >
                    {link.label}
                  </a>
                </li>
              )
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  )
}
