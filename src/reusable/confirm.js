import axios from "axios";
import { useState, useEffect, useRef, useContext, useMemo} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faSearch, faClose, faCheckCircle, faNairaSign, faDollarSign, faUser, faBars, faShoppingCart, faShoppingBag, faShoppingBasket, faCaretDown, faCircleQuestion } from "@fortawesome/free-solid-svg-icons";


const Confirm  = ({getreadstate}) => {
    // useEffect(()=>{
    //     document.body.style.overflow = 'hidden';
    // },[])
    const push = (instr) => {
        getreadstate(instr)
    }
    
    return(
        <div className="location-pop">
            <div className="lp-inner">
                <div className="iconium">
                    <FontAwesomeIcon icon={faCircleQuestion}/>
                </div>
                <div className="me">
                    Sure you want to reset?
                    
                    <div className="option">
                        <button onClick={(e)=>push(true)}>Yes</button>
                        <button onClick={(e)=>push(false)}>No</button>
                    </div>
                </div>
                
            </div>
        </div>
        
    )
}
export default  Confirm;
        