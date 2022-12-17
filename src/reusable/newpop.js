import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart, faStar, faStarHalfAlt, faLocationDot, faMessage, faClose } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
const Newpup = ({children, getreadstate, heading}) => {
    
    const [read, setread] = useState(false)

    const bill = (e)=>{
        if(e.target === e.currentTarget){
            getreadstate(false)
        }
    }
    const billy = (e)=>{
        getreadstate(false)
    }
    return (
        <div className='popcontainer' style={{zIndex:'1500'}} onWheel={bill} onClick={bill}> 
            <div  className="inner-container" style={{display:'block', width:'800px', minHeight:'50%', position:'relative'}}>
                <div className="up-bar">
                    <div>{heading}</div>
                    <div style={{color:'black', fontSize:'1em', justifySelf:'end', cursor:'pointer'}} onClick={billy}><FontAwesomeIcon icon={faClose} /></div>
                </div>
                <div className='revd'  onWheel={(e)=>{e.preventDefault()}}>
                    <div className='details-container' style={{}} >
                    {children}
                    </div> 
                
                </div>
            </div>
        </div>
    )
}
export default Newpup