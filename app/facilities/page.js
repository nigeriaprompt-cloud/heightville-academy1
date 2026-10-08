import Image from "next/image";
import PageHero from "@/components/PageHero";
export const metadata = { title: "Facilities", description: "Learning environment at Heightville Academy, Akure." };
const items = [
  { src: "/images/facilities/facility-01.jpg", name: "Learning environment", text: "The school describes its present site as modern, spacious and conducive to effective teaching and learning." },
  { src: "/images/facilities/facility-02.jpg", name: "More facilities", text: "Information coming soon. Please contact the school for details." },
];

export default function Facilities() {
  return (
    <>
      <PageHero title="Facilities" intro="Only confirmed facilities are listed here." />
      <section className="section"><div className="wrap grid3">
        {items.map((f) => (
          <article key={f.name} className="card">
            <div className="card-img"><Image src={f.src} alt={`${f.name} (placeholder image)`} fill sizes="(min-width:1024px) 33vw, 100vw" /></div>
            <div className="card-body"><h2 className="serif">{f.name}</h2><span className="rule" aria-hidden="true" /><p>{f.text}</p></div>
          </article>
        ))}
      </div></section>
    </>
  );
}
