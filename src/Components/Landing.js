import React, { useState } from "react";
import { Link, animateScroll } from "react-scroll";

export default function Landing({ title, subtitle, dark, id }) {
  const avatars = ["avatar", "avatar1", "avatar2", "avatar3", "avatar4"];
  const [hovered, setHovered] = useState(false);
  const [avatarFile, setAvatarFile] = useState("avatar");
  const toggleOn = () => {
    setHovered(true);
    const randomAvatar = avatars[Math.floor(Math.random() * avatars.length)];
    setAvatarFile(randomAvatar);
    // setTimeout(() => setHovered(!hovered), 1000);
    setTimeout(() => {
      console.log("Worked");
      setHovered(false);
    }, 1000);
  };

  return (
    <div className={"section landing-pg"}>
      <div className="section-content" id={id}>
        <h1>Stephen de Vaux</h1>
        <h2>
          Engineer of things. Human being with curiosity of world workings.
        </h2>
        <img
          className={hovered ? "animate__animated animate__tada" : ""}
          onMouseEnter={toggleOn}
          // onMouseLeave={toggleOff}
          src={`avatars/${avatarFile}.svg`}
          alt="Steve Avatar"
        ></img>

        {/* <Button onClick={() => scroll.scrollToTop()}>To top</Button> */}
        <div className="btn-smooth from-left">
          <Link
            activeClass="active"
            to="section2"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            About me
          </Link>
        </div>
      </div>
    </div>
  );
}
