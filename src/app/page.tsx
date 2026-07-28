"use client";

import Link from "next/link";
import { ArrowRight, Sprout, Shield, Brain, Heart, ArrowUpRight, Compass, Sparkles, Smile, Camera, BriefcaseBusiness, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { motion } from "framer-motion";

export default function HomePage() {
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

  const organizations = [
    {
      name: "Authentic Psychologist",
      href: "https://authenticpsychologist.com/",
      logo: "/images/authentic-psychologist-logo.jpg",
    },
    {
      name: "Space to Accept",
      href: "https://www.spacetoaccept.com/",
      logo: "/images/space-to-accept-logo.png",
    },
  ];

  const supportAreas = [
    { title: "Anxiety & Depression", desc: "Equipping you with coping & regulation skills.", icon: Brain, color: "bg-surface-blue", slug: "anxiety-depression" },
    { title: "Immigrants & Students", desc: "Navigating displacement, adjustment & adult friendships.", icon: Compass, color: "bg-surface-peach", slug: "immigrants-students" },
    { title: "Parentified Adults", desc: "Unpacking adult patterns of people pleasing & self-reliance.", icon: Smile, color: "bg-primary-light", slug: "parentified-adults" },
    { title: "Reproductive Health", desc: "Coping with the stress of reproductive health transitions.", icon: Sparkles, color: "bg-surface-blue", slug: "reproductive-health" },
    { title: "Couples & Family", desc: "Resolving conflict patterns & strengthening relationships.", icon: Heart, color: "bg-surface-peach", slug: "couples-family" },
    { title: "Childhood Trauma Support", desc: "Safe space to express and process childhood wounds.", icon: Shield, color: "bg-primary-light", slug: "childhood-trauma" },
    { title: "Early Career Therapists", desc: "Supervision and personal therapy for practitioners.", icon: Sprout, color: "bg-surface-blue", slug: "career-therapists" },
  ];

  const processSteps = [
    { num: 1, title: "Choose Service", desc: "Identify the type of support that resonates with you most." },
    { num: 2, title: "Book", desc: "Select a time that fits your schedule using our online portal." },
    { num: 3, title: "Conversation", desc: "Connect with Venika in a secure, private video consultation." },
    { num: 4, title: "Journey", desc: "Begin the consistent work of healing and personal transformation." },
  ];

  const blogPreviews = [
    {
      id: "overthinking-exhausting",
      title: "Why Overthinking Feels So Exhausting",
      category: "Mindfulness",
      date: "Oct 24, 2023",
      readTime: "6 min read",
      image: "/images/hero-illustration.png",
    },
    {
      id: "gentle-boundaries",
      title: "The Art of Setting Gentle Boundaries",
      category: "Relationships",
      date: "Oct 22, 2023",
      readTime: "5 min read",
      image: "/images/therapist.png",
    },
  ];

  return (
    <div className="relative min-h-screen bg-neutral-bg">
      {/* Background Decor Blobs */}
      <div className="blob-container">
        <motion.div
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -40, 20, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="blob bg-surface-peach w-[500px] h-[500px] -right-20 top-10"
        />
        <motion.div
          animate={{
            x: [0, -30, 20, 0],
            y: [0, 40, -20, 0],
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="blob bg-surface-blue w-[600px] h-[600px] -left-20 top-[40%]"
        />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 md:px-8 pt-16 md:pt-28 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-8 text-left"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display text-text-navy leading-tight tracking-tight">
              A safe space to <br />
              <span className="text-primary italic">understand</span>, <span className="text-secondary italic">heal</span>, and <span className="text-accent-moss italic">grow</span>.
            </h1>
            <p className="text-lg md:text-xl text-text-charcoal/80 max-w-xl leading-relaxed">
              Mind'in provides professional, empathetic online therapy to help you navigate life's complexities and find your inner peace.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/book">
                <Button variant="primary" size="lg">
                  Book Your First Session
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="secondary" size="lg">
                  Explore Services
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 flex justify-center"
          >
            <div className="relative w-full max-w-lg aspect-square">
              <div className="absolute -inset-4 bg-primary-light/20 rounded-[3rem] blur-2xl animate-pulse-slow" />
              <img
                alt="Mind'in Calming Therapy Hero Illustration"
                src="/images/hero-illustration.png"
                className="relative rounded-[3rem] shadow-soft-blue w-full h-full object-cover border border-primary-light/20"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Welcome Banner */}
      <section className="bg-surface border-y border-primary/5 py-24 relative z-10">
        <div className="mx-auto max-w-4xl px-6 text-center space-y-8">
          <span className="text-sm font-semibold tracking-widest text-primary uppercase">Welcome to Mind'in</span>
          <h2 className="text-3xl md:text-4xl font-display text-text-navy leading-tight">
            You don't have to figure everything out alone.
          </h2>
          <p className="text-lg text-text-charcoal/85 leading-relaxed">
            Therapy is more than just talking; it's a dedicated sanctuary for your mind. At Mind'in, we provide a safe, non-judgmental space where you can pause, breathe, and begin to untangle the complexities of your internal world. Whether you're facing a specific challenge or seeking a deeper understanding of yourself, we're here to walk alongside you.
          </p>
          <div className="pt-2 flex justify-center text-primary">
            <Sprout className="w-10 h-10 animate-bounce" />
          </div>
        </div>
      </section>

      {/* Areas of Support Grid */}
      <section className="mx-auto max-w-7xl px-6 md:px-8 py-28 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-display text-text-navy">Areas of Support</h2>
            <p className="text-text-charcoal/70 max-w-lg text-base md:text-lg">
              We offer specialized support tailored to your unique journey and emotional needs.
            </p>
          </div>
          <Link href="/services" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline">
            View all services <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {supportAreas.map((area, idx) => {
            const IconComp = area.icon;
            return (
              <Link href={`/services/${area.slug}`} key={area.title} className="block group">
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="bg-surface-pearl p-6 md:p-8 rounded-[2rem] border border-primary/5 shadow-sm hover:shadow-soft-blue hover:translate-y-[-4px] transition-all duration-300 h-full flex flex-col justify-between"
                >
                  <div>
                    <div className={`w-12 h-12 ${area.color} rounded-2xl flex items-center justify-center mb-6`}>
                      <IconComp className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-text-navy text-lg md:text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{area.title}</h3>
                    <p className="text-text-charcoal/70 text-sm leading-relaxed mb-4">{area.desc}</p>
                  </div>
                  <span className="text-xs font-semibold text-primary inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Learn More <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Meet therapist preview */}
      <section className="bg-surface border-y border-primary/5 py-28 relative z-10">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-6 relative">
              <div className="absolute -inset-4 border-2 border-primary/10 rounded-[3rem] -z-10" />
              <div className="rounded-[3rem] overflow-hidden aspect-[4/5] shadow-soft-peach max-w-md mx-auto">
                <img
                  alt="Venika - Mind'in Therapist"
                  src="/images/therapist.png"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-6 space-y-8">
              <span className="text-sm font-semibold tracking-widest text-primary uppercase">The Face of Mind'in</span>
              <h2 className="text-3xl md:text-4xl font-display text-text-navy">Meet Venika</h2>
              <p className="text-lg text-text-charcoal/85 leading-relaxed">
                I believe that healing begins with connection. My approach is rooted in empathy, evidence-based practices, and a deep respect for each person's unique story. Together, we can uncover the patterns that no longer serve you and build a foundation for lasting change.
              </p>
              <div className="space-y-4 pt-2">
                <div className="flex items-center gap-3 text-primary font-medium">
                  <Shield className="w-5 h-5" />
                  <span>Licensed Psychotherapist (M.Sc)</span>
                </div>
                <div className="flex items-center gap-3 text-primary font-medium">
                  <Sprout className="w-5 h-5" />
                  <span>Specialized in Cognitive Behavioral Therapy</span>
                </div>
              </div>
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {organizations.map((org) => (
                  <a
                    key={org.name}
                    href={org.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 rounded-2xl border border-primary/10 bg-surface-pearl p-3 hover:shadow-soft-blue transition-all"
                  >
                    <div className="h-12 w-12 shrink-0 rounded-xl border border-primary/10 bg-white overflow-hidden flex items-center justify-center">
                      <img src={org.logo} alt={`${org.name} logo`} className="h-full w-full object-contain p-1.5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-text-navy group-hover:text-primary transition-colors">{org.name}</p>
                      <p className="mt-1 flex items-center gap-1 text-xs text-text-charcoal/60">
                        Visit website <ExternalLink className="h-3 w-3" />
                      </p>
                    </div>
                  </a>
                ))}
              </div>
              <Link href="/about">
                <Button variant="primary" size="lg" className="mt-4">
                  Learn More About My Story
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="bg-text-navy text-white py-28 relative z-10">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
            <h2 className="text-3xl md:text-4xl font-display text-white">Your Journey Starts Here</h2>
            <p className="text-white/70 text-base md:text-lg">
              A simple, four-step path to beginning your healing journey.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 relative">
            {/* Connection line */}
            <div className="hidden md:block absolute top-10 left-0 right-0 h-0.5 bg-primary/20 -z-0" />
            {processSteps.map((step) => (
              <div key={step.num} className="text-center space-y-5 relative z-10">
                <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center mx-auto text-xl font-bold border-4 border-text-navy shadow-lg">
                  {step.num}
                </div>
                <h4 className="text-xl font-semibold text-white">{step.title}</h4>
                <p className="text-white/70 text-sm leading-relaxed max-w-xs mx-auto">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-28 relative z-10">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-display text-text-navy text-center mb-16">Voices of Peace</h2>
          <TestimonialsCarousel />
        </div>
      </section>

      {/* FAQ & Blog snippet split */}
      <section className="bg-surface py-28 border-t border-primary/5 relative z-10">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* FAQ half */}
            <div className="space-y-8">
              <h2 className="text-3xl font-display text-text-navy">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>How long does a typical session last?</AccordionTrigger>
                  <AccordionContent>
                    Standard therapy sessions last for 50 minutes. Extended sessions (75-90 minutes) are available for couples or families upon request.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Do you offer online sessions?</AccordionTrigger>
                  <AccordionContent>
                    Yes, all of our sessions are conducted online via a HIPAA-compliant, encrypted video system. You can join from the comfort and privacy of your home.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>What is your cancellation policy?</AccordionTrigger>
                  <AccordionContent>
                    We require at least 24 hours notice for all cancellations or rescheduling. Cancellations made with less than 24 hours notice will be charged the full session fee.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Link href="/faq" className="inline-block mt-4">
                <Button variant="outline">View All FAQs</Button>
              </Link>
            </div>

            {/* Blog half */}
            <div className="space-y-8">
              <h2 className="text-3xl font-display text-text-navy">Latest Insights</h2>
              <div className="space-y-6">
                {blogPreviews.map((post) => (
                  <Link
                    href={`/blog/${post.id}`}
                    key={post.id}
                    className="flex gap-4 p-4 rounded-2xl bg-surface-pearl border border-primary/5 hover:shadow-soft-blue transition-all group"
                  >
                    <div className="w-24 h-24 rounded-xl overflow-hidden shrink-0">
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                    </div>
                    <div className="flex flex-col justify-center">
                      <span className="text-xs font-semibold text-primary">{post.category}</span>
                      <h4 className="text-base font-semibold text-text-navy group-hover:text-primary transition-colors mt-1 line-clamp-2">
                        {post.title}
                      </h4>
                      <span className="text-xs text-text-charcoal/50 mt-1">{post.date}</span>
                    </div>
                  </Link>
                ))}
              </div>
              <Link href="/blog" className="inline-block mt-4">
                <Button variant="outline">Visit Our Journal</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="mx-auto max-w-5xl px-6 md:px-8 py-24 relative z-10">
        <div className="bg-primary-container/60 rounded-[3rem] p-10 md:p-16 text-center border border-primary-light/35 shadow-soft-blue relative overflow-hidden">
          <div className="relative z-10 max-w-xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-5xl font-display text-text-navy">Your mental well-being matters.</h2>
            <p className="text-base md:text-lg text-text-charcoal/80 leading-relaxed">
              Take the first step toward a calmer, more understanding relationship with yourself today.
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/book">
                <Button variant="cta" size="lg">
                  Book Your Session
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
