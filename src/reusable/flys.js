import {useContext, useEffect, useState} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { UserContext } from '../auth/usercontext'

const Flys = ({children, info, icon, inst, count}) => {
    const {collapse, setcollapse} = useContext(UserContext)
    const [openfly, setopenfly] = useState(inst)
   // console.log(openfly)
    useEffect(()=>{
        if(inst === true){
            setopenfly(true)
        }
    }, [inst])
   // console.log(children)
    return(
        <div>
            <div className="brands" onClick={()=>{setopenfly(!openfly); setcollapse(false)}} style={{cursor:'pointer'}}>
                <p>{icon} {info} </p>{count ? <div className="prodcount">{count}</div>:''}{children ? <FontAwesomeIcon icon={faChevronRight}  style={{cursor:'pointer', justifySelf:'end'}} className="rr"/> : null }
            </div>
            <div style={openfly === true?{display:'block', margin:'-10px 25px'}:{display:'none'}} >
                {
                 children
                }
            </div>
            
            {/* <div className="hr"></div> */}
        </div>
    )
}
export default Flys