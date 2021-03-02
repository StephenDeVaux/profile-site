import React from "react";
// import Button from "react-bootstrap/Button";
// import { Link, animateScroll as scroll, animateScroll } from "react-scroll";

export default function AboutMe({ title, subtitle, dark, id }) {
  return (
    <div className="section aboutme">
      <div className="section-content" id={id}>
        <h1>About me:</h1>
        <h2>Likes / hobbies / paassions</h2>
        <ul>
          <li>cars / tesla /Elong </li>
          <li>3D printing</li>
          <li>Family</li>
          <li>Nature / climate change</li>
          <li>Science / Space </li> 
        </ul>
        <h2>Skills</h2>
        <ul>
          <li>Javascript</li>
          <li>Node / Express</li>
          <li>MongoDb / Mongoose / Atlas</li>
          <li>HTML / CSS</li>
          <li>Vue.js</li>
          <li>Heroku</li>
          <li>Ruby / Sinatra </li>
          <li>Project Management / Entrepreneurial</li>
          <li>Mechanical Design + Engineering</li>
        </ul>
        <h2>Things i've done</h2>
        <ul>
          <li>Work at mistbits</li>
          <li>Work at air liquide</li>
          <li>Mech Eng</li>
          <li>Studing programming</li>
        </ul>
        {/* <Button onClick={() => scroll.scrollToTop()}>To top</Button> */}
      </div>
    </div>
  );
}
