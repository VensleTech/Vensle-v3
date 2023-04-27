import { useState, useRef, useEffect,useContext} from 'react'
import CarouselsPop from '../reusable/carpop'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart, faStar, faStarHalfAlt, faHandshake, faTruck, faLocationDot, faBars, faCaretLeft, faCaretRight, faMessage, faPhone, faArrowLeft, faNairaSign, faClose} from "@fortawesome/free-solid-svg-icons"
import { bodyScrollToggle } from 'body-scroll-toggle'
import disableScroll from 'disable-scroll';
import { UserContext } from '../auth/usercontext'

const ProdPop = ({information,  getreadstate, route, getscrollstate}) => {
    const {id, feat_image, min_price, max_price, title, price, gimage, imgfolder, category_tree, phone, location, currency} = information
    const {details:{specialref}, details, setDetails} = useContext(UserContext)
    function formatMoney(n) {
      return (Math.round(n * 100) / 100).toLocaleString();
  }
  const price2 = formatMoney(price)
    const pricemin = formatMoney(min_price)
    const pricemax = formatMoney(max_price)
    const scroller = useRef()
    const textref = useRef()
    const [read, setread] = useState(false)
    const [openchat, setOpenchat] = useState(false)
    const [openphone, setOpenphone] = useState(false)
    const [predef, setpredef] = useState("Hi there I'm interested in sending you a message")
    const [sstart, setsstart] = useState(0)
    const [sstop, setsstop] = useState(1)
    const [pre, setpre] = useState(false)
    const [nex, setnex] = useState(false)
    const [adata, setadata] = useState([

    ])
    const curr = localStorage.getItem('curr')
    function htmlDecode(input){
        var e = document.createElement('div');
        e.innerHTML = input;
        return e.childNodes[0].nodeValue;
      }
    const pic = useRef('')
      // const [all] = data
      // const {images, features,location, transaction} = all

    const next = () => {
      if(sstop < gimage.split(',').length){
          setsstart(sstart+1); 
          setsstop(sstop+1)
          scroller.current.scrollBy(100, 0)
      }
    }
    const piclength = () => {
      if(gimage.split(',').length > 1){
          setpre(true)
          setnex(true)
      }
    }
  const prev = () => {
    if(sstart > 0){
        setsstart(sstart-1); 
        setsstop(sstop-1)
        scroller.current.scrollBy(-100, 0)
    }
  }
  const bill = (e)=>{
    if(e.target === e.currentTarget){
        getreadstate(false)
        document.body.style.overflow = 'unset';
    }
  }
  const billy = (e)=>{
      getreadstate(false)
      document.body.style.overflow = 'unset';
  }

  const billow = (e)=>{
    document.body.style.overflow = 'hidden';
}
  const cutout = () => {
    setOpenchat(!openchat)
  }
  useEffect(()=>{
    piclength()
  },[])
    return (
        <div className='popcontainer' onWheel={billow} onClick={bill}> 
            <div  className="inner-container" >
              <div style={{color:'black', fontSize:'1em', justifySelf:'end', cursor:'pointer'}} onClick={billy}><FontAwesomeIcon icon={faClose} /></div>
              <div className='details-container'>
                  <div style={{width:'100%', display:'grid', gap:'20px'}} className='picture' ref={pic}>
                  {
                    gimage.split(',').slice(sstart, sstop).map((a, i)=>(
                          <div className='board'>
                            <img src={"http://geo.vensle.com/storage/"+imgfolder+"/"+a} alt=""/>
                              {
                                pre === true ? <div className='pre' onClick={prev}><FontAwesomeIcon icon={faCaretLeft}/></div>:''
                              }
                              {
                                nex === true ? <div className='nex' onClick={next}><FontAwesomeIcon icon={faCaretRight}/></div>:''
                              }
                              
                          </div>
                      ))
                  }
                  {
                  gimage.split(',').length > 1 ?
                    <div className='hscont'>
                      <div className='h-slide' ref={scroller}>
                      <p className='prevs' onClick={(e)=>{scroller.current.scrollBy(0, 100)}}><FontAwesomeIcon icon={faCaretLeft}/></p>
                        {
                            gimage.split(',').map((a, i)=>(
                                <div className='image' onClick={(e)=>{setsstart(i); setsstop(i+1);}}>
                                <img src={"http://geo.vensle.com/storage/"+imgfolder+"/"+a} alt=""/>
                                </div>
                                
                            ))
                        }
                        <p className='nexts' onClick={(e)=>{scroller.current.scrollBy(100, 0)}}><FontAwesomeIcon icon={faCaretRight}/></p>
                      </div>
                    </div>
                    :''
                      }
                  </div>
                  <div className='ind'>
                  {   
                    openchat === false ?
                      <div className="dr-first">
                          <div className="caption">
                              <h3>{title}</h3> 
                              {/* <p><FontAwesomeIcon icon={faHeart} /></p> */}
                          </div>
                          <div className="dr-price">
                              {/* <h4>Price</h4><span>Rating <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStarHalfAlt} /></span> */}
                              <p>{price !== undefined ? htmlDecode(currency)+price2 : htmlDecode(currency)+pricemin +'-'+htmlDecode(currency)+pricemax}</p>
                          </div>
                          <div className="s-location"><FontAwesomeIcon icon={faLocationDot} /> {'   '+location.split('+|+')[location.split('+|+').length-2]}</div>
                          {/* <div className="trans-type"> */}
                              {
                                // <table>
                                //   <tr>
                                //       <td>Transaction type</td>
                                //       <td>{transaction}</td>
                                //   </tr>
                                // </table>
                              }
                              {/* <h3>Transaction type</h3> */}
                              <div className="must">
                                {/* <div  className="green" title={"Must meet to buy"}><FontAwesomeIcon icon={faHandshake}/> <p>Must meet to buy</p></div> */}
                                {/* <div  className="green" title={"Can be delivered"}><FontAwesomeIcon icon={faTruck}/> <p>Can be delivered</p></div> */}
                            {/* </div> */}
                            <div>
                              {/* <div className="table-within">
                                  <h3>Features</h3>
                                  <table>
                                        <tr>
                                            <td>Category</td>
                                            <td>{category_tree}</td>
                                        </tr>
                                        <tr>
                                            <td>Condition</td>
                                            <td>Fairly used, Very Neat</td>
                                        </tr>
                                    </table>
                              </div> */}
                              <div className='message-container'>
                                <div className='preset'>
                                <p onClick={(e)=>{setpredef(e.target.innerText); textref.current.focus()}}>I'm not interested</p>
                                <p onClick={(e)=>{setpredef(e.target.innerText); textref.current.focus()}}>I would prefer the home delivery</p>
                                <p onClick={(e)=>{setpredef(e.target.innerText); textref.current.focus()}}>Hi bro</p>
                                <p onClick={(e)=>{setpredef(e.target.innerText); textref.current.focus()}}>I'm not interested</p>
                                
                                <p onClick={(e)=>{setpredef(e.target.innerText); textref.current.focus()}}>I'm not interested</p>
                                <p onClick={(e)=>{setpredef(e.target.innerText); textref.current.focus()}}>I would prefer the home delivery</p>
                                </div>
                                <div>
                                    <textarea placeholder={predef} value={predef} ref={textref} onChange={(e)=>setpredef(e.target.value)}></textarea>
                                </div>
                                {
                                    !specialref ? <button className="click-send2" onClick={(e)=>{document.body.style.overflow = 'unset';}}><Link to={'/signin'}><div>Sign up</div></Link></button>  
                                    : 
                                    <button className="click-send" ><FontAwesomeIcon icon={faMessage}></FontAwesomeIcon> Send</button>
                                    
                                }  
                            </div>
                          </div>
                          </div>
                          
                          
                          <div className='bottom'>
                              {
                                <Link to={"/details/"+route+"/"+id+"/"+category_tree.split("+")[category_tree.split("+").length -1].replaceAll(' ', '-').replaceAll('/', ')')+"/"+title.trim().replaceAll(' ', '-').replaceAll('/', '&')} onClick={billy}><div className='more-details' onClick={bill}>
                                  <FontAwesomeIcon icon={faBars} /><p>More details</p>
                              </div></Link>
                            }
                              <div className="call">
                                  {
                                  openphone === false ? <FontAwesomeIcon icon={faPhone}  onClick={(e)=>setOpenphone(!openchat)}/>:<p><a href={"tel:"+phone} style={{color:'white'}}>{phone}</a></p>
                                  } 
                                  
                              </div>
                              {/* <div className="chat" onClick={cutout}>
                                  <FontAwesomeIcon icon={faMessage} />
                              </div> */}
                          </div>
                      </div>
                      :
                      <div className='message-container'>
                          <div className='head'>
                              <div><FontAwesomeIcon icon={faArrowLeft} onClick={cutout}/></div>
                                  <div className='cap'>
                                      <h5>Write a message</h5>
                                  </div>
                          </div>
                          <div className='preset'>
                          <p onClick={(e)=>{setpredef(e.target.innerText); textref.current.focus()}}>I'm not interested</p>
                          <p onClick={(e)=>{setpredef(e.target.innerText); textref.current.focus()}}>I would prefer the home delivery</p>
                          <p onClick={(e)=>{setpredef(e.target.innerText); textref.current.focus()}}>Hi bro</p>
                          <p onClick={(e)=>{setpredef(e.target.innerText); textref.current.focus()}}>I'm not interested</p>
                          
                          <p onClick={(e)=>{setpredef(e.target.innerText); textref.current.focus()}}>I'm not interested</p>
                          <p onClick={(e)=>{setpredef(e.target.innerText); textref.current.focus()}}>I would prefer the home delivery</p>
                          </div>
                          <div>
                              <textarea placeholder={predef} value={predef} ref={textref} onChange={(e)=>setpredef(e.target.value)}></textarea>
                          </div>
                          <div className='more-details'>
                              <FontAwesomeIcon icon={faMessage}/><p>Send</p>
                          </div>
                      </div>
                    }
                  </div>
                  
              </div> 
          </div>
      </div>
    )
}
export default ProdPop