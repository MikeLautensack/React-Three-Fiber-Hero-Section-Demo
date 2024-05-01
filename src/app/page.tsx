"use client";

import AppOverlay from "./AppOverlay";
import Scene from "./Scene";

export default function Home() {
  return (
    <div className="flex h-screen flex-col items-center justify-between bg-[#111115]">
      <Scene />
      <AppOverlay />
    </div>
  );
}
