import React from "react";
// import Button from "react-bootstrap/Button";
// import { Link, animateScroll as scroll, animateScroll } from "react-scroll";

export default function Projects({ title, subtitle, dark, id }) {
  return (
    <div className="section projects">
      <div className="section-content" id={id}>
        <h1>Projects</h1>
        <ul>
          <li>Tic Tac Toe - Link</li>
          <li>Climate Site - Link </li>
          <li>Mistbits V1</li>
          <li>Mistbits V2</li>
          <li>Nappy Project</li> 
        </ul>
        {/* <Button onClick={() => scroll.scrollToTop()}>To top</Button> */}
      </div>
    </div>
  );
}
