"use client";

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Home, Layers, Briefcase, Mail, Download } from "lucide-react";

export default function BottomNav() {
  const pathname = usePathname();
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true);
      return;
    }

    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };
    window.addEventListener('beforeinstallprompt', handler);

    window.addEventListener('appinstalled', () => {
      setIsInstalled(true);
      setDeferredPrompt(null);
    });

    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstall = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const result = await deferredPrompt.userChoice;
      if (result.outcome === 'accepted') {
        setIsInstalled(true);
        setDeferredPrompt(null);
      }
    }
  };

  // Only render on the homepage — hash-scrolling makes sense only there
  if (pathname !== "/") {
    return (
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[999] w-[92%] max-w-sm">
        <nav className="flex items-center justify-around bg-card dark:bg-[#151738] border border-border px-2 py-3 rounded-full shadow-2xl shadow-black/80">
          <Link href="/" className="flex flex-col items-center gap-1 group text-muted-foreground hover:text-primary transition-colors min-w-0">
            <Home className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
            <span className="text-[10px] font-bold uppercase tracking-wider">Home</span>
          </Link>
          <Link href="/services" className="flex flex-col items-center gap-1 group text-muted-foreground hover:text-primary transition-colors min-w-0">
            <Layers className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
            <span className="text-[10px] font-bold uppercase tracking-wider">Services</span>
          </Link>
          <Link href="/" className="flex flex-col items-center gap-1 group text-muted-foreground hover:text-primary transition-colors min-w-0">
            <Briefcase className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
            <span className="text-[10px] font-bold uppercase tracking-wider">Work</span>
          </Link>
          <button
            onClick={handleInstall}
            disabled={isInstalled || !deferredPrompt}
            className="flex flex-col items-center gap-1 group text-muted-foreground hover:text-primary transition-colors min-w-0 disabled:opacity-30 disabled:cursor-not-allowed"
            title={isInstalled ? "Already installed" : "Install app"}
          >
            <Download className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
            <span className="text-[10px] font-bold uppercase tracking-wider">{isInstalled ? "Installed" : "Install"}</span>
          </button>
          <Link href="/contact" className="flex flex-col items-center gap-1 group text-muted-foreground hover:text-primary transition-colors min-w-0">
            <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
            <span className="text-[10px] font-bold uppercase tracking-wider">Contact</span>
          </Link>
        </nav>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[999] w-[92%] max-w-sm">
      <nav className="flex items-center justify-around bg-card dark:bg-[#151738] border border-border px-2 py-3 rounded-full shadow-2xl shadow-black/80">
        <a
          href="#home"
          className="flex flex-col items-center gap-1 group text-muted-foreground hover:text-primary transition-colors min-w-0"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <Home className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
          <span className="text-[10px] font-bold uppercase tracking-wider">Home</span>
        </a>
        <Link href="/services" className="flex flex-col items-center gap-1 group text-muted-foreground hover:text-primary transition-colors min-w-0">
          <Layers className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
          <span className="text-[10px] font-bold uppercase tracking-wider">Services</span>
        </Link>
        <a
          href="#work"
          className="flex flex-col items-center gap-1 group text-muted-foreground hover:text-primary transition-colors min-w-0"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <Briefcase className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
          <span className="text-[10px] font-bold uppercase tracking-wider">Work</span>
        </a>
        <button
          onClick={handleInstall}
          disabled={isInstalled || !deferredPrompt}
          className="flex flex-col items-center gap-1 group text-muted-foreground hover:text-primary transition-colors min-w-0 disabled:opacity-30 disabled:cursor-not-allowed"
          title={isInstalled ? "Already installed" : "Install app"}
        >
          <Download className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
          <span className="text-[10px] font-bold uppercase tracking-wider">{isInstalled ? "Installed" : "Install"}</span>
        </button>
        <a
          href="#contact"
          className="flex flex-col items-center gap-1 group text-muted-foreground hover:text-primary transition-colors min-w-0"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
          <span className="text-[10px] font-bold uppercase tracking-wider">Contact</span>
        </a>
      </nav>
    </div>
  );
}