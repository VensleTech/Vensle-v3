import {useState} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
const Fly = ({children, info, icon}) => {
    const [isOpen, setIsOpen] = useState(false)
    return(
        <div>
            <div className="brands" onClick={()=>setIsOpen(!isOpen)} style={{cursor:'pointer'}}>
                <p>{icon} {info}</p> {children === undefined ? '' : <FontAwesomeIcon icon={faChevronRight}  style={{cursor:'pointer'}} className="rr"/>}
            </div>
            
            <div>
                {isOpen ? children : null}
            </div>
            <div className="hr"></div>
        </div>
    )
}
export default Fly