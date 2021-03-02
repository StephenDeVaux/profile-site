import React from "react";
// import Button from "react-bootstrap/Button";
// import { Link, animateScroll as scroll, animateScroll } from "react-scroll";

export default function Contact({ title, subtitle, dark, id }) {
  return (
    <div className="section contact">
      <div className="section-content" id={id}>
        <h1>Contact</h1>
        <ul>
          <li>LinkedIn</li>
          <li>Resume</li>
          <li>Email me form</li>
          <li>Github link</li>
        </ul>
        {/* <Button onClick={() => scroll.scrollToTop()}>To top</Button> */}
      </div>
    </div>
  );
}
