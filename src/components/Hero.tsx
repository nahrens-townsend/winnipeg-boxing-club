import heroImg from "../assets/images/hero.png";
import "./Hero.scss";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__top-bar"></div>
      <div className="hero__content">
        <h1 className="hero__title">
          <span className="hero__title-primary">Winnipeg Boxing Club</span>
        </h1>
        <p className="hero__description">
          Build Strength. Learn Skill.
          <br />
          <span className="hero__description-highlight">Gain Confidence.</span>
        </p>
      </div>

      <div className="hero__image-wrap">
        <img
          src={heroImg}
          alt="Boxer training at Winnipeg Boxing Club"
          className="hero__image"
        />
      </div>
    </section>
  );
}
