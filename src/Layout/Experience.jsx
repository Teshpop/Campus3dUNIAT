import { Canvas} from "@react-three/fiber";
import { OrbitControls, Environment} from "@react-three/drei";
import { Model, CameraProps } from "../Components";
import Tour from '@/Components/3D/Tour'

const Experience = () => {
  return (
    <Canvas>
      <Model />
      {/* <CameraProps /> */}ß
      <Tour/>
      {/* Lights */}

     {/*  <directionalLight intensity={1} color={"#FFF1E0"}/> */}
      <Environment 
        preset="lobby" 
        environmentIntensity={0.3}
        background={true}
        backgroundBlurriness={0.1}
      />

      {/* //////////// */}

      {/* <OrbitControls /> */}
    </Canvas>
  );
};

export default Experience;
