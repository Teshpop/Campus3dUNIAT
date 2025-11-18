import { Canvas} from "@react-three/fiber";
import { OrbitControls} from "@react-three/drei";
import { Model, CameraProps } from "../Components";

const Experience = () => {
  return (
    <Canvas>
      <Model />
      <CameraProps />

      {/* Lights */}

      <ambientLight intensity={0.5}/>
      <directionalLight intensity={1} color={"#FFF1E0"}/>

      {/* //////////// */}

       {/*<OrbitControls />*/}
    </Canvas>
  );
};

export default Experience;
