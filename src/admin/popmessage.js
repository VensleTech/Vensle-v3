import { useState, useRef } from 'react'
import CarouselsPop from '../reusable/carpop'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart, faStar, faStarHalfAlt, faLocationDot, faBars, faCaretLeft, faCaretRight, faMessage, faPhone, faArrowLeft } from "@fortawesome/free-solid-svg-icons"
const Popmessage = ({id, children}) => {
    return (
        <div>
            <div className='details-container'>
                {
                  children
                }
            </div> 
        
        </div>
    )
}
export default Popmessage