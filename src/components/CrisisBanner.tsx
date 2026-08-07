"use client";

import React from "react";
import { AlertTriangle } from "lucide-react";

export default function CrisisBanner() {
  const disclaimerText = "Crisis & Emergency Disclaimer: Mind’in does not provide crisis & emergency support services. Therefore in case of any physical, emotional, psychological emergency where urgent action is required including but not limited to any danger/threat to you or someone else, self-harm, active suicidal intent please go to the nearest hospital and call emergency services.";

  return (
    <div className="bg-red-50/90 border-b border-red-200/60 py-3 overflow-hidden relative z-50 text-red-900 text-sm font-semibold select-none group">
      <div className="flex w-max whitespace-nowrap animate-marquee group-hover:[animation-play-state:paused]">
        <div className="flex items-center gap-2 px-8">
          <AlertTriangle className="w-3.5 h-3.5 text-red-600 shrink-0" />
          <span>{disclaimerText}</span>
        </div>
        <div className="flex items-center gap-2 px-8" aria-hidden="true">
          <AlertTriangle className="w-3.5 h-3.5 text-red-600 shrink-0" />
          <span>{disclaimerText}</span>
        </div>
      </div>
    </div>
  );
}
