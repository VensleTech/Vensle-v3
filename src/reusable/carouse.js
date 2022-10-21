import { useState, useRef } from 'react'
import CarouselsPop from './carpop'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart, faStar, faStarHalfAlt, faLocationDot, faBars, faCaretLeft, faCaretRight, faMessage, faPhone, faArrowLeft } from "@fortawesome/free-solid-svg-icons"
const Carouse = () => {
    const scroller = useRef()
    const [openchat, setOpenchat] = useState(false)
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
            <div className='main-detail' > 
                <div className="title" style={{margin:'20px 0'}}>
                  <h3>REDVNK Hand Woven Blucher Dress Shoe - Black</h3>
                </div>               
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
                <div className='h-slid'>
                <div className='h-slide' ref={scroller}>
                    
                {
                    images.map(({image},i)=>(
                        <div className='image' onClick={(e)=>{setsstart(i); setsstop(i+1); }}><img src={image} alt=''/></div>
                    ))
                }
               
                </div>
                
                  <p className='prevs' onClick={(e)=>{scroller.current.scrollBy(-100, 0)}}><FontAwesomeIcon icon={faCaretLeft}/></p>
                  <p className='nexts' onClick={(e)=>{scroller.current.scrollBy(100, 0)}}><FontAwesomeIcon icon={faCaretRight}/></p>
                </div>
                </div>
          </div>
        </div>
    )
}
export default Carouse