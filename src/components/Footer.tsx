"use client";

import Link from "next/link";
import { BriefcaseBusiness, Camera, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";

const newsletterSchema = zod.object({
  email: zod.string().email("Please enter a valid email address."),
});

type NewsletterValues = zod.infer<typeof newsletterSchema>;

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/psychologist_venika.singhal?igsh=Zzl2djVhbHoxaWZ6",
    icon: Camera,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/psychologistvenika?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    icon: BriefcaseBusiness,
  },
];

const organizations = [
  {
    name: "Authentic Psychologist",
    href: "https://authenticpsychologist.com/",
    logo: "/images/authentic-psychologist-logo.jpg",
  },
  {
    name: "Space to Accept",
    href: "https://www.spacetoaccept.com/",
    logo: "/images/space-to-accept-logo.png",
  },
];

export default function Footer() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewsletterValues>({
    resolver: zodResolver(newsletterSchema),
  });

  const onSubmit = (data: NewsletterValues) => {
    alert(`Thank you for subscribing! We've sent a confirmation to ${data.email}`);
    reset();
  };

  return (
    <footer className="bg-surface border-t border-primary/5 pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          {/* Logo & Intro */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative h-9 w-32 flex items-center justify-center bg-transparent">
                <img
                  src="/images/logo.png"
                  alt="Mind'in"
                  className="h-full w-full object-contain object-left"
                />
              </div>
            </Link>
            <p className="text-text-charcoal/70 text-sm leading-relaxed max-w-xs">
              Compassionate care for the modern world. Creating a safe, non-judgmental space for your emotional healing and growth.
            </p>
            {/* Socials */}
            <div className="flex items-center gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-primary-light/50 flex items-center justify-center text-text-navy hover:bg-primary hover:text-white transition-colors"
                  aria-label={label}
                  title={label}
                >
                  <Icon className="h-4.5 w-4.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-text-navy text-sm font-semibold uppercase tracking-wider mb-6">Company</h4>
            <ul className="flex flex-col gap-4">
              {["About Us", "Our Therapists", "Services", "FAQ", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    href={
                      link === "About Us"
                        ? "/about"
                        : link === "Our Therapists"
                        ? "/about#team"
                        : link === "Services"
                        ? "/services"
                        : link === "FAQ"
                        ? "/faq"
                        : "/contact"
                    }
                    className="text-text-charcoal/80 text-sm hover:text-primary transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-text-navy text-sm font-semibold uppercase tracking-wider mb-6">Services</h4>
            <ul className="flex flex-col gap-4">
              {[
                { label: "Anxiety & Depression", slug: "anxiety-depression" },
                { label: "Immigrants & Students", slug: "immigrants-students" },
                { label: "Early Career Therapists", slug: "career-therapists" },
                { label: "Childhood Trauma Support", slug: "childhood-trauma" },
                { label: "Parentified Adults", slug: "parentified-adults" },
                { label: "Reproductive Health", slug: "reproductive-health" },
                { label: "Couples & Family", slug: "couples-family" },
              ].map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-text-charcoal/80 text-sm hover:text-primary transition-colors"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-6">
            <h4 className="text-text-navy text-sm font-semibold uppercase tracking-wider mb-2">Newsletter</h4>
            <p className="text-text-charcoal/70 text-sm leading-relaxed">
              Receive weekly gentle reminders, wellness tips, and thoughts on emotional health.
            </p>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
              <div className="flex gap-2">
                <Input
                  {...register("email")}
                  placeholder="Your email address"
                  type="email"
                  className={errors.email ? "border-error" : ""}
                />
                <Button variant="primary" type="submit" className="shrink-0 h-12">
                  Subscribe
                </Button>
              </div>
              {errors.email && <p className="text-xs text-error">{errors.email.message}</p>}
            </form>
          </div>
        </div>

        <div className="border-t border-primary/10 pt-8 pb-8">
          <h4 className="text-text-navy text-sm font-semibold uppercase tracking-wider mb-5">Associated Organizations</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl">
            {organizations.map((org) => (
              <a
                key={org.name}
                href={org.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-primary/10 bg-surface-pearl p-4 hover:shadow-soft-blue transition-all group"
              >
                <div className="h-14 w-14 shrink-0 rounded-xl bg-white border border-primary/10 overflow-hidden flex items-center justify-center">
                  <img src={org.logo} alt={`${org.name} logo`} className="h-full w-full object-contain p-1.5" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-text-navy group-hover:text-primary transition-colors">{org.name}</p>
                  <p className="text-xs text-text-charcoal/60 flex items-center gap-1 mt-1">
                    Visit website <ExternalLink className="h-3 w-3" />
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-text-charcoal/50 text-xs">
            &copy; {new Date().getFullYear()} Mind'in Therapy. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-text-charcoal/50 hover:text-primary text-xs transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-text-charcoal/50 hover:text-primary text-xs transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
