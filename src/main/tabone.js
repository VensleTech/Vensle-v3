import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart, faStar, faStarHalfAlt, faLocationDot, faMessage, faClose } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
const Tabone = ({children}) => {
    const [read, setread] = useState(false)
    return (
        <div> 
            {children}
        </div>
    )
}
export default Tabone