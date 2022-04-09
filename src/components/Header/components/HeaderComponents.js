import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const HeaderComponents = ({ menu }) => {
  return (
    <>
      {menu &&
        menu?.map((item, idx) => (
          <div key={item.id + "_" + idx}>
            <Link to={item.routes} className="nav-link">
              {item.name}
            </Link>
          </div>
        ))}
    </>
  );
};

export default HeaderComponents;
