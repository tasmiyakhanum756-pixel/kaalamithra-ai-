"use client"

import { useEffect } from "react"
import Link from "next/link"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error("Page error:", error)
  }, [error])

  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-4 relative z-10">
      <div className="max-w-md text-center space-y-6">
        <div className="w-20 h-20 mx-auto rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
          <svg className="w-10 h-10 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-foreground">Something went wrong</h1>
        <p className="text-muted-foreground">
          We encountered an unexpected error. Please try again or contact support if the issue persists.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
          >
            Try again
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-border text-foreground font-semibold hover:bg-muted transition-colors"
          >
            Go Home
          </Link>
        </div>
        <p className="text-sm text-muted-foreground">
          Need help?{" "}
          <a href="tel:+918884014055" className="text-primary hover:underline">
            +91 88840 14055
          </a>{" "}
          or{" "}
          <a href="mailto:tech@kaalamithra-ai.com" className="text-primary hover:underline">
            tech@kaalamithra-ai.com
          </a>
        </p>
      </div>
    </main>
  )
}