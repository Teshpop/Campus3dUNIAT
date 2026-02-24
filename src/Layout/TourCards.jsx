import { useEffect, useRef } from "react";
import BaseCard from "./BaseCard";
import gsap from "gsap";
import { useTourController } from "@/Hooks/tourController";

const TourCards = () => {
  const { card, nextIndex } = useTourController();
  const ref = useRef();

  useEffect(() => {
    gsap.fromTo(
      ref.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.5, ease: "power2.out" },
    );
  }, [card]);

  useEffect(() => {
    const handleClick = () => {
      gsap.to(ref.current, {
        opacity: 0,
        duration: 1,
        ease: "power1.inOut",
        onComplete: nextIndex,
      });
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [nextIndex]);

  return (
    <div ref={ref} style={{ opacity: 0 }}>
      <BaseCard title={card.title} description={card.description} />
    </div>
  );
};

export default TourCards;
