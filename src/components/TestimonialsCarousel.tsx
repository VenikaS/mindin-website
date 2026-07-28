"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "It is a pleasure to work & collaborate with Venika. She puts in a lot of commitment and dedication in working with each individual under her care and deeply values their well-being. Her zeal for constant learning and curiosity towards different approaches always adds value to peer-support circles and makes her a trusting resource to direct people for help.",
    author: "Shivani Khanna",
    role: "Psychotherapist",
    color: "bg-surface-blue/40",
  },
  {
    quote: "Venika has been there for me during the most difficult periods of my life. Sessions with her have provided a safe space for me to express and understand myself.",
    author: "Anonymous client",
    role: "30 years old",
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
    <div className="relative max-w-5xl mx-auto px-4">
      <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
        <div className="flex gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] pl-2"
            >
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`h-full p-8 md:p-10 rounded-[2rem] flex flex-col justify-between ${t.color} border border-primary/5 transition-all shadow-sm hover:shadow-md`}
              >
                <div>
                  <div className="flex items-center gap-1 mb-6 text-cta">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-text-navy text-lg leading-relaxed font-medium mb-8">
                    "{t.quote}"
                  </blockquote>
                </div>
                <div className="border-t border-primary/10 pt-4 flex flex-col">
                  <cite className="not-italic font-semibold text-text-navy">{t.author}</cite>
                  <span className="text-xs text-text-muted mt-1 uppercase tracking-wider">{t.role}</span>
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
