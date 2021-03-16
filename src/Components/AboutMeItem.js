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
  clickLikes = () => {
    const likes = this.likesRef.current;
    const likesText = this.likesTextRef.current;
    likes.classList.toggle("about-me__collapsed");
    likes.classList.toggle("skills");

    if (likesText.classList.contains("about-me--hidden")) {
      setTimeout(() => likesText.classList.toggle("about-me--hidden"), 1000);
    } else {
      likesText.classList.toggle("about-me--hidden");
    }
  };

  render() {
    return (
        <div className="about-me__collapsed" ref={this.likesRef}>
          <div className="about-me__icon-box">
            <HeartLogo
              onClick={this.clickLikes}
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
    );
  }
}
