import { useState } from "react"
import { faUser, faLocationDot, faDashboard,faClose, faHome, faEye, faBox, faPersonDress, faBoxesPacking, faGear, faMessage } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ProdPop from "../reusable/prodpop"

const ReusableTable = ({id, img, title, price, trans}) => {
    const [isOpen, setIsOpen] = useState(false)
    const getreadstate = (readstate)=> {
        setIsOpen(readstate)
      }
    return(
        <div className="reusable-table">
            <div>{id}</div>
            <div className="img">
                <img src={img} alt="" />
            </div>
            <div>{title}</div>
            <div>Nigeria</div>
            <div>5 minutes ago</div>
            <div>{price}</div>
            <div className="viewer" onClick={(e)=>setIsOpen(!isOpen)} ><FontAwesomeIcon icon={faEye}/> View</div>
            {isOpen === true ?
                <ProdPop id={id} title={title} price={price} img={img} getreadstate={getreadstate}/>: null
            }
        </div>
    )
}

export default ReusableTable