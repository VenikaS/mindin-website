"use client";

import React from "react";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2, ShieldAlert, HeartHandshake, Compass, Hourglass } from "lucide-react";
import { Button } from "@/components/ui/button";
import { servicesData } from "../page";

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const IconComp = service.icon;

  const treatmentPhases = [
    {
      title: "Exploration & Grounding",
      desc: "In our initial sessions, we look at the immediate symptoms and establish practical grounding skills to help regulate your nervous system.",
      icon: Hourglass,
    },
    {
      title: "Identifying Roots",
      desc: "Together, we identify the cognitive patterns, past experiences, and subconscious beliefs that trigger your distress.",
      icon: Compass,
    },
    {
      title: "Empowerment & Integration",
      desc: "We practice and integrate new behaviors, boundaries, and thought habits, helping you step back into your life with confidence.",
      icon: HeartHandshake,
    },
  ];

  return (
    <div className="relative min-h-screen bg-neutral-bg pt-12 pb-24">
      {/* Background Decor Blobs */}
      <div className="blob-container">
        <div className="blob bg-surface-blue w-[400px] h-[400px] -left-20 top-20" />
        <div className="blob bg-surface-peach w-[450px] h-[450px] -right-20 top-[40%]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        {/* Back Link */}
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-text-navy mb-12 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to all services
        </Link>

        {/* Header Block */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-16 pb-12 border-b border-primary/10">
          <div className="md:col-span-8 space-y-4">
            <span className="text-sm font-semibold tracking-widest text-primary uppercase">Specialized Track</span>
            <h1 className="text-4xl md:text-5xl font-display text-text-navy leading-tight">{service.title}</h1>
            <p className="text-lg text-text-charcoal/80 leading-relaxed max-w-2xl">{service.desc}</p>
          </div>
          <div className="md:col-span-4 flex justify-start md:justify-end">
            <div className={`w-24 h-24 ${service.color} rounded-3xl flex items-center justify-center shadow-sm`}>
              <IconComp className="w-12 h-12 text-primary" />
            </div>
          </div>
        </div>

        {/* Detailed Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          {/* Main content column */}
          <div className="md:col-span-7 space-y-8">
            <h2 className="text-2xl font-display text-text-navy">Our Therapeutic Approach</h2>
            <p className="text-text-charcoal/85 leading-relaxed text-sm md:text-base">
              In our sessions, we look at the holistic, systemic picture—your lived experiences, family cycles, societal expectations, gender, and environment. We work from a systemic and narrative framework that is trauma-informed and queer-friendly, helping you reflect, regulate your nervous system, and reclaim your narrative.
            </p>
            {service.extendedContent && (
              <div dangerouslySetInnerHTML={{ __html: service.extendedContent }} />
            )}

            <div className="space-y-6 pt-4">
              <h3 className="text-xl font-semibold text-text-navy">What to Expect</h3>
              <div className="relative border-l-2 border-primary-light/50 pl-6 space-y-8">
                {treatmentPhases.map((phase, i) => {
                  const PhaseIcon = phase.icon;
                  return (
                    <div key={phase.title} className="relative">
                      {/* Timeline dot */}
                      <span className="absolute -left-[35px] top-0.5 w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white text-[10px]">
                        {i + 1}
                      </span>
                      <h4 className="font-semibold text-text-navy text-base flex items-center gap-2">
                        {phase.title}
                      </h4>
                      <p className="text-text-charcoal/70 text-sm leading-relaxed mt-1.5">{phase.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Sidebar checklist & booking box */}
          <div className="md:col-span-5 space-y-8">
            {/* Symptoms list card */}
            <div className="bg-surface p-8 rounded-[2rem] border border-primary/5 shadow-sm">
              <h3 className="text-lg font-semibold text-text-navy mb-4 uppercase tracking-wider">Common Symptoms We Treat</h3>
              <ul className="space-y-3">
                {service.concerns.map((concern) => (
                  <li key={concern} className="flex items-start gap-2.5 text-text-charcoal/80 text-sm">
                    <CheckCircle2 className="w-4.5 h-4.5 text-primary shrink-0 mt-0.5" />
                    <span>{concern}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Direct Booking CTA */}
            <div className="bg-primary-container/40 p-8 rounded-[2rem] border border-primary-light/20 shadow-sm space-y-6">
              <h3 className="text-xl font-display text-text-navy">Ready to feel better?</h3>
              <p className="text-xs text-text-charcoal/80 leading-relaxed">
                You don't have to navigate this alone. Choose a time and book your initial consultation session online today.
              </p>
              <Link href="/book" className="block">
                <Button variant="cta" className="w-full h-12">
                  Book First Session
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
