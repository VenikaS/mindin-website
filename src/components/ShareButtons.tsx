"use client";

import React from "react";
import { Link2, Share2 } from "lucide-react";

export default function ShareButtons() {
  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  const handleShare = () => {
    if (typeof window !== "undefined") {
      if (navigator.share) {
        navigator.share({
          title: document.title,
          url: window.location.href,
        });
      } else {
        navigator.clipboard.writeText(window.location.href);
        alert("Share link copied!");
      }
    }
  };

  return (
    <div className="flex lg:flex-col items-center justify-center lg:justify-start gap-4 lg:pt-4">
      <span className="text-xs font-semibold text-text-charcoal/50 uppercase tracking-wider lg:mb-2">Share</span>
      <button
        onClick={handleCopyLink}
        className="w-10 h-10 rounded-full border border-primary/10 flex items-center justify-center text-text-charcoal hover:bg-primary hover:text-white transition-colors cursor-pointer"
        aria-label="Copy Link"
      >
        <Link2 className="w-4.5 h-4.5" />
      </button>
      <button
        onClick={handleShare}
        className="w-10 h-10 rounded-full border border-primary/10 flex items-center justify-center text-text-charcoal hover:bg-primary hover:text-white transition-colors cursor-pointer"
        aria-label="Share Article"
      >
        <Share2 className="w-4.5 h-4.5" />
      </button>
    </div>
  );
}
