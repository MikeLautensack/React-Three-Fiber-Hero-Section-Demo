import React from "react";
import Header from "./Header";
import { Button } from "@mui/material";

const Hero = () => {
  return (
    <section id="hero-section" className="flex flex-col h-screen">
      <Header />
      <div
        id="hero-body"
        className="flex justify-start items-center px-40 py-8 h-full"
      >
        <div
          id="content-box"
          className="flex flex-col justify-start items-center text-white gap-4"
        >
          <h1 className="text-3xl w-full">Hero Section Example</h1>
          <h2 className="font-light w-full">Subheading example...</h2>
          <div className="flex justify-center items-start gap-2 w-full">
            <Button variant="contained" className="w-full">
              Sign in
            </Button>
            <Button variant="contained" className="w-full">
              Sign out
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
