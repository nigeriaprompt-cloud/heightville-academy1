import Image from "next/image";
import Link from "next/link";
import { nav, site } from "@/data/site";
import { programs } from "@/data/programs";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div>
          <Image src={site.images.logo} alt={`${site.name} logo`} width={180} height={60} loading="lazy" />
          <p className="serif footer-motto">“{site.motto}”</p>
        </div>
        <div><h2>Explore</h2><ul>{nav.map(([l, h]) => <li key={h}><Link href={h}>{l}</Link></li>)}</ul></div>
        <div><h2>Programs</h2><ul>{programs.map((p) => <li key={p.slug}><Link href="/programs">{p.name}</Link></li>)}
          <li><Link href="/learning">Learning Centre</Link></li></ul></div>
        <div>
          <h2>Contact</h2>
          <address>{site.address.map((l) => <span key={l}>{l}<br /></span>)}</address>
          <p><a href={site.whatsappLink}>WhatsApp: {site.whatsapp}</a><br /><a href={site.phoneLink}>Enquiries: {site.phone}</a></p>
        </div>
      </div>
      <p className="copy">© {site.name}. All rights reserved.</p>
    </footer>
  );
}
