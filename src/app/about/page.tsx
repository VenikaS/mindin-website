"use client";

import { motion } from "framer-motion";
import { Heart, Shield, Verified } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-neutral-bg pt-4 pb-24">
      {/* Background Decor Blobs */}
      <div className="blob-container">
        <div className="blob bg-surface-peach w-[450px] h-[450px] -left-20 top-20" />
        <div className="blob bg-surface-blue w-[500px] h-[500px] -right-20 top-[60%]" />
      </div>

      {/* Main Container */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-8 pt-2 md:pt-4">
        {/* Therapist Bio Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-32">
          <div className="lg:col-span-5 relative w-full max-w-md mx-auto pt-2">
            <div className="absolute -inset-4 border border-primary/10 rounded-[3rem] -z-10" />
            <div className="rounded-[3rem] overflow-hidden aspect-[4/5] shadow-soft-blue w-full">
              <img
                alt="Venika Singhal - Psychotherapist"
                src="/images/about-me-therapist.jpg"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl md:text-4xl font-display text-text-navy flex flex-wrap items-baseline gap-2">
                <span>Venika Singhal</span>
                <span className="text-lg md:text-xl font-sans font-normal text-text-charcoal/60">(She/Her)</span>
              </h2>
              <p className="text-primary font-semibold text-base md:text-lg">Founder Mind&rsquo;in &amp; Psychotherapist</p>
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
                  <strong className="text-text-navy font-semibold">Who I work with:</strong>{" "}
                  Residing and Non-Residing Indians
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                <div>
                  <strong className="text-text-navy font-semibold">Therapy Approaches:</strong>{" "}
                  Systemic &amp; Narrative; Trauma-Informed &amp; Queer-Affirmative
                  <p className="mt-2 text-sm text-text-charcoal/80">
                    This entails understanding mental health concerns and patterns through gender, privilege, caste, family, disability and other structures that shape your reality. Developing skills and resources to reshape and change personal narratives that drive your distress is an important part of these approaches. Trauma-Informed &amp; Queer-Affirmative lens is grounded in safety, inclusion, collaboration and respect for your lived experiences.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                <div>
                  <strong className="text-text-navy font-semibold">Languages Known:</strong>{" "}
                  English &amp; Hindi
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                <div>
                  <strong className="text-text-navy font-semibold">Areas of Specializations:</strong>{" "}
                  Please find detailed information about this in the{" "}
                  <Link href="/services" className="text-primary hover:underline font-medium">
                    Services section
                  </Link>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                <div>
                  <strong className="text-text-navy font-semibold">My Therapy Style:</strong>{" "}
                  My aim as a therapist is to provide a safe space for curiosity &amp; exploration of yourself, understanding your patterns that make you feel stuck and together creating possibilities for change &amp; growth with you.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                <div>
                  <strong className="text-text-navy font-semibold">Fun Facts about me:</strong>{" "}
                  My favorite movie is Kung Fu Panda; I enjoy having coffee with friends and love the earthy smell of rain
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Mind'in Journey & Philosophy Section */}
        <div className="border-t border-primary/10 pt-12">
          <h2 className="text-3xl md:text-4xl font-display text-text-navy mb-12 text-center lg:text-left">
            Mind&rsquo;in Journey &amp; Philosophy
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Poster Image Container */}
            <div className="lg:col-span-5 relative w-full max-w-md mx-auto">
              <div className="absolute -inset-4 border border-primary/10 rounded-[3rem] -z-10" />
              <div className="rounded-[3rem] overflow-hidden aspect-[3/4] shadow-soft-blue w-full">
                <img
                  alt="Mind'in Inspirational Poster"
                  src="/images/poster.jpg"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Story Text Container */}
            <div className="lg:col-span-7 space-y-6 text-text-charcoal/85 leading-relaxed text-base md:text-lg">
              <p>
                While waiting for a friend for a coffee met up in Connaught place, Delhi I found myself drawn to
                the street vendors selling posters. Since she was running late, I decided to browse through
                them to kill time. I stumbled upon a poster that said &lsquo;When things change inside you, things
                change around you&rsquo;. I was pleasantly surprised by how simply these words were put together
                and yet they carried a deep meaning. The therapist in me couldn&rsquo;t help but think how
                significantly our inner world as human beings impact how we view ourselves and the world.
              </p>
              <p>
                Needless to say, this poster earned its&rsquo; spot on my therapy room wall and inspired me to create
                Mind&rsquo;in. Mind&rsquo;in quite literally means &lsquo;going inside your mind&rsquo; to explore and be curious yourself
                and as a result build awareness about what drives your thinking, emotions and behaviours. The
                purpose of mind&rsquo;in is to provide a safe space for you to be able to become who you
                authentically are and move forward to where you want to be in your life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
