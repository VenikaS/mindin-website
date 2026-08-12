"use client";

import React from "react";
import { AlertTriangle } from "lucide-react";

export default function CrisisBanner() {
  const disclaimerText = "Crisis & Emergency Disclaimer: Mind’in does not provide crisis & emergency support services. Therefore, in case of any physical, emotional, or psychological emergency where urgent action is required, including but not limited to any danger/threat to you or someone else, self-harm, or active suicidal intent, please go to the nearest hospital and call emergency services.";

  return (
    <div className="bg-red-50/95 border-b border-red-200/60 py-2.5 overflow-hidden relative z-50 text-red-950 text-xs sm:text-sm font-semibold select-none group flex items-center">
      <div className="flex w-max whitespace-nowrap animate-marquee group-hover:[animation-play-state:paused]">
        <div className="flex items-center gap-2 px-12">
          <AlertTriangle className="w-4 h-4 text-red-600 shrink-0" />
          <span>{disclaimerText}</span>
        </div>
        <div className="flex items-center gap-2 px-12" aria-hidden="true">
          <AlertTriangle className="w-4 h-4 text-red-600 shrink-0" />
          <span>{disclaimerText}</span>
        </div>
      </div>
    </div>
  );
}
