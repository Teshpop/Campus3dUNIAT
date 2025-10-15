// CameraProps.jsx
import { useEffect } from "react";
import { useThree } from "@react-three/fiber";
import { useCameraController } from "../Hooks";

const CameraProps = () => {
  const { camera } = useThree();
  const { cameraPos, cameraRot, nextCameraPos } = useCameraController();

  // Actualizar cámara cuando cambie la posición
  useEffect(() => {
    camera.position.set(cameraPos[0], cameraPos[1], cameraPos[2]);
    camera.rotation.set(cameraRot[0], cameraRot[1], cameraRot[2]);
  }, [cameraPos, cameraRot, camera]);

  // Click global para cambiar posición
  useEffect(() => {
    const handleClick = () => nextCameraPos();
    window.addEventListener("click", handleClick);

    return () => window.removeEventListener("click", handleClick);
  }, [nextCameraPos]);

  return null;
};

export default CameraProps;
