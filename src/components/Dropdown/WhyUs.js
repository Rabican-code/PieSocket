import React from "react";
import { WhyUsDropdown } from "./WhyUsData";
import { Link } from "react-router-dom";
import "./WhyUs.css"

function Dropdown() {

 
  return (
    <>
      <ul className="submenu-whyus">
        {WhyUsDropdown.map((item) => {
          return (
            <li  className={item.cName}  key={item.id}>
              <Link className="whyus-link"
                to={item.path}>
                {item.title}<br></br>
                <p className="about-whyus">{item.about}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;