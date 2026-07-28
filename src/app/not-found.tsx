import React from "react";
import Link from "next/link";
import { Compass, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFoundPage() {
  return (
    <div className="relative min-h-screen bg-neutral-bg flex items-center justify-center py-20">
      {/* Background Decor Blobs */}
      <div className="blob-container">
        <div className="blob bg-surface-blue w-[400px] h-[400px] -left-20 top-10" />
        <div className="blob bg-surface-peach w-[450px] h-[450px] -right-20 top-[40%]" />
      </div>

      <div className="relative z-10 max-w-md mx-auto px-6 text-center space-y-6">
        <div className="w-20 h-20 rounded-full bg-primary-light/50 flex items-center justify-center mx-auto text-primary">
          <Compass className="w-10 h-10 animate-spin-slow" />
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl font-display text-text-navy">Page Not Found</h1>
          <p className="text-sm text-text-charcoal/80">
            The page you are looking for has shifted, or doesn't exist. Let's guide you back to a place of peace.
          </p>
        </div>

        <Link href="/" className="inline-block pt-2">
          <Button variant="primary" className="flex items-center gap-2">
            <Home className="w-4 h-4" /> Return to Safety
          </Button>
        </Link>
      </div>
    </div>
  );
}
