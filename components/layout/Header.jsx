import { useMotionValue, useTransform } from "framer-motion";
import React from "react";
import LinkItem from "./LinkItem";
import { motion } from "framer-motion";

const data = ["projects", "regards", "contact"];

const renderLink = (link, i) => {
  return (
    <LinkItem key={i} scrollTo={`#${link}`}>
      {link}
    </LinkItem>
  );
};

const Header = () => {
  return (
    <motion.div className="container flex items-center justify-between px-4 py-2 mx-auto font-light leading-4 md:max-w-5xl">
      <div>
        <h1 className="tracking-wider">
          Soyab
          <br />
          Mostofa
        </h1>
      </div>
      <div className="flex justify-around flex-grow gap-4 font-mono">
        {data.map((item, i) => renderLink(item, i))}
      </div>
    </motion.div>
  );
};

export default Header;
