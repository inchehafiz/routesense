import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { MapPin, Navigation, Clock, Activity, StopCircle } from "lucide-react";

export const TrackingView: React.FC<{
  onEndCommute: () => void;
  mode: string;
}> = ({ onEndCommute, mode }) => {
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDuration((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      className="flex flex-col h-full w-full bg-slate-900 text-white relative overflow-hidden"
    >
      {/* Simulated Map Background */}
      <div className="absolute inset-0 z-0 opacity-40">
        <img
          src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800"
          alt="Map"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-transparent to-slate-900"></div>
      </div>

      <div className="relative z-10 flex flex-col h-full p-6">
        <div className="flex items-center justify-between">
          <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
            <span className="text-sm font-bold tracking-wider uppercase">
              Recording
            </span>
          </div>
          <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
            <span className="text-sm font-bold uppercase">{mode}</span>
          </div>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center">
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-48 h-48 rounded-full border-4 border-primary/30 flex items-center justify-center relative"
          >
            <div className="absolute inset-0 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
            <div className="flex flex-col items-center">
              <span className="text-5xl font-mono font-light tracking-tight">
                {formatTime(duration)}
              </span>
              <span className="text-sm text-slate-400 uppercase tracking-widest mt-2">
                Elapsed
              </span>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10">
            <div className="flex items-center gap-2 text-slate-400 mb-2">
              <Navigation className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider">
                Distance
              </span>
            </div>
            <p className="text-2xl font-bold">
              {(duration * 0.015).toFixed(1)}{" "}
              <span className="text-sm font-normal text-slate-400">km</span>
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10">
            <div className="flex items-center gap-2 text-slate-400 mb-2">
              <Activity className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider">
                Speed
              </span>
            </div>
            <p className="text-2xl font-bold">
              {Math.floor(Math.random() * 10 + 40)}{" "}
              <span className="text-sm font-normal text-slate-400">km/h</span>
            </p>
          </div>
        </div>

        <button
          onClick={onEndCommute}
          className="w-full bg-red-500 hover:bg-red-600 text-white font-extrabold py-5 rounded-2xl text-center tracking-widest shadow-xl shadow-red-500/20 active:scale-95 transition-all flex items-center justify-center gap-2"
        >
          <StopCircle className="w-6 h-6" />
          END TRIP
        </button>
      </div>
    </motion.div>
  );
}
