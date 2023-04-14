import { useState } from "react"
import ProdPop from "../reusable/prodpop"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClose, faEllipsis, faCircleDot ,faHamburger, faTruck, faHandshakeSimple, faEdit, faEye, faStar, faStarHalfStroke, faChevronDown, faChevronCircleDown, faCheckDouble, faCheck, faCheckSquare } from "@fortawesome/free-solid-svg-icons"
import axios from "axios"

const ProdDisplay = ({type, width, height, vim, pdsize, pcsize, prod, getrefstate, approval, update}) => {
    const curr = localStorage.getItem('curr')
    const {id, feat_image:img, min_price, max_price, title, price,imgfolder:folder,approved, currency, recommended, superdeals, viewerschoice, toptrending, toppurchased} = prod
    const [isOpen, setIsOpen] = useState(false)
    const [showdrop, setshowdrop] = useState(false)
    const [causerefresh, setcauserefresh] = useState(0)
    const [success, setsuccess] = useState(false)
    const [topic, settopic] = useState({
        
    })
    // console.log(prod)
    const [products, setproducts] = useState(false)
    function formatMoney(n) {
        return (Math.round(n * 100) / 100).toLocaleString();
    }
    const price2 = formatMoney(price)
    const pricemin = formatMoney(min_price)
    const pricemax = formatMoney(max_price)
    const getreadstate = (readstate)=> {
        setIsOpen(readstate)
      }
    // const data = '&#65284;'
    function htmlDecode(input){
        var e = document.createElement('div');
        e.innerHTML = input;
        return e.childNodes[0].nodeValue;
      }
    //   console.log(htmlDecode(data))

    const getpartners = async (id) => {
        const data = {
            approved:'1'
        }
        try {
            const products = await axios.put("http://geo.vensle.com/api/"+approval+"/"+id, data)
            setsuccess(true)
            getrefstate(causerefresh+1)
        } catch (error) {
            console.log(error);
        }
    }
    // 
    const setsec = async (id, topic, side, st) => {
        const data = {
           [topic] : side 
          }
        console.log(update)
        setsuccess(false)
        try {
            const products = await axios.put("http://geo.vensle.com/api/"+update+"/"+id, data)
            console.log(products)
            setsuccess(true)
            getrefstate(causerefresh+1)
        } catch (error) { 
            console.log(error);
        }
    }
    return (
        
        <div className="ccc">
            {type === 1 ? 
                <div className="vertical" style={{width:width, height:height}} >
                    <div className="img" style={{height:vim}}  onClick={(e)=>setIsOpen(!isOpen)}>
                        <img src={"https://vensle.com/vensle-assets/backend/images/uploads/"+id+"/"+img.split(',')[0]} alt=""/>
                    </div>
                    <div className='pdetails' onClick={(e)=>setIsOpen(!isOpen)}>
                        <div className="prodname" style={{fontSize:pdsize}}>
                            <p>{title}</p>
                        </div>
                        <div className="price" style={{fontSize:pdsize}}  >
                            <p>{htmlDecode(currency)+price2}</p>
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
                    {isOpen === true ?
                     <ProdPop id={id} title={title} price={price2} img={img} getreadstate={getreadstate} information={prod}/>: null}
                </div>
: type === 2 ?
            <div className="horizontal" style={{width:width, height:height, gridTemplateColumns:height+' auto auto'}}  >
                <div className="img" style={{width:height, height:height}} onClick={(e)=>setIsOpen(!isOpen)}>
                    <img src={"http://geo.vensle.com/storage/"+folder+"/"+img} alt=""/>
                </div>
                <div className='pdetails' onClick={(e)=>setIsOpen(!isOpen)}>
                        <div className="prodname" style={{fontSize:pdsize}} >
                            <p>{title}</p>
                        </div>
                        <div className="price" style={{fontSize:pcsize}}  >
                            <p>{price !== undefined ? htmlDecode(currency)+price2 : htmlDecode(currency)+pricemin +' - '+htmlDecode(currency)+pricemax}</p>
                        </div>
                        {
                            success === true ?
                                <div>Successfully updated</div>
                            :
                            ''
                        }
                </div>
                <div className='bdetails' style={{position:'relative'}}>
                    <div className="pmenu">
                        <FontAwesomeIcon icon={faEllipsis} onClick={(e)=>setshowdrop(!showdrop)} style={{cursor:'pointer'}}/>
                    </div>
                    {
                        (prod.approved === "1" || prod.approved === 1) && showdrop === true ? 
                        <div className="dropdown" style={{top:'10px', right:'0'}}>
                        {
                            console.log(prod.approved)
                        }
                            <div onClick={(e)=>{settopic(e.target.innerText);setshowdrop(!showdrop);setsec(id)}}><b>Feature Product on...</b></div>
                            <div><span onClick={(e)=>{setshowdrop(!showdrop);setsec(id,'viewerschoice', '1', 'vc')}}>Viewer's Choice</span> {viewerschoice === "1" || viewerschoice === 1? <div className="inn"><FontAwesomeIcon icon={faCheck}/> <span onClick={(e)=>{setshowdrop(!showdrop);setsec(id,'viewerschoice', '0')}}>Remove</span> </div>: ''}</div>
                            <div><span onClick={(e)=>{setshowdrop(!showdrop);setsec(id, 'recommended', '1')}} >Recommended</span> {recommended === "1" || recommended === 1 ? <div className="inn"><FontAwesomeIcon icon={faCheck}/> <span onClick={(e)=>{setshowdrop(!showdrop);setsec(id,'recommended', '0')}}>Remove</span> </div>: ''}</div>
                            <div><span onClick={(e)=>{setshowdrop(!showdrop);setsec(id, 'superdeals', '1')}}>Super Deals</span> {superdeals === "1" || superdeals === 1 ? <div className="inn"><FontAwesomeIcon icon={faCheck}/> <span onClick={(e)=>{setshowdrop(!showdrop);setsec(id,'superdeals', '0')}}>Remove</span> </div>: ''}</div>
                            <div><span onClick={(e)=>{setshowdrop(!showdrop);setsec(id, 'toptrending', '1')}}>Top Trending</span> {toptrending === "1" || toptrending === 1 ? <div className="inn"><FontAwesomeIcon icon={faCheck}/> <span onClick={(e)=>{setshowdrop(!showdrop);setsec(id,'toptrending', '0')}}>Remove</span> </div>: ''}</div>
                            <div><span onClick={(e)=>{setshowdrop(!showdrop);setsec(id, 'toppurchased', '1')}}>Top Purchased</span> {toppurchased === "1" || toppurchased === 1 ? <div className="inn"><FontAwesomeIcon icon={faCheck}/> <span onClick={(e)=>{setshowdrop(!showdrop);setsec(id,'toppurchased', '0')}}>Remove</span> </div>: ''}</div>
                        </div>
                            :
                        (prod.approved === "0" || prod.approved === 0) && showdrop === true ? 
                        <div className="dropdown" style={{top:'10px', right:'0'}}>
                            <div onClick={(e)=>{setshowdrop(!showdrop);getpartners(id)}}><b>Approve Product</b></div>
                        </div> :
                        null
                    }
                    </div>
                    {isOpen === true ?
                        <ProdPop id={id} title={title} price={price2} img={img} getreadstate={getreadstate} information={prod}/>: null}
            </div>
            : type === 3 ? 
            <div className="vhor" style={{width:width, height:height}}  >
                <div className="img" style={{width:height, height:height}} onClick={(e)=>setIsOpen(!isOpen)}>
                    <img src={"https://vensle.com/vensle-assets/backend/images/uploads/"+id+"/"+img.split(',')[0]} alt=""/>
                </div>
                <div className='pdetails' onClick={(e)=>setIsOpen(!isOpen)}>
                    <div className="prodname" style={{fontSize:pdsize}} >
                        <p>{title}</p>
                    </div>
                    <div className="price" style={{fontSize:pcsize}}>
                        <p>{htmlDecode(currency)+price2}</p>
                    </div>
                </div>
                {isOpen === true ?
                    <ProdPop id={id} title={title} price={price2} img={img} getreadstate={getreadstate} information={prod}/>: null}
            </div>
        :
                <div className="vertical2" style={{width:width, height:height, backgroundColor:'white', border:'1px solid #F0F0F0', borderRadius:'10px'}} >
                    <div className="img" style={{height:vim}}  onClick={(e)=>setIsOpen(!isOpen)}>
                        <img src={"http://geo.vensle.com/storage/"+folder+"/"+img} alt=""/>
                    </div>
                    <div className='pdetails' onClick={(e)=>setIsOpen(!isOpen)}>
                        
                        <div className="price" style={{fontSize:pdsize}}  >
                            <p>{htmlDecode(currency)+price2}</p>
                            
                        </div>
                        <div className="prodname" style={{fontSize:pdsize}}>
                            <p>{title.substring(0, 36)}{title.length > 36 ? '...' : ''}</p>
                        </div>
                    </div>
                    {isOpen === true ?
                     <ProdPop id={id} title={title} price={price2} img={img} getreadstate={getreadstate} information={prod}/>: null}
                </div>}
        </div>
        
    )
}
export default ProdDisplay