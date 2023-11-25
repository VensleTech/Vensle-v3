import axios from "axios";
import { useState, useEffect, useRef, useContext } from "react";
import Pcards from "../reusable/pcards";
import lowlev from '../image 23.png'
import Foot from "../reusable/footer";
import load from '../ball.gif'
import { UserContext } from "../auth/usercontext";
import Menus from "../reusable/menus";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight, faRectangleXmark } from "@fortawesome/free-solid-svg-icons";

const Requests  = () => {
    const {details:{userlocation}, requests, setDetails} = useContext(UserContext)
    const [product, setproduct] = useState([])
    const [truefalse, settruefalse] = useState(false)
    const [start, setstart] = useState(51)
    const [init, setinit] = useState(0)
    const [stop, setstop] = useState(start+50)
    const flash2 = useRef('')
    const toppur = useRef('')
    const superd = useRef('')
    const toptr = useRef('')
    const reco = useRef('')

    const scrollhorizontall = (dir, refv) => {
        // console.log(refv)
        // console.log(init)
        if(dir === 'left'){
            refv.current.scroll(init-100, 0)
            setinit(init-100)
        }
        else{
            refv.current.scroll(init+100, 0)
            setinit(init+100)
        }
    }
    setTimeout(() => {
       if(truefalse === false){
            flash2.current.style.opacity = 1
            settruefalse(!truefalse)
       }
       else{
            flash2.current.style.opacity = 0.2
            settruefalse(!truefalse)
       }
    }, 100);
    const bubble=[
        {
            id:1,
            img:'./Vector6.jpg'
        },
        {
            id:2,
            img:'./Vector5.jpg'
        },
        {
            id:3,
            img:'./Vector7.jpg'
        },
        {
            id:4,
            img:'./Vector8.jpg'
        }
    ]
    return(
        <div className='gray'>
        <div>
        <Menus/>
        {
            requests.length > 10 ?
            <div>
                <div className="featured tt">
                    <h2>Popular requests</h2>
                    {
                        requests.length > 0 ?
                        <div className="tta">
                            <div className='pref' onClick={(e)=>scrollhorizontall('left', toptr)}><FontAwesomeIcon icon={faCaretLeft}/></div>
                            <div className='nexf' onClick={(e)=>scrollhorizontall('right',  toptr)}><FontAwesomeIcon icon={faCaretRight}/></div> 
                        </div>
                        :
                        ''
                    }
                    <div className="slider" ref={toptr}>
                    
                        {
                            requests.length > 0 ?
                            <div className="slider-inner">
                                    {requests.filter(items => items.toptrending === '1').slice(0,10).map((product, i)=>(
                                        <div><Pcards type={4} width={220} height={290} vim={'200px'} information={product} route={'pro'}/></div>
                                    ))}
                                </div>
                                :
                                <div className="loading">
                                    
                                </div>
                        }
                    
                    </div>
                </div>
                <div className="low-banner2">
                {
                    bubble.slice(2,4).map(({id, img},i)=>(
                        <div key={id}>
                        <img src={img} alt=""/>
                </div>
                    ))
                }
                </div>
                <div className="featured ry">
                    <h2>Recommended for you</h2>
                    {
                        requests.length > 0 ?
                        <div className="rya">
                            <div className='pref' onClick={(e)=>scrollhorizontall('left', reco)}><FontAwesomeIcon icon={faCaretLeft}/></div>
                            <div className='nexf' onClick={(e)=>scrollhorizontall('right',  reco)}><FontAwesomeIcon icon={faCaretRight}/></div> 
                        </div>
                        :
                        ''
                    }
                    <div className="slider" ref={reco}>
                    
                        {
                            requests.length > 0 ?
                            <div className="slider-inner">
                                    {
                                        requests.slice(20,30).map((product, i)=>(
                                            <div><Pcards type={2} width={'250px'} height={'90px'} vim={'200px'} information={product} route={'pro'}/></div>
                                        )) 
                                    }
                                </div>
                                :
                                <div className="loading">
                                    
                                </div>
                        }
                        {
                            requests.length > 0 ?
                            <div className="slider-inner">
                                    {
                                        requests.slice(30,40).map((product, i)=>(
                                            <div><Pcards type={2} width={'250px'} height={'90px'} vim={'200px'} information={product} route={'pro'}/></div>
                                        )) 
                                    }
                                </div>
                                :
                                <div className="loading">
                                    
                                </div>
                        }
                    
                    </div>
                </div>
                {/* <div className="low-banner">
                {
                    bubble.slice(1,2).map(({id, img},i)=>(
                        <div key={id}>
                            <img src={img} alt=""/>
                        </div>
                    ))
                }
                </div> */}
                <div className="featured2">
                    <h2>Urgent requests</h2>
                    <div className="slider">
                    
                        {
                            requests.length > 0 ?
                            <div className="slider-inner">
                                {
                                    requests.filter(items => items.viewerschoice === '1').slice(40, 76).map((product, i)=>(
                                        <div><Pcards type={4} width={220} height={290} vim={'200px'} information={product} route={'pro'}/></div>
                                    ))
                                }
                                </div>
                                :
                                <div className="loading">
                                    
                                </div>
                        }
                    
                    </div>
                </div>
            </div>
            :
            <div className="featured" style={{textAlign:'center', padding:'40px 0'}}>
                {/* <FontAwesomeIcon icon={faRectangleXmark} /> */}
                <FontAwesomeIcon icon={faRectangleXmark} spin spinReverse style={{fontSize:'4em', marginBottom:'40px'}}/>
                <h2 style={{ marginBottom:'40px'}}>There are no requests currently in your area</h2>
            </div>
        }
        </div>
        <Foot />
    </div>
)
}
export default  Requests;