import { useState } from "react";
import Header from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import IntroAnimation from "../components/IntroAnimation";
import About from "../components/About";
import TrainHard from "../components/TrainHard";
import Gallery from "../components/Gallery";
import Cater from "../components/Cater";

export default function Home() {
  const [showAnimation, setShowAnimation] = useState(true);
  const [revealing, setRevealing] = useState(false);

  return (
    <>
      {showAnimation && (
        <IntroAnimation
          onRevealing={() => setRevealing(true)}
          onComplete={() => setShowAnimation(false)}
        />
      )}
      <div
        className={`home-wrapper${revealing ? " home-wrapper--visible" : ""}`}
      >
        <Header />
        <Hero />
        <TrainHard />
        <About />
        <Cater />
        <Gallery />
        <Footer />
      </div>
    </>
  );
}
