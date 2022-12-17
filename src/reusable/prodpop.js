import { useState, useRef, useEffect} from 'react'
import CarouselsPop from '../reusable/carpop'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart, faStar, faStarHalfAlt, faHandshake, faTruck, faLocationDot, faBars, faCaretLeft, faCaretRight, faMessage, faPhone, faArrowLeft, faNairaSign, faClose} from "@fortawesome/free-solid-svg-icons"
const ProdPop = ({id,  title, price, img, information,  getreadstate}) => {
    const scroller = useRef()
    const textref = useRef()
    const [read, setread] = useState(false)
    const [openchat, setOpenchat] = useState(false)
    const [openphone, setOpenphone] = useState(false)
    const [predef, setpredef] = useState("Hi there I'm interested in sending you a message")
    const [sstart, setsstart] = useState(0)
    const [sstop, setsstop] = useState(1)
    const [adata, setadata] = useState([

    ])
      // const [all] = data
      // const {images, features,location, transaction} = all
    const [group_name, category_name, item_contact_number, state, country, currency] = information

    const next = () => {
    if(sstop < img.split(',').length){
        setsstart(sstart+1); 
        setsstop(sstop+1)
        scroller.current.scrollBy(100, 0)
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
    }
  }
  const billy = (e)=>{
      getreadstate(false)
  }
  console.log(img)
    return (
        <div className='popcontainer'  onWheel={bill} onClick={bill}> 
            <div  className="inner-container" >
              <div style={{color:'black', fontSize:'1em', justifySelf:'end', cursor:'pointer'}} onClick={billy}><FontAwesomeIcon icon={faClose} /></div>
              <div className='details-container'>
                  <div style={{width:'100%', display:'grid', gap:'20px'}}>
                  {
                    img.split(',').slice(sstart, sstop).map((a, i)=>(
                          <div className='board'>
                          <img src={"https://vensle.com/vensle-assets/backend/images/uploads/"+id+"/"+a} alt=""/>
                              <div className='pre' onClick={prev}><FontAwesomeIcon icon={faCaretLeft}/></div>
                              <div className='nex' onClick={next}><FontAwesomeIcon icon={faCaretRight}/></div>
                          </div>
                      ))
                  }
                  <div className='h-slide' ref={scroller}>
                      <p className='prevs' onClick={(e)=>{scroller.current.scrollBy(-100, 0)}}><FontAwesomeIcon icon={faCaretLeft}/></p>
                      
                  {
                    img.split(',').map((a, i)=>(
                          <div className='image' onClick={(e)=>{setsstart(i); setsstop(i+1);}}>
                            <img src={"https://vensle.com/vensle-assets/backend/images/uploads/"+id+"/"+a} alt=""/>
                          </div>
                          
                      ))
                  }
                  <p className='nexts' onClick={(e)=>{scroller.current.scrollBy(100, 0)}}><FontAwesomeIcon icon={faCaretRight}/></p>
                  </div>
                  
                  </div>
                  <div>
                  {   
                    openchat === false ?
                      <div className="dr-first">
                          <div className="caption">
                              <h3>{title}</h3> <p><FontAwesomeIcon icon={faHeart} /></p>
                              {
                                console.log(adata)
                              }
                          </div>
                          <div className="dr-price">
                              <h4>Price</h4><span>Rating <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStarHalfAlt} /></span>
                              <p> ${price}</p>
                          </div>
                          <div className="s-location"><FontAwesomeIcon icon={faLocationDot} /> {state}</div>
                          <div className="trans-type">
                              {
                                // <table>
                                //   <tr>
                                //       <td>Transaction type</td>
                                //       <td>{transaction}</td>
                                //   </tr>
                                // </table>
                              }
                              <h3>Transaction type</h3>
                              <div className="must">
                                <div  className="green" title={"Must meet to buy"}><FontAwesomeIcon icon={faHandshake}/> <p>Must meet to buy</p></div>
                                <div  className="green" title={"Can be delivered"}><FontAwesomeIcon icon={faTruck}/> <p>Can be delivered</p></div>
                            </div>
                          </div>
                          <div>
                              <div className="table-within">
                                  <h3>Features</h3>
                                  <table>
                                        <tr>
                                            <td>Category</td>
                                            <td>{category_name}</td>
                                        </tr>
                                        <tr>
                                            <td>Condition</td>
                                            <td>Fairly used, Very Neat</td>
                                        </tr>
                                    </table>
                              </div>
                          </div>
                          <div className='bottom'>
                              <Link to={"/details/"+id+"/"+group_name.trim().replaceAll(' ', '-').replaceAll('/', ')')+"/"+title.trim().replaceAll(' ', '-').replaceAll('/', '&')} onClick={billy}><div className='more-details' onClick={bill}>
                                  <FontAwesomeIcon icon={faBars} /><p>More details</p>
                              </div></Link>
                              <div className="call">
                                  {
                                  openphone === false ? <FontAwesomeIcon icon={faPhone}  onClick={(e)=>setOpenphone(!openchat)}/>:<p><a href={"tel:"+item_contact_number} style={{color:'white'}}>{item_contact_number}</a></p>
                                  } 
                                  
                              </div>
                              <div className="chat" onClick={(e)=>setOpenchat(!openchat)}>
                                  <FontAwesomeIcon icon={faMessage} />
                              </div>
                          </div>
                      </div>
                      :
                      <div className='message-container'>
                          <div className='head'>
                              <div><FontAwesomeIcon icon={faArrowLeft} onClick={(e)=>setOpenchat(!openchat)}/></div>
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