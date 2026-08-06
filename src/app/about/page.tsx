"use client";

import { motion } from "framer-motion";
import { Heart, Shield, Verified } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutPage() {
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
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-8 pt-10 md:pt-16">
        {/* Therapist Bio Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-32">
          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-4 border border-primary/10 rounded-[3rem] -z-10" />
            <div className="rounded-[3rem] overflow-hidden aspect-[4/5] shadow-soft-blue max-w-md mx-auto">
              <img
                alt="Venika Singhal - Psychotherapist"
                src="/images/about-me-therapist.jpg"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl md:text-4xl font-display text-text-navy">Venika Singhal (She/Her)</h2>
              <p className="text-primary font-semibold text-base md:text-lg">Founder mind&rsquo;in &amp; Psychotherapist</p>
            </div>
            
            <ul className="space-y-6 text-text-charcoal/85 text-base leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                <div>
                  <strong className="text-text-navy font-semibold">Qualifications:</strong>
                  <ul className="mt-2 ml-4 list-disc list-inside space-y-1 text-sm text-text-charcoal/80">
                    <li>BA+MA (Dual) Clinical Psychology</li>
                    <li>Family Therapy Grad Cert (King&apos;s College, London)</li>
                    <li>Queer Affirmative Counselling Practice (QACP)</li>
                    <li>Expressive Arts &amp; Therapies (FECAT)</li>
                  </ul>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                <div>
                  <strong className="text-text-navy font-semibold">Practicing as a therapist since 2017</strong>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                <div>
                  <strong className="text-text-navy font-semibold">Who I work with:</strong> Residing and Non-Residing Indians
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                <div>
                  <strong className="text-text-navy font-semibold">Therapy Approaches:</strong> Systemic &amp; Narrative, Trauma-Informed &amp; Queer-Affirmative.
                  <p className="mt-2 text-sm text-text-charcoal/80">
                    This entails understanding mental health concerns and patterns through gender, privilege, caste, family, disability and other structures that shape your reality. Developing skills and resources to reshape and change personal narratives that drive your distress is an important part of these approaches. Trauma-Informed &amp; Queer-Affirmative lens is grounded in safety, inclusion, collaboration and respect for your lived experiences.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                <div>
                  <strong className="text-text-navy font-semibold">Languages Known:</strong> English &amp; Hindi
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                <div>
                  <strong className="text-text-navy font-semibold">Areas of Specializations:</strong> Please find detailed information about this in the{" "}
                  <Link href="/services" className="text-primary hover:underline font-medium">
                    Services section
                  </Link>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                <div>
                  <strong className="text-text-navy font-semibold">My Therapy Style:</strong> My aim as a therapist is to provide a safe space for curiosity &amp; exploration of yourself, understanding your patterns that make you feel stuck and together creating possibilities for change &amp; growth with you.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                <div>
                  <strong className="text-text-navy font-semibold">Fun Facts about me:</strong> My favorite movie is Kung Fu Panda; I enjoy having coffee with friends and love the earthy smell of rain
                </div>
              </li>
            </ul>


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
