import { useState, useEffect, useRef, useContext } from "react"
import ProdPop from "../reusable/prodpop"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClose, faEllipsis, faPaperPlane ,faHamburger, faTruck, faHandshakeSimple, faEdit, faEye, faStar, faStarHalfStroke, faChevronDown, faChevronCircleDown, faCheckDouble, faCheck, faCheckSquare } from "@fortawesome/free-solid-svg-icons"
import axios from "axios"
import Success from "../reusable/success"
import Popmessage from "./popmessage"
import { UserContext } from "../auth/usercontext"
import { Link } from "react-router-dom"

const ProdDisplay = ({type, width, height, vim, pdsize, pcsize, prod, getrefstate, approval, update, authlev}) => {
    const curr = localStorage.getItem('curr')
    const {details:{id:identify, name},setDetails} = useContext(UserContext)
    const {id, feat_image:img, min_price, max_price, title, price,imgfolder:folder,approved, location, currency, item_condition, recommended, superdeals, viewerschoice, toptrending, toppurchased, full_name, category_tree, description} = prod
    const [isOpen, setIsOpen] = useState(false)
    const [showdrop, setshowdrop] = useState(false)
    const [sdrop, setsdrop] = useState(false)
    const [causerefresh, setcauserefresh] = useState(0)
    const [success, setsuccess] = useState(false)
    const [successful, setsuccessful] = useState(false)
    const [prodid, setprodid] = useState('')
    const [popopen, setpopopen] = useState(false)
    const [topic, settopic] = useState({})
    const [chatscard, setchatscard] = useState([])
    const [message, setMessage] = useState('')
    const [prcode, setprcode] = useState(prod.ref_no.split('-')[1])
    const brews = useRef('')
    const milli = useRef('')
    console.log(prod)
    const [products, setproducts] = useState(false)
    function formatMoney(n) {
        return (Math.round(n * 100) / 100).toLocaleString();
    }
    useEffect(()=>{
        document.body.addEventListener('click', (e)=>{
            if(brews && !brews.current.contains(e.target)){
                setshowdrop(false)
            } 
            if(milli && !milli.current.contains(e.target)){
                setsdrop(false)
            } 
        })
    })
    
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
    //  // console.log(htmlDecode(data))
    const deletes = async(input) =>{
        try {
            const products = await axios.delete("http://vensle.com/api/api/"+approval+"/"+input)
           // console.log(products)
            setsuccessful(true)
            setTimeout(() => {
                setsuccessful(false)
            }, 3000);
            getrefstate(causerefresh+1)
        } catch (error) { 
           // console.log(error);
        }
    }
    const getpartners = async (id,  vals) => {
        const data = {
            approved:vals
        }
        try {
            const products = await axios.put("http://vensle.com/api/api/"+approval+"/"+id, data)
            if (vals !== '2') {
                setsuccessful(true)
            }
            else{
                setpopopen(!popopen)
                setsdrop(!sdrop)
            }
            setTimeout(() => {
                setsuccessful(false)
            }, 3000);
            getrefstate(causerefresh+1)
        } catch (error) {
           // console.log(error);
        }
    }
    // 
    const setsec = async (id, topic, side, st) => {
        const data = {
           [topic] : side 
          }
       // console.log(update)
        setsuccess(false)
        try {
            const products = await axios.put("http://vensle.com/api/api/"+update+"/"+id, data)
           // console.log(products)
            setsuccessful(true)
            setTimeout(() => {
                setsuccessful(false)
            }, 3000);
            getrefstate(causerefresh+1)
        } catch (error) { 
           // console.log(error);
        }
    }
    const targ = (target) =>{
        if (milli.current.contains(target)) {
            setsdrop(!sdrop)
           // console.log('same')
        }
        else{
            setIsOpen(!isOpen)
        }
    }
    const openmessage = (val) => {
        setprodid(val)
        setpopopen(true)
    }
    const send = async ()=>{
        // console.log('clicked')
         var data = {
             senderid:''+identify+'',
             receiverid:prod.user_id+'',
             productid:prodid,
             message:message
         };
         setchatscard([...chatscard, {
               message:message,
               position:1
             }]);
         try {
             const response = await axios.post('http://vensle.com/api/api/message', data);
             getpartners(id, '2')

            console.log(response.data);
           } catch (err) {
                  // console.log(err)
             // setpayload('An error occured');
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
            <div className="horizontal" style={{width:width, height:height, gridTemplateColumns:height+' auto'}}  >
                <div className="img" style={{width:height, height:height}} onClick={(e)=>setIsOpen(!isOpen)}>
                    <img src={"http://vensle.com/api/storage/"+folder+"/"+img} alt=""/>
                </div>
                <div className="monb"> 
                    <div className='pdetails grids' >
                            <div onClick={(e)=>setIsOpen(!isOpen)}>
                                <div className="prodname" style={{fontSize:pdsize}} >
                                    <p>{title}</p>
                                </div>
                                <div className="price" style={{fontSize:pcsize}}  >
                                    <p>{price !== undefined ? htmlDecode(currency)+price2 : htmlDecode(currency)+pricemin +' - '+htmlDecode(currency)+pricemax}</p>
                                </div>
                            </div>
                            <div style={{position:'relative'}} ref={milli}>
                                <div className="pmenu wide" >
                                    <FontAwesomeIcon icon={faEllipsis} onClick={(e)=>setsdrop(!sdrop)} style={{cursor:'pointer'}} />
                                </div>
                                {
                                    (prod.approved === "1" || prod.approved === 1) && sdrop === true && authlev === 1 ?
                                        <div className="dropdown" style={{top:'10px', right:'0'}}>
                                            <div onClick={(e)=>{settopic(e.target.innerText);setsdrop(!sdrop);setsec(id)}}><b>Feature Product on...</b></div>
                                            <div><span onClick={(e)=>{setsdrop(!sdrop);setsec(id,'viewerschoice', '1', 'vc')}}>Viewer's Choice</span> {viewerschoice === "1" || viewerschoice === 1? <div className="inn"><FontAwesomeIcon icon={faCheck}/> <span onClick={(e)=>{setsdrop(!sdrop);setsec(id,'viewerschoice', '0')}}>Remove</span> </div>: ''}</div>
                                            <div><span onClick={(e)=>{setsdrop(!sdrop);setsec(id, 'recommended', '1')}} >Recommended</span> {recommended === "1" || recommended === 1 ? <div className="inn"><FontAwesomeIcon icon={faCheck}/> <span onClick={(e)=>{setsdrop(!sdrop);setsec(id,'recommended', '0')}}>Remove</span> </div>: ''}</div>
                                            <div><span onClick={(e)=>{setsdrop(!sdrop);setsec(id, 'superdeals', '1')}}>Super Deals</span> {superdeals === "1" || superdeals === 1 ? <div className="inn"><FontAwesomeIcon icon={faCheck}/> <span onClick={(e)=>{setsdrop(!sdrop);setsec(id,'superdeals', '0')}}>Remove</span> </div>: ''}</div>
                                            <div><span onClick={(e)=>{setsdrop(!sdrop);setsec(id, 'toptrending', '1')}}>Top Trending</span> {toptrending === "1" || toptrending === 1 ? <div className="inn"><FontAwesomeIcon icon={faCheck}/> <span onClick={(e)=>{setsdrop(!sdrop);setsec(id,'toptrending', '0')}}>Remove</span> </div>: ''}</div>
                                            <div><span onClick={(e)=>{setsdrop(!sdrop);setsec(id, 'toppurchased', '1')}}>Top Purchased</span> {toppurchased === "1" || toppurchased === 1 ? <div className="inn"><FontAwesomeIcon icon={faCheck}/> <span onClick={(e)=>{setsdrop(!sdrop);setsec(id,'toppurchased', '0')}}>Remove</span> </div>: ''}</div>
                                        </div>
                                        :
                                        (prod.approved === "0" || prod.approved === 0) && sdrop === true && authlev === 1? 
                                        <div className="dropdown" style={{top:'10px', right:'0'}}>
                                            <div onClick={(e)=>{setsdrop(!sdrop);getpartners(id, '1')}} ><b>Approve Product</b></div>
                                            <div onClick={(e)=>{openmessage(id)}} ><b>Decline Product</b></div>
                                        </div> 
                                        :
                                        sdrop === true  && authlev !== 1?
                                        <div className="dropdown" style={{top:'10px', right:'0'}}>
                                            <div><span onClick={(e)=>deletes(prod.ref_no)}>Delete product</span> </div>
                                            <div><Link to={'/admin/predit/'+prcode}>Edit</Link></div>
                                        </div>
                                        :
                                        null
                                }
                            </div>
                    </div>
                    
                    <div className='pdetails lose' onClick={(e)=>setIsOpen(!isOpen)}>
                            <div className="prodname" style={{fontSize:'1em'}} >
                                <p>Vendor: <strong>{full_name}</strong></p>
                            </div>
                            <div className="prodname" style={{fontSize:'1em'}} >
                                <p>Product Category: <strong>{category_tree.split(',')[category_tree.split(',').length-1]}</strong></p>
                            </div>
                            <div className="prodname" style={{fontSize:'1em'}} >
                                <p>Status: <strong>{approved === '1' ? <span style={{backgroundColor:'green', padding:'5px', color:'white'}}>Approved</span>:approved === '2'? <span style={{backgroundColor:'red', padding:'5px', color:'white'}}>Declined</span>:<span style={{backgroundColor:'#FFBF00', padding:'5px', color:'black'}}>Not yet approved</span>}</strong></p>
                            </div>
                            <div className="prodname" style={{fontSize:'1em'}} >
                                <p>Status: <strong>{item_condition}</strong></p>
                            </div>
                    </div>
                    <div className='pdetails lose' onClick={(e)=>setIsOpen(!isOpen)}>
                            <div className="prodname" style={{fontSize:'1em'}} >
                                <p>Location: <strong>{location.split('+|+')[location.split('+|+').length -1]}</strong></p>
                            </div>
                            {/* <div className="prodname" style={{fontSize:'1em'}} >
                                <p>Description: <strong>{description}</strong></p>
                            </div> */}
                    </div>
                </div>
                <div className="monb2"> 
                    <div className='pdetails grids' onClick={(e)=>targ(e.target)}>
                            <div >
                                <div className="prodname" style={{fontSize:pdsize}} >
                                    <p>{title}</p>
                                </div>
                                <div className="price" style={{fontSize:pcsize}}  >
                                    <p>{price !== undefined ? htmlDecode(currency)+price2 : htmlDecode(currency)+pricemin +' - '+htmlDecode(currency)+pricemax}</p>
                                </div>
                            </div>
                            <div style={{position:'relative'}} ref={milli}>
                                <div className="pmenu narrow" >
                                    <FontAwesomeIcon icon={faEllipsis} onClick={(e)=>setsdrop(!sdrop)} style={{cursor:'pointer'}} />
                                </div>
                                {
                                    (prod.approved === "1" || prod.approved === 1) && sdrop === true && authlev === 1 ?
                                        <div className="dropdown" style={{top:'10px', right:'0'}}>
                                            <div onClick={(e)=>{settopic(e.target.innerText);setsdrop(!sdrop);setsec(id)}}><b>Feature Product on...</b></div>
                                            <div><span onClick={(e)=>{setsdrop(!sdrop);setsec(id,'viewerschoice', '1', 'vc')}}>Viewer's Choice</span> {viewerschoice === "1" || viewerschoice === 1? <div className="inn"><FontAwesomeIcon icon={faCheck}/> <span onClick={(e)=>{setsdrop(!sdrop);setsec(id,'viewerschoice', '0')}}>Remove</span> </div>: ''}</div>
                                            <div><span onClick={(e)=>{setsdrop(!sdrop);setsec(id, 'recommended', '1')}} >Recommended</span> {recommended === "1" || recommended === 1 ? <div className="inn"><FontAwesomeIcon icon={faCheck}/> <span onClick={(e)=>{setsdrop(!sdrop);setsec(id,'recommended', '0')}}>Remove</span> </div>: ''}</div>
                                            <div><span onClick={(e)=>{setsdrop(!sdrop);setsec(id, 'superdeals', '1')}}>Super Deals</span> {superdeals === "1" || superdeals === 1 ? <div className="inn"><FontAwesomeIcon icon={faCheck}/> <span onClick={(e)=>{setsdrop(!sdrop);setsec(id,'superdeals', '0')}}>Remove</span> </div>: ''}</div>
                                            <div><span onClick={(e)=>{setsdrop(!sdrop);setsec(id, 'toptrending', '1')}}>Top Trending</span> {toptrending === "1" || toptrending === 1 ? <div className="inn"><FontAwesomeIcon icon={faCheck}/> <span onClick={(e)=>{setsdrop(!sdrop);setsec(id,'toptrending', '0')}}>Remove</span> </div>: ''}</div>
                                            <div><span onClick={(e)=>{setsdrop(!sdrop);setsec(id, 'toppurchased', '1')}}>Top Purchased</span> {toppurchased === "1" || toppurchased === 1 ? <div className="inn"><FontAwesomeIcon icon={faCheck}/> <span onClick={(e)=>{setsdrop(!sdrop);setsec(id,'toppurchased', '0')}}>Remove</span> </div>: ''}</div>
                                        </div>
                                        :
                                        (prod.approved === "0" || prod.approved === 0) && sdrop === true && authlev === 1? 
                                        <div className="dropdown" style={{top:'10px', right:'0'}}>
                                            <div onClick={(e)=>{setsdrop(!sdrop);getpartners(id, '1')}} ><b>Approve Product</b></div>
                                            <div onClick={(e)=>{openmessage(id)}} ><b>Decline Product</b></div>
                                        </div> 
                                        :
                                        sdrop === true && authlev !== 1 ?
                                        <div className="dropdown" style={{top:'10px', right:'0'}}>
                                            <div><span onClick={(e)=>deletes(!sdrop)} >Delete product</span></div>
                                            <div><Link to={'/admin/predit/'+prcode}>Edit</Link></div>
                                        </div>
                                        :
                                        null
                                }
                            </div>
                    </div>
                    
                    <div className='pdetails lose' onClick={(e)=>setIsOpen(!isOpen)}>
                            <div className="prodname" style={{fontSize:'1em'}} >
                                <p>Vendor: <strong>{full_name}</strong></p>
                            </div>
                            <div className="prodname" style={{fontSize:'1em'}} >
                                <p>Product Category: <strong>{category_tree.split(',')[category_tree.split(',').length-1]}</strong></p>
                            </div>
                            <div className="prodname" style={{fontSize:'1em'}} >
                                <p>Status: <strong>{approved === '1' ? 'Approved':'Not yet approved'}</strong></p>
                            </div>
                            <div className="prodname" style={{fontSize:'1em'}} >
                                <p>Status: <strong>{item_condition}</strong></p>
                            </div>
                    </div>
                    <div className='pdetails lose' onClick={(e)=>setIsOpen(!isOpen)}>
                            <div className="prodname" style={{fontSize:'1em'}} >
                                <p>Location: <strong>{location.split('+|+')[location.split('+|+').length -1]}</strong></p>
                            </div>
                            <div className="prodname" style={{fontSize:'1em'}} >
                                <p>Description: <strong>{description}</strong></p>
                            </div>
                    </div>
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
                        <img src={"http://vensle.com/api/storage/"+folder+"/"+img} alt=""/>
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
                {
                    successful===true ?
                    <Success  />
                    :
                    ''
                }
                {
                    popopen === true ?
                    <div className='popcontainer' > 
                    <div  className="inner-container" style={{display:'block'}}>
                        <div className="up-bar">
                            <div>Thread</div>
                            <div style={{color:'black', fontSize:'1em', justifySelf:'end', cursor:'pointer'}} onClick={(e)=>{setpopopen(!popopen)}}><FontAwesomeIcon icon={faClose} /></div>
                        </div>
                        <Popmessage id={id} >
                            <div className="msg-box">
                                <div className="chat-box">
                                    <p>Admin</p>
                                    {
                                      chatscard.map(({message, position})=>(
                                        position === 0 ? 
                                        <div className="incoming">
                                          {message}
                                        </div>
                                        :
                                        <div className="outgoing">
                                          {message}
                                        </div>
                                      ))
                                    }
                                    
                                    {/* <div ref={chatting} /> */}
                                </div>
                                <div className="message-field">
                                    <input type="text" placeholder="Write a message" onChange={(e)=>setMessage(e.target.value)} />
                                    <div onClick={send}><FontAwesomeIcon icon={faPaperPlane} className="send-button"/></div>
                                </div>
                            </div>
                            <div className="msg-pop">
                            </div>
                        </Popmessage>
                        </div>
                        </div>
                        :
                        ''
                }
        </div>
        
    )
}
export default ProdDisplay