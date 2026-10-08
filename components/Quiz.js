"use client";
import { useMemo, useState } from "react";

const shuffle = (a) => [...a].sort(() => Math.random() - 0.5);

export default function Quiz({ questions }) {
  const classes = useMemo(() => [...new Set(questions.map((q) => q.classLevel))], [questions]);
  const subjects = useMemo(() => [...new Set(questions.map((q) => q.subject))], [questions]);
  const [cfg, setCfg] = useState({ classLevel: classes[0], subject: subjects[0], difficulty: "Any", count: 5 });
  const [set, setSet] = useState(null);
  const [pos, setPos] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [done, setDone] = useState(false);

  const pool = questions.filter((q) => q.classLevel === cfg.classLevel && q.subject === cfg.subject &&
    (cfg.difficulty === "Any" || q.difficulty === cfg.difficulty));

  const start = () => {
    setSet(shuffle(pool).slice(0, cfg.count).map((q) => ({ ...q, options: shuffle(q.options) })));
    setPos(0); setAnswers([]); setDone(false);
  };
  const finish = (a) => {
    setDone(true);
    try {
      const s = set.filter((q, i) => a[i] === q.answer).length;
      localStorage.setItem("hvaLastScore", JSON.stringify({ score: s, total: set.length }));
    } catch {}
  };
  const pick = (opt) => {
    const a = [...answers]; a[pos] = opt; setAnswers(a);
  };
  const field = (label, key, opts) => (
    <label className="field">{label}
      <select value={cfg[key]} onChange={(e) => setCfg({ ...cfg, [key]: key === "count" ? +e.target.value : e.target.value })}>
        {opts.map((o) => <option key={o}>{o}</option>)}
      </select>
    </label>
  );

  if (!set) return (
    <div className="quiz">
      <div className="quiz-setup">
        {field("Class", "classLevel", classes)}
        {field("Subject", "subject", subjects)}
        {field("Difficulty", "difficulty", ["Any", "Easy", "Medium", "Hard"])}
        {field("Number of questions", "count", [5, 10, 20])}
      </div>
      <p>{pool.length} question{pool.length === 1 ? "" : "s"} available for this selection.</p>
      <button className="btn btn-navy" disabled={!pool.length} onClick={start}>Start practice</button>
    </div>
  );

  if (done) {
    const score = set.filter((q, i) => answers[i] === q.answer).length;
    return (
      <div className="quiz" aria-live="polite">
        <h3 className="serif">Score: {score} / {set.length} ({Math.round((score / set.length) * 100)}%)</h3>
        <p>{score} correct · {set.length - score} wrong</p>
        <ol className="review">
          {set.map((q, i) => (
            <li key={q.id} className={answers[i] === q.answer ? "ok" : "bad"}>
              <strong>{q.question}</strong>
              <span>Your answer: {answers[i] || "Not answered"}</span>
              <span>Correct answer: {q.answer}</span>
              <em>{q.explanation}</em>
            </li>
          ))}
        </ol>
        <button className="btn btn-navy" onClick={start}>Try again</button>{" "}
        <button className="btn btn-outline-dark" onClick={() => setSet(null)}>Change settings</button>
      </div>
    );
  }

  const q = set[pos];
  return (
    <div className="quiz">
      <p className="eyebrow">Question {pos + 1} of {set.length}</p>
      <progress value={pos + 1} max={set.length} aria-label="Progress" />
      <fieldset>
        <legend className="serif">{q.question}</legend>
        {q.options.map((o) => (
          <label key={o} className={`opt ${answers[pos] === o ? "sel" : ""}`}>
            <input type="radio" name={`q${q.id}`} checked={answers[pos] === o} onChange={() => pick(o)} /> {o}
          </label>
        ))}
      </fieldset>
      <div className="actions">
        {pos > 0 && <button className="btn btn-outline-dark" onClick={() => setPos(pos - 1)}>Previous</button>}
        {pos < set.length - 1
          ? <button className="btn btn-navy" onClick={() => setPos(pos + 1)}>Next</button>
          : <button className="btn btn-gold" onClick={() => finish(answers)}>Submit</button>}
      </div>
    </div>
  );
}
