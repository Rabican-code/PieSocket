import { Link } from "react-router-dom";
import "./Footer.css"
import {Resources,Support,Company,Legal} from "./FooterData"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import {} from "@fortawesome/fontawesome-svg-core"
function Footer() {

    return (
        <>
            <div className="footer">
            <div className="resdiv">    
            <ul className="resources">
                <h2 className="RESOURCES">RESOURCES</h2>
                {Resources.map((resources) => {
                    return (
                        <li className="resourcesItemLi" key={resources.id}>
                            <Link className="resourcesItem"
                                to={resources.link}>
                                {resources.name}<br></br>
                            </Link>
                        </li>
                    );
                })}
            
                </ul>
                </div>
                <div className="supdiv">
                <ul className="support">
                <h2 className="SUPPORT">SUPPORT</h2>
                {Support.map((support) => {
                    return (
                        <li key={support.id} className="supportItemLi">
                            <Link
                                to={support.link} className="supportItem">
                                {support.name}<br></br>
                            </Link>
                        </li>
                    );
                })}
            
                </ul>
                </div>
                <div className="comdiv">
                <ul className="company">
                <h2 className="COMPANY">COMPANY</h2>
                {Company.map((company) => {
                    return (
                        <li key={company.id} className="companyItemLi">
                            <Link
                                to={company.link} className="companyItem">
                                {company.name}<br></br>
                            </Link>
                        </li>
                    );
                })}
            
                </ul>
                </div>
                <div className="legaldiv">
                <ul className="legal">
                <h2 className="LEGAL">LEGAL</h2>
                {Legal.map((legal) => {
                    return (
                        <li key={legal.id} className="legalItemLi">
                            <Link
                                to={legal.link} className="legalItem">
                                {legal.name}<br></br>
                            </Link>
                        </li>
                    );
                })}
            
                    </ul>
                    </div>
                <div className="input">
                    <h3>GET YOUR API KEY</h3>
                    <h4>Start a trial, get a free account for 30 days.</h4>
                    <input className="email" placeholder="Enter your email" />
                    <Link to="/go" className="email-button">Get Started</Link>
                </div>
                <div className="footer-last">
                    <h4>
                        © 2022 SaaS Village LLP. All rights reserved.
                    </h4>
                </div>
               
            </div>

            
        </> 
    );
}

export default Footer;
