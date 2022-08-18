import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Footer"
function FooterShow() {
    return (
        <BrowserRouter>
            <Routes>
        
                <Route path="/footer" element={<Footer />}></Route>
                {/* <Route path="/WebSocket Tester" element={<Products />}></Route> */}

            </Routes>
        </BrowserRouter>

    
    );
    
}

export default FooterShow;