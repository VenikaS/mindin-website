"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, Heart, Smile, Sparkles, AlertTriangle, ShieldCheck, Video, MapPin, Phone, ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  { id: "anxiety-depression", title: "Anxiety & Depression Support", desc: "Regulating nervous system & low mood.", icon: Brain },
  { id: "immigrants-students", title: "Immigrants & Students", desc: "Navigating displacement and adjustment.", icon: Sparkles },
  { id: "childhood-trauma", title: "Childhood Trauma", desc: "Healing adverse childhood experiences.", icon: Heart },
  { id: "couples-family", title: "Couples & Family", desc: "Systemic therapy for relationships.", icon: Smile },
];

const formats = [
  { id: "online", title: "Online Video", desc: "Secure link sent via email.", icon: Video },
  { id: "in-person", title: "In-Person", desc: "At Saraswati Clinic, Sector 46, Noida.", icon: MapPin },
  { id: "phone", title: "Phone Call", desc: "A voice-only consultation.", icon: Phone },
];

const dates = [
  { id: "2026-07-20", label: "Mon, Jul 20" },
  { id: "2026-07-21", label: "Tue, Jul 21" },
  { id: "2026-07-22", label: "Wed, Jul 22" },
  { id: "2026-07-23", label: "Thu, Jul 23" },
  { id: "2026-07-24", label: "Fri, Jul 24" },
];

const times = ["10:00 AM", "11:30 AM", "01:00 PM", "02:30 PM", "04:00 PM", "05:30 PM"];

export default function BookAppointmentPage() {
  const router = useRouter();
  const [step, setStep] = React.useState(1);
  const [formData, setFormData] = React.useState({
    service: "",
    format: "",
    date: "",
    time: "",
    name: "",
    email: "",
    phone: "",
    goals: "",
  });

  const [formErrors, setFormErrors] = React.useState<Record<string, string>>({});

  const nextStep = () => {
    if (step === 1 && !formData.service) {
      alert("Please select a focus area.");
      return;
    }
    if (step === 2 && !formData.format) {
      alert("Please select a connection format.");
      return;
    }
    if (step === 3 && !formData.date) {
      alert("Please select a date.");
      return;
    }
    if (step === 4 && !formData.time) {
      alert("Please select a time.");
      return;
    }
    if (step === 5) {
      const errors: Record<string, string> = {};
      if (!formData.name.trim()) errors.name = "Full Name is required.";
      if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
        errors.email = "A valid Email Address is required.";
      if (!formData.phone.trim()) errors.phone = "Phone Number is required.";
      
      if (Object.keys(errors).length > 0) {
        setFormErrors(errors);
        return;
      }
      setFormErrors({});
    }
    setStep((prev) => Math.min(prev + 1, 6));
  };

  const prevStep = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const webhookUrl = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_WEBHOOK_URL || "";
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            service: formData.service,
            format: formData.format,
            date: formData.date,
            time: formData.time,
            goals: formData.goals,
          }),
        });
      } catch (err) {
        console.error("Failed to sync booking data with Google Sheets:", err);
      }
    }
    
    router.push("/thank-you");
  };

  const progressPercent = Math.round((step / 6) * 100);

  return (
    <div className="relative min-h-screen bg-neutral-bg pt-12 pb-24">
      {/* Background Decor Blobs */}
      <div className="blob-container">
        <div className="blob bg-surface-blue w-[500px] h-[500px] -left-20 top-10" />
        <div className="blob bg-surface-peach w-[450px] h-[450px] -right-20 top-[40%]" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-6">
        {/* Header Title */}
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-4xl font-display text-text-navy">Begin Your Journey</h1>
          <p className="text-base text-text-charcoal/80 max-w-lg mx-auto">
            Choose a path that feels right for you. We are here to support your emotional well-being with professional, compassionate care.
          </p>
        </div>

        {/* Emergency disclaimer banner */}
        <div className="bg-red-50 border border-red-200/50 rounded-2xl p-5 mb-8 flex gap-4 items-start shadow-sm">
          <AlertTriangle className="w-5 h-5 text-error shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h4 className="font-semibold text-text-navy text-sm">Emergency Support Disclaimer</h4>
            <p className="text-xs text-text-charcoal/80 leading-relaxed">
              Mind'in is not an emergency service. If you are in immediate danger or experiencing a crisis, please contact emergency services or go to the nearest hospital immediately.
            </p>
          </div>
        </div>

        {/* Stepper Card */}
        <div className="bg-surface-pearl rounded-[2.5rem] p-8 md:p-12 border border-primary/5 shadow-soft-blue relative overflow-hidden">
          {/* Progress bar */}
          <div className="mb-10">
            <div className="flex justify-between items-center text-xs font-semibold uppercase tracking-wider text-primary mb-3">
              <span>Step {step} of 6</span>
              <span>{progressPercent}% Complete</span>
            </div>
            <div className="h-1.5 w-full bg-surface rounded-full overflow-hidden">
              <div
                className="h-full bg-primary transition-all duration-300 ease-out"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="min-h-[300px] flex flex-col justify-between">
            <div>
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="space-y-6"
                  >
                    <h2 className="text-2xl font-display text-text-navy">What area would you like to focus on?</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {services.map((item) => {
                        const IconComp = item.icon;
                        return (
                          <div
                            key={item.id}
                            onClick={() => setFormData({ ...formData, service: item.id })}
                            className={`p-6 rounded-2xl border-2 cursor-pointer transition-all ${
                              formData.service === item.id
                                ? "border-primary bg-primary-container/30"
                                : "border-primary/10 bg-surface-pearl hover:border-primary/50"
                            }`}
                          >
                            <IconComp className="w-6 h-6 text-primary mb-3" />
                            <h4 className="font-semibold text-text-navy text-base mb-1">{item.title}</h4>
                            <p className="text-xs text-text-charcoal/70">{item.desc}</p>
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="space-y-6"
                  >
                    <h2 className="text-2xl font-display text-text-navy">How would you like to connect?</h2>
                    <div className="space-y-4">
                      {formats.map((item) => {
                        const IconComp = item.icon;
                        return (
                          <div
                            key={item.id}
                            onClick={() => setFormData({ ...formData, format: item.id })}
                            className={`p-6 rounded-2xl border-2 cursor-pointer flex items-center gap-4 transition-all ${
                              formData.format === item.id
                                ? "border-primary bg-primary-container/30"
                                : "border-primary/10 bg-surface-pearl hover:border-primary/50"
                            }`}
                          >
                            <div className="w-10 h-10 rounded-xl bg-primary-light/50 flex items-center justify-center shrink-0">
                              <IconComp className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-text-navy text-base">{item.title}</h4>
                              <p className="text-xs text-text-charcoal/70 mt-0.5">{item.desc}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="space-y-6"
                  >
                    <h2 className="text-2xl font-display text-text-navy">Select a date</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {dates.map((d) => (
                        <div
                          key={d.id}
                          onClick={() => setFormData({ ...formData, date: d.id })}
                          className={`p-5 rounded-2xl border-2 cursor-pointer text-center font-medium transition-all ${
                            formData.date === d.id
                              ? "border-primary bg-primary-container/30 text-text-navy"
                              : "border-primary/10 bg-surface-pearl hover:border-primary/50 text-text-charcoal"
                          }`}
                        >
                          {d.label}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {step === 4 && (
                  <motion.div
                    key="step4"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="space-y-6"
                  >
                    <h2 className="text-2xl font-display text-text-navy">Available times</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {times.map((t) => (
                        <div
                          key={t}
                          onClick={() => setFormData({ ...formData, time: t })}
                          className={`p-4 rounded-xl border-2 cursor-pointer text-center font-medium transition-all ${
                            formData.time === t
                              ? "border-primary bg-primary text-white"
                              : "border-primary/10 bg-surface-pearl hover:border-primary/50 text-text-charcoal"
                          }`}
                        >
                          {t}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {step === 5 && (
                  <motion.div
                    key="step5"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="space-y-6"
                  >
                    <h2 className="text-2xl font-display text-text-navy">Personal Details</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="block text-xs font-semibold text-primary uppercase tracking-wider">Full Name</label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Jane Doe"
                          className="w-full bg-surface border border-primary/10 rounded-2xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm text-text-navy"
                        />
                        {formErrors.name && <p className="text-xs text-error">{formErrors.name}</p>}
                      </div>
                      <div className="space-y-2">
                        <label className="block text-xs font-semibold text-primary uppercase tracking-wider">Email Address</label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="jane@example.com"
                          className="w-full bg-surface border border-primary/10 rounded-2xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm text-text-navy"
                        />
                        {formErrors.email && <p className="text-xs text-error">{formErrors.email}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="block text-xs font-semibold text-primary uppercase tracking-wider">Phone Number</label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+44 7000 000000"
                          className="w-full bg-surface border border-primary/10 rounded-2xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm text-text-navy"
                        />
                        {formErrors.phone && <p className="text-xs text-error">{formErrors.phone}</p>}
                      </div>
                      <div className="space-y-2">
                        <label className="block text-xs font-semibold text-primary uppercase tracking-wider">Pronouns (Optional)</label>
                        <input
                          type="text"
                          placeholder="she/her, they/them"
                          className="w-full bg-surface border border-primary/10 rounded-2xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm text-text-navy"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-xs font-semibold text-primary uppercase tracking-wider">What are your support goals?</label>
                      <textarea
                        value={formData.goals}
                        onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
                        placeholder="Tell us a little bit about what you'd like to achieve..."
                        rows={4}
                        className="w-full bg-surface border border-primary/10 rounded-2xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm text-text-navy"
                      />
                    </div>
                  </motion.div>
                )}

                {step === 6 && (
                  <motion.div
                    key="step6"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="space-y-6"
                  >
                    <h2 className="text-2xl font-display text-text-navy">Review your session</h2>
                    <div className="bg-primary-container/20 rounded-3xl p-8 border border-primary/10 space-y-4">
                      <div className="flex justify-between border-b border-primary/10 pb-3">
                        <span className="text-xs font-semibold text-primary uppercase tracking-wider">Service Focus</span>
                        <span className="text-sm font-semibold text-text-navy capitalize">{formData.service}</span>
                      </div>
                      <div className="flex justify-between border-b border-primary/10 pb-3">
                        <span className="text-xs font-semibold text-primary uppercase tracking-wider">Format</span>
                        <span className="text-sm font-semibold text-text-navy capitalize">{formData.format} Video</span>
                      </div>
                      <div className="flex justify-between border-b border-primary/10 pb-3">
                        <span className="text-xs font-semibold text-primary uppercase tracking-wider">Date & Time</span>
                        <span className="text-sm font-semibold text-text-navy">
                          {formData.date} at {formData.time}
                        </span>
                      </div>
                      <div className="flex justify-between border-b border-primary/10 pb-3">
                        <span className="text-xs font-semibold text-primary uppercase tracking-wider">Full Name</span>
                        <span className="text-sm font-semibold text-text-navy">{formData.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-xs font-semibold text-primary uppercase tracking-wider">Email Address</span>
                        <span className="text-sm font-semibold text-text-navy">{formData.email}</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Stepper Actions Buttons */}
            <div className="flex items-center justify-between mt-12 border-t border-primary/10 pt-6">
              {step > 1 ? (
                <Button variant="outline" type="button" onClick={prevStep} className="flex items-center gap-2">
                  <ArrowLeft className="w-4 h-4" /> Back
                </Button>
              ) : (
                <div />
              )}

              {step < 6 ? (
                <Button variant="primary" type="button" onClick={nextStep} className="flex items-center gap-2">
                  Continue <ArrowRight className="w-4 h-4" />
                </Button>
              ) : (
                <Button variant="cta" type="submit" className="flex items-center gap-2">
                  Confirm Booking <ShieldCheck className="w-5 h-5" />
                </Button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
