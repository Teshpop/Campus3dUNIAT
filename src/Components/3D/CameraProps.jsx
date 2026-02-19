// CameraProps.jsx
import { useEffect } from "react";
import { useThree } from "@react-three/fiber";
import { useCameraController } from "../../Hooks/index.js";
import gsap from 'gsap'

const CameraProps = () => {
  const { camera } = useThree();
  const { cameraPos, cameraRot, nextCameraPos } = useCameraController();

  /* Animaciones */
  useEffect(() => {

    /* Position */
    gsap.to(
      camera.position,
      {
        x: cameraPos[0],
        y: cameraPos[1],
        z: cameraPos[2],
        duration: 1.5,
        ease: "power2.inOut"
      }
    )

    /* Rotation */
    gsap.to(
      camera.rotation,
      {
        x: cameraRot[0],
        y: cameraRot[1],
        z: cameraRot[2],
        duration: 1.5,
        ease: "power2.inOut"
      }
    )
  }, [cameraPos, cameraRot, camera])

  // Click global para cambiar posición
  useEffect(() => {
    const handleClick = () => nextCameraPos();
    window.addEventListener("click", handleClick);

    return () => window.removeEventListener("click", handleClick);
  }, [nextCameraPos]);

  return null;
};

export default CameraProps;
