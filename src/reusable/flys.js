import {useState} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import Flyouts from './flyouts'

const Flys = ({children, info, icon}) => {
    const [openfly, setopenfly] = useState(false)
    return(
        <div>
            <div className="brands" onClick={()=>setopenfly(!openfly)} style={{cursor:'pointer'}}>
                <p>{icon} {info}</p>{children ? <FontAwesomeIcon icon={faChevronRight}  style={{cursor:'pointer'}} className="rr"/> : null }
            </div>
            {
                openfly === true ? children
                : null
            }
            <div className="hr"></div>
        </div>
    )
}
export default Flys