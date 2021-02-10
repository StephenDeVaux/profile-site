import logo from "./logo.svg";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar"
import Button from "react-bootstrap/Button";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar bg="light" expand="lg" fixed="top">
          <Navbar.Brand href="#home">Stephen DV</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">About me</Nav.Link>
              <Nav.Link href="#link">Projects</Nav.Link>
              <Nav.Link href="#link">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button onClick={() => console.log("hi there")}>Button yes</Button>
      </header>
    </div>
  );
}

export default App;
