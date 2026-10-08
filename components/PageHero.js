export default function PageHero({ title, intro }) {
  return (
    <section className="page-hero">
      <div className="wrap fade-up">
        <h1 className="serif">{title}</h1>
        <span className="rule" aria-hidden="true" />
        {intro && <p>{intro}</p>}
      </div>
    </section>
  );
}
