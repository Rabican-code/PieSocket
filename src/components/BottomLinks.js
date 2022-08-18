import { Link } from "react-router-dom";
import "./BottomLinks.css"
const BottomLinks = () => {      

  return (
    <>

        
            <div  className="last-text">
                <p className="p1" >Get started for free</p>
                <p className="p2">Sign up to generate your API keys.</p>
            </div>

       <div>
        <div className="View_plans">
          <Link to="/View_plans">View Plans</Link>
        </div>
        <div className="try">
          <Link to="/try">Try For Free</Link>
          </div>
    </div> 
    </>
)
}

export default BottomLinks;