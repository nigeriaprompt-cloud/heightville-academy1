import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { facts } from "@/data/site";
export const metadata = { title: "Academics", description: "Academic life at Heightville Academy: excellence, discipline and co-curricular clubs." };

export default function Academics() {
  return (
    <>
      <PageHero title="Academics" intro="Academic excellence, moral discipline and character development." />
      <section className="section"><div className="wrap two">
        <div className="prose">
          <p>The school emphasises academic excellence alongside social responsibility, character development and spiritual growth, preparing students to become responsible, confident, productive and successful members of society.</p>
          <p className="note">Curriculum, subjects and class details: information coming soon. Please contact the school for more information.</p>
        </div>
        <div>
          <SectionHeading eyebrow="Co-curricular" title="Students’ Clubs" />
          <ul className="clubs light">{facts.clubs.map((c) => <li key={c} className="serif">{c}</li>)}</ul>
        </div>
      </div></section>
    </>
  );
}
