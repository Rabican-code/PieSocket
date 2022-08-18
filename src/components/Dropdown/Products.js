import React from "react";
import { productsDropdown } from "../NavData";
import { Link } from "react-router-dom";
import "./Products.css"

function Products() {

 
  return (
      <>
      <ul className="products" >
        {productsDropdown.map((item) => {
          return (
            <li  className={item.cName}  key={item.id}>
              <Link
                to={item.path} className="products-link">
                {item.title}<br></br>
                
              </Link>
              <p className="about">{item.about}</p> 
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Products;