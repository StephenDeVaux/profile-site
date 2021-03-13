import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Landing from "./Components/Landing";
import AboutMe from "./Components/AboutMe";
import Projects from "./Components/Projects";
import { Link, animateScroll } from "react-scroll";

import "./App.css";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar bg="light" expand="lg" fixed="top">
          <div className="navbarBrand">
            <Link
              activeClass="active"
              to="section1"
              spy={true}
              smooth={true}
              offset={-43}
              duration={500}
            >
              Stephen DV
            </Link>
          </div>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link
                activeClass="active"
                to="section2"
                spy={true}
                smooth={true}
                offset={-43}
                duration={500}
              >
                About me
              </Link>
              <Link
                activeClass="active"
                to="section3"
                spy={true}
                smooth={true}
                offset={-43}
                duration={500}
              >
                Projects
              </Link>
              <Link
                activeClass="active"
                to="section4"
                spy={true}
                smooth={true}
                offset={-43}
                duration={500}
              >
                Contact
              </Link>
              {/* <Link
                  activeClass="active"
                  to="section5"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Something more?
                </Link> */}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
      <main className="main">
        <Landing dark={true} id="section1" />
        <AboutMe id="section2" />
        <Projects id="section3" />
        <Contact id="section4" />
        <Button onClick={() => animateScroll.scrollToTop()}>Top</Button>
      </main>
    </div>
  );
}

export default App;
