import { useState, useRef } from 'react'
import CarouselsPop from '../reusable/carpop'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart, faStar, faStarHalfAlt, faLocationDot, faBars, faCaretLeft, faCaretRight, faMessage, faPhone, faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import RevCards from '../reusable/revcards'
const Poprev = ({id, children}) => {

    const [messages, setmessages] = useState(0)
    return (
        <div className='revs'>
            <div className='details-container'>
                <RevCards/>
                <RevCards/>
                <RevCards/>
                <RevCards/>
            </div> 
        
        </div>
    )
}
export default Poprev