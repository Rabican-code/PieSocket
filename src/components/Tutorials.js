import "./Tutorials.css"
import TutorialsData from "./TutorialsData"
import { Link } from "react-router-dom"
const Tutorials = () => {


    return (
        <>
         
             <div className="blogs">
                
                <h2 >Blogs & Tutorials</h2>
                <p>Recent use cases, blogs, tutorials and stories.</p>
            </div>

        <div className="tutorials">
                {TutorialsData.map((item) => {
                    return (
                <div className="tutorialsItems">   
                            <img className="tutorialsImg" src={item.img} alt={item.alt } />
                    <h2 className="tutorialsText">{item.text}</h2>
                    <h4 className="tutorialsText2">{item.text2}</h4>
                </div>
                )
            })}    
                

            </div>    
              <div className="viewmore"><Link className="viewmoreBtn" to="/viewmore" >View More Tutorials</Link></div>      
                {/*
                <div className="web_java">
                 <img className="web_java_img"  src={ web_java } />
                <h2 >How To Build A WebSocket Server In Java</h2>
                <p>1 week ago</p>
            </div>
            <div className="web_golang">
                <img className="web_golang_img" src={ web_golang } />                
                <h2 >How To Build WebSocket Server In Golang</h2>
                <p>2 weeks ago</p>
            </div>
            <div  className="chart">
                <img className="chart_img"  src={ chart } />
                <h2 >How To Build Realtime Charts With JavaScript and W...</h2>
                <p>3 months ago</p>
            </div>
            </div>
            
            <div className="viewmore"><a to="/viewmore" >View More Tutorials</a></div> */}



        </>
         
    )
}

export default Tutorials;