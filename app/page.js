import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import ProgramCard from "@/components/ProgramCard";
import AdmissionCTA from "@/components/AdmissionCTA";
import ContactSection from "@/components/ContactSection";
import { programs } from "@/data/programs";
import { gallery } from "@/data/gallery";
import { facts } from "@/data/site";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="section">
        <div className="wrap two">
          <SectionHeading eyebrow="Welcome" title="A school built on excellence and character"
            text={`Established on ${facts.established} by ${facts.founders}, Heightville Academy provides qualitative, affordable and world-class education to children and young people in Akure and beyond.`} />
          <div className="prose">
            <p>Heightville Academy is a co-educational Primary and Secondary school committed to holistic education and raising well-rounded students.</p>
            <p>The school places strong emphasis on academic excellence, moral discipline, social responsibility, character development and spiritual growth.</p>
            <Link href="/about" className="link">About the school →</Link>
          </div>
        </div>
      </section>

      <section className="section ivory">
        <div className="wrap">
          <SectionHeading eyebrow="Programs" title="From Creche to Secondary" />
          <div className="grid4">{programs.map((p) => <ProgramCard key={p.slug} program={p} />)}</div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHeading eyebrow="Why Heightville" title="What sets us apart" />
          <div className="grid3">
            <div className="point"><h3 className="serif">Dedicated teachers</h3><p>{facts.staff} academic staff who are competent, experienced and passionate about teaching and mentoring.</p></div>
            <div className="point"><h3 className="serif">Holistic education</h3><p>Academic, social, moral and emotional growth, as set out in the school’s mission.</p></div>
            <div className="point"><h3 className="serif">A conducive environment</h3><p>A modern, spacious setting designed to make learning engaging and rewarding.</p></div>
          </div>
        </div>
      </section>

      <section className="section navy">
        <div className="wrap">
          <SectionHeading eyebrow="Life at Heightville" title="Clubs and co-curricular activities"
            text="Students develop intellect, creativity, communication, confidence and collaboration through clubs." />
          <ul className="clubs">{facts.clubs.map((c) => <li key={c} className="serif">{c}</li>)}</ul>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHeading eyebrow="Gallery" title="A glimpse of school life" />
          <ul className="strip">
            {gallery.slice(0, 4).map((g) => (
              <li key={g.id}><Image src={g.src} alt={g.alt} width={g.width} height={g.height} sizes="(min-width:1024px) 25vw, 50vw" loading="lazy" style={{ width: "100%", height: "auto" }} /></li>
            ))}
          </ul>
          <p><Link href="/gallery" className="link">View the full gallery →</Link></p>
        </div>
      </section>
      <AdmissionCTA />
      <ContactSection />
    </>
  );
}
