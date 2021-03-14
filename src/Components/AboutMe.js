import React from "react";
// import Button from "react-bootstrap/Button";
// import { Link, animateScroll as scroll, animateScroll } from "react-scroll";
import { ReactComponent as HeartLogo } from './Animations/heart.svg';
import { ReactComponent as SkillLogo } from './Animations/candidate.svg';
import { ReactComponent as WorkLogo } from './Animations/wrench.svg';

export default function AboutMe({ title, subtitle, dark, id }) {

  let gridClass = "about__grid"
  function clickHandler () {
    console.log('updating grid class')
    gridClass = 'about__grid-left'
  }


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
        <div className={gridClass}>
          <HeartLogo onClick={clickHandler} className="about-logos heart-logo" />
          <SkillLogo className="about-logos skill-logo" />
          <WorkLogo className="about-logos work-logo" />
        </div>
        {/* <Button onClick={() => scroll.scrollToTop()}>To top</Button> */}
      </div>
    </div>
  );
}
