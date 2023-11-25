import axios from "axios";
import { useState, useEffect, useRef, useContext} from "react";
import Pcards from "../reusable/pcards";
import bannerimg2 from '../winter.webp'
import lowlev from '../image 23.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Foot from "../reusable/footer";
import Menus from "../reusable/menus";
import { UserContext } from "../auth/usercontext";
import { faCaretLeft, faCaretRight, } from "@fortawesome/free-solid-svg-icons";

const Base  = () => {
    const {details:{userlocation},setDetails} = useContext(UserContext)
    const {products} = useContext(UserContext)
    const [product, setproduct] = useState([])
    const [truefalse, settruefalse] = useState(false)
    const [start, setstart] = useState(0)
    const [stop, setstop] = useState(start+50)
    const [init, setinit] = useState(0)
    const [catone, setcatone] = useState([])
    const flash2 = useRef('')
    const toppur = useRef('')
    const superd = useRef('')
    const toptr = useRef('')
    const reco = useRef('')


    useEffect(()=>{
        categoryone(0, setcatone)
    },[userlocation])
    
    const jones = () => {
        //// console.log(window.scrollY)
        if(window.innerHeight+window.scrollY >= document.body.offsetHeight - 500){
            setstop(stop+200)
        }
    }
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
    useEffect(()=>{
        jones()
    }, [window.scrollY])


    const categoryone = async (id, step) => {
        try {
            const categs = await axios.get("http://vensle.com/api/api/fresh/category/"+id)
            step(categs.data)
            //// console.log(categs.data)
        } catch (error) {
           // console.log(error);
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
            
        {
            // products.length > 10 ?
            <div>
                <div className="featured sd">
                    <div className="first-featured">
                        <h2 ref={flash2}>Super Deals</h2>
                        <p className="mark">Products from 50% off</p>
                        <img src={lowlev} alt=""/>
                    </div>
                    {
                        products.length > 0 ?
                        <div className="sda">
                            <div className='pref' onClick={(e)=>scrollhorizontall('left', superd)}><FontAwesomeIcon icon={faCaretLeft}/></div>
                            <div className='nexf' onClick={(e)=>scrollhorizontall('right',  superd)}><FontAwesomeIcon icon={faCaretRight}/></div> 
                        </div>
                        :
                        ''
                    }
                    <div className="slider" ref={superd}>
                    
                            {
                                products.length > 0 ?
                                    <div className="slider-inner">
                                    {
                                    products.filter(items => items.approved === 1).slice(177,186).map((product, i)=>(
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
        {/* <div className="category">
            <h2>Categories</h2>
            <div className="slider">
               <div className="slider-inner">
                    {
                        catone.map(({id,name,image})=>(
                            <Link to={'/pro/'+id+'/'+name}>
                            <div  className="inner-box">
                                <div className="imcont">
                                    <img src={'http://vensle.com/api/storage/category/'+image} alt=""/>
                                </div>
                                <p>{name}</p>
                            </div></Link>
                        ))
                    }
               </div>
            </div>
        </div> */}
        <div className="featured tp">
            <div className="second-featured">
                <h2 >Top purchased</h2>
                <marquee><p>Winter sales</p></marquee>
                <img src={bannerimg2} alt=""/>
            </div>
            {
                products.length > 0 ?
                <div className="tpa">
                    <div className='pref' onClick={(e)=>scrollhorizontall('left', toppur)}><FontAwesomeIcon icon={faCaretLeft}/></div>
                    <div className='nexf' onClick={(e)=>scrollhorizontall('right',  toppur)}><FontAwesomeIcon icon={faCaretRight}/></div> 
                </div> 
                :
                ''
            }
            <div className="slider" ref={toppur}>
              
                {
                    products.length > 0 ? 
                        <div className="slider-inner" >
                            {
                                products.filter(items => items.toppurchased === 1).slice(0,10).map((product, i)=>(
                                    <div><Pcards type={2} width={'250px'} height={'90px'} vim={'200px'} information={product} route={'pro'}/></div>
                                ))
                            }
                        </div>
                        :
                        <div className="loading">
                            
                        </div>
                }
                {
                    products.length > 0 ? 
                        <div className="slider-inner">
                            {
                                products.filter(items => items.toppurchased === 1).slice(11,20).map((product, i)=>(
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
        <div className="low-banner">
            <img src={lowlev} alt=""/>
        </div>
        
        <div className="featured tt">
            <div style={{display:'inline-flex', gap:'20px', alignItems:'center'}}>
            <h2>Top trending</h2>
            {/* <div className="more" style={{width:'150px', padding:'0px', boxSizing:'border-box', cursor:'pointer', fontSize:'1.1em'}}>
                <Link to={'/'}>See more <FontAwesomeIcon icon={faArrowRight} /></Link>
            </div> */}
            </div>
            
            {
                products.length > 0 ?
                <div className="tta">
                    <div className='pref' onClick={(e)=>scrollhorizontall('left', toptr)}><FontAwesomeIcon icon={faCaretLeft}/></div>
                    <div className='nexf' onClick={(e)=>scrollhorizontall('right',  toptr)}><FontAwesomeIcon icon={faCaretRight}/></div> 
                </div>
                :
                ''
            }
            <div className="slider" ref={toptr}>
              
                {
                    products.length > 0 ?
                     <div className="slider-inner">
                            {products.filter(items => items.toptrending === 1).slice(0,10).map((product, i)=>(
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
                products.length > 0 ?
                <div className="rya">
                    <div className='pref' onClick={(e)=>scrollhorizontall('left', reco)}><FontAwesomeIcon icon={faCaretLeft}/></div>
                    <div className='nexf' onClick={(e)=>scrollhorizontall('right',  reco)}><FontAwesomeIcon icon={faCaretRight}/></div> 
                </div>
                :
                ''
            }
            <div className="slider" ref={reco}>
               
                {
                    products.length > 0 ?
                    <div className="slider-inner">
                            {
                                products.slice(20,30).map((product, i)=>(
                                    <div><Pcards type={2} width={'250px'} height={'90px'} vim={'200px'} information={product} route={'pro'}/></div>
                                )) 
                            }
                        </div>
                        :
                        <div className="loading">
                            
                        </div>
                }
                {
                    products.length > 0 ?
                    <div className="slider-inner">
                            {
                                products.slice(30,40).map((product, i)=>(
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
            <h2>More to love</h2>
            <div className="slider">
               
                {
                    products.length > 0 ?
                    <div className="slider-inner">
                        {
                            products.filter(items => items.viewerschoice === 1).slice(120, 156).map((product, i)=>(
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
            // :
            // <div className="featured" style={{textAlign:'center', padding:'40px 0'}}>
            //     {/* <FontAwesomeIcon icon={faRectangleXmark} /> */}
            //     <FontAwesomeIcon icon={faRectangleXmark} spin spinReverse style={{fontSize:'4em', marginBottom:'40px'}}/>
            //     <h2 style={{marginBottom:'40px'}}>There are no products currently in you area</h2>
            // </div>
        }
        </div>
        <Foot />
    </div>
)
}
export default  Base;