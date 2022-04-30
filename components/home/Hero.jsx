import React from "react";
import { useParallax } from "react-scroll-parallax";

const Hero = () => {
  const scale1 = useParallax({ scale: [1.3, 0.5] });
  const scale2 = useParallax({ scale: [2, 0.3] });
  return (
    <div className="relative z-10 flex flex-col items-center justify-center text-center md:h-[700px] h-96 bg-gray-100 text-neutral-800">
      <h2
        ref={scale1.ref}
        className="text-4xl font-light tracking-widest sm:text-7xl"
      >
        INTERACTIVE
      </h2>
      <h3
        ref={scale2.ref}
        className="text-4xl font-light tracking-widest sm:text-7xl"
      >
        DEVELOPER
      </h3>
      <p className="text-lg tracking-widest text-bold text-emerald-900">
        FREELANCER
      </p>
    </div>
  );
};

export default Hero;
