import { useEffect, useRef, useState } from "react";
import "./Cater.scss";
import img8 from "../assets/images/cater-8.jpg";
import img2 from "../assets/images/cater-2.jpg";
import img6 from "../assets/images/cater-6.jpg";
import img4 from "../assets/images/cater-10.jpg";

const IMAGES = [
  {
    src: img8,
    alt: "Young boxer in fighting stance",
    objectPosition: "center 18%",
  },
  {
    src: img2,
    alt: "Female boxer in training",
    objectPosition: "58% 12%",
  },
  {
    src: img6,
    alt: "Male boxer sparring in ring",
    objectPosition: "42% 8%",
  },
  {
    src: img4,
    alt: "Experienced female boxer",
    objectPosition: "center 16%",
  },
];

export default function Cater() {
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
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={`cater${visible ? " cater--visible" : ""}`}
      ref={sectionRef}
    >
      <div className="cater__top-bar"></div>
      <div className="cater__content">
        <h2 className="cater__title">
          Boxing
          <br />
          For Every
          <br />
          Age
        </h2>
        <p className="cater__subtitle">From First Gloves to Lifelong Fitness</p>
        <p className="cater__desc">
          Whether you're introducing your child to the sport, looking for a
          challenging workout as an adult, or staying active later in life, our
          programs are designed to help every member of the community build
          confidence, fitness, and discipline through boxing.
        </p>
      </div>

      <div className="cater__images">
        {IMAGES.map((img, i) => (
          <div
            className="cater__img-wrap"
            key={i}
            style={
              { "--img-delay": `${0.3 + i * 0.1}s` } as React.CSSProperties
            }
          >
            <img
              src={img.src}
              alt={img.alt}
              className="cater__img"
              style={{ objectPosition: img.objectPosition }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
