import React from "react";
import { Nav } from "react-bootstrap";

const HeaderComponents = ({ menu }) => {
  return (
    <>
      {menu &&
        menu?.map((item, idx) => (
          <>
            <Nav.Link key={item + idx} href={item}>
              {item}
            </Nav.Link>
          </>
        ))}
    </>
  );
};

export default HeaderComponents;
