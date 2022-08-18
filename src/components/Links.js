import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Pricing from "../pages/Pricing"
import  WhyUs  from "../pages/Why_us"
import Tools from "../pages/Tools"
import Blog from "../pages/Blog"
import Docs from "../pages/Docs"


function Links() {
    return (
        <BrowserRouter>
            <Routes>
        
                <Route path="/" element={<Home />}></Route>
                <Route path="/products" element={<Products />}></Route>
                <Route path="/pricing" element={<Pricing />}></Route>
                <Route path="/why_us" element={<WhyUs />}></Route>
                <Route path="/tools" element={<Tools />}></Route>
                <Route path="/blog" element={<Blog />}></Route>
                <Route path="/docs" element={<Docs />}></Route>

            </Routes>
        </BrowserRouter>

    
    );
    
}

export default Links