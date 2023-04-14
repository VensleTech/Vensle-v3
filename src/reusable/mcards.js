import { useState } from "react"
import ProdPop from "./prodpop"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClose, faHamburger, faTruck, faHandshakeSimple } from "@fortawesome/free-solid-svg-icons"
const Mcards = ({type, width, height, vim, pdsize, pcsize, id, img, title, price, information}) => {
    function formatMoney(n) {
        return (Math.round(n * 100) / 100).toLocaleString();
    }
    price = formatMoney(price)
    return (
        <div>
            {type === 1 ? 
                <div className="vertical" style={{width:width, height:height}} >
                    <div className="img" style={{height:vim}} >
                        <img src={"https://vensle.com/vensle-assets/backend/images/uploads/"+id+"/"+img.split(',')[0]} alt=""/>
                    </div>
                    <div className='pdetails'>
                        <div className="prodname" style={{fontSize:pdsize}}>
                            <p>{title}</p>
                        </div>
                        <div className="price" style={{fontSize:pdsize}}  >
                            <p>${price}</p>
                        </div>
                    </div>
                    <div className='bdetails'>
                        <div className="prodname">
                            {
                                // data.map(({type, id, avail})=>(
                                //     <div className="must">
                                //     <span>{avail === 1 && id === 1 ?<div  className="green" title={type}><FontAwesomeIcon icon={faHandshakeSimple}/></div>  
                                //     : avail === 1 && id === 2 ? <div  className="green" title={type}><FontAwesomeIcon icon={faTruck}/></div> 
                                //     : null}</span>
                                //     </div>
                                // ))
                            }
                        </div>
                    </div>
                </div>
: type === 2 ?
            <div className="horizontal" style={{width:width, height:height, gridTemplateColumns:height+' auto auto', cursor:'pointer', borderRadius:'10px', backgroundColor:'rgba(0, 0, 0, 0.03)'}}  >
                <div className="img" style={{width:height, height:height}}>
                    <img src={"https://vensle.com/vensle-assets/backend/images/uploads/"+id+"/"+img} alt=""/>
                </div>
                <div className='pdetails'>
                        <div className="prodname" style={{fontSize:pdsize}} >
                            <p>{title}</p>
                        </div>
                        <div className="price" style={{fontSize:pcsize}}  >
                            <p>${price}</p>
                        </div>
                </div>
                <div className='bdetails'>
                        <div className="prodname">
                            {
                                // data.map(({type, avail, id})=>(
                                //     <div className="must">
                                //     <span>{avail === 1 && id === 1 ?<div  className="green" title={type}><FontAwesomeIcon icon={faHandshakeSimple}/></div>  
                                //     : avail === 1 && id === 2 ? <div  className="green" title={type}><FontAwesomeIcon icon={faTruck}/></div> 
                                //     : null}</span>
                                //     </div>
                                // ))
                            }
                      </div>
                    </div>
            </div>
            :
            <div className="vhor" style={{width:width, height:height}}  >
                <div className="img" style={{width:height, height:height}}>
                    <img src={"https://vensle.com/vensle-assets/backend/images/uploads/"+id+"/"+img.split(',')[0]} alt=""/>
                </div>
                <div className='pdetails'>
                    <div className="prodname" style={{fontSize:pdsize}} >
                        <p>{title}</p>
                    </div>
                    <div className="price" style={{fontSize:pcsize}}>
                        <p>${price}</p>
                    </div>
                </div>
            </div>}
        </div>
        
    )
}
export default Mcards