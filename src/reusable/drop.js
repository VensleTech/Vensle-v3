import {useState} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
const Drop = ({children, info}) => {
    const [isOpen, setIsOpen] = useState(false)

    return(
        <div>
            <div className="brands">
                <p>{info}</p>{ children ? <FontAwesomeIcon icon={faChevronDown} onClick={()=>setIsOpen(!isOpen)} style={{cursor:'pointer'}}/> :null}
            </div>
            
            <div>
                {isOpen ? children : null}
            </div>
            <div className="hr"></div>
        </div>
    )
}
export default Drop