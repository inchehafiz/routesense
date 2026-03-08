import React, { useState } from "react";
import {
  Bell,
  CloudSun,
  Navigation,
  Car,
  Bike,
  Train,
  Bus,
  CarTaxiFront,
  Lightbulb,
  History,
} from "lucide-react";
import { motion } from "motion/react";

export const HomeView: React.FC<{
  onStartCommute: (mode: string) => void;
}> = ({ onStartCommute }) => {
  const [selectedMode, setSelectedMode] = useState<string>("mrt");

  const modes = [
    { id: "car", label: "Car", icon: Car },
    { id: "motorcycle", label: "Moto", icon: Bike },
    { id: "mrt", label: "MRT", icon: Train },
    { id: "bus", label: "Bus", icon: Bus },
    { id: "grab", label: "Grab", icon: CarTaxiFront },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="flex-1 overflow-y-auto pb-24"
    >
      {/* Header */}
      <div className="flex items-center p-4 pb-2 justify-between">
        <div className="flex size-12 shrink-0 items-center">
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-primary"
            style={{
              backgroundImage: 'url("https://i.pravatar.cc/150?img=11")',
            }}
          ></div>
        </div>
        <div className="flex-1 px-3">
          <h2 className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-tight">
            RouteSense
          </h2>
        </div>
        <div className="flex w-12 items-center justify-end">
          <button className="flex cursor-pointer items-center justify-center rounded-xl h-10 w-10 bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-slate-100">
            <Bell className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Greeting & Weather */}
      <div className="px-4 pt-6">
        <h1 className="text-slate-900 dark:text-slate-100 tracking-tight text-3xl font-extrabold leading-tight">
          Good Morning, Alex
        </h1>
        <div className="flex items-center gap-2 mt-2 bg-primary/10 dark:bg-primary/20 p-3 rounded-xl border border-primary/20">
          <CloudSun className="w-5 h-5 text-primary" />
          <p className="text-slate-600 dark:text-slate-300 text-sm font-medium">
            Kuala Lumpur: 28°C, Partly Cloudy
          </p>
        </div>
      </div>

      {/* Main Action: Start Commute */}
      <div className="px-4 mt-8">
        <div className="bg-primary p-6 rounded-xl shadow-lg shadow-primary/20">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-white text-xl font-bold">
                Ready to head out?
              </h3>
              <p className="text-white/80 text-sm">
                Select your mode to start tracking
              </p>
            </div>
            <Navigation className="w-8 h-8 text-white opacity-50" />
          </div>

          {/* Mode Selection */}
          <div className="grid grid-cols-5 gap-2 mb-6">
            {modes.map((mode) => {
              const Icon = mode.icon;
              const isSelected = selectedMode === mode.id;
              return (
                <button
                  key={mode.id}
                  onClick={() => setSelectedMode(mode.id)}
                  className={`flex flex-col items-center gap-2 p-2 rounded-lg transition-colors ${
                    isSelected
                      ? "bg-white/10 border border-white/40 ring-2 ring-white/60"
                      : "bg-white/20 hover:bg-white/30"
                  }`}
                >
                  <Icon className="w-6 h-6 text-white" />
                  <span className="text-[10px] text-white font-semibold">
                    {mode.label}
                  </span>
                </button>
              );
            })}
          </div>

          <button
            onClick={() => onStartCommute(selectedMode)}
            className="w-full bg-white text-primary font-extrabold py-4 rounded-lg text-center tracking-wide shadow-xl active:scale-95 transition-transform"
          >
            START COMMUTE
          </button>
        </div>
      </div>

      {/* Insight Card */}
      <div className="px-4 mt-6">
        <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 flex gap-4">
          <div className="bg-amber-100 dark:bg-amber-900/30 p-3 rounded-lg flex items-center justify-center self-start">
            <Lightbulb className="w-6 h-6 text-amber-600 dark:text-amber-400" />
          </div>
          <div>
            <h4 className="font-bold text-slate-900 dark:text-slate-100">
              Today's Suggestion
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
              Take the <span className="text-primary font-bold">MRT</span>.
              Expected highway congestion on{" "}
              <span className="font-bold">DUKE</span> due to construction.
            </p>
          </div>
        </div>
      </div>

      {/* Recent Trip Summary */}
      <div className="px-4 mt-8 pb-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-slate-900 dark:text-slate-100 text-lg font-bold">
            Recent Trip
          </h3>
          <button className="text-primary text-sm font-bold">
            View History
          </button>
        </div>

        <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-dashed border-slate-300 dark:border-slate-700">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="bg-slate-200 dark:bg-slate-700 p-2 rounded-full">
                <History className="w-5 h-5 text-slate-600 dark:text-slate-400" />
              </div>
              <div>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Yesterday, 8:15 AM
                </p>
                <p className="font-bold text-slate-900 dark:text-slate-100">
                  Home to Office
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-lg font-bold text-slate-900 dark:text-slate-100">
                38 mins
              </p>
              <p className="text-[10px] text-green-500 font-bold uppercase tracking-tighter">
                Fastest Route
              </p>
            </div>
          </div>

          <div className="relative h-24 w-full rounded-lg overflow-hidden grayscale opacity-60 contrast-125 border border-slate-300 dark:border-slate-700">
            <img
              className="w-full h-full object-cover"
              alt="Map view"
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 to-transparent"></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
