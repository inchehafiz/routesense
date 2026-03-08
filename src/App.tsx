import { useState } from "react";
import { AnimatePresence } from "motion/react";
import { HomeView } from "./components/HomeView";
import { TrackingView } from "./components/TrackingView";
import { SummaryView } from "./components/SummaryView";
import { AnalyticsView } from "./components/AnalyticsView";
import { BottomNav } from "./components/BottomNav";

type ViewState =
  | "home"
  | "tracking"
  | "summary"
  | "analytics"
  | "history"
  | "profile";

export default function App() {
  const [currentView, setCurrentView] = useState<ViewState>("home");
  const [currentMode, setCurrentMode] = useState<string>("mrt");

  const handleStartCommute = (mode: string) => {
    setCurrentMode(mode);
    setCurrentView("tracking");
  };

  const handleEndCommute = () => {
    setCurrentView("summary");
  };

  const handleBackToHome = () => {
    setCurrentView("home");
  };

  const handleNavChange = (tab: string) => {
    setCurrentView(tab as ViewState);
  };

  return (
    <div className="relative flex h-screen w-full flex-col overflow-hidden max-w-md mx-auto border-x border-slate-200 dark:border-slate-800 bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 antialiased">
      <AnimatePresence mode="wait">
        {currentView === "home" && (
          <HomeView key="home" onStartCommute={handleStartCommute} />
        )}
        {currentView === "tracking" && (
          <TrackingView
            key="tracking"
            mode={currentMode}
            onEndCommute={handleEndCommute}
          />
        )}
        {currentView === "summary" && (
          <SummaryView key="summary" onBack={handleBackToHome} />
        )}
        {currentView === "analytics" && <AnalyticsView key="analytics" />}
        {/* Placeholders for other tabs */}
        {(currentView === "history" || currentView === "profile") && (
          <div
            key={currentView}
            className="flex-1 flex items-center justify-center"
          >
            <h2 className="text-2xl font-bold capitalize">
              {currentView} View
            </h2>
          </div>
        )}
      </AnimatePresence>

      {/* Show BottomNav only on main tabs, not during tracking or summary */}
      {currentView !== "tracking" && currentView !== "summary" && (
        <BottomNav currentTab={currentView} onChange={handleNavChange} />
      )}
    </div>
  );
}
