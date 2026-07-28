import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <div className="relative min-h-screen bg-neutral-bg pt-12 pb-24">
      <div className="relative z-10 mx-auto max-w-3xl px-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-text-navy mb-12 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        <h1 className="text-3xl md:text-4xl font-display text-text-navy mb-6">Privacy Policy</h1>
        <p className="text-xs text-text-charcoal/50 mb-8 uppercase tracking-widest">Last Updated: July 18, 2026</p>

        <div className="space-y-8 text-text-charcoal/80 text-sm md:text-base leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-display font-semibold text-text-navy">1. Patient Confidentiality</h2>
            <p>
              Your trust is our most valuable asset. At Mind'in, all consultations, video sessions, therapist notes, and intake documents are protected under strict patient-therapist confidentiality protocols.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-display font-semibold text-text-navy">2. HIPAA & Encryption Compliance</h2>
            <p>
              We conduct all online sessions over telehealth portals utilizing end-to-end encryption. Your personal health details and session recordings (which we never keep unless explicitly consented to for study purposes) are secure and satisfy industry standards.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-display font-semibold text-text-navy">3. Information We Collect</h2>
            <p>
              We collect your name, contact email, and telephone number during the booking steps. This detail is only used to coordinate calendars and send session invites. We never lease or sell your contact information to third parties.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-display font-semibold text-text-navy">4. Your Rights</h2>
            <p>
              You have the right to request deletion of your contact records, view any therapist notes associated with your file, and retract consent for treatment at any point. Contact us to discuss any privacy questions.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
