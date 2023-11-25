import { useState, useRef } from 'react'
import CarouselsPop from './carpop'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart, faStar, faStarHalfAlt, faLocationDot, faBars, faCaretLeft, faCaretRight, faMessage, faPhone, faArrowLeft } from "@fortawesome/free-solid-svg-icons"
const Carouse = ({prodname, img, imgfolder, id}) => {
    const scroller = useRef()
    const [openchat, setOpenchat] = useState(false)
    const [sstart, setsstart] = useState(0)
    const [sstop, setsstop] = useState(1)

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
    return (
        <div>
            <div className='main-detail' > 
                <div className="title" style={{margin:'20px 0'}}>
                  <h3>{prodname}</h3>
                </div>               
                <div style={{height:'500px', width:'100%', display:'grid',  gap:'10px'}} className="vc">
                    {
                      img.split(',').slice(sstart, sstop).map((a, i)=>(
                        <div className='board'>
                          <img src={"http://vensle.com/api/storage/"+imgfolder+"/"+a} alt=""/>
                            <div className='pre' onClick={prev}><FontAwesomeIcon icon={faCaretLeft}/></div>
                            <div className='nex' onClick={next}><FontAwesomeIcon icon={faCaretRight}/></div>
                        </div>
                        ))
                    }
                    <div className='h-slid'>
                      <div className='h-slide' ref={scroller}>
                          
                      {
                        img.split(',').map((a, i)=>(
                          <div className='image' onClick={(e)=>{setsstart(i); setsstop(i+1);}}>
                            <img src={"http://vensle.com/api/storage/"+imgfolder+"/"+a} alt=""/>
                          </div>
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