import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { Model } from "../Components";
import Tour from "@/Components/3D/Tour";

const Experience = () => {
  return (
    <Canvas>
      <Model />
      <Tour />
      {/* Lights */}

      <Environment
        preset="lobby"
        environmentIntensity={0.3}
        background={true}
        backgroundBlurriness={0.1}
      />

      {/* //////////// */}
    </Canvas>
  );
};

export default Experience;
