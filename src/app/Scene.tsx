import React from "react";
import { Canvas } from "react-three-fiber";
import { IrysBannerParticles } from "./IrysBannerParticles";

const Scene = () => {
  return (
    <Canvas className="w-full h-full">
      <ambientLight intensity={1} />
      <directionalLight position={[-2, 5, 2]} intensity={1} />
      <IrysBannerParticles />
    </Canvas>
  );
};

export default Scene;
