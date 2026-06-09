import heroImg from "../assets/images/hero.png";
import "./Hero.scss";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__top-bar"></div>
      <div className="hero__content">
        <h1 className="hero__title">
          <span className="hero__title-primary">Boxing Gym</span>
          <span className="hero__title-secondary">In Winnipeg, MB</span>
        </h1>
        <p className="hero__description">
          There is no more exciting place to get in the best shape of your life
          than a boxing gym. Whether your goal is total body conditioning or
          learning to defend yourself — we have the class for you.
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
