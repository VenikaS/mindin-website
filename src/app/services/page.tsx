"use client";

import { motion } from "framer-motion";
import { Brain, Heart, Sparkles, Smile, Shield, Compass, Sprout, Mail } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export interface ServiceItem {
  slug: string;
  title: string;
  shortTitle: string;
  icon: any;
  color: string;
  desc: string;
  concerns: string[];
  extendedContent?: string;
}

export const servicesData: ServiceItem[] = [
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
  const psychotherapyList = [
    {
      title: "Indian Immigrants & Students",
      icon: Compass,
      desc: "Moving to a different country can be exciting but often comes with challenges. In addition to dealing with visa & logistics, you also manage your family's and your own expectations to perform well in college or at work. Making friends as an adult can be hard in a new country. These can lead you to feel socially isolated, stressed and demotivated. Therapy provides space for you to talk about your experiences, regain motivation and develop coping skills."
    },
    {
      title: "Therapy for Therapists",
      icon: Sprout,
      desc: "Transitioning from training to practice can feel unnerving. As a therapist you want to do right by your clients but may also experience imposter syndrome. Working for an organization with back-to-back sessions can leave you feeling burnt out or isolated in private practice. Therapy for yourself allows you to be human and have the safe space for yourself that you offer to your clients. It can lead you to be aware of your own patterns, how you show up for your clients and address instances of countertransference."
    },
    {
      title: "Childhood Trauma",
      icon: Shield,
      desc: "Experiences in childhood significantly shape how you see yourself and how you see the world. Difficulties and stress during this time can lead to mental health concerns not only in childhood but also in adulthood. If you have gone through any kind of abuse or neglect in your childhood, therapy can help you have a safe space to express and make sense of your experiences."
    },
    {
      title: "Parentified Adult Children",
      icon: Smile,
      desc: "As a child when you have been around parents/caregivers who lacked emotional awareness and weren't able to regulate their emotions, chances are you took on the role of the emotional caregiver without being aware of it. This role can lead to distressing patterns in adulthood such as people pleasing or extreme self-reliance. Therapy can help you understand these patterns, build emotional awareness and develop emotion regulation skills."
    },
    {
      title: "Anxiety & Depression",
      icon: Brain,
      desc: "Having self-doubts, being harsh on yourself, being preoccupied with your thoughts, feeling tense or on the edge, not feeling motivated, feeling sad/numb can significantly weigh you down. Therapy equips you with coping skills to express & regulate yourself, improve motivation and feel hopeful about your life."
    },
    {
      title: "Women Reproductive Health & Well-being",
      icon: Sparkles,
      desc: "Womens’ bodies go through various transitions during the course of life. These transitions can greatly impact your reproductive health including puberty, sexual health & well-being, infertility, polycystic ovary syndrome, hormonal fluctuations, pregnancy, menopause. These concerns have a significant relationship with your emotional well-being. Therapy can help you understand & cope with the stress and anxiety that come with these varied concerns."
    },
    {
      title: "Family & Couple Therapy",
      icon: Heart,
      desc: "Sometimes family members or couples may find themselves stuck in unhelpful patterns of conflicts, arguments, stress and emotional turmoil. Therapy enables understanding these patterns in relation to one another and build skills for communication, conflict resolution and strengthening relationship with each other as a family or as a couple."
    }
  ];

  return (
    <div className="relative min-h-screen bg-neutral-bg pt-4 pb-24">
      {/* Background Decor Blobs */}
      <div className="blob-container">
        <div className="blob bg-surface-blue w-[500px] h-[500px] -left-20 top-20" />
        <div className="blob bg-surface-peach w-[450px] h-[450px] -right-20 top-[60%]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 md:px-8 space-y-24">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h1 className="text-4xl md:text-5xl font-display text-text-navy leading-tight">
            Services
          </h1>
          <p className="text-text-charcoal/80 text-lg md:text-xl font-medium max-w-2xl mx-auto">
            Psychotherapy, Supervision Services and Workshops & Trainings
          </p>
          <div className="h-1 w-20 bg-primary/20 mx-auto rounded-full" />
        </div>

        {/* Section 1: Psychotherapy */}
        <section className="space-y-8">
          <div className="border-b border-primary/10 pb-4">
            <h2 className="text-3xl font-display text-text-navy">Psychotherapy</h2>
            <p className="text-text-charcoal/60 text-sm mt-1">Tailored one-on-one and relationship therapy to navigate life's complexities.</p>
          </div>

          <div className="space-y-6">
            {psychotherapyList.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="bg-surface-pearl border border-primary/5 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row md:items-start justify-between gap-6 shadow-sm hover:shadow-soft-blue transition-all duration-300"
                >
                  <div className="flex gap-4 items-start flex-1">
                    <div className="w-12 h-12 rounded-2xl bg-primary-light/50 flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-text-navy text-xl font-display font-semibold">{item.title}</h3>
                      <p className="text-text-charcoal/80 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                  <div className="shrink-0 pt-2">
                    <Link href="/book">
                      <Button variant="primary" className="w-full md:w-auto px-6">
                        Book Session
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Section 2: Supervision */}
        <section className="space-y-8">
          <div className="border-b border-primary/10 pb-4">
            <h2 className="text-3xl font-display text-text-navy">Supervision Services</h2>
            <p className="text-text-charcoal/60 text-sm mt-1">Support and guidance for early-career mental health practitioners.</p>
          </div>

          <div className="bg-surface-pearl border border-primary/5 rounded-[2.5rem] p-8 md:p-10 space-y-8 shadow-sm">
            <div className="max-w-3xl space-y-4 text-text-charcoal/80 text-sm leading-relaxed">
              <p>
                Whether you have just completed your masters or are in the early years of your therapy practice, supervision can provide you with the necessary knowledge and practical skills in accordance to where you are in your professional journey. It enables you to improve your skills as a therapist and gain support & guidance for your clinical work. This in turn can help ensure that you as the therapist, are able to provide ethical and quality care to your clients.
              </p>
              <p className="font-semibold text-primary">
                These services are best suited for therapists with 0-5 years of experience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Option A: One-on-one Supervision */}
              <div className="bg-surface border border-primary/5 rounded-3xl p-6 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <h3 className="text-text-navy text-lg font-bold">One-on-one Supervision</h3>
                  <p className="text-text-charcoal/80 text-sm leading-relaxed">
                    The initial sessions will begin with getting to know about you, your therapy style and the challenges and/or biases you maybe encountering in your clinical practice. Thereafter, you and I will be discussing in detail the clinical cases that you maybe feeling stuck with or unsure about. The purpose of this space is to enable you to reflect on your work as a therapist, develop in-depth understanding about your client’s concerns and to be able to enhance your clinical skills through support and guidance.
                  </p>
                </div>
                <div className="flex gap-4 pt-2">
                  <Link href="/contact" className="flex-1">
                    <Button variant="outline" className="w-full">Enquire</Button>
                  </Link>
                  <Link href="/book" className="flex-1">
                    <Button variant="primary" className="w-full">Book Session</Button>
                  </Link>
                </div>
              </div>

              {/* Option B: Group Supervision */}
              <div className="bg-surface border border-primary/5 rounded-3xl p-6 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <h3 className="text-text-navy text-lg font-bold">Group Supervision</h3>
                  <p className="text-text-charcoal/80 text-sm leading-relaxed">
                    As a therapist have you felt isolated and lonely in your practice? Faced ethical dilemmas that you are unsure of navigating? Or want a fresh perspective as you feel constrained with your current therapy approach? If you answered yes to any or all of these questions then group supervision is your calling. Collaborative learning in an ethical, safe and secure environment with fellow peers in the field is the main premise of this space. These sessions are not limited to case discussions but also include sharing of relevant reading material and academic resources and also provide opportunities for networking and collaboration with therapists in the group.
                  </p>
                  <p className="text-xs text-text-charcoal/60 italic pt-1">
                    This is a closed group of 5 members, meeting once in two weeks. Please reach out to check for available slots.
                  </p>
                </div>
                <div className="flex gap-4 pt-2">
                  <Link href="/contact" className="flex-1">
                    <Button variant="outline" className="w-full">Enquire</Button>
                  </Link>
                  <Link href="/book" className="flex-1">
                    <Button variant="primary" className="w-full">Book Session</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Workshops & Trainings */}
        <section className="space-y-8">
          <div className="border-b border-primary/10 pb-4">
            <h2 className="text-3xl font-display text-text-navy">Workshops & Trainings</h2>
            <p className="text-text-charcoal/60 text-sm mt-1">Interactive modules and expressive art workshops designed for organizations.</p>
          </div>

          <div className="bg-surface-pearl border border-primary/5 rounded-[2.5rem] p-8 md:p-10 space-y-6 shadow-sm">
            <p className="text-text-charcoal/80 text-sm leading-relaxed">
              Through the medium of expressive arts, workshops and trainings on mental health are aimed at promoting well-being and awareness for all individuals in the workplace, college, school or hospital. Learning practical strategies and building skills for emotional awareness, conflict resolution, managing stress & anxiety and maintaining a work-life balance can help create a positive environment of support and inclusivity. Training sessions are flexible and tailored to meet the specific needs of your organization. These are delivered in-person, online or in a hybrid format.
            </p>
            <div className="bg-surface rounded-2xl p-6 border border-primary/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <p className="text-text-charcoal/80 text-sm font-semibold">
                To get started, please reach out to check options or schedule a session.
              </p>
              <div className="flex gap-3">
                <Link href="/contact">
                  <Button variant="outline" className="flex items-center gap-2">
                    Enquiry Form
                  </Button>
                </Link>
                <a href="mailto:psychologist.venikas@gmail.com">
                  <Button variant="primary" className="flex items-center gap-2">
                    <Mail className="w-4 h-4" /> Email Me
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
