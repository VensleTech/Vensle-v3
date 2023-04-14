import axios from "axios";
import { useState, useEffect, useRef, useContext } from "react";
import Pcards from "../reusable/pcards";
import lowlev from '../image 23.png'
import Foot from "../reusable/footer";
import load from '../ball.gif'
import { UserContext } from "../auth/usercontext";
import Menus from "../reusable/menus";
import { useParams } from "react-router-dom";


const Requests  = () => {
    const {details:{userlocation}, requests, setDetails} = useContext(UserContext)
    const [product, setproduct] = useState([])
    const [truefalse, settruefalse] = useState(false)
    const [start, setstart] = useState(51)
    const [stop, setstop] = useState(start+50)
    const flash2 = useRef('')

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
            <div className="featured">
            <div className="first-featured">
                <h2 ref={flash2}>Today's requests</h2>
                <marquee><p>Products from 50% off</p></marquee>
                <img src={lowlev} alt=""/>
            </div>
            
            <div className="slider">
            {
                requests.length > 0 ?
                    <div className="slider-inner">
                            {
                                requests.filter(items => items.superdeals === '1').slice(0,10).map((product, i)=>(
                                    <div><Pcards type={4} width={220} height={290} vim={'200px'} information={product} route={'req'}/></div>
                                ))
                            }
                    </div>
                    :
                    <div className="loading">
                        
                    </div>
            }
            </div>
        </div>
        <div className="low-banner">
            <img src={lowlev} alt=""/>
        </div>
        <div className="featured">
            <h2>Recommended for you</h2>
            <div className="slider">
            {
                requests.length > 0 ?
                    <div className="slider-inner">
                            {
                        requests.filter(items => items.recommended === '1').slice(0,10).map((product, i)=>(
                            <div><Pcards type={4} width={220} height={290} vim={'200px'} information={product} route={'req'}/></div>
                        ))
                    }
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
        <div className="featured2">
            <h2>Viewers Choice</h2>
            <div className="slider">
            {
                requests.length > 0 ?
                    <div className="slider-inner">
                            {
                        requests.filter(items => items.recommended === '1').slice(0,10).map((product, i)=>(
                            <div><Pcards type={4} width={220} height={290} vim={'200px'} information={product} route={'req'}/></div>
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
        <Foot />
    </div>
)
}
export default  Requests;