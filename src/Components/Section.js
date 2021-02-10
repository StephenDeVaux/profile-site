import React from "react";
import Button from "react-bootstrap/Button";
import { Link, animateScroll as scroll, animateScroll } from "react-scroll";

export default function Section({ title, subtitle, dark, id }) {
  return (
    <div className={"section" + (dark ? " section-dark" : "")}>
      <div className="section-content" id={id}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <Button onClick={() => scroll.scrollToTop()}>To top</Button>
      </div>
    </div>
  );
}
