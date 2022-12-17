import { useState } from "react"
import ProdPop from "./prodpop"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClose, faHamburger, faTruck, faHandshakeSimple } from "@fortawesome/free-solid-svg-icons"
import GrocePop from "./gpop"
const Gcards = ({type, width, height, vim, pdsize, pcsize, id, img, title, price, imgfolder, information}) => {
    const [isOpen, setIsOpen] = useState(false)
    function formatMoney(n) {
        return (Math.round(n * 100) / 100).toLocaleString();
    }
    price = formatMoney(price)
    const getreadstate = (readstate)=> {
        setIsOpen(readstate)
      }
    // const data = trans
    return (
        
        <div>
            {
                // thestate === true ? children : null
            }
            {type === 1 ? 
                <div className="vertical" style={{width:width, height:height}}  onClick={(e)=>setIsOpen(!isOpen)}>
                    <div className="img" style={{height:vim}}>
                        <img src={"http://geo.vensle.com/storage/groceries/"+imgfolder+"/"+img.split(',')[0]} alt=""/>
                    </div>
                    <div className='pdetails'>
                        <div className="prodname" style={{fontSize:pdsize}}>
                            <p>{title}</p>
                        </div>
                        <div className="price" style={{fontSize:pdsize}}>
                            <p>${price}</p>
                        </div>
                    </div>
                    <div className='bdetails' onClick={(e)=>setIsOpen(!isOpen)}>
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
                    {isOpen === true ?
                     <GrocePop id={id} title={title} price={price} img={img} imgfolder={imgfolder} getreadstate={getreadstate} information={information}/>: null}
                </div>
: type === 2 ?
            <div className="horizontal" style={{width:width, height:height, gridTemplateColumns:height+' auto auto'}}onClick={(e)=>setIsOpen(!isOpen)}>
                <div className="img" style={{width:height, height:height}}>
                    <img src={"http://geo.vensle.com/storage/groceries/"+imgfolder+"/"+img.split(',')[0]} alt=""/>
                </div>
                <div className='pdetails' >
                        <div className="prodname" style={{fontSize:pdsize}}>
                            <p>{title}</p>
                        </div>
                        <div className="price" style={{fontSize:pcsize}}>
                            <p>${price}</p>
                        </div>
                </div>
                <div className='bdetails' onClick={(e)=>setIsOpen(!isOpen)}>
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
                    {isOpen === true ?
                        <GrocePop id={id} title={title} price={price} img={img} imgfolder={imgfolder} getreadstate={getreadstate} information={information}/>: null}
            </div>
            :
            <div className="vhor" style={{width:width, height:height}}  onClick={(e)=>setIsOpen(!isOpen)}>
                <div className="img" style={{width:height, height:height}}>
                    <img src={"http://geo.vensle.com/storage/groceries/"+imgfolder+"/"+img.split(',')[0]} alt=""/>
                </div>
                <div className='pdetails' onClick={(e)=>setIsOpen(!isOpen)}>
                    <div className="prodname" style={{fontSize:pdsize}}>
                        <p>{title}</p>
                    </div>
                    <div className="price" style={{fontSize:pcsize}}>
                        <p>${price}</p>
                    </div>
                </div>
                {isOpen === true ?
                    <GrocePop id={id} title={title} price={price} img={img} imgfolder={imgfolder} getreadstate={getreadstate} information={information}/>: null}
            </div>}
        </div>
        
    )
}
export default Gcards