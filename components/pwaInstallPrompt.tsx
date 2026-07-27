"use client"

import { useEffect, useState } from "react"
import { Download, X } from "lucide-react"

export default function PwaInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null)
  const [showInstall, setShowInstall] = useState(false)
  const [isInstalled, setIsInstalled] = useState(false)

  useEffect(() => {
    // Check if already installed as PWA
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true)
      return
    }

    const handler = (e: Event) => {
      e.preventDefault()
      setDeferredPrompt(e)
      setShowInstall(true)
    }

    window.addEventListener('beforeinstallprompt', handler)

    // Check if app was installed after page load
    window.addEventListener('appinstalled', () => {
      setIsInstalled(true)
      setShowInstall(false)
      setDeferredPrompt(null)
    })

    return () => {
      window.removeEventListener('beforeinstallprompt', handler)
    }
  }, [])

  const handleInstall = async () => {
    if (!deferredPrompt) return

    deferredPrompt.prompt()

    const result = await deferredPrompt.userChoice
    if (result.outcome === 'accepted') {
      setIsInstalled(true)
    }
    setDeferredPrompt(null)
    setShowInstall(false)
  }

  if (!showInstall || isInstalled) return null

  return (
    <div className="fixed bottom-24 right-4 z-50 sm:bottom-6 sm:right-6">
      <div className="bg-[#0A0A0A] text-white rounded-2xl shadow-2xl p-4 max-w-xs border border-gray-800">
        <button
          onClick={() => setShowInstall(false)}
          className="absolute top-2 right-2 text-gray-400 hover:text-white transition-colors"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>
        <div className="flex items-start gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl bg-[#6EE7B7]/10 flex items-center justify-center shrink-0">
            <Download className="w-5 h-5 text-[#6EE7B7]" />
          </div>
          <div>
            <h3 className="font-semibold text-sm">Install KAALAMITHRA</h3>
            <p className="text-xs text-gray-400 mt-0.5">Install as an app for a better experience</p>
          </div>
        </div>
        <button
          onClick={handleInstall}
          className="w-full bg-[#6EE7B7] hover:bg-[#5bd8a8] text-black font-semibold py-2.5 px-4 rounded-xl text-sm transition-all duration-300 flex items-center justify-center gap-2"
        >
          <Download className="w-4 h-4" />
          Install App
        </button>
      </div>
    </div>
  )
}