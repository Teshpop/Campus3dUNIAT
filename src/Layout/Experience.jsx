import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Model, CameraProps } from "../Components";
import { useEffect } from "react";

const Experience = () => {
  return (
    <Canvas>
      <Model />
      <CameraProps />

      {/* Lights */}

      <ambientLight />

      {/* //////////// */}

      {/* <OrbitControls /> */}
    </Canvas>
  );
};

export default Experience;
