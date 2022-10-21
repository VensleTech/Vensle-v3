import { useState } from "react"
import {Link} from 'react-router-dom'
import { faHeart, faLocationDot, faBars,faClose, faStar, faEye, faHandshake, faTruck, faStarHalfAlt, faNairaSign, faMessage, faPaperPlane } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Drop from "../reusable/drop"
import Ops from "../reusable/ops"
import Search from "../reusable/search"
import Pcards from "../reusable/pcards"
import Fly from "../reusable/fly"
import ProdPop from "../reusable/prodpop"
import Popmessage from "./popmessage"

const MessageTable = ({id, img, heading, sender, body}) => {
    const [isOpen, setIsOpen] = useState(false)
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
  
    return(
        <div className="reusable-table-two">
            <div>{id}</div>
            <div>{sender}</div>
            <div>{body}</div>
            <div>5 minutes ago</div>
            <div className="viewer" onClick={(e)=>setIsOpen(!isOpen)} ><FontAwesomeIcon icon={faEye}/> View</div>
            {isOpen === true ?
                <div className='popcontainer' > 
                    <div  className="inner-container" style={{display:'block'}}>
                        <div className="up-bar">
                            <div>Thread</div>
                            <div style={{color:'black', fontSize:'1em', justifySelf:'end', cursor:'pointer'}} onClick={(e)=>setIsOpen(!isOpen)}><FontAwesomeIcon icon={faClose} /></div>
                        </div>
                        <Popmessage id={id} title={heading} price={body} img={img}>
                            <div className="msg-box">
                                <div className="chat-box">
                                    <p>James Boluwatife</p>
                                    <div className="incoming">
                                        Please can I have this product at
                                        a cheaper rate
                                    </div>
                                    <div className="outgoing">
                                        Why not! How soon do you need
                                        the product?
                                    </div>
                                </div>
                                <div className="message-field">
                                    <input type="text" placeholder="Write a message"/>
                                    <FontAwesomeIcon icon={faPaperPlane} className="send-button"/>
                                </div>
                            </div>
                            <div className="msg-pop">
                                <div className='displ'>
                                    <img src={images[0].image} alt=''/>
                                </div>
                                <div className="dr-first">
                                    <div className="caption">
                                        <h3>{title}</h3> <p><FontAwesomeIcon icon={faHeart} /></p>
                                    </div>
                                    <div className="dr-price">
                                        <h4>Price</h4><span>Rating <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStarHalfAlt} /></span>
                                        <p><FontAwesomeIcon icon={faNairaSign} /> {price}</p>
                                    </div>
                                    <div>
                                        <div className="table-within">
                                            <h3>Features</h3>
                                            <table>
                                            {
                                            features.map(({type, info})=>(
                                                <tr>
                                                    <td>{type}</td>
                                                    <td>{info}</td>
                                                </tr>
                                            ))
                                            }
                                            </table>
                                        </div>
                                    </div>
                                    <div className='bottom'>
                                        <Link to={"/details/"+id}><div className='more-details'>
                                            <FontAwesomeIcon icon={faBars} /><p>More details</p>
                                        </div></Link>
                                    </div>
                                </div>
                            </div>
                        </Popmessage>
                    </div>
                </div>: null
            }
        </div>
    )
}
export default MessageTable