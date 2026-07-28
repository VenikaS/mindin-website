"use client";

import React from "react";
import { Download, FileText, BookOpen, Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const resources = [
  {
    title: "Morning Grounding Exercises",
    desc: "A one-page PDF sheet containing 5 somatic grounding exercises to reset nervous system tension in the early morning.",
    type: "Worksheet",
    format: "PDF (1.2 MB)",
    icon: Heart,
    color: "bg-surface-blue",
  },
  {
    title: "Boundary Setting Worksheets",
    desc: "An interactive workbook designed to help you construct gentle boundary scripts for personal and work relationships.",
    type: "Workbook",
    format: "PDF (3.4 MB)",
    icon: FileText,
    color: "bg-surface-peach",
  },
  {
    title: "Anxiety Mapping Guide",
    desc: "A comprehensive guide to identifying your body's early physical warning signs of stress and anxiety, with tracking tools.",
    type: "Guide Book",
    format: "PDF (2.8 MB)",
    icon: BookOpen,
    color: "bg-primary-light",
  },
];

export default function ResourcesPage() {
  const handleDownload = (title: string) => {
    alert(`Thank you for requesting "${title}". The dummy PDF download has started!`);
  };

  return (
    <div className="relative min-h-screen bg-neutral-bg pt-12 pb-24">
      {/* Background Decor Blobs */}
      <div className="blob-container">
        <div className="blob bg-surface-blue w-[450px] h-[450px] -left-20 top-20" />
        <div className="blob bg-surface-peach w-[500px] h-[500px] -right-20 top-[60%]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-8">
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-sm font-semibold tracking-widest text-primary uppercase">Self-Guided Growth</span>
          <h1 className="text-4xl md:text-5xl font-display text-text-navy">Mindfulness & Therapy Resources</h1>
          <p className="text-base text-text-charcoal/80 leading-relaxed">
            Free downloadable worksheets, guides, and interactive workbooks carefully curated to support your emotional wellness path.
          </p>
        </div>

        {/* Resources Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {resources.map((res) => {
            const IconComp = res.icon;
            return (
              <div
                key={res.title}
                className="bg-surface-pearl rounded-[2rem] p-8 border border-primary/5 shadow-sm hover:shadow-soft-blue flex flex-col justify-between transition-all"
              >
                <div>
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider block mb-4">
                    {res.type}
                  </span>
                  <div className={`w-12 h-12 ${res.color} rounded-2xl flex items-center justify-center mb-6`}>
                    <IconComp className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-display text-text-navy mb-3">{res.title}</h3>
                  <p className="text-sm text-text-charcoal/70 leading-relaxed mb-8">{res.desc}</p>
                </div>
                <div className="border-t border-primary/5 pt-4 flex items-center justify-between mt-auto">
                  <span className="text-xs text-text-charcoal/50">{res.format}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="flex items-center gap-1.5 text-xs text-primary font-bold cursor-pointer"
                    onClick={() => handleDownload(res.title)}
                  >
                    Download <Download className="w-3.5 h-3.5" />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Callout section */}
        <div className="bg-surface border border-primary/5 rounded-[2.5rem] p-10 md:p-16 text-center max-w-4xl mx-auto space-y-6">
          <h3 className="text-2xl font-display text-text-navy">Looking for personalized support?</h3>
          <p className="text-sm text-text-charcoal/80 max-w-md mx-auto">
            These worksheets are great self-study tools, but they cannot replace individual clinical work. Reach out to coordinate dedicated therapy sessions.
          </p>
          <div className="flex justify-center pt-2">
            <Link href="/book">
              <Button variant="primary">Book a Session</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
