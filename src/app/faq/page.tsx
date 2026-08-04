"use client";

import React from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { HelpCircle, RefreshCw } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function FAQPage() {
  return (
    <div className="relative min-h-screen bg-neutral-bg pt-12 pb-24">
      {/* Background Decor Blobs */}
      <div className="blob-container">
        <div className="blob bg-surface-peach w-[450px] h-[450px] -left-20 top-10" />
        <div className="blob bg-surface-blue w-[500px] h-[500px] -right-20 top-[60%]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6">
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <span className="text-sm font-semibold tracking-widest text-primary uppercase">Support Center</span>
          <h1 className="text-4xl md:text-5xl font-display text-text-navy">Frequently Asked Questions</h1>
          <p className="text-base text-text-charcoal/80 leading-relaxed">
            Find answers to common questions about therapy format, scheduling, fees, and confidentiality.
          </p>
        </div>

        {/* FAQ Accordions */}
        <div className="space-y-6">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="faq-1">
              <AccordionTrigger>1. What is therapy?</AccordionTrigger>
              <AccordionContent>
                Therapy is a collaborative process where you and I work together to understand your concerns, emotions, and life patterns. My practice uses a systemic and narrative approach, meaning I look at how individual patterns are shaped by structures like gender, privilege, caste, family, and disability. It is a non-judgmental space designed to support reflection, regulation, and reclaiming your narrative.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="faq-2">
              <AccordionTrigger>2. How do I get started?</AccordionTrigger>
              <AccordionContent>
                Getting started is simple. You can reach out directly via email at <a href="mailto:psychologist.venikas@gmail.com" className="text-primary hover:underline">psychologist.venikas@gmail.com</a>, WhatsApp at <a href="https://wa.me/919625088869" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">9625088869</a>, or use the form on the &quot;Book a Session&quot; page. I will connect with you to align on goals and schedule your first session.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-3">
              <AccordionTrigger>3. How do I book sessions?</AccordionTrigger>
              <AccordionContent>
                You can book online or offline sessions through the booking form, by writing to <a href="mailto:psychologist.venikas@gmail.com" className="text-primary hover:underline">psychologist.venikas@gmail.com</a>, or by messaging <a href="https://wa.me/919625088869" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">9625088869</a> on WhatsApp. Offline sessions take place at Saraswati Clinic, Noida. Flexible slots are available for different time zones upon enquiry.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-4">
              <AccordionTrigger>4. Do I need to prepare anything in advance for sessions?</AccordionTrigger>
              <AccordionContent>
                No formal preparation is required. For online sessions, I recommend finding a quiet, private, and secure room with a stable internet connection. For offline sessions at the Noida clinic, I recommend arriving a few minutes early. Bring your willing curiosity and yourself.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-5">
              <AccordionTrigger>5. What happens in the first session?</AccordionTrigger>
              <AccordionContent>
                The first session is a gentle intake and consultation. You and I talk about what brings you to therapy, explore your lived experiences, understand the context of your concerns, and map out a collaborative plan using systemic and narrative frameworks.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-6">
              <AccordionTrigger>6. What happens if I turn up late for the session?</AccordionTrigger>
              <AccordionContent>
                If you arrive late, the session will still conclude at the originally scheduled time out of respect for subsequent clients. I encourage arriving on time to get the full benefit of your slot.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-7">
              <AccordionTrigger>7. What is the cancellation & rescheduling policy?</AccordionTrigger>
              <AccordionContent>
                I require at least 24 hours&apos; notice for cancellation or rescheduling. This allows clients on the waitlist to be accommodated. Cancellations or changes made within 24 hours of the session time are subject to the full session fee.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-8">
              <AccordionTrigger>8. Are therapy bundles refundable?</AccordionTrigger>
              <AccordionContent>
                No, individual therapy sessions and pre-paid session packages are non-refundable. However, they remain valid for scheduling, and you can adjust times in accordance with the 24-hour rescheduling policy.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-9">
              <AccordionTrigger>9. Are therapy sessions private?</AccordionTrigger>
              <AccordionContent>
                Absolutely. Confidentiality is a core pillar of my practice. All session notes and records are kept completely secure, and online video sessions are conducted over secure, encrypted telehealth channels to protect your emotional safety and privacy.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* CTA box if user has other questions */}
        <div className="bg-primary-container/40 rounded-3xl p-8 border border-primary-light/20 text-center mt-20 space-y-6">
          <h3 className="text-xl font-display text-text-navy">Still have questions?</h3>
          <p className="text-sm text-text-charcoal/80 max-w-md mx-auto">
            I am here to help. Reach out via email, WhatsApp, or the contact page, and I will get back to you within 24 hours.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/contact">
              <Button variant="primary">Get in Touch</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
