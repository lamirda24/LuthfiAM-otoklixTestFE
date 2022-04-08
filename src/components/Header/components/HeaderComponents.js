import React from "react";
import { Nav } from "react-bootstrap";

const HeaderComponents = ({ menu }) => {
  return (
    <>
      {menu &&
        menu?.map((item) => (
          <>
            <Nav.Link href={item}>{item}</Nav.Link>
          </>
        ))}
    </>
  );
};

export default HeaderComponents;
