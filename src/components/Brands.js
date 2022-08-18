import "./Brands.css"
import Redhat from "../Assets/Redhat.png"
import Ghoul from "../Assets/Ghoul.png"
import Akamai from "../Assets/Akamai.png"
import Ingenico from "../Assets/Ingenico.png"
import Eaton from "../Assets/Eaton.png"

const Brands = () => {
    return (
        <>
        <div>
            <h2 className="brands_text">TRUSTED BY INDUSTRY LEADERS</h2>
        </div>
            
        <div className="brands" >
       
            <img src={Redhat} alt="redhat"/>
          
            <img src={Ghoul} alt="ghoul"/>
      
            <img src={Akamai} alt="akamai"/>
       
            <img src={Ingenico} alt="ingenico"/>
      
            <img src={Eaton} alt="eaton"/>
        </div>
        </>

    );
}

export default Brands;

