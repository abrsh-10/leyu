import React from "react";
import StarsCanvas from "./canvas/Stars";
import Navbar from "./components/Navbar";
import BallCanvas from "./canvas/Ball";
import letters from "../../constants/letters.js";
import Image from "next/image";
import ComputersCanvas from "./canvas/Computer";

const Page = () => {
  return (
    <div className="text-center min-h-dvh bg-slate-950">
      <StarsCanvas />
      <Navbar />
    </div>
  );
};

export default Page;
