import { useGLTF, useTexture } from "@react-three/drei";

import * as THREE from "three";

const Model = () => {
  const object = useGLTF("/Campus_Fixed.glb");
  const meshGeometry = object.meshes.Object001001.geometry;

  const baseColor = useTexture("textures/DefaultMaterial_baseColor_1001.png");
  const normal = useTexture("textures/DefaultMaterial_normal_1001.png");
  const ao = useTexture(
    "textures/DefaultMaterial_occlusionRoughnessMetallic_1001.png"
  );

  baseColor.flipY = false;
  normal.flipY = false;
  ao.flipY = false;

  const material = new THREE.MeshStandardMaterial({
    map: baseColor,
    normalMap: normal,
    aoMap: ao,
  });

  return (
    <mesh
      geometry={meshGeometry}
      material={material}
      rotation={[Math.PI * -0.5, 0, 0]}
    />
  );
};

export default Model;
