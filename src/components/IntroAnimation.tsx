import { useEffect, useRef } from "react";
import logo from "../assets/images/logo.png";
import "./IntroAnimation.scss";

interface IntroAnimationProps {
  onRevealing: () => void;
  onComplete: () => void;
}

export default function IntroAnimation({
  onRevealing,
  onComplete,
}: IntroAnimationProps) {
  const onRevealingRef = useRef(onRevealing);
  const onCompleteRef = useRef(onComplete);

  useEffect(() => {
    // Trigger home page fade-in while curtain is still exiting
    const revealTimer = setTimeout(() => onRevealingRef.current(), 3600);
    // Unmount overlay after curtain has fully exited
    const completeTimer = setTimeout(() => onCompleteRef.current(), 4400);

    return () => {
      clearTimeout(revealTimer);
      clearTimeout(completeTimer);
    };
  }, []);

  return (
    <div className="intro-overlay" aria-hidden="true">
      <div className="intro-logo">
        <img src={logo} alt="" draggable={false} />
      </div>
    </div>
  );
}
