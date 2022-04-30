import React from "react";
import { Container } from "../styles";

const Contact = () => {
  return (
    <Container className="flex flex-col items-center justify-center bg-neutral-50">
      <a
        href="mailto:soyabmostofa@live.com"
        className="font-mono text-3xl sm:text-5xl"
      >
        soyabmostofa@live.com
      </a>
      <p className="mt-4 border-b-2 border-dark-primary">
        HELLO, AVAILABLE NOW
      </p>
    </Container>
  );
};

export default Contact;
