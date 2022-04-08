import React from "react";
import { Nav } from "react-bootstrap";

const HeaderRightComponents = () => {
  const urlLinkedIn = "https://www.linkedin.com/in/luthfiam/";
  return (
    <>
      <Nav>
        <Nav.Link href={urlLinkedIn}>Luthfi AM</Nav.Link>
      </Nav>
    </>
  );
};

export default HeaderRightComponents;
