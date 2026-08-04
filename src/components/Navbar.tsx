"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Venika" },
  {
    href: "/services",
    label: "Services",
    children: [
      { href: "/services/anxiety-depression", label: "Anxiety & Depression" },
      { href: "/services/childhood-trauma", label: "Childhood Trauma" },
      { href: "/services/couples-family", label: "Couples & Family" },
    ],
  },
  { href: "/blog", label: "Blog" },
  {
    href: "/faq",
    label: "FAQ",
    children: [
      { href: "/faq", label: "Getting Started" },
      { href: "/faq", label: "Sessions & Fees" },
      { href: "/faq", label: "Privacy" },
    ],
  },
  {
    href: "/contact",
    label: "Contact",
    children: [
      { href: "/contact", label: "Enquiry Form" },
      { href: "https://wa.me/919625088869", label: "WhatsApp" },
      { href: "mailto:psychologist.venikas@gmail.com", label: "Email" },
    ],
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "relative z-50 w-full transition-all duration-300",
          isScrolled
            ? "bg-neutral-bg/85 backdrop-blur-md shadow-sm border-b border-primary/5 py-3"
            : "bg-transparent py-5"
        )}
      >
        <div className="mx-auto max-w-7xl px-6 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative h-9 w-32 flex items-center justify-center bg-transparent">
              <img
                src="/images/logo.png"
                alt="Mind'in"
                className="h-full w-full object-contain object-left"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || ("children" in link && link.children?.some((child) => pathname === child.href));
              const hasChildren = "children" in link && link.children;
              return (
                <div key={link.href} className="relative group">
                  <Link
                    href={link.href}
                    className={cn(
                      "inline-flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary relative py-1 text-text-charcoal",
                      isActive ? "text-primary" : "text-text-charcoal/80"
                    )}
                  >
                    {link.label}
                    {hasChildren && <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />}
                    {isActive && (
                      <motion.span
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                  {hasChildren && (
                    <div className="invisible absolute left-1/2 top-full z-50 mt-3 w-56 -translate-x-1/2 rounded-2xl border border-primary/10 bg-surface-pearl p-2 opacity-0 shadow-soft-blue transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                      {link.children.map((child) => {
                        const isExternal = child.href.startsWith("http") || child.href.startsWith("mailto:");
                        return (
                          <Link
                            key={`${link.href}-${child.label}`}
                            href={child.href}
                            target={isExternal ? "_blank" : undefined}
                            rel={isExternal ? "noopener noreferrer" : undefined}
                            className="block rounded-xl px-4 py-2.5 text-sm text-text-charcoal/80 transition-colors hover:bg-primary-light/35 hover:text-primary"
                          >
                            {child.label}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* CTA & Mobile Menu Trigger */}
          <div className="flex items-center gap-4">
            <Link href="/book" className="hidden sm:inline-block">
              <Button variant="primary" size="default">
                Book a Session
              </Button>
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 md:hidden text-text-navy hover:text-primary transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[60px] z-40 md:hidden bg-neutral-bg border-b border-primary/10 shadow-lg px-6 py-8"
          >
            <nav className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <div key={link.href} className="space-y-3">
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "text-lg font-medium transition-colors hover:text-primary py-1",
                      pathname === link.href ? "text-primary" : "text-text-charcoal"
                    )}
                  >
                    {link.label}
                  </Link>
                  {"children" in link && link.children && (
                    <div className="flex flex-col gap-3 border-l border-primary/15 pl-4">
                      {link.children.map((child) => {
                        const isExternal = child.href.startsWith("http") || child.href.startsWith("mailto:");
                        return (
                          <Link
                            key={`${link.href}-${child.label}`}
                            href={child.href}
                            target={isExternal ? "_blank" : undefined}
                            rel={isExternal ? "noopener noreferrer" : undefined}
                            onClick={() => setIsOpen(false)}
                            className="text-sm font-medium text-text-charcoal/70 transition-colors hover:text-primary"
                          >
                            {child.label}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-primary/10">
                <Link href="/book" onClick={() => setIsOpen(false)} className="w-full">
                  <Button variant="primary" size="lg" className="w-full flex items-center justify-center gap-2">
                    Book a Session <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
