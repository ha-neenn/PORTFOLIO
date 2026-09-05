'use client'

import { useState, type FormEvent } from 'react'
import { Mail, Send, CheckCircle2 } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/components/language-provider'
import { SectionHeading } from '@/components/about'
import { GithubIcon, LinkedinIcon, WhatsappIcon } from '@/components/brand-icons'

const socials = [
  {
    icon: LinkedinIcon,
    label: 'LinkedIn',
    handle: 'in/haneen-abdellateef',
    href: 'https://linkedin.com/in/haneen-abdellateef',
  },
  {
    icon: Mail,
    label: 'Email',
    handle: 'haneen.abdellatif@email.com',
    href: 'mailto:haneen.abdellatif@email.com',
  },
  {
    icon: WhatsappIcon,
    label: 'WhatsApp',
    handle: '+20 111 764 0330',
    href: 'https://wa.me/201117640330',
  },
  {
    icon: GithubIcon,
    label: 'GitHub',
    handle: 'github.com/ha-neenn',
    href: 'https://Github.com/ha-neenn',
  },
]

export function Contact() {
  const { t } = useLanguage()
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSent(true)
    e.currentTarget.reset()
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="scroll-mt-16 bg-secondary/30 px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <SectionHeading>{t.contact.heading}</SectionHeading>
        <p className="-mt-4 mb-10 max-w-xl text-pretty leading-relaxed text-muted-foreground">
          {t.contact.subheading}
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="grid gap-8 lg:grid-cols-[1.4fr_1fr]"
        >
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label={t.contact.name}>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder={t.contact.namePlaceholder}
                  className="input-base"
                />
              </Field>
              <Field label={t.contact.email}>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder={t.contact.emailPlaceholder}
                  className="input-base"
                />
              </Field>
            </div>

            <div className="mt-5">
              <Field label={t.contact.message}>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder={t.contact.messagePlaceholder}
                  className="input-base resize-none"
                />
              </Field>
            </div>

            <Button
              type="submit"
              size="lg"
              className="mt-6 w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
            >
              {sent ? (
                <>
                  <CheckCircle2 className="size-4" aria-hidden="true" />
                  {t.contact.sent}
                </>
              ) : (
                <>
                  <Send className="size-4" aria-hidden="true" />
                  {t.contact.send}
                </>
              )}
            </Button>
          </form>

          <div className="flex flex-col justify-center gap-3">
            <p className="text-sm font-medium text-muted-foreground">
              {t.contact.connect}
            </p>
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-2xl border border-border bg-card px-5 py-4 shadow-sm transition-colors hover:border-primary/40 hover:bg-primary/5"
              >
                <span className="inline-flex size-10 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <social.icon className="size-5" aria-hidden="true" />
                </span>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-foreground">
                    {social.label}
                  </span>
                  <span className="text-xs text-muted-foreground transition-colors group-hover:text-primary">
                    {social.handle}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Field({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-sm font-medium text-foreground">{label}</span>
      {children}
    </label>
  )
}
