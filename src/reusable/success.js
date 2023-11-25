import axios from "axios";
import { useState, useEffect, useRef, useContext, useMemo} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faSearch, faClose, faCheckCircle, faNairaSign, faDollarSign, faUser, faBars, faShoppingCart, faShoppingBag, faShoppingBasket, faCaretDown } from "@fortawesome/free-solid-svg-icons";


const Success  = () => {
    // useEffect(()=>{
    //     document.body.style.overflow = 'hidden';
    // },[])

    
    return(
        <div className="location-pop">
            <div className="lp-inner">
                <div className="iconium">
                    <FontAwesomeIcon icon={faCheckCircle}/>
                </div>
                <div className="me">
                    Successful
                </div>
            </div>
        </div>
        
    )
}
export default  Success;
        