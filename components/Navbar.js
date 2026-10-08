"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { nav, site } from "@/data/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const path = usePathname();
  const solid = scrolled || open || path !== "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => setOpen(false), [path]);
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className={`nav ${solid ? "nav-solid" : ""}`}>
      <div className="nav-inner">
        <Link href="/" className="nav-logo" aria-label={`${site.name} home`}>
          <Image src={site.images.logo} alt={`${site.name} logo`} width={180} height={60} priority />
        </Link>
        <nav aria-label="Main" className="nav-links">
          {nav.filter(([l]) => l !== "Home").map(([label, href]) => (
            <Link key={href} href={href} aria-current={path === href ? "page" : undefined}>{label}</Link>
          ))}
        </nav>
        <Link href="/admissions" className="btn btn-gold nav-cta">Apply for Admission</Link>
        <button className="nav-toggle" aria-expanded={open} aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>
      {open && (
        <nav id="mobile-menu" aria-label="Mobile" className="mobile-menu">
          {nav.map(([label, href]) => (
            <Link key={href} href={href} aria-current={path === href ? "page" : undefined}>{label}</Link>
          ))}
          <Link href="/admissions" className="btn btn-gold">Apply for Admission</Link>
        </nav>
      )}
    </header>
  );
}
