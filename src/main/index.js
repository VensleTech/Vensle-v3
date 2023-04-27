import axios from "axios";
import { useState, useEffect, useRef, useContext} from "react";
import Pcards from "../reusable/pcards";
import bannerimg2 from '../winter.webp'
import lowlev from '../image 23.png'
import load from '../ball.gif'
import Foot from "../reusable/footer";
import Menus from "../reusable/menus";
import { UserContext } from "../auth/usercontext";
import { Link } from "react-router-dom";
import disableScroll from 'disable-scroll';

const Base  = () => {
    const {details:{userlocation},setDetails} = useContext(UserContext)
    const {products} = useContext(UserContext)
    const [product, setproduct] = useState([])
    const [truefalse, settruefalse] = useState(false)
    const [start, setstart] = useState(0)
    const [stop, setstop] = useState(start+50)
    const [catone, setcatone] = useState([])
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
    useEffect(()=>{
        categoryone(0, setcatone)
    },[userlocation])
    
    const jones = () => {
        // console.log(window.scrollY)
        if(window.innerHeight+window.scrollY >= document.body.offsetHeight - 500){
            setstop(stop+200)
        }
    }
    useEffect(()=>{
        jones()
    }, [window.scrollY])


    const categoryone = async (id, step) => {
        try {
            const categs = await axios.get("http://geo.vensle.com/api/fresh/category/"+id)
            step(categs.data)
            // console.log(categs.data)
        } catch (error) {
            console.log(error);
        }
    } 
    const bubble=[
        {
            id:1,
            img:'./vector6.jpg'
        },
        {
            id:2,
            img:'./vector5.jpg'
        },
        {
            id:3,
            img:'./vector7.jpg'
        },
        {
            id:4,
            img:'./vector8.jpg'
        }
    ]
    // disableScroll.on();
    return(
        <div className='gray'>
        <div>
            <Menus/>
            
            <div className="featured">
            <div className="first-featured">
                <h2 ref={flash2}>Super Deals</h2>
                <p className="mark">Products from 50% off</p>
                <img src={lowlev} alt=""/>
            </div>
            
            <div className="slider">
               
                    {
                        products.length > 0 ?
                            <div className="slider-inner">
                            {
                            products.filter(items => items.superdeals === '1').slice(0,10).map((product, i)=>(
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
        <div className="category">
            <h2>Categories</h2>
            <div className="slider">
               <div className="slider-inner">
                    {
                        catone.map(({id,name,image})=>(
                            <Link to={'/pro/'+id+'/'+name}>
                            <div  className="inner-box">
                                <div className="imcont">
                                    <img src={'http://geo.vensle.com/storage/category/'+image} alt=""/>
                                </div>
                                <p>{name}</p>
                            </div></Link>
                        ))
                    }
               </div>
            </div>
        </div>
        <div className="featured">
            <div className="second-featured">
                <h2 >Top purchased</h2>
                <marquee><p>Winter sales</p></marquee>
                <img src={bannerimg2} alt=""/>
            </div>
            <div className="slider">
              
                {
                    products.length > 0 ? 
                        <div className="slider-inner">
                            {
                                products.filter(items => items.toppurchased === '1').slice(0,10).map((product, i)=>(
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
        <div className="low-banner">
            <img src={lowlev} alt=""/>
        </div>
        
        <div className="featured">
            <h2>Top trending</h2>
            <div className="slider">
              
                {
                    products.length > 0 ?
                     <div className="slider-inner">
                            {products.filter(items => items.toptrending === '1').slice(0,10).map((product, i)=>(
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
            bubble.slice(0,2).map(({id, img},i)=>(
                <div key={id}>
                <img src={img} alt=""/>
           </div>
            ))
           }
        </div>
        <div className="featured">
            <h2>Recommended for you</h2>
            <div className="slider">
               
                {
                    products.length > 0 ?
                    <div className="slider-inner">
                            {
                                products.filter(items => items.recommended === '1').slice(0,10).map((product, i)=>(
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
                    products.length > 0 ?
                    <div className="slider-inner">
                        {
                            products.filter(items => items.viewerschoice === '1').slice(0,10).map((product, i)=>(
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
        <Foot />
    </div>
)
}
export default  Base;