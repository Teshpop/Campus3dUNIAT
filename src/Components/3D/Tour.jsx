import { useEffect } from "react";
import { useThree } from "@react-three/fiber";
import { useTourController } from "@/Hooks/tourController";
import gsap from "gsap";

const Tour = () => {
  const { camera } = useThree();
  const { position, rotation, nextIndex } = useTourController();

  useEffect(() => {
    gsap.to(camera.position, {
      x: position[0],
      y: position[1],
      z: position[2],
      duration: 1.5,
      ease: "power2.inOut",
    });

    gsap.to(camera.rotation, {
      x: rotation[0],
      y: rotation[1],
      z: rotation[2],
      duration: 1.5,
      ease: "power2.inOut",
    });
  }, [position, rotation]);

  useEffect(() => {
    window.addEventListener("click", nextIndex);
    return () => window.removeEventListener("click", nextIndex);
  }, [nextIndex]);

  return null;
};

export default Tour;
