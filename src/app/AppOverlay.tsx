import React from "react";
import Hero from "./Hero";

const AppOverlay = () => {
  return (
    <main id="page" className="absolute top-0 left-0 w-full h-full">
      <Hero />
    </main>
  );
};

export default AppOverlay;
