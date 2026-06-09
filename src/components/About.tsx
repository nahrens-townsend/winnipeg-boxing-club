import { useEffect, useRef, useState } from "react";
import "./About.scss";

const PILLARS = [
  {
    number: "01",
    title: "Mental Agility",
    body: "We train beginners, amateurs, and seasoned competitors to build mental sharpness alongside physical toughness and defensive awareness — because the smartest fighter wins.",
  },
  {
    number: "02",
    title: "Master Your Skills",
    body: "Advanced athletes can elevate their game through private coaching — sharpening stamina, striking precision, footwork mechanics, and split-second decision-making under pressure.",
  },
  {
    number: "03",
    title: "Self-Defense Is Self-Care",
    body: "Our training gives you the tools to protect yourself and the people around you. That kind of capability builds a confidence that carries well beyond the gym walls.",
  },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={`about${visible ? " about--visible" : ""}`}
      ref={sectionRef}
    >
      {/* ── Header ─────────────────────────────────────────────── */}
      <div className="about__header">
        <h2 className="about__title">
          The Mental Game
          <br />
          <span className="about__title-accent">of Boxing</span>
        </h2>

        <div className="about__divider" />

        <p className="about__desc">
          Boxing isn't just about building your body — it sharpens the mind. Our
          programs are built to develop your Ring&nbsp;IQ: drilling punch
          combinations, refining footwork, and training you to read your
          opponent. That mental edge is what separates fighters, and it's the
          foundation of real confidence.
        </p>
      </div>

      {/* ── Pillars ────────────────────────────────────────────── */}
      <div className="about__pillars">
        {PILLARS.map((pillar, i) => (
          <article
            className="about__card"
            key={pillar.number}
            style={{ "--delay": `${0.15 + i * 0.18}s` } as React.CSSProperties}
          >
            <div className="about__card-body">
              <h3 className="about__card-title">{pillar.title}</h3>
              <p className="about__card-text">{pillar.body}</p>
            </div>
            <div className="about__card-bar" />
          </article>
        ))}
      </div>
    </section>
  );
}
