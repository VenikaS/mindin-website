"use client";

import Link from "next/link";
import { Mail, AlertTriangle } from "lucide-react";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M6.94 8.9H3.75v10.35h3.19V8.9ZM5.34 7.5c1.02 0 1.84-.83 1.84-1.86 0-1-.82-1.82-1.84-1.82s-1.85.82-1.85 1.82c0 1.03.83 1.86 1.85 1.86ZM20.5 13.55c0-2.78-1.49-4.08-3.48-4.08-1.6 0-2.32.88-2.72 1.5V8.9h-3.06c.04.86 0 10.35 0 10.35h3.19v-5.78c0-.31.02-.62.11-.84.23-.62.75-1.26 1.63-1.26 1.15 0 1.61.95 1.61 2.33v5.55h3.19v-5.7h-.47Z" />
    </svg>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M16.04 4C9.43 4 4.05 9.32 4.05 15.86c0 2.09.55 4.12 1.6 5.91L4 28l6.39-1.62a12.1 12.1 0 0 0 5.65 1.42C22.66 27.8 28 22.48 28 15.94 28 9.39 22.66 4 16.04 4Zm0 21.78c-1.83 0-3.62-.49-5.18-1.42l-.37-.22-3.79.96 1.01-3.66-.24-.38a9.9 9.9 0 0 1-1.52-5.2c0-5.43 4.53-9.84 10.09-9.84 5.55 0 10.06 4.45 10.06 9.92 0 5.43-4.51 9.84-10.06 9.84Zm5.53-7.36c-.3-.15-1.79-.87-2.06-.97-.28-.1-.48-.15-.68.15-.2.29-.78.97-.96 1.17-.18.19-.35.22-.65.07-.3-.14-1.28-.46-2.44-1.49-.9-.79-1.51-1.78-1.69-2.07-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.19.05-.37-.02-.52-.08-.15-.68-1.62-.93-2.22-.25-.58-.5-.5-.68-.51h-.58c-.2 0-.53.07-.8.37-.28.3-1.05 1.01-1.05 2.47s1.08 2.87 1.23 3.07c.15.19 2.13 3.2 5.16 4.49.72.31 1.28.49 1.72.63.72.23 1.38.2 1.9.12.58-.09 1.79-.72 2.04-1.42.25-.7.25-1.3.18-1.42-.08-.13-.28-.2-.58-.35Z" />
    </svg>
  );
}

const contactLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/psychologist_venika.singhal?igsh=Zzl2djVhbHoxaWZ6",
    icon: InstagramIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/psychologistvenika?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    icon: LinkedInIcon,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/919625088869",
    icon: WhatsAppIcon,
  },
  {
    label: "Email",
    href: "mailto:psychologist.venikas@gmail.com",
    icon: Mail,
  },
];

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-primary/5 pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 mb-16 items-start">
          {/* Logo & Intro */}
          <div className="md:col-span-3 flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative h-16 w-56 flex items-center justify-center bg-transparent">
                <img
                  src="/images/logo.png"
                  alt="Mind'in"
                  className="h-full w-full object-contain object-left"
                />
              </div>
            </Link>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-text-navy text-sm font-bold uppercase tracking-wider mb-6">Quick Links</h4>
            <ul className="flex flex-col gap-4">
              {["About Me", "Services", "FAQ", "Contact Me"].map((link) => (
                <li key={link}>
                  <Link
                    href={
                      link === "About Me"
                        ? "/about"
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

          {/* Socials & Emergency Disclaimer */}
          <div className="md:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              {contactLinks.map(({ label, href, icon: Icon }) => (
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

            {/* Crisis Disclaimer */}
            <div className="bg-red-50/70 border border-red-200/50 rounded-2xl p-4 flex gap-3 items-start text-xs text-red-800 leading-relaxed font-bold">
              <AlertTriangle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
              <div>
                <span className="block mb-1 text-sm text-red-950 font-bold">Crisis & Emergency Disclaimer:</span>
                Mind’in does not provide crisis & emergency support services. Therefore in case of any physical, emotional, psychological emergency where urgent action is required including but not limited to any danger/threat to you or someone else, self-harm, active suicidal intent please go to the nearest hospital and call emergency services.
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-text-charcoal/50 text-xs font-medium">
            Copyright &copy; Mind&apos;in 2026 - All rights reserved.
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
