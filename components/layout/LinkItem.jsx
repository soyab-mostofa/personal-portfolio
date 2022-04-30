import React from "react";
import Link from "next/link";

const LinkItem = ({ to, children, scrollTo }) => {
  if (to) {
    return (
      <Link href={to}>
        <a>{children}</a>
      </Link>
    );
  }
  if (scrollTo) {
    return (
      <Link href={`#${scrollTo}`}>
        <a>{children}</a>
      </Link>
    );
  }
};

export default LinkItem;
