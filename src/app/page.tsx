"use client";

import { Canvas } from "react-three-fiber";
import { IrysBannerShapes2 } from "./IrysBannerShapes2";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex-grow w-full flex">
        <Canvas className="flex-grow">
          <IrysBannerShapes2 />
        </Canvas>
      </div>
    </main>
  );
}
