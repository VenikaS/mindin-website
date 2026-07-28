import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="relative min-h-screen bg-neutral-bg pt-12 pb-24">
      <div className="relative z-10 mx-auto max-w-3xl px-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-text-navy mb-12 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        <h1 className="text-3xl md:text-4xl font-display text-text-navy mb-6">Terms & Conditions</h1>
        <p className="text-xs text-text-charcoal/50 mb-8 uppercase tracking-widest">Last Updated: July 18, 2026</p>

        <div className="space-y-8 text-text-charcoal/80 text-sm md:text-base leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-display font-semibold text-text-navy">1. Session Bookings</h2>
            <p>
              By scheduling an appointment, you agree to secure your slot with accurate personal contact details. Any session slots are reserved exclusively for you, and we expect prompt attendance at the scheduled hour.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-display font-semibold text-text-navy">2. Cancellation Policy</h2>
            <p>
              We require at least 24 hours notice for any cancellation or rescheduling requests. Cancellations made with less than 24 hours notice will be subject to the full session fee, except in cases of documented physical emergencies.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-display font-semibold text-text-navy">3. Emergency Exceptions</h2>
            <p>
              Mind'in services are not designed for acute crisis counseling or critical emergencies. If you are experiencing suicidal impulses, please call emergency services immediately or visit a hospital emergency room.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-display font-semibold text-text-navy">4. Clinical Discretion</h2>
            <p>
              Our therapist reserves the right to terminate treatment or recommend external clinic referrals if it is determined that online therapy does not satisfy your current clinical needs.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
