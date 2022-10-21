import { useState, useRef } from 'react'
import CarouselsPop from '../reusable/carpop'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart, faStar, faStarHalfAlt, faHandshake, faTruck, faLocationDot, faBars, faCaretLeft, faCaretRight, faMessage, faPhone, faArrowLeft, faNairaSign } from "@fortawesome/free-solid-svg-icons"
const ProdPop = ({id}) => {
    const scroller = useRef()
    const textref = useRef()

    const [openchat, setOpenchat] = useState(false)
    const [openphone, setOpenphone] = useState(false)
    const [predef, setpredef] = useState("Hi there I'm interested in sending you a message")
    const [sstart, setsstart] = useState(0)
    const [sstop, setsstop] = useState(1)
    const data = [{
      id:1,
      title:'Premium Sneakers',
      price:'22,000',
      location:'Washington DC',
      transaction:'Meet to Buy',
      features:[
        {
          id:1,
          type:'Category',
          info:'Fashion'
        },
        {
          id:2,
          type:'Condition',
          info:'Neatly used and clean'
        },
        {
          id:3,
          type:'Description',
          info:'White color, touch screen and lightweight'
        }
      ],
      images:
        [
          {
            image: "../../pics (4).jpg",
          },
          {
            image: "../../iwatch (13).jpg",
          },
          {
            image: "../../iwatch (14).jpg",
          },
          {
            image: "../../iwatch (1).jpg",
          },
          {
            image: "../../iwatch (2).jpg",
          },
          {
            image: "../../iwatch (3).jpg",
          },
          {
            image: "../../iwatch (4).jpg",
          },
          {
            image: "../../iwatch (5).jpg",
          },
          {
            image: "../../iwatch (6).jpg",
          },
          {
            image: "../../iwatch (7).jpg",
          },
          {
            image: "../../iwatch (8).jpg",
          },
          {
            image: "../../iwatch (9).jpg",
          },
          {
            image: "../../iwatch (10).jpg",
          },
          {
            image: "../../iwatch (11).jpg",
          },
          {
            image: "../../iwatch (12).jpg",
          },
          {
            image: "../../iwatch (15).jpg",
          }
        ]
      }
  ];
  const [all] = data
  const {images, features, title, price, location, transaction} = all

  const next = () => {
    if(sstop < images.length){
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
    return (
        <div>
            <div className='details-container'>
                <div style={{width:'100%', display:'grid', gap:'20px'}}>
                {
                    images.slice(sstart, sstop).map(({image},i)=>(
                        <div className='board'>
                            <img src={image} alt=''/>
                            <div className='pre' onClick={prev}><FontAwesomeIcon icon={faCaretLeft}/></div>
                            <div className='nex' onClick={next}><FontAwesomeIcon icon={faCaretRight}/></div>
                        </div>
                    ))
                }
                <div className='h-slide' ref={scroller}>
                    <p className='prevs' onClick={(e)=>{scroller.current.scrollBy(-100, 0)}}><FontAwesomeIcon icon={faCaretLeft}/></p>
                    
                {
                    images.map(({image},i)=>(
                        <div className='image' onClick={(e)=>{setsstart(i); setsstop(i+1); }}><img src={image} alt=''/></div>
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
                        </div>
                        <div className="dr-price">
                            <h4>Price</h4><span>Rating <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStarHalfAlt} /></span>
                            <p><FontAwesomeIcon icon={faNairaSign} /> {price}</p>
                        </div>
                        <div className="s-location"><FontAwesomeIcon icon={faLocationDot} /> Washington DC</div>
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
                                {
                                  features.map(({type, info})=>(
                                    <tr>
                                        <td>{type}</td>
                                        <td>{info}</td>
                                    </tr>
                                  ))
                                }
                                </table>
                            </div>
                        </div>
                        <div className='bottom'>
                            <Link to={"/details/"+id}><div className='more-details'>
                                <FontAwesomeIcon icon={faBars} /><p>More details</p>
                            </div></Link>
                            <div className="call">
                               {
                                openphone === false ? <FontAwesomeIcon icon={faPhone}  onClick={(e)=>setOpenphone(!openchat)}/>:<p><a href="tel:08138732889" style={{color:'white'}}>08138732889</a></p>
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
                            <textarea placeholder='' value={predef} ref={textref}></textarea>
                        </div>
                        <div className='more-details'>
                            <FontAwesomeIcon icon={faMessage}/><p>Send</p>
                        </div>
                    </div>
                  }
                </div>
                
            </div> 
        
        </div>
    )
}
export default ProdPop