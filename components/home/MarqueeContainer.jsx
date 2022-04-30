import React from "react";
import { FaDocker, FaNode, FaReact } from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";
import { motion } from "framer-motion";
import tw from "tailwind-styled-components";
import Marquee from "react-fast-marquee";

const technologies = [
  { name: "react", icon: <FaReact /> },
  { name: "nodejs", icon: <FaNode /> },
  { name: "tailwind", icon: <SiTailwindcss /> },
  { name: "nextjs", icon: <SiNextdotjs /> },
  { name: "express", icon: <SiExpress /> },
  { name: "mongodb", icon: <SiMongodb /> },
];

const Tech = ({ tech, i }) => {
  return (
    <div key={i} className="flex items-center mx-4 text-4xl h-28">
      <span className="p-2 m-2">{tech.icon}</span>
      <p className="text-2xl font-light capitalize">{tech.name}</p>
    </div>
  );
};

const MarqueeContainer = () => {
  return (
    <Marquee className="flex min-w-full">
      {technologies.map((tech, i) => (
        <Tech key={i} tech={tech} />
      ))}
    </Marquee>
  );
};

export default MarqueeContainer;
