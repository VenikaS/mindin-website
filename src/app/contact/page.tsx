"use client";

import React from "react";
import { Mail, Phone, MapPin, Send, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";

const contactSchema = zod.object({
  name: zod.string().min(1, "Please provide your name."),
  email: zod.string().email("Please provide a valid email address."),
  subject: zod.string().min(1, "Subject is required."),
  message: zod.string().min(10, "Message must be at least 10 characters long."),
});

type ContactValues = zod.infer<typeof contactSchema>;

export default function ContactPage() {
  const [success, setSuccess] = React.useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactValues) => {
    // Simulate submission
    setTimeout(() => {
      setSuccess(true);
      reset();
    }, 500);
  };

  return (
    <div className="relative min-h-screen bg-neutral-bg pt-4 pb-24">
      {/* Background Decor Blobs */}
      <div className="blob-container">
        <div className="blob bg-surface-blue w-[500px] h-[500px] -left-20 top-20" />
        <div className="blob bg-surface-peach w-[450px] h-[450px] -right-20 top-[50%]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-8">
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 pt-6">
          <p className="text-base text-text-charcoal/80 leading-relaxed">
            Have questions about therapy, scheduling, or fee structure? Feel free to use the contact details below, or send a message using the enquiry form
          </p>
        </div>

        {/* Splits Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start max-w-6xl mx-auto mb-20">
          {/* Details Column */}
          <div className="lg:col-span-5 space-y-8 lg:pt-12">
            <h2 className="text-2xl font-display text-text-navy">Contact Information</h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-surface-blue flex items-center justify-center shrink-0 text-primary">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-text-navy text-sm">Email</h4>
                  <p className="text-sm text-text-charcoal/70 mt-1">psychologist.venikas@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-surface-peach flex items-center justify-center shrink-0 text-primary">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-text-navy text-sm">WhatsApp Business</h4>
                  <a href="https://wa.me/919625088869" target="_blank" rel="noopener noreferrer" className="text-sm text-primary font-medium mt-1 inline-block hover:underline transition-colors">
                    Chat on WhatsApp
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-light/50 flex items-center justify-center shrink-0 text-primary">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-text-navy text-sm">In-person sessions</h4>
                  <p className="text-sm text-text-charcoal/70 mt-1">Saraswati Clinic, Sector 46, Noida, Uttar Pradesh, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7 bg-surface-pearl rounded-[2.5rem] p-8 md:p-12 border border-primary/5 shadow-soft-blue">
            {success ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary-light/50 flex items-center justify-center mx-auto text-primary">
                  <Send className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-display text-text-navy">Message Sent</h3>
                <p className="text-sm text-text-charcoal/75 max-w-sm mx-auto leading-relaxed">
                  Thank you for reaching out. Your query has been received and I will reply within 24 business hours.
                </p>
                <Button variant="outline" onClick={() => setSuccess(false)} className="mt-4">
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <h2 className="text-2xl font-display text-text-navy mb-4">Enquiry Form</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-xs font-semibold text-primary uppercase tracking-wider">Your Name</label>
                    <Input {...register("name")} placeholder="Your name" className={errors.name ? "border-error" : ""} />
                    {errors.name && <p className="text-xs text-error">{errors.name.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="block text-xs font-semibold text-primary uppercase tracking-wider">Email</label>
                    <Input {...register("email")} placeholder="Your email" type="email" className={errors.email ? "border-error" : ""} />
                    {errors.email && <p className="text-xs text-error">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-semibold text-primary uppercase tracking-wider">Subject</label>
                  <Input {...register("subject")} placeholder="" className={errors.subject ? "border-error" : ""} />
                  {errors.subject && <p className="text-xs text-error">{errors.subject.message}</p>}
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-semibold text-primary uppercase tracking-wider">Message</label>
                  <textarea
                    {...register("message")}
                    placeholder="Ask your queries..."
                    rows={5}
                    className={`w-full bg-surface border rounded-2xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm text-text-navy ${
                      errors.message ? "border-error" : "border-primary/10"
                    }`}
                  />
                  {errors.message && <p className="text-xs text-error">{errors.message.message}</p>}
                </div>

                <Button variant="primary" type="submit" disabled={isSubmitting} className="w-full h-12 flex items-center justify-center gap-2">
                  {isSubmitting ? "Submitting..." : "Submit"} <Send className="w-4 h-4" />
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
