import React from "react";
import { Container, SectionTitle } from "../styles";
import { useParallax } from "react-scroll-parallax";

const LatestProjects = () => {
  const pTitle = useParallax({
    y: [30, -300],
  });

  return (
    <div>
      <Container>
        <SectionTitle ref={pTitle.ref}>
          DISCOVER MY <br /> LATEST PROJECTS.
        </SectionTitle>
      </Container>
    </div>
  );
};

export default LatestProjects;
