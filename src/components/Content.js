import React from "react"
import  logo  from "../Assets/piesocket-dashboard.gif"
import "./Content.css"
//
const Content = () => {


    return (
        <>
            <div className="top_links">
               <div className="whats_div"> <a href="/what_new" className="whats_new">WHAT'S NEW</a></div>
                <a href="/latest_version" className="latest_version">Just shipped version 3.0.4 </a>
            </div>
            <div>
                <h1 className="big_text">Cutting Edge Realtime  <br />  APIs and SDKs</h1>
                <p className="para">
                    Build mission-critial realtime applications with confidence of
                    guaranteed packet delivery within single digit milliseconds at any scale.
                </p>    
            </div>
            
            <div>
                <img src={logo} className="pie_gif" alt="pie_gif"/>
            </div>
            <div className="bottom_links">
                <a href="/get_started" className="get_started">Get started</a>
                <a href="/latest_version" className="use_cases">Use Cases </a>
            </div>
        </>
        //
    )
}

export default Content;