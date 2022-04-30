import React from "react";
import { useParallax } from "react-scroll-parallax";
import tw from "tailwind-styled-components";
import { Container, SectionTitle } from "../styles";

const Hello = tw.p`text-neutral-50 font-medium text-2xl mt-8 `;

const Intro = () => {
  return (
    <Container>
      <SectionTitle>ALLOW ME TO INTRODUCE MYSELF.</SectionTitle>
      <Hello> Hello,</Hello>
      <p className="max-w-md font-light text-neutral-50">
        I&apos;m Soyab Mostofa UX Designer & Web Developer, Located in Dhaka,
        Bangladesh. I work as a freelancer with companies, agencies and
        individuals.
      </p>
    </Container>
  );
};

export default Intro;
