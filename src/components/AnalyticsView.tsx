import React from "react";
import { motion } from "motion/react";
import {
  ArrowLeft,
  MoreHorizontal,
  CheckCircle,
  TrendingUp,
  TrendingDown,
  Banknote,
} from "lucide-react";
import { MOCK_ROUTES } from "../constants";
import { LineChart, Line, ResponsiveContainer } from "recharts";

const data = [
  { name: "1", a: 40, b: 45, c: 50 },
  { name: "2", a: 38, b: 46, c: 50 },
  { name: "3", a: 42, b: 44, c: 50 },
  { name: "4", a: 39, b: 48, c: 51 },
  { name: "5", a: 37, b: 45, c: 50 },
  { name: "6", a: 45, b: 42, c: 49 },
  { name: "7", a: 38, b: 47, c: 50 },
];

export const AnalyticsView: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="flex-1 overflow-y-auto pb-24 bg-background-light dark:bg-background-dark"
    >
      {/* Header */}
      <header className="sticky top-0 z-10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-primary/20">
        <div className="flex items-center p-4 justify-between max-w-2xl mx-auto w-full">
          <button className="text-slate-900 dark:text-slate-100 p-2 hover:bg-primary/10 rounded-full transition-colors">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h2 className="text-lg font-bold leading-tight tracking-tight flex-1 text-center">
            Route Comparison
          </h2>
          <button className="text-slate-900 dark:text-slate-100 p-2 hover:bg-primary/10 rounded-full transition-colors">
            <MoreHorizontal className="w-6 h-6" />
          </button>
        </div>
      </header>

      <main className="flex-1 max-w-2xl mx-auto w-full">
        {/* Insight Banner */}
        <div className="p-4">
          <div className="bg-primary/10 border border-primary/30 rounded-xl p-4 flex items-center gap-4">
            <div className="bg-primary p-3 rounded-lg text-white">
              <CheckCircle className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-primary uppercase tracking-wider">
                Top Insight
              </p>
              <h3 className="text-xl font-bold">Best Reliability: MRT (92%)</h3>
            </div>
          </div>
        </div>

        {/* Analytics Chart */}
        <div className="px-4 py-2">
          <div className="bg-slate-50 dark:bg-primary/5 border border-slate-200 dark:border-primary/10 rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-lg">Commute Time Variance</h3>
              <span className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase">
                Last 30 Days
              </span>
            </div>

            <div className="h-48 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <Line
                    type="monotone"
                    dataKey="a"
                    stroke="#3211d4"
                    strokeWidth={3}
                    dot={false}
                  />
                  <Line
                    type="monotone"
                    dataKey="b"
                    stroke="#64748b"
                    strokeWidth={3}
                    strokeDasharray="5 5"
                    dot={false}
                  />
                  <Line
                    type="monotone"
                    dataKey="c"
                    stroke="#10b981"
                    strokeWidth={3}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Legend */}
            <div className="flex justify-center gap-4 text-[10px] font-bold uppercase tracking-widest mt-4">
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-primary"></span> Route
                A
              </div>
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-slate-400"></span>{" "}
                Route B
              </div>
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>{" "}
                Route C
              </div>
            </div>
          </div>
        </div>

        <h3 className="text-lg font-bold px-4 pb-2 pt-10">Route Options</h3>

        {/* Route Cards */}
        <div className="space-y-4 p-4">
          {MOCK_ROUTES.map((route) => (
            <div
              key={route.id}
              className="group flex flex-col items-stretch justify-start rounded-xl shadow-lg bg-white dark:bg-primary/10 border border-slate-200 dark:border-primary/20 overflow-hidden hover:border-primary transition-all"
            >
              <div className="h-40 w-full bg-slate-200 dark:bg-primary/20 relative">
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-80"
                  style={{
                    backgroundImage:
                      'url("https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800")',
                  }}
                ></div>
                {route.isFastest && (
                  <div className="absolute top-3 right-3 bg-primary text-white text-xs font-bold px-2 py-1 rounded">
                    FASTEST
                  </div>
                )}
                {route.isCheapest && (
                  <div className="absolute top-3 right-3 bg-slate-500 text-white text-xs font-bold px-2 py-1 rounded">
                    CHEAPEST
                  </div>
                )}
                {route.isMostReliable && (
                  <div className="absolute top-3 right-3 bg-emerald-500 text-white text-xs font-bold px-2 py-1 rounded">
                    MOST RELIABLE
                  </div>
                )}
              </div>
              <div className="flex w-full grow flex-col items-stretch justify-center gap-1 p-4">
                <div className="flex justify-between items-start">
                  <p className="text-lg font-bold">{route.name}</p>
                  <span
                    className={
                      route.isFastest
                        ? "text-primary font-bold"
                        : "text-slate-500 font-bold"
                    }
                  >
                    {route.avgTime} min
                  </span>
                </div>
                <div className="flex items-center gap-4 text-slate-600 dark:text-slate-400 text-sm">
                  <span
                    className={`flex items-center gap-1 ${route.avgCost === 0 ? "text-emerald-500 font-bold" : ""}`}
                  >
                    <Banknote className="w-4 h-4" /> RM{route.avgCost}{" "}
                    {route.mode === "car" ? "toll" : "fare"}
                  </span>
                  <span
                    className={`flex items-center gap-1 ${route.reliability > 0.8 ? "text-emerald-500 font-bold" : ""}`}
                  >
                    {route.reliability > 0.8 ? (
                      <CheckCircle className="w-4 h-4" />
                    ) : route.reliability > 0.5 ? (
                      <TrendingUp className="w-4 h-4" />
                    ) : (
                      <TrendingDown className="w-4 h-4" />
                    )}
                    {route.reliability > 0.8
                      ? "High"
                      : route.reliability > 0.5
                        ? "Medium"
                        : "Low"}{" "}
                    Reliability
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </motion.div>
  );
}
