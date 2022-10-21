import { useState, useRef } from 'react'
import CarouselsPop from '../reusable/carpop'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart, faStar, faStarHalfAlt, faLocationDot, faBars, faCaretLeft, faCaretRight, faMessage, faPhone, faArrowLeft } from "@fortawesome/free-solid-svg-icons"
const Popmessage = ({id, children}) => {

    const [messages, setmessages] = useState(0)
    const data = [{
      id:1,
      title:'Premium Sneakers',
      price:'22,000',
      location:'Washington DC',
      transaction:'Meet to Buy',
      features:[
        {
          id:1,
          type:'Category',
          info:'Fashion'
        },
        {
          id:2,
          type:'Condition',
          info:'Neatly used and clean'
        },
        {
          id:3,
          type:'Description',
          info:'White color, touch screen and lightweight'
        }
      ],
      images:
        [
          {
            image: "../../pics (4).jpg",
          },
          {
            image: "../../iwatch (13).jpg",
          },
          {
            image: "../../iwatch (14).jpg",
          },
          {
            image: "../../iwatch (1).jpg",
          },
          {
            image: "../../iwatch (2).jpg",
          },
          {
            image: "../../iwatch (3).jpg",
          },
          {
            image: "../../iwatch (4).jpg",
          },
          {
            image: "../../iwatch (5).jpg",
          },
          {
            image: "../../iwatch (6).jpg",
          },
          {
            image: "../../iwatch (7).jpg",
          },
          {
            image: "../../iwatch (8).jpg",
          },
          {
            image: "../../iwatch (9).jpg",
          },
          {
            image: "../../iwatch (10).jpg",
          },
          {
            image: "../../iwatch (11).jpg",
          },
          {
            image: "../../iwatch (12).jpg",
          },
          {
            image: "../../iwatch (15).jpg",
          }
        ]
      }
  ];
  const [all] = data
  const {images, features, title, price, location, transaction} = all
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