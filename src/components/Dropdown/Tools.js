import React from "react";
import { toolsDropdown } from "./ToolsData";
import { Link } from "react-router-dom";
import "./Tools.css"

function Dropdown() {

 
  return (
    <>
      <ul className="submenu-tools">
        {toolsDropdown.map((item) => {
          return (
            <li  className={item.cName}  key={item.id}>
              <Link className="tools-link"
                to={item.path}>
                {item.title}<br></br>
                <p className="about-tools">{item.about}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;