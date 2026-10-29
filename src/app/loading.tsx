import React from "react";

export default function Loading() {
  return (
    <div className="relative min-h-[70vh] w-full flex flex-col items-center justify-center bg-[#070c18] overflow-hidden px-4 h-screen">
      {/* Background ambient glow effect */}
      <div className="absolute w-72 sm:w-96 h-72 sm:h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center">
        {/* Outer glowing pulsing ring */}
        <div className="relative flex items-center justify-center">
          {/* Spinner Ring 1 */}
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-slate-800 border-t-cyan-400 border-r-cyan-400 animate-spin" />

          {/* Spinner Ring 2 (Counter-spin) */}
          <div className="absolute w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-slate-800 border-b-blue-500 border-l-blue-500 animate-[spin_1.5s_linear_infinite_reverse]" />

          {/* Center Logo / Badge with pulse */}
          <div className="absolute w-6 h-6 rounded-lg bg-gradient-to-br from-[#3b82f6] to-[#8b5cf6] flex items-center justify-center text-[10px] font-bold text-white shadow-md shadow-cyan-500/30 animate-pulse">
            RI
          </div>
        </div>

        {/* Loading Text */}
        {/* Loading Text */}
        <div className="mt-6 flex items-center gap-1.5 font-mono">
          <span className="text-cyan-400 text-sm">&lt;</span>
          <span className="text-sm font-medium text-slate-200 tracking-wider">
            compiling_experience
          </span>
          <span className="text-cyan-400 text-sm">/&gt;</span>
          <span className="w-1.5 h-4 bg-cyan-400 animate-pulse ml-0.5 inline-block" />
        </div>

        <p className="mt-2 text-xs text-slate-500 font-mono tracking-wide">
          fetching creative bits...
        </p>
      </div>
    </div>
  );
}
