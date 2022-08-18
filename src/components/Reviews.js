import "./Reviews.css"
import person from "../Assets/person.webp"
import access from "../Assets/Access.png"
const Reviews = () => {


    return (
        <>
            <div className="Reviews">
                <img className="access" src={ access } alt="Access" />
            </div>
            <div className="Reviews-anthony">
                 <p className="Reviews-text">Highly recommended services, our developer suggested it and it has been a lifesaver since then.</p>
                <img className="person" src={person} alt="person"/>  <p className="Reviews-info">Anthony La Rocca</p>
                <h3 className="Reviews-h3">/</h3>
                <p className="Reviews-info2">Manager, AccessDoorsAndPanels.com</p>
            </div>
        </>
    )
}

export default Reviews;