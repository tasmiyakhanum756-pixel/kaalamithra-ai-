// components/ui/flipCard.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  CheckCircle, ArrowRight, Target, BarChart3, Bot, 
  Rocket, Building2, Cloud, ShoppingCart, PenTool, Funnel, PieChart, HelpCircle 
} from "lucide-react";

// Map strings to their respective Lucide component elements
const iconMap: Record<string, React.ComponentType<any>> = {
  "target": Target,
  "bar-chart": BarChart3,
  "bot": Bot,
  "rocket": Rocket,
  "building": Building2,
  "cloud": Cloud,
  "shopping-cart": ShoppingCart,
  "pen-tool": PenTool,
  "funnel": Funnel,
  "pie-chart": PieChart,
};

interface ServiceProps {
  service: {
    id: string;
    iconName: string; // Updated to match the new string key
    title: string;
    description: string;
    href: string;
    features: string[];
    benefits: string[];
    backDescription: string;
  };
}

export default function FlipCard({ service }: ServiceProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  
  // Resolve the component dynamically, fall back to a default icon if not found
  const Icon = iconMap[service.iconName] || HelpCircle;

  return (
    <div 
      className="w-full h-[450px] [perspective:1000px] cursor-pointer group"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className={`relative w-full h-full duration-500 [transform-style:preserve-3d] ${isFlipped ? "[transform:rotateY(180deg)]" : ""}`}>
        
        {/* Front Side */}
        <div className="absolute inset-0 w-full h-full bg-card border border-border rounded-xl p-6 flex flex-col justify-between [backface-visibility:hidden] hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
          <div>
            <div className="p-3 bg-primary/10 rounded-lg w-fit text-primary mb-4 transition-transform group-hover:scale-110">
              <Icon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
            
            <div className="space-y-2 mt-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">Core Modules:</span>
              <ul className="space-y-1.5">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <CheckCircle className="w-3.5 h-3.5 text-primary shrink-0" />
                    <span className="truncate">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <span className="text-xs text-primary font-medium flex items-center gap-1 mt-4 border-t border-border/50 pt-3">
            Click card to flip
          </span>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 w-full h-full bg-slate-950 text-white border border-slate-800 rounded-xl p-6 flex flex-col justify-between [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <div>
            <div className="border-b border-slate-800 pb-3 mb-3">
              <h3 className="text-lg font-bold text-white mt-2">{service.title} Impact</h3>
            </div>
            
            <p className="text-xs text-slate-300 mb-4 leading-relaxed">{service.backDescription}</p>
            
            <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-3.5">
              <h4 className="text-xs font-bold text-primary uppercase tracking-wider mb-2">Measurable ROI Benefits:</h4>
              <ul className="space-y-1">
                {service.benefits.map((benefit, idx) => (
                  <li key={idx} className="text-xs text-slate-300 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Link 
            href={service.href} 
            onClick={(e) => e.stopPropagation()} 
            className="w-full text-center bg-primary text-primary-foreground text-xs font-medium py-2.5 px-4 rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-1 mt-4"
          >
            Explore Full Page <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </div>
  );
}
