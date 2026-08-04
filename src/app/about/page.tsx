"use client";

import { motion } from "framer-motion";
import { Award, BookOpen, BriefcaseBusiness, Camera, ExternalLink, Heart, Shield, Verified } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutPage() {
  const socialLinks = [
    {
      label: "Instagram",
      href: "https://www.instagram.com/psychologist_venika.singhal?igsh=Zzl2djVhbHoxaWZ6",
      icon: Camera,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/psychologistvenika?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      icon: BriefcaseBusiness,
    },
  ];



  const philosophies = [
    {
      title: "Radical Empathy",
      desc: "I practice deep, non-judgmental active listening, meeting you exactly where you are in your healing journey.",
      icon: Heart,
    },
    {
      title: "Evidence-Based Methodologies",
      desc: "My approach combines scientific research with clinical wisdom to create a plan that supports meaningful change.",
      icon: Verified,
    },
    {
      title: "Emotional Safety",
      desc: "I prioritize confidentiality, secure online care, and a peaceful setting for every session.",
      icon: Shield,
    },
  ];

  return (
    <div className="relative min-h-screen bg-neutral-bg pt-12 pb-24">
      {/* Background Decor Blobs */}
      <div className="blob-container">
        <div className="blob bg-surface-peach w-[450px] h-[450px] -left-20 top-20" />
        <div className="blob bg-surface-blue w-[500px] h-[500px] -right-20 top-[60%]" />
      </div>

      {/* Main Container */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-8">
        {/* Header Hero */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-sm font-semibold tracking-widest text-primary uppercase">About Mind&apos;in</span>
          <h1 className="text-4xl md:text-5xl font-display text-text-navy leading-tight">
            About Venika
          </h1>
          <p className="text-lg text-text-charcoal/80 leading-relaxed">
            Discover the therapeutic philosophy, credentials, and values that guide my practice.
          </p>
        </div>

        {/* Therapist Bio Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-32">
          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-4 border border-primary/10 rounded-[3rem] -z-10" />
            <div className="rounded-[3rem] overflow-hidden aspect-[4/5] shadow-soft-blue max-w-md mx-auto">
              <img
                alt="Venika - Psychotherapist"
                src="/images/therapist.png"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-7 space-y-8">
            <h2 className="text-3xl font-display text-text-navy">Venika, Psychotherapist</h2>
            <p className="text-text-charcoal/85 leading-relaxed text-base md:text-lg">
              Hello! I am Venika, a therapist whose work is rooted in the systemic and narrative approach. This entails understanding individual concerns and patterns through gender, privilege, caste, family, disability and other structures that shape our reality.
            </p>
            <p className="text-text-charcoal/80 leading-relaxed text-sm md:text-base">
              The therapeutic relationship enables reflection, regulation and provides a safe space for you and your emotions. The therapy space is committed to honoring your lived experiences and to enable you to reclaim your narrative.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-surface-pearl px-4 py-2 text-sm font-medium text-text-navy hover:border-primary/30 hover:text-primary transition-colors"
                >
                  <Icon className="h-4 w-4" />
                  {label}
                </a>
              ))}
            </div>
            
            {/* Credentials / Qualifications Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-surface-blue flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-text-navy text-sm">Qualifications & Certifications</h4>
                  <ul className="text-xs text-text-charcoal/70 mt-1 list-disc list-inside space-y-1">
                    <li>BA+MA Clinical Psychology</li>
                    <li>Family Therapy Grad Cert (Kings&apos; College, London)</li>
                    <li>Queer Affirmative Counselling Practice (QACP)</li>
                    <li>Expressive Arts & Therapies (FECAT)</li>
                  </ul>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-surface-peach flex items-center justify-center shrink-0">
                  <BookOpen className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-text-navy text-sm">Therapy Approaches</h4>
                  <p className="text-xs text-text-charcoal/70 mt-0.5">Systemic & Narrative (Trauma-informed & Queer-friendly)</p>
                </div>
              </div>
            </div>


          </div>
        </div>

        {/* Story & Mission Split Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32 border-t border-primary/10 pt-20">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-display text-text-navy">My Mission</h3>
            <p className="text-text-charcoal/80 leading-relaxed text-sm md:text-base">
              At Mind&apos;in, my mission is to make professional therapy accessible, comfortable, and deeply human. I seek to offer a peaceful space where healing feels inviting rather than intimidating.
            </p>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-display text-text-navy">My Vision</h3>
            <p className="text-text-charcoal/80 leading-relaxed text-sm md:text-base">
              I envision a world where mental well-being is treated with the same proactive, routine, and warm care as physical health. Through thoughtful, evidence-informed therapy, I help you build emotional resilience that carries you through the highs and lows of modern life.
            </p>
          </div>
        </div>

        {/* Therapy Philosophy Section */}
        <div className="bg-surface border border-primary/5 rounded-[3rem] p-10 md:p-16 mb-24">
          <h2 className="text-3xl font-display text-text-navy text-center mb-16">The Mind&apos;in Philosophy</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {philosophies.map((phil) => {
              const IconComp = phil.icon;
              return (
                <div key={phil.title} className="space-y-4 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary-light/50 flex items-center justify-center mx-auto mb-6 text-primary">
                    <IconComp className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-text-navy">{phil.title}</h3>
                  <p className="text-sm text-text-charcoal/70 leading-relaxed px-2">{phil.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-primary-container/40 rounded-[3rem] p-10 md:p-16 text-center border border-primary-light/20 relative overflow-hidden">
          <div className="relative z-10 max-w-xl mx-auto space-y-6">
            <h2 className="text-2xl md:text-4xl font-display text-text-navy">Ready to begin your journey?</h2>
            <p className="text-text-charcoal/80 text-sm md:text-base leading-relaxed">
              Book a gentle consultation session with Venika and explore if this approach is right for you.
            </p>
            <div className="flex justify-center pt-2">
              <Link href="/book">
                <Button variant="primary" size="lg">
                  Book a Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
