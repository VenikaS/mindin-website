"use client";

import React, { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { CheckCircle, Calendar, Video, Mail, Home, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

function ThankYouContent() {
  const searchParams = useSearchParams();
  const format = searchParams.get("format") || "online";

  return (
    <div className="relative z-10 max-w-xl mx-auto px-6 text-center space-y-8 bg-surface-pearl border border-primary/5 rounded-[3rem] p-10 md:p-16 shadow-soft-blue">
      <div className="w-20 h-20 rounded-full bg-primary-light/50 flex items-center justify-center mx-auto text-primary animate-bounce">
        <CheckCircle className="w-10 h-10" />
      </div>

      <div className="space-y-3">
        <h1 className="text-3xl md:text-4xl font-display text-text-navy">Your Session is Booked</h1>
        <p className="text-base text-text-charcoal/80 leading-relaxed">
          {format === "in-person" ? (
            "A confirmation message has been sent to your email. Details of clinic address along with your appointment details will be sent to your email id 24 hours before the scheduled appointment."
          ) : (
            "A confirmation message has been sent to your email. A secure google meet link will be sent your email id 24 hours before the scheduled appointment."
          )}
        </p>
      </div>

      {/* Quick next steps cards */}
      <div className="bg-surface rounded-2xl p-6 text-left space-y-4 border border-primary/5">
        <h4 className="font-semibold text-text-navy text-sm uppercase tracking-wider">Next Steps</h4>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <Mail className="w-4.5 h-4.5 text-primary shrink-0 mt-0.5" />
            <p className="text-xs text-text-charcoal/70">
              Check your inbox for a confirmation containing details of your booking.
            </p>
          </div>
          {format === "in-person" ? (
            <div className="flex items-start gap-3">
              <MapPin className="w-4.5 h-4.5 text-primary shrink-0 mt-0.5" />
              <p className="text-xs text-text-charcoal/70">
                Clinic Address: Saraswati Clinic, Sector 46, Noida. Map details sent to your email.
              </p>
            </div>
          ) : (
            <div className="flex items-start gap-3">
              <Video className="w-4.5 h-4.5 text-primary shrink-0 mt-0.5" />
              <p className="text-xs text-text-charcoal/70">
                A HIPAA-secured, private telehealth video link will be sent to your email 24 hours before the session.
              </p>
            </div>
          )}
        </div>
      </div>

      <Link href="/" className="inline-block pt-4">
        <Button variant="primary" className="flex items-center gap-2">
          <Home className="w-4 h-4" /> Return to Homepage
        </Button>
      </Link>
    </div>
  );
}

export default function ThankYouPage() {
  return (
    <div className="relative min-h-screen bg-neutral-bg flex items-center justify-center py-20">
      {/* Background Decor Blobs */}
      <div className="blob-container">
        <div className="blob bg-surface-blue w-[400px] h-[400px] -left-20 top-10" />
        <div className="blob bg-surface-peach w-[450px] h-[450px] -right-20 top-[40%]" />
      </div>

      <Suspense fallback={<div className="text-text-navy font-semibold">Loading...</div>}>
        <ThankYouContent />
      </Suspense>
    </div>
  );
}
