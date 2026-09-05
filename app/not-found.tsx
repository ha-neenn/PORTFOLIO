import Link from 'next/link'
import { Home } from 'lucide-react'

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background px-6 text-center">
      {/* Soft ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 h-96 w-2xl -translate-x-1/2 rounded-full bg-pink-200/40 blur-3xl"
      />

      <div className="relative mx-auto max-w-md">
        {/* Large soft-pink 404 numeral */}
        <p className="select-none text-[9rem] font-bold leading-none tracking-tighter text-pink-200 sm:text-[11rem]">
          404
        </p>

        {/* Divider */}
        <div className="mx-auto my-4 h-px w-16 bg-pink-200" />

        <h1 className="font-serif text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Page Not Found
        </h1>
        <p className="mt-3 text-pretty text-base leading-relaxed text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full border border-pink-300 bg-pink-50/60 px-6 py-2.5 text-sm font-medium text-pink-900 transition-all hover:bg-pink-100"
        >
          <Home className="size-4" aria-hidden="true" />
          Back to Home
        </Link>

        {/* Subtle brand signature */}
        <p className="mt-10 font-serif text-sm font-semibold text-foreground/40">
          Haneen<span className="text-pink-400">.</span>
        </p>
      </div>
    </main>
  )
}

