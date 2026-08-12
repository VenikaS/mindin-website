"use client";

import React from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { HelpCircle, RefreshCw } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function FAQPage() {
  return (
    <div className="relative min-h-screen bg-neutral-bg pt-4 pb-24">
      {/* Background Decor Blobs */}
      <div className="blob-container">
        <div className="blob bg-surface-peach w-[450px] h-[450px] -left-20 top-10" />
        <div className="blob bg-surface-blue w-[500px] h-[500px] -right-20 top-[60%]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6">
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-10 pt-6">
          <h1 className="text-4xl md:text-5xl font-display text-text-navy">Frequently Asked Questions</h1>
        </div>

        {/* FAQ Accordions */}
        <div className="space-y-6">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="faq-1">
              <AccordionTrigger>1. What is Psychotherapy?</AccordionTrigger>
              <AccordionContent>
                Psychotherapy is an approach for treating mental health concerns with the aim of
                alleviating mental distress and improve emotional and psychological well-being.
                Whether you are coming in for an individual, couple or family therapy session, you and I
                will work together on concerns and goals that bring you to therapy in a collaborative
                manner with a treatment plan tailored to your needs.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="faq-2">
              <AccordionTrigger>2. How do I get started and book a session?</AccordionTrigger>
              <AccordionContent>
                First step is to either fill the enquiry form or reach out on the listed{" "}
                <a href="https://wa.me/919625088869" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">
                  whatsapp number
                </a>{" "}
                to book your 15 minutes introductory call. I will connect with you for discussing therapy goals and logistics. Post this, as per your preference and slot availability your first online/offline session will be scheduled. Flexible slots are available for different time zones upon enquiry.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-3">
              <AccordionTrigger>3. Do I need to prepare anything in advance for sessions?</AccordionTrigger>
              <AccordionContent>
                No formal preparation is required. For online sessions, please ensure you have a
                quiet, private, and secure room with a stable internet connection and that no one
                else is present in the room during sessions. Please arrive a few minutes early for
                your in-person appointment and you may bring along a notebook if you wish to
                make notes for yourself during the session.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-4">
              <AccordionTrigger>4. What happens if I turn up late for the sessions?</AccordionTrigger>
              <AccordionContent>
                If you are running late for your therapy session, please let me know about it at the
                earliest. If you arrive late, the session will still conclude at the originally scheduled
                time out of respect for subsequent clients. I encourage arriving on time to get the
                full benefit of your slot.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-5">
              <AccordionTrigger>5. What happens in the first session?</AccordionTrigger>
              <AccordionContent>
                The first session is primarily about getting to know you, including your hobbies, your
                job, your family, your health, past challenges/difficulties, your lived experiences and
                what bring you to therapy. If you have any questions about my training, therapy
                style or how sessions look like as we move forward in therapy, please feel free to
                discuss these with me.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-6">
              <AccordionTrigger>6. How do I make payment for sessions?</AccordionTrigger>
              <AccordionContent>
                All payments must be completed in advance for the appointment to be confirmed.
                Payments can be made either through UPI or via a bank account transfer. You can
                either pay for each session individually or avail the five-session bundle or ten-session
                bundle. All necessary payment details will be emailed to you post the introductory
                call.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-7">
              <AccordionTrigger>7. What is the cancellation &amp; rescheduling policy?</AccordionTrigger>
              <AccordionContent>
                For cancelling or rescheduling a therapy session, a 24-hour notice is required. This
                allows the slot to be assigned to another client in need. Cancellation or reschedule
                requests made with less than 24 hours&rsquo; notice are subject to full session fee.
                Furthermore, if you discontinue sessions without prior notice and don&rsquo;t respond to
                rescheduling attempts for two weeks, it is assumed that you have terminated
                therapy and your slot will be released.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-8">
              <AccordionTrigger>8. Are refunds available?</AccordionTrigger>
              <AccordionContent>
                No refunds are provided for pre-paid individual sessions and therapy bundles,
                whether used or unused. However, they remain valid for rescheduling in accordance
                with the 24-hour rescheduling policy.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-9">
              <AccordionTrigger>9. Are therapy sessions private?</AccordionTrigger>
              <AccordionContent>
                Yes, all therapy sessions are private and confidential. All identifying information,
                notes, and reports are stored in a confidential and secure manner. However, there
                maybe some exceptions to confidentiality where safety and complying with the law
                become necessary. These include but are not limited to, risk of harm to others, risk
                of self-harm, any legal/court mandates, consulting other professionals or
                supervision. Wherever possible, I will discuss with you before taking any necessary
                action.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* CTA box if user has other questions */}
        <div className="bg-primary-container/40 rounded-3xl p-8 border border-primary-light/20 text-center mt-20 space-y-6">
          <h3 className="text-xl font-display text-text-navy">Still have questions?</h3>
          <p className="text-sm text-text-charcoal/80 max-w-xl mx-auto leading-relaxed">
            Please don&rsquo;t hesitate to ask any questions that you may have. You can reach me via
            email, whatsapp or through the enquiry form. I will get back to you as soon as
            possible.
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
