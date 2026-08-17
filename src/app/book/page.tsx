"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, Heart, Smile, Sparkles, AlertTriangle, ShieldCheck, Video, MapPin, Phone, ArrowRight, ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import { client } from "@/sanity/client";
import { bookingSlotsQuery } from "@/sanity/queries";
import { SanityBookingSlot } from "@/sanity/types";

const services = [
  { id: "individual", title: "Individual Therapy", desc: "One-on-one session for personal growth & healing.", icon: Brain },
  { id: "couples", title: "Couples Therapy", desc: "Strengthening communication and relationship bonds.", icon: Heart },
  { id: "family", title: "Family Therapy", desc: "Navigating unhelpful patterns & family dynamics.", icon: Smile },
  { id: "supervision", title: "One-on-one Supervision", desc: "Enhancing clinical skills for therapists.", icon: Sparkles },
];

const formats = [
  { id: "online", title: "Online Video Consultation", desc: "Secure Google Meet link sent via email.", icon: Video },
  { id: "in-person", title: "In-Person Consultation", desc: "At Saraswati Clinic, Sector 46, Noida.", icon: MapPin },
];

export default function BookAppointmentPage() {
  const router = useRouter();
  const [step, setStep] = React.useState(1);
  const isSubmittingRef = React.useRef(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
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

  const [availableDates, setAvailableDates] = React.useState<{ id: string; label: string; isWeekend: boolean }[]>([]);
  const [dbSlots, setDbSlots] = React.useState<SanityBookingSlot[]>([]);

  React.useEffect(() => {
    const datesList = [];
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    
    for (let i = 1; i <= 7; i++) {
      const d = new Date();
      d.setDate(d.getDate() + i);
      const dayName = daysOfWeek[d.getDay()];
      const monthName = months[d.getMonth()];
      const dayNum = d.getDate();
      
      const year = d.getFullYear();
      const month = String(d.getMonth() + 1).padStart(2, "0");
      const dateStr = String(dayNum).padStart(2, "0");
      const id = `${year}-${month}-${dateStr}`;
      
      datesList.push({
        id,
        label: `${dayName}, ${monthName} ${dayNum}`,
        isWeekend: d.getDay() === 0 || d.getDay() === 6
      });
    }
    setAvailableDates(datesList);
  }, []);

  React.useEffect(() => {
    async function loadSlots() {
      try {
        const todayStr = new Date().toISOString().split("T")[0];
        const fetched = await client.fetch<SanityBookingSlot[]>(bookingSlotsQuery, { today: todayStr });
        setDbSlots(fetched || []);
      } catch (error) {
        console.error("Error loading booking slots from Sanity:", error);
      }
    }
    loadSlots();
  }, []);

  // Group slots by date
  const sanityDatesList = React.useMemo(() => {
    if (dbSlots.length === 0) return [];
    
    // Get unique dates
    const uniqueDates = Array.from(new Set(dbSlots.map(s => s.date))).sort();
    
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    
    return uniqueDates.map(dateStr => {
      const parts = dateStr.split("-");
      const parsedDate = new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2]));
      const dayName = daysOfWeek[parsedDate.getDay()];
      const monthName = months[parsedDate.getMonth()];
      const dayNum = parsedDate.getDate();
      
      return {
        id: dateStr,
        label: `${dayName}, ${monthName} ${dayNum}`,
        isWeekend: parsedDate.getDay() === 0 || parsedDate.getDay() === 6
      };
    });
  }, [dbSlots]);

  const datesToDisplay = dbSlots.length > 0 ? sanityDatesList : availableDates;

  // Derive available times for the selected date
  const availableTimes = React.useMemo(() => {
    if (dbSlots.length > 0) {
      const slotDoc = dbSlots.find(s => s.date === formData.date);
      return slotDoc ? slotDoc.times || [] : [];
    }
    
    // Fallback behavior
    const selectedDateObj = availableDates.find(d => d.id === formData.date);
    const isWeekend = selectedDateObj?.isWeekend || false;
    return isWeekend
      ? ["10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM"]
      : ["11:00 AM", "12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM", "06:00 PM", "07:00 PM", "08:00 PM"];
  }, [dbSlots, formData.date, availableDates]);

  const [formErrors, setFormErrors] = React.useState<Record<string, string>>({});

  const [currentMonth, setCurrentMonth] = React.useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = React.useState(new Date().getFullYear());

  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month: number, year: number) => {
    return new Date(year, month, 1).getDay();
  };

  const calendarDays = React.useMemo(() => {
    const totalDays = getDaysInMonth(currentMonth, currentYear);
    const firstDayIndex = getFirstDayOfMonth(currentMonth, currentYear);
    
    const days = [];
    
    // Previous month padding days
    const prevMonthIdx = currentMonth === 0 ? 11 : currentMonth - 1;
    const prevMonthYear = currentMonth === 0 ? currentYear - 1 : currentYear;
    const prevMonthDaysCount = getDaysInMonth(prevMonthIdx, prevMonthYear);
    for (let i = firstDayIndex - 1; i >= 0; i--) {
      const d = prevMonthDaysCount - i;
      const mStr = String(prevMonthIdx + 1).padStart(2, "0");
      const dStr = String(d).padStart(2, "0");
      days.push({
        dayNum: d,
        dateStr: `${prevMonthYear}-${mStr}-${dStr}`,
        isCurrentMonth: false,
      });
    }
    
    // Current month days
    for (let d = 1; d <= totalDays; d++) {
      const mStr = String(currentMonth + 1).padStart(2, "0");
      const dStr = String(d).padStart(2, "0");
      days.push({
        dayNum: d,
        dateStr: `${currentYear}-${mStr}-${dStr}`,
        isCurrentMonth: true,
      });
    }
    
    return days;
  }, [currentMonth, currentYear]);

  const isDateSelectable = React.useCallback((dateStr: string) => {
    if (dbSlots.length > 0) {
      return dbSlots.some(s => s.date === dateStr && s.times && s.times.length > 0);
    }
    return availableDates.some(d => d.id === dateStr);
  }, [dbSlots, availableDates]);

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear((prev) => prev - 1);
    } else {
      setCurrentMonth((prev) => prev - 1);
    }
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear((prev) => prev + 1);
    } else {
      setCurrentMonth((prev) => prev + 1);
    }
  };

  const nextStep = () => {
    if (step === 1 && !formData.service) {
      alert("Please select a focus area.");
      return;
    }
    if (step === 2 && !formData.format) {
      alert("Please select a connection format.");
      return;
    }
    if (step === 3) {
      if (!formData.date) {
        alert("Please select a date.");
        return;
      }
      if (!formData.time) {
        alert("Please select a time.");
        return;
      }
    }
    if (step === 4) {
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
    setStep((prev) => Math.min(prev + 1, 5));
  };

  const prevStep = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmittingRef.current) {
      return;
    }

    isSubmittingRef.current = true;
    setIsSubmitting(true);
    
    const webhookUrl = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_WEBHOOK_URL || "";
    if (webhookUrl) {
      try {
        const submittedAt = new Date().toISOString();

        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "text/plain;charset=utf-8" },
          body: JSON.stringify({
            submitted_at: submittedAt,
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
    
    router.push("/thank-you?format=" + formData.format);
  };

  const progressPercent = Math.round((step / 5) * 100);

  return (
    <div className="relative min-h-screen bg-neutral-bg pt-4 pb-24">
      {/* Background Decor Blobs */}
      <div className="blob-container">
        <div className="blob bg-surface-blue w-[500px] h-[500px] -left-20 top-10" />
        <div className="blob bg-surface-peach w-[450px] h-[450px] -right-20 top-[40%]" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-6">
        {/* Header Title */}
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-3xl md:text-4xl font-display text-text-navy max-w-2xl mx-auto leading-tight">
            As you begin your mental well-being journey, I will be here for you through every step
          </h1>
          <p className="text-sm text-text-charcoal/70 max-w-xl mx-auto italic font-medium">
            *If this will be your first session then before making a session booking, please contact me either on the given whatsapp number or email given on the &apos;contact me&apos; tab.
          </p>
        </div>

        {/* Stepper Card */}
        <div className="bg-surface-pearl rounded-[2.5rem] p-8 md:p-12 border border-primary/5 shadow-soft-blue relative overflow-hidden">
          {/* Progress bar */}
          <div className="mb-10">
            <div className="flex justify-between items-center text-xs font-semibold uppercase tracking-wider text-primary mb-3">
              <span>Step {step} of 5</span>
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
                    <h2 className="text-2xl font-display text-text-navy">Which session are you looking for?</h2>
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
                    <h2 className="text-2xl font-display text-text-navy">How would you like to Connect?</h2>
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
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                      {/* Left: Calendar Widget */}
                      <div className="md:col-span-7 space-y-4">
                        <div className="flex items-center justify-between mb-2">
                          <h2 className="text-xl font-display text-text-navy">Select a date</h2>
                          <div className="flex items-center gap-2">
                            <button
                              type="button"
                              onClick={prevMonth}
                              className="p-2 rounded-lg border border-primary/10 bg-surface-pearl hover:bg-primary-light/45 transition-colors cursor-pointer text-text-navy flex items-center justify-center"
                              aria-label="Previous month"
                            >
                              <ChevronLeft className="w-4 h-4" />
                            </button>
                            <span className="text-sm font-semibold text-text-navy min-w-[120px] text-center">
                              {["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][currentMonth]} {currentYear}
                            </span>
                            <button
                              type="button"
                              onClick={nextMonth}
                              className="p-2 rounded-lg border border-primary/10 bg-surface-pearl hover:bg-primary-light/45 transition-colors cursor-pointer text-text-navy flex items-center justify-center"
                              aria-label="Next month"
                            >
                              <ChevronRight className="w-4 h-4" />
                            </button>
                          </div>
                        </div>

                        <div className="bg-surface-pearl border border-primary/5 rounded-3xl p-5 shadow-sm space-y-4">
                          {/* Weekdays header */}
                          <div className="grid grid-cols-7 gap-2 text-center text-xs font-semibold text-primary uppercase tracking-wider">
                            {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map(day => (
                              <div key={day} className="py-1">{day}</div>
                            ))}
                          </div>

                          {/* Days grid */}
                          <div className="grid grid-cols-7 gap-2 text-center text-sm">
                            {calendarDays.map((d, index) => {
                              const selectable = d.isCurrentMonth && isDateSelectable(d.dateStr);
                              const isSelected = formData.date === d.dateStr;
                              
                              return (
                                <button
                                  key={index}
                                  type="button"
                                  disabled={!selectable}
                                  onClick={() => setFormData({ ...formData, date: d.dateStr, time: "" })}
                                  className={`py-2.5 rounded-xl font-semibold transition-all flex items-center justify-center relative ${
                                    !d.isCurrentMonth
                                      ? "text-text-charcoal/20 cursor-default font-normal"
                                      : !selectable
                                      ? "text-text-charcoal/30 cursor-not-allowed font-normal hover:bg-transparent"
                                      : isSelected
                                      ? "bg-primary text-white shadow-md shadow-primary/20 scale-105"
                                      : "bg-primary-light/30 text-text-navy hover:bg-primary-light/60 hover:scale-105"
                                  }`}
                                >
                                  {d.dayNum}
                                  {selectable && !isSelected && (
                                    <span className="absolute bottom-1 w-1.5 h-1.5 rounded-full bg-primary" />
                                  )}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      </div>

                      {/* Right: Time Selection */}
                      <div className="md:col-span-5 space-y-4">
                        <h2 className="text-xl font-display text-text-navy">Available slots</h2>
                        {formData.date ? (
                          availableTimes.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[360px] overflow-y-auto pr-1">
                              {availableTimes.map((t) => (
                                <button
                                  key={t}
                                  type="button"
                                  onClick={() => setFormData({ ...formData, time: t })}
                                  className={`p-3 rounded-xl border-2 cursor-pointer text-center font-medium transition-all w-full ${
                                    formData.time === t
                                      ? "border-primary bg-primary text-white"
                                      : "border-primary/10 bg-surface-pearl hover:border-primary/50 text-text-charcoal"
                                  }`}
                                >
                                  {t}
                                </button>
                              ))}
                            </div>
                          ) : (
                            <p className="text-sm text-text-charcoal/70 bg-surface-pearl border border-primary/5 rounded-2xl p-5 text-center">
                              No slots available for this date.
                            </p>
                          )
                        ) : (
                          <div className="bg-surface-pearl border border-primary/5 rounded-2xl p-8 text-center text-text-charcoal/50 italic">
                            Please select a date on the calendar first to see available slots.
                          </div>
                        )}
                      </div>
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
                    <h2 className="text-2xl font-display text-text-navy">Please complete the following details</h2>
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
                        placeholder="Tell me a little bit about what you'd like to achieve..."
                        rows={4}
                        className="w-full bg-surface border border-primary/10 rounded-2xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm text-text-navy"
                      />
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

              {step < 5 ? (
                <Button variant="primary" type="button" onClick={nextStep} className="flex items-center gap-2">
                  Continue <ArrowRight className="w-4 h-4" />
                </Button>
              ) : (
                <Button variant="cta" type="submit" disabled={isSubmitting} className="flex items-center gap-2">
                  {isSubmitting ? "Saving..." : "Confirm Booking"} <ShieldCheck className="w-5 h-5" />
                </Button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
