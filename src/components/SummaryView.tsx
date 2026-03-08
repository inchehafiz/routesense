import React, { useState } from "react";
import { motion } from "motion/react";
import {
  ArrowLeft,
  Share2,
  Clock,
  Timer,
  MapPin,
  Banknote,
  Route as RouteIcon,
} from "lucide-react";

export const SummaryView: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [detourConfirmed, setDetourConfirmed] = useState<boolean | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="flex-1 overflow-y-auto pb-24 bg-background-light dark:bg-background-dark"
    >
      {/* Header */}
      <header className="sticky top-0 z-10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-primary/10">
        <div className="flex items-center p-4 justify-between max-w-lg mx-auto">
          <button
            onClick={onBack}
            className="flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-primary/10 transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-slate-900 dark:text-slate-100" />
          </button>
          <div className="flex-1 text-center">
            <h1 className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight">
              Trip Summary
            </h1>
            <p className="text-xs text-primary font-medium">Home to Office</p>
          </div>
          <button className="flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-primary/10 transition-colors">
            <Share2 className="w-5 h-5 text-slate-900 dark:text-slate-100" />
          </button>
        </div>
      </header>

      <main className="max-w-lg mx-auto px-4 py-6 space-y-6">
        {/* Metrics Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-2 rounded-xl p-5 bg-primary/5 border border-primary/10">
            <div className="flex items-center gap-2 text-primary/70">
              <Clock className="w-4 h-4" />
              <p className="text-xs font-semibold uppercase tracking-wider">
                Total Time
              </p>
            </div>
            <p className="text-slate-900 dark:text-slate-100 text-3xl font-extrabold">
              42<span className="text-lg font-medium ml-1">m</span>
            </p>
          </div>
          <div className="flex flex-col gap-2 rounded-xl p-5 bg-primary/5 border border-primary/10">
            <div className="flex items-center gap-2 text-primary/70">
              <Timer className="w-4 h-4" />
              <p className="text-xs font-semibold uppercase tracking-wider">
                Net Time
              </p>
            </div>
            <p className="text-slate-900 dark:text-slate-100 text-3xl font-extrabold">
              35<span className="text-lg font-medium ml-1">m</span>
            </p>
          </div>
          <div className="flex flex-col gap-2 rounded-xl p-5 bg-primary/5 border border-primary/10">
            <div className="flex items-center gap-2 text-primary/70">
              <MapPin className="w-4 h-4" />
              <p className="text-xs font-semibold uppercase tracking-wider">
                Stops
              </p>
            </div>
            <p className="text-slate-900 dark:text-slate-100 text-3xl font-extrabold">
              8
            </p>
          </div>
          <div className="flex flex-col gap-2 rounded-xl p-5 bg-primary/5 border border-primary/10">
            <div className="flex items-center gap-2 text-primary/70">
              <Banknote className="w-4 h-4" />
              <p className="text-xs font-semibold uppercase tracking-wider">
                Cost
              </p>
            </div>
            <p className="text-slate-900 dark:text-slate-100 text-3xl font-extrabold">
              <span className="text-lg font-medium mr-1">RM</span>4.50
            </p>
          </div>
        </div>

        {/* Map View */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-slate-900 dark:text-slate-100 font-bold">
              Route Visualization
            </h2>
            <span className="px-2 py-1 rounded bg-amber-500/20 text-amber-500 text-[10px] font-bold uppercase tracking-widest">
              Detour Detected
            </span>
          </div>
          <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-primary/20 shadow-lg shadow-primary/5">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800')",
              }}
            ></div>
            <div className="absolute bottom-4 left-4 right-4 bg-background-dark/90 backdrop-blur-sm p-3 rounded-lg border border-primary/20 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="size-2 rounded-full bg-amber-500 animate-pulse"></div>
                <p className="text-xs font-medium text-slate-100">
                  Unexpected stop at Jalan Sultan Ismail
                </p>
              </div>
              <span className="text-[10px] font-bold text-amber-500 underline uppercase cursor-pointer">
                Details
              </span>
            </div>
          </div>
        </div>

        {/* Call to Action: Detour Feedback */}
        {detourConfirmed === null && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-6 rounded-xl bg-primary text-white space-y-4 shadow-xl shadow-primary/20"
          >
            <div className="flex items-start gap-4">
              <div className="size-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                <RouteIcon className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-bold leading-tight">
                  Was this a detour?
                </h3>
                <p className="text-sm text-white/80">
                  We noticed a 7-minute deviation from your regular route to
                  work.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setDetourConfirmed(true)}
                className="flex-1 py-3 px-4 bg-white text-primary font-bold rounded-lg hover:bg-slate-100 transition-colors"
              >
                Yes, it was
              </button>
              <button
                onClick={() => setDetourConfirmed(false)}
                className="flex-1 py-3 px-4 bg-primary/20 border border-white/30 text-white font-bold rounded-lg hover:bg-primary/30 transition-colors"
              >
                No, regular
              </button>
            </div>
          </motion.div>
        )}

        {/* Analytics Chart */}
        <div className="space-y-4 bg-primary/5 rounded-xl p-5 border border-primary/10">
          <div className="flex items-center justify-between">
            <h3 className="text-slate-900 dark:text-slate-100 font-bold">
              vs. Average Trip
            </h3>
            <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
              Past 30 days
            </span>
          </div>
          <div className="flex items-end justify-between h-40 gap-4 px-2">
            {/* Avg Trip */}
            <div className="flex-1 flex flex-col items-center gap-2">
              <div
                className="w-full bg-slate-300 dark:bg-slate-700 rounded-t-lg h-[80%]"
                title="Average: 35m"
              ></div>
              <p className="text-[10px] font-bold text-slate-500 uppercase">
                Avg
              </p>
            </div>
            {/* This Trip */}
            <div className="flex-1 flex flex-col items-center gap-2">
              <div
                className="w-full bg-primary rounded-t-lg h-full"
                title="Current: 42m"
              ></div>
              <p className="text-[10px] font-bold text-primary uppercase">
                This
              </p>
            </div>
            {/* Best Trip */}
            <div className="flex-1 flex flex-col items-center gap-2">
              <div
                className="w-full bg-slate-300 dark:bg-slate-700 rounded-t-lg h-[65%]"
                title="Best: 30m"
              ></div>
              <p className="text-[10px] font-bold text-slate-500 uppercase">
                Best
              </p>
            </div>
          </div>
          <p className="text-center text-sm text-slate-500 dark:text-slate-400 pt-2">
            This trip was{" "}
            <span className="text-primary font-bold">20% slower</span> than your
            typical commute.
          </p>
        </div>
      </main>
    </motion.div>
  );
}
