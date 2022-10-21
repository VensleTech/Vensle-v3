import { useState } from "react"
import ProdPop from "./prodpop"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClose, faHamburger, faTruck, faHandshakeSimple } from "@fortawesome/free-solid-svg-icons"
const Pcards = ({type, width, height, vim, pdsize, pcsize, id, img, title, price, children, thestate, trans}) => {
    const [isOpen, setIsOpen] = useState(false)
    const data = trans
    return (
        
        <div>
            {
                // thestate === true ? children : null
            }
            {type === 1 ? 
                <div className="vertical" style={{width:width, height:height}} >
                    <div className="img" style={{height:vim}}>
                        <img src={img} alt=""/>
                    </div>
                    <div className='pdetails' onClick={(e)=>setIsOpen(!isOpen)}>
                        <div className="prodname" style={{fontSize:pdsize}}>
                            <p>{title}</p>
                        </div>
                        <div className="price" style={{fontSize:pdsize}}>
                            <p>{price}</p>
                        </div>
                    </div>
                    <div className='bdetails' onClick={(e)=>setIsOpen(!isOpen)}>
                        <div className="prodname">
                            {
                                data.map(({type, id, avail})=>(
                                    <div className="must">
                                    <span>{avail === 1 && id === 1 ?<div  className="green" title={type}><FontAwesomeIcon icon={faHandshakeSimple}/></div>  
                                    : avail === 1 && id === 2 ? <div  className="green" title={type}><FontAwesomeIcon icon={faTruck}/></div> 
                                    : null}</span>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    {isOpen === true ?
                    <div className='popcontainer' > 
                        <div  className="inner-container">
                        <div style={{color:'black', fontSize:'1em', justifySelf:'end', cursor:'pointer'}} onClick={(e)=>setIsOpen(!isOpen)}><FontAwesomeIcon icon={faClose} /></div>
                            <ProdPop id={id} title={title} price={price} img={img}/>
                        </div>
                    </div>: null}
                </div>
: type === 2 ?
            <div className="horizontal" style={{width:width, height:height, gridTemplateColumns:height+' auto auto'}}>
                <div className="img" style={{width:height, height:height}}>
                    <img src={img} alt=""/>
                </div>
                <div className='pdetails' onClick={(e)=>setIsOpen(!isOpen)}>
                        <div className="prodname" style={{fontSize:pdsize}}>
                            <p>{title}</p>
                        </div>
                        <div className="price" style={{fontSize:pcsize}}>
                            <p>{price}</p>
                        </div>
                </div>
                <div className='bdetails' onClick={(e)=>setIsOpen(!isOpen)}>
                        <div className="prodname">
                            {
                                data.map(({type, avail, id})=>(
                                    <div className="must">
                                    <span>{avail === 1 && id === 1 ?<div  className="green" title={type}><FontAwesomeIcon icon={faHandshakeSimple}/></div>  
                                    : avail === 1 && id === 2 ? <div  className="green" title={type}><FontAwesomeIcon icon={faTruck}/></div> 
                                    : null}</span>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                {isOpen === true ?
                    <div className='popcontainer' > 
                        <div  className="inner-container">
                        <div style={{color:'black', fontSize:'1em', justifySelf:'end', cursor:'pointer'}} onClick={(e)=>setIsOpen(!isOpen)}><FontAwesomeIcon icon={faClose} /></div>
                            <ProdPop id={id} title={title} price={price} img={img}/>
                        </div>
                    </div>: null}
            </div>
            :
            <div className="vhor" style={{width:width, height:height}}>
                <div className="img" style={{width:height, height:height}}>
                    <img src={img} alt=""/>
                </div>
                <div className='pdetails' onClick={(e)=>setIsOpen(!isOpen)}>
                    <div className="prodname" style={{fontSize:pdsize}}>
                        <p>{title}</p>
                    </div>
                    <div className="price" style={{fontSize:pcsize}}>
                        <p>{price}</p>
                    </div>
                </div>
                {isOpen === true ?
                    <div className='popcontainer' > 
                        <div  className="inner-container">
                        <div style={{color:'black', fontSize:'1em', justifySelf:'end', cursor:'pointer'}} onClick={(e)=>setIsOpen(!isOpen)}><FontAwesomeIcon icon={faClose} /></div>
                            <ProdPop id={id} title={title} price={price} img={img}/>
                        </div>
                    </div>: null}
            </div>}
        </div>
        
    )
}
export default Pcards