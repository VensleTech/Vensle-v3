import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons" 
import { faChevronRight, faChevronDown, faBars, faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons"
import { faSquare } from "@fortawesome/free-solid-svg-icons"
const Vertice = ({id, img, title, start, end, group}) => {
    return(
        <div>
            <div className="vertice">
                <div className="img">
                    <img src={img} alt=""/>
                </div>
                <div className='pdetails'>
                    <div className="prodname">
                        <p>{title}</p>
                        <div style={{cursor:'pointer'}}><Link to={"../../products/"+group+"/"+title}><FontAwesomeIcon icon={faArrowAltCircleRight} title={"Go to "+title}/></Link></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Vertice