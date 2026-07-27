// components/backgroundGrid.tsx
export default function BackgroundGrid() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Left Grid Line */}
      <div className="absolute top-0 bottom-0 w-px left-6 md:left-16 lg:left-[100px]">
        <svg className="w-full h-full" xmlns="http://w3.org" preserveAspectRatio="none">
          <line x1="0.5" y1="0" x2="0.5" y2="100%" stroke="rgba(0,212,255,0.08)" strokeDasharray="9 8" strokeWidth="1" />
        </svg>
      </div>
      {/* Right Grid Line */}
      <div className="absolute top-0 bottom-0 w-px right-6 md:right-16 lg:right-[100px]">
        <svg className="w-full h-full" xmlns="http://w3.org" preserveAspectRatio="none">
          <line x1="0.5" y1="0" x2="0.5" y2="100%" stroke="rgba(0,212,255,0.08)" strokeDasharray="9 8" strokeWidth="1" />
        </svg>
      </div>
    </div>
  );
}
