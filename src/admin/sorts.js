import { useState, useRef } from 'react'
import CarouselsPop from '../reusable/carpop'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart, faStar, faStarHalfAlt, faLocationDot, faBars, faCaretLeft, faCaretRight, faMessage, faPhone, faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import RevCards from '../reusable/revcards'
const Sorts = ({title, options}) => {

    const [messages, setmessages] = useState(0)
    return (
        <div className="sorts">
            <div><input type="checkbox" /><span>{title}</span> </div>
            <div>
                <select>
                    {
                        options.map(({val})=>(
                            <option>{val}</option>
                        ))
                    }
                </select>
            
            </div>
        </div>
    )
}
export default Sorts