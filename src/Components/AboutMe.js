import React from "react";
import { ReactComponent as HeartLogo } from "./Animations/heart.svg";
import { ReactComponent as SkillLogo } from "./Animations/candidate.svg";
import { ReactComponent as WorkLogo } from "./Animations/wrench.svg";
import "./AboutMe.scss";
export default class AboutMe extends React.Component {
  constructor(props) {
    super(props);
    this.likesRef = React.createRef();
    this.likesTextRef = React.createRef();
    this.skillsRef = React.createRef();
    this.skillsTextRef = React.createRef();
    this.workRef = React.createRef();
    this.workTextRef = React.createRef();
  }
  clickHandler = (itemRef, itemTextRef) => {
    

    itemRef.current.classList.toggle("about-me__collapsed");
    itemRef.current.classList.toggle("skills");

    const textEl = itemTextRef.current;
    if (textEl.classList.contains("about-me--hidden")) {
      setTimeout(() => textEl.classList.toggle("about-me--hidden"), 1000);
    } else {
      textEl.classList.toggle("about-me--hidden");
    }
  };
  SelectItem = (itemRef, itemTextRef) => {
    itemRef.current.classList.remove("about-me__collapsed")
    itemRef.current.classList.add("skills")
    setTimeout(() => itemTextRef.current.classList.remove("about-me--hidden"), 1000);
  }
  unSelectItem = (itemRef, itemTextRef) => {
    itemRef.current.classList.add("about-me__collapsed")
    itemRef.current.classList.remove("skills")
    itemTextRef.current.classList.remove("about-me--hidden")
  }

  render() {
    return (
      <div className="section-content about-me" id={this.props.id}>
        <h1 className="about-me__title">About me:</h1>
        <div className="about-me__grid">
          <div className="about-me__collapsed" ref={this.likesRef}>
            <div className="about-me__icon-box">
              <HeartLogo
                onClick={() =>
                  this.clickHandler(this.likesRef, this.likesTextRef)
                }
                className="about-me__logo heart-logo"
              />
            </div>
            <div ref={this.likesTextRef} className="about-me--hidden">
              <h2>Likes / hobbies / paassions</h2>
              <ul>
                <li>cars / tesla /Elong </li>
                <li>3D printing</li>
                <li>Family</li>
                <li>Nature / climate change</li>
                <li>Science / Space </li>
              </ul>
            </div>
          </div>
          <div className="about-me__collapsed" ref={this.skillsRef}>
            <div className="about-me__icon-box">
              <SkillLogo
                onClick={() =>
                  this.clickHandler(this.skillsRef, this.skillsTextRef)
                }
                className="about-me__logo skill-logo"
              />
            </div>
            <div ref={this.skillsTextRef} className="about-me--hidden">
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
            </div>
          </div>
          <div className="about-me__collapsed" ref={this.workRef}>
            <div className="about-me__icon-box">
              <WorkLogo
                onClick={() =>
                  this.clickHandler(this.workRef, this.workTextRef)
                }
                className="about-me__logo work-logo"
              />
            </div>
            <div ref={this.workTextRef} className="about-me--hidden">
              <h2>Things i've done</h2>
              <ul>
                <li>Work at mistbits</li>
                <li>Work at air liquide</li>
                <li>Mech Eng</li>
                <li>Studing programming</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
