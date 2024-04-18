"use client";

import { Canvas } from "react-three-fiber";
import { IrysBannerShapes2 } from "./IrysBannerShapes2";
import { IrysBannerShapes } from "./IrysBannerShapes";
// import { Fox } from "./Fox";
import { Burger } from "./Burger";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-between">
      <Canvas className="w-full h-full">
        <ambientLight intensity={4.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Burger />
      </Canvas>
    </main>
  );
}
