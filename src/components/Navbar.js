import { Link } from "react-router-dom";
import logo from "../Assets/piesocket-text.png";
// import Products from "./Dropdown/Products";
// import WhyUs from "./Dropdown/WhyUs";
// import Tools from "./Dropdown/Tools";
import { useState } from "react"
import { productsDropdown } from "./NavData";
import "./Dropdown/Products.css"
import { toolsDropdown } from "./Dropdown/ToolsData";
import "./Dropdown/Tools.css"
import { WhyUsDropdown } from "./Dropdown/WhyUsData";
import "./Dropdown/WhyUs.css"
const Home= () => {
    const [product, setProducts] = useState(false);
    const [whyus, setWhyUs] = useState(false);
    const [tools, setTools] = useState(false);
  return (
    <>
      <nav>
              <img src={logo} className='navbar-logo' alt="piesocket_logo"/>
        <ul className="topnav_div">
          
          
          <li className="topnav" >
            
            <li className="navItem" onMouseLeave={() => { setProducts(false) }} onMouseEnter={() => { setProducts(true); setWhyUs(false); setTools(false) }} onClick={() => { setProducts(!product) }}>Products</li>
            
            {product && 
              <ul className="products" onMouseEnter={() => { setProducts(true) }} onMouseLeave={() => { setProducts(false) }}>
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
      </ul>}
            
            <Link  className="navItem" to="/pricing">Pricing</Link>
          
            <li className="navItem" onMouseLeave={() => {setWhyUs(false)}} onMouseEnter={() => { setWhyUs(true); setProducts(false); setTools(false) }} onClick={() => { setWhyUs(!whyus) }}>Why us</li>
            
            {whyus && <ul className="submenu-whyus" onMouseLeave={() => { setWhyUs(false) }} onMouseEnter={() => { setWhyUs(true) }}>
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
      </ul>}
          
            <li className="navItem" onMouseLeave={() => {setTools(false)}} onMouseEnter={() => { setTools(true); setProducts(false); setWhyUs(false) }} onClick={() => { setTools(!tools) }}>Tools</li>
            
            {tools && <ul className="submenu-tools" onMouseLeave={() => { setTools(false) }} onMouseEnter={() => { setTools(true) }}>
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
      </ul>}

            <Link className="navItem" to="/blog">Blog</Link>
          
            <Link className="navItem" to="/docs">Docs</Link>
            </li>
        </ul>


      <div>
        <div className="nav-login">
          <Link to="/login">Login</Link>
        </div>
        <div className="nav-get_started">
          <Link to="/get_started">Get Started</Link>
          </div>
        </div>
      </nav>
    </>
  )
};

export default Home;