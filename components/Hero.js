import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";

export default function Hero() {
  return (
    <section className="hero">
      <Image src={site.images.hero} alt="Heightville Academy campus (placeholder)" fill priority sizes="100vw" className="hero-img" />
      <div className="hero-overlay" />
      <div className="wrap hero-body fade-up">
        <p className="eyebrow">Creche · Nursery · Primary · Secondary</p>
        <h1 className="serif">{site.name.toUpperCase()}</h1>
        <p className="serif hero-motto">Raising a Generation of Achievers</p>
        <p className="hero-sub">A co-educational Primary and Secondary school in Akure, committed to academic excellence, moral discipline and character development.</p>
        <div className="actions">
          <Link href="/about" className="btn btn-gold">Explore Our School</Link>
          <Link href="/admissions" className="btn btn-outline">Admissions</Link>
        </div>
      </div>
    </section>
  );
}
