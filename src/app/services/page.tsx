"use client";

import { motion } from "framer-motion";
import { Brain, Heart, Sparkles, Smile, Shield, Compass, Sprout, HelpCircle, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const servicesData = [
  {
    slug: "anxiety-depression",
    title: "Anxiety & Depression Support",
    shortTitle: "Anxiety & Depression",
    icon: Brain,
    color: "bg-primary-light",
    desc: "Having self-doubts, being harsh on yourself, being preoccupied with your thoughts, feeling tense or on the edge, not feeling motivated, feeling sad/numb can significantly weigh you down. Therapy equips you with coping skills to express & regulate yourself, improve motivation and feel hopeful about your life.",
    concerns: ["Self-doubt & harsh self-criticism", "Persistent sadness or numbness", "Anxious overthinking", "Low motivation & hopelessness"],
  },
  {
    slug: "immigrants-students",
    title: "Therapy for Indian Immigrants & Students",
    shortTitle: "Immigrants & Students",
    icon: Compass,
    color: "bg-surface-blue",
    desc: "Moving to a different country can be exciting but often comes with challenges. In addition to dealing with visa & logistics, you also manage your family's and your own expectations to perform well in college or at work. Making friends as an adult can be hard in a new country. These can lead you to feel socially isolated, stressed and demotivated. Therapy provides space for you to talk about your experiences, regain motivation and develop coping skills.",
    concerns: ["Acculturation & adjustment", "Academic & workplace pressure", "Social isolation & loneliness", "Managing expectations from home"],
  },
  {
    slug: "career-therapists",
    title: "Support for Early Career Therapists",
    shortTitle: "Early Career Therapists",
    icon: Sprout,
    color: "bg-surface-blue",
    desc: "Whether you have just completed your masters or are in the early years of your therapy practice (0-5 years of experience), transitioning to practice can feel unnerving. I offer specialized Clinical Supervision and Personal Therapy support to help you grow.",
    concerns: ["Supervision (Narrative & Systemic)", "Therapy for imposter syndrome", "Burnout & countertransference", "Building clinical confidence"],
    extendedContent: `
      <div class="space-y-6 mt-6">
        <div class="p-6 bg-surface-blue/20 rounded-2xl border border-primary/5">
          <h4 class="font-display font-semibold text-text-navy text-lg mb-2">i) Clinical Supervision</h4>
          <p class="text-text-charcoal/80 text-sm leading-relaxed">
            Whether you have just completed your masters or are in the early years of your therapy practice, supervision can provide you with the necessary knowledge and practical skills in accordance to where you are in your professional journey. It enables you to improve your skills as a therapist and gain support & guidance for your work.
          </p>
          <p class="text-xs text-primary font-semibold mt-2">
            *Please note supervision will be provided for narrative & systemic approach which is trauma informed and queer friendly.
          </p>
        </div>
        
        <div class="p-6 bg-surface-peach/20 rounded-2xl border border-primary/5">
          <h4 class="font-display font-semibold text-text-navy text-lg mb-2">ii) Personal Therapy</h4>
          <p class="text-text-charcoal/80 text-sm leading-relaxed">
            Transitioning from training to practice can feel unnerving. As a therapist you want to do right by your clients but may also experience imposter syndrome. Working for an organization with back to back sessions can leave you feeling burnt out or isolated in private practice. Therapy for yourself allows you to be human and have the safe space for yourself that you offer to your clients. It can lead you to be aware of your own patterns, how you show up for your clients and address instances of countertransference.
          </p>
        </div>
      </div>
    `,
  },
  {
    slug: "childhood-trauma",
    title: "Traumatic & Adverse Childhood Experiences",
    shortTitle: "Childhood Trauma",
    icon: Shield,
    color: "bg-surface-peach",
    desc: "Experiences in childhood significantly shape how you see yourself and how you see the world. Difficulties and stress during this time can lead to mental health concerns not only in childhood but also in adulthood. If you have gone through any kind of abuse or neglect in your childhood, therapy can help you have a safe space to express and make sense of your experiences.",
    concerns: ["Developmental trauma", "Emotional or physical neglect", "Adult attachment struggles", "Processing past abuse"],
  },
  {
    slug: "parentified-adults",
    title: "Therapy for Parentified Adult Children",
    shortTitle: "Parentified Adults",
    icon: Smile,
    color: "bg-primary-light",
    desc: "As a child when you have been around parents/caregivers who lacked emotional awareness and weren't able to regulate their emotions, chances are you took on the role of the emotional caregiver without being aware of it. This role can lead to distressing patterns in adulthood such as people pleasing or extreme self reliance. Therapy can help you understand these patterns, build emotional awareness and develop emotion regulation skills.",
    concerns: ["Chronic people-pleasing", "Extreme self-reliance", "Difficulty setting boundaries", "Emotional caretaker burnout"],
  },
  {
    slug: "reproductive-health",
    title: "Women's Reproductive Health-related Mental Health Support",
    shortTitle: "Reproductive Health",
    icon: Sparkles,
    color: "bg-surface-blue",
    desc: "Womens’ bodies go through various transitions during the course of life. These transitions can greatly impact your reproductive health including puberty, sexual health & well-being, infertility, polycystic ovary syndrome, hormonal fluctuations, pregnancy, menopause. These concerns have a significant relationship with your emotional well-being. Therapy can help you understand & cope with the stress and anxiety that come with these varied concerns.",
    concerns: ["PCOS & hormonal fluctuations", "Infertility & pregnancy support", "Perimenopause & menopause transitions", "Sexual health & well-being"],
  },
  {
    slug: "couples-family",
    title: "Family & Couples Therapy",
    shortTitle: "Family & Couples",
    icon: Heart,
    color: "bg-surface-peach",
    desc: "Sometimes family members or couples may find themselves stuck in unhelpful patterns of conflicts, arguments, stress and emotional turmoil. Therapy enables understanding these patterns in relation to one another and build skills for communication, conflict resolution and strengthening relationship with each other as a family or as a couple.",
    concerns: ["Unhelpful conflict patterns", "Communication barriers", "Strengthening relationship bonds", "Family dynamics & boundary work"],
  },
];

export default function ServicesPage() {
  return (
    <div className="relative min-h-screen bg-neutral-bg pt-12 pb-24">
      {/* Background Decor Blobs */}
      <div className="blob-container">
        <div className="blob bg-surface-blue w-[500px] h-[500px] -left-20 top-20" />
        <div className="blob bg-surface-peach w-[450px] h-[450px] -right-20 top-[60%]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-8">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
          <span className="inline-block bg-primary-container text-on-primary-container px-4 py-1 rounded-full text-xs font-semibold tracking-widest uppercase">
            Expert Care
          </span>
          <h1 className="text-4xl md:text-5xl font-display text-text-navy leading-tight">
            Support designed around your experiences and needs.
          </h1>
          <p className="text-lg text-text-charcoal/80 leading-relaxed">
            I provide a compassionate space to navigate life&apos;s complexities. Explore therapy services tailored to help you find balance and inner peace.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {servicesData.map((service, idx) => {
            const IconComp = service.icon;
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="bg-surface-pearl rounded-[2rem] p-8 flex flex-col h-full border border-primary/5 shadow-sm hover:shadow-soft-blue hover:translate-y-[-6px] transition-all duration-300"
              >
                <div className={`w-16 h-16 mb-6 rounded-2xl ${service.color} flex items-center justify-center`}>
                  <IconComp className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-text-navy text-2xl font-display mb-3">{service.shortTitle}</h3>
                <p className="text-text-charcoal/80 text-sm leading-relaxed mb-6 flex-grow">{service.desc}</p>
                
                {/* Common Concerns checklist */}
                <div className="mb-8 border-t border-primary/5 pt-4">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider block mb-3">
                    Common Concerns
                  </span>
                  <ul className="space-y-2">
                    {service.concerns.map((concern) => (
                      <li key={concern} className="flex items-start gap-2 text-text-charcoal/70 text-sm">
                        <CheckCircle2 className="w-4.5 h-4.5 text-primary shrink-0 mt-0.5" />
                        <span>{concern}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4 mt-auto">
                  <Link href="/book" className="flex-1">
                    <Button variant="primary" className="w-full">
                      Book Session
                    </Button>
                  </Link>
                  <Link href={`/services/${service.slug}`} className="flex-1">
                    <Button variant="outline" className="w-full">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Emergency disclaimer block */}
        <div className="bg-red-50 border border-red-200/50 rounded-3xl p-6 md:p-8 max-w-4xl mx-auto flex items-start gap-4 shadow-sm">
          <HelpCircle className="w-6 h-6 text-error shrink-0 mt-0.5" />
          <div className="space-y-2">
            <h4 className="font-semibold text-text-navy text-sm">Emergency Support Disclaimer</h4>
            <p className="text-xs text-text-charcoal/80 leading-relaxed">
              Mind&apos;in is not a crisis support service. If you or someone you know is in immediate danger, or experiencing severe distress, please call emergency services or go to the nearest emergency room immediately. I am here to support routine wellness, but acute emergencies require specialized crisis providers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
