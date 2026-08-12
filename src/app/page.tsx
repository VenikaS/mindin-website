"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import { motion } from "framer-motion";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M16.04 4C9.43 4 4.05 9.32 4.05 15.86c0 2.09.55 4.12 1.6 5.91L4 28l6.39-1.62a12.1 12.1 0 0 0 5.65 1.42C22.66 27.8 28 22.48 28 15.94 28 9.39 22.66 4 16.04 4Zm0 21.78c-1.83 0-3.62-.49-5.18-1.42l-.37-.22-3.79.96 1.01-3.66-.24-.38a9.9 9.9 0 0 1-1.52-5.2c0-5.43 4.53-9.84 10.09-9.84 5.55 0 10.06 4.45 10.06 9.92 0 5.43-4.51 9.84-10.06 9.84Zm5.53-7.36c-.3-.15-1.79-.87-2.06-.97-.28-.1-.48-.15-.68.15-.2.29-.78.97-.96 1.17-.18.19-.35.22-.65.07-.3-.14-1.28-.46-2.44-1.49-.9-.79-1.51-1.78-1.69-2.07-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.19.05-.37-.02-.52-.08-.15-.68-1.62-.93-2.22-.25-.58-.5-.5-.68-.51h-.58c-.2 0-.53.07-.8.37-.28.3-1.05 1.01-1.05 2.47s1.08 2.87 1.23 3.07c.15.19 2.13 3.2 5.16 4.49.72.31 1.28.49 1.72.63.72.23 1.38.2 1.9.12.58-.09 1.79-.72 2.04-1.42.25-.7.25-1.3.18-1.42-.08-.13-.28-.2-.58-.35Z" />
    </svg>
  );
}

export default function HomePage() {
  const processSteps = [
    { num: 1, title: "Step 1", desc: "Identify the area of concern or goal that you want to work on in therapy." },
    { num: 2, title: "Step 2", desc: "Either fill the enquiry form or reach out on the listed WhatsApp number to book your introductory 10-15 minute call." },
    { num: 3, title: "Step 3", desc: "Work with me as your therapist through online or offline sessions with a plan tailored to your needs." },
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
      <section className="relative z-10 mx-auto max-w-7xl px-6 md:px-8 pt-4 md:pt-6 pb-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-7 text-left"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display text-text-navy leading-tight tracking-tight">
              You Matter and <br />
              Your Mental Health Matters
            </h1>
            <div className="space-y-3">
              <p className="text-base md:text-lg text-text-charcoal/80 leading-relaxed max-w-xl italic">
                &ldquo;As a therapist I believe mental health is not one size fits all and neither is my approach. Therefore, I offer therapy sessions tailored to your specific needs so that this work can be done with the depth and commitment it requires by me as your therapist.&rdquo;
              </p>
              <p className="text-sm font-semibold text-text-navy/90">
                &mdash; Venika Singhal, Founder Mind&apos;in &amp; Psychotherapist
              </p>
            </div>
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
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-md aspect-square">
              <div className="absolute -inset-4 bg-primary-light/20 rounded-[3rem] blur-2xl animate-pulse-slow" />
              <img
                alt="Venika Singhal"
                src="/images/homepage-therapist.jpg"
                className="relative rounded-[3rem] shadow-soft-blue w-full h-full object-cover border border-primary-light/20"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="bg-text-navy text-white pt-6 md:pt-8 pb-6 md:pb-8 relative z-10">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-6 space-y-3">
            <p className="text-white text-xl md:text-2xl font-semibold leading-relaxed max-w-3xl mx-auto">
              You don&apos;t have to figure out everything alone. Whether you&apos;re facing a specific challenge or seeking a deeper understanding of yourself, I am here for you.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative">
            {/* Connection line */}
            <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-primary/20 -z-0" />
            {processSteps.map((step) => (
              <div key={step.num} className="text-center space-y-3 relative z-10">
                <div className="w-24 h-24 bg-primary text-white rounded-full flex items-center justify-center mx-auto text-3xl font-bold border-4 border-text-navy shadow-lg">
                  {step.num}
                </div>
                <p className="text-white/80 text-base leading-relaxed max-w-sm mx-auto">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonies */}
      <section className="pt-10 pb-12 md:pt-12 md:pb-14 relative z-10">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-display text-text-navy text-center mb-6">Testimonies</h2>
          <TestimonialsCarousel />
        </div>
      </section>

      <a
        href="https://wa.me/919625088869"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 group"
      >
        <span className="absolute bottom-full right-0 mb-3 hidden whitespace-nowrap rounded-full bg-white px-4 py-2 text-xs font-semibold text-text-navy shadow-soft-blue border border-primary/10 md:block">
          Chat on WhatsApp
        </span>
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform group-hover:scale-105">
          <WhatsAppIcon className="h-8 w-8" />
        </span>
      </a>
    </div>
  );
}
