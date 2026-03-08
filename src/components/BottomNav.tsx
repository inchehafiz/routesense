import { Home, Route, Bookmark, User, BarChart2, History } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface BottomNavProps {
  currentTab: string;
  onChange: (tab: string) => void;
}

export function BottomNav({ currentTab, onChange }: BottomNavProps) {
  const tabs = [
    { id: "home", label: "Home", icon: Home },
    { id: "history", label: "History", icon: History },
    { id: "analytics", label: "Analytics", icon: BarChart2 },
    { id: "profile", label: "Profile", icon: User },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-20 border-t border-slate-200 dark:border-primary/20 bg-white/80 dark:bg-background-dark/80 backdrop-blur-lg px-4 pb-6 pt-2">
      <div className="max-w-md mx-auto flex gap-2">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = currentTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onChange(tab.id)}
              className={cn(
                "flex flex-1 flex-col items-center justify-center gap-1 transition-colors",
                isActive
                  ? "text-primary"
                  : "text-slate-500 dark:text-slate-400 hover:text-primary",
              )}
            >
              <Icon className={cn("w-6 h-6", isActive && "fill-current")} />
              <p className="text-[10px] font-bold uppercase tracking-wider">
                {tab.label}
              </p>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
