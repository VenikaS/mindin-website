"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Venika has been there for me during the most difficult periods of my life. Sessions with her have provided a safe space for me to express and understand myself.",
    author: "Anonymous client",
    role: "30 years old",
    color: "bg-surface-peach/40",
  },
  {
    quote: "It is a pleasure to work & collaborate with Venika. She puts in a lot of commitment and dedication in working with each individual under her care and deeply values their well-being. Her zeal for constant learning and curiosity towards different approaches always adds value to peer-support circles and makes her a trusting resource to direct people for help.",
    author: "Shivani Khanna",
    role: "Psychotherapist",
    color: "bg-surface-blue/40",
  },
  {
    quote: "I have always admired Venika for her exceptional therapeutic insight, professionalism and commitment to ethical practice. She possesses a strong command of psychological concepts and has extensive experience working with diverse clientele. Her ability to seamlessly integrate evidence-based interventions with empathy fosters a therapeutic environment that is safe and empowering for the client. I whole heartedly recommend her to anyone seeking compassionate, insightful and competent psychological care.",
    author: "Rashmi",
    role: "Clinical Psychologist",
    color: "bg-surface-peach/40",
  },
];

export default function TestimonialsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="relative max-w-4xl mx-auto px-4">
      <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
        <div className="flex gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] pl-3"
            >
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`w-full h-[220px] md:h-[240px] overflow-hidden p-4 rounded-[1.5rem] flex flex-col justify-between ${t.color} border border-primary/5 transition-all shadow-sm hover:shadow-md`}
              >
                <div>
                  <div className="flex items-center gap-1 mb-2 text-cta">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-text-navy text-xs md:text-sm leading-relaxed mb-2 overflow-hidden [display:-webkit-box] [-webkit-line-clamp:5] md:[-webkit-line-clamp:6] [-webkit-box-orient:vertical]">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                </div>
                <div className="shrink-0 border-t border-primary/10 pt-3 flex flex-col">
                  <cite className="not-italic font-semibold text-text-navy text-xs md:text-sm">{t.author}</cite>
                  <span className="text-[10px] text-text-muted mt-0.5 uppercase tracking-wider">{t.role}</span>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Buttons */}
      <div className="flex items-center justify-center gap-4 mt-10">
        <button
          onClick={scrollPrev}
          className="w-12 h-12 rounded-full border border-primary/10 bg-surface-pearl flex items-center justify-center hover:bg-primary-light/45 transition-colors cursor-pointer text-text-navy"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={scrollNext}
          className="w-12 h-12 rounded-full border border-primary/10 bg-surface-pearl flex items-center justify-center hover:bg-primary-light/45 transition-colors cursor-pointer text-text-navy"
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
