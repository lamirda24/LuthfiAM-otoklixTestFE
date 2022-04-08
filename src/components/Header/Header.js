import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import HeaderComponents from "./components/HeaderComponents";
import HeaderRightComponents from "./components/HeaderRightComponents";

const Header = () => {
  const [menu, setMenu] = useState(["Home", "New Post"]);
  return (
    <div>
      <Navbar
        style={{
          background: "#002eb4",
        }}
        variant="dark"
      >
        <Container fluid>
          <Navbar.Brand href="#">B-LOG</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <HeaderComponents menu={menu} />
            </Nav>
            <HeaderRightComponents />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
