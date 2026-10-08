import Image from "next/image";
import Link from "next/link";

export default function ProgramCard({ program }) {
  return (
    <article className="card">
      <div className="card-img">
        <Image src={program.image} alt={`${program.name} (placeholder image)`} fill sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw" />
      </div>
      <div className="card-body">
        <h3 className="serif">{program.name}</h3>
        <span className="rule" aria-hidden="true" />
        <p>{program.text}</p>
        <Link href="/programs" className="link">Learn More →</Link>
      </div>
    </article>
  );
}
