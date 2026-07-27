export default function Loading() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-4 relative z-10">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
        <p className="text-muted-foreground text-sm">Loading...</p>
      </div>
    </main>
  )
}