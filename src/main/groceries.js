import axios from "axios";
import { useState, useEffect, useRef, useContext } from "react";
import Pcards from "../reusable/pcards";
import bannerimg2 from '../winter.webp'
import lowlev from '../image 23.png'
import bann from '../groc.jpg'
import load from '../ball.gif'
import Foot from "../reusable/footer";
import { Link } from "react-router-dom";
import Menus from "../reusable/menus";
import { UserContext } from "../auth/usercontext";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Groceries  = () => {
    const {details:{userlocation}, groceries} = useContext(UserContext)
    const [product, setproduct] = useState([])
    const [truefalse, settruefalse] = useState(false)
    const [start, setstart] = useState(0)
    const [disp, setdisp] = useState(0)
    const [stop, setstop] = useState(start+50)
    const [catone, setcatone] = useState([])
    const flash2 = useRef('')
    const [init, setinit] = useState(0)
    const toppur = useRef('')
    const superd = useRef('')
    const toptr = useRef('')
    const reco = useRef('')

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
    },[])
    
    setTimeout(() => {
        setdisp(1)
    }, 3000);
    const categoryone = async (id, step) => {
        try {
            const categs = await axios.get("http://vensle.com/api/api/fresh/gcategory/"+id)
            step(categs.data)
        } catch (error) {
           // console.log(error);
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
    // if(Object.keys(userlocation).length === 0 ){
    //     return (
    //         <div className="loading">
    //             
    //         </div>
    //     )
    // }
    console.log(groceries.length)
    return(
        <div className='gray'>
            <div>
                <Menus/>
                {/* <div className="category">
                    <h2>Categories</h2>
                    <div className="slider">
                    <div className="slider-inner">
                            {
                                catone.map(({id,name,image})=>(
                                    <Link to={'/gro/'+id+'/'+name}>
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
                 {/* {
                    groceries.length > 0 ?
                    <div>
                        <div className="featured sd">
                    <div className="first-featured">
                        <h2 ref={flash2}>Super Deals</h2>
                        <p className="mark">Products from 50% off</p>
                        <img src={lowlev} alt=""/>
                    </div>
                    {
                        groceries.length > 0 ?
                        <div className="sda">
                            <div className='pref' onClick={(e)=>scrollhorizontall('left', superd)}><FontAwesomeIcon icon={faCaretLeft}/></div>
                            <div className='nexf' onClick={(e)=>scrollhorizontall('right',  superd)}><FontAwesomeIcon icon={faCaretRight}/></div> 
                        </div>
                        :
                        ''
                    }
                    <div className="slider" ref={superd}>
                    
                            {
                                groceries.length > 0 ?
                                    <div className="slider-inner">
                                    {
                                    groceries.filter(items => items.approved === '1').slice(0,10).map((product, i)=>(
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
                <div className="featured tt">
                    <h2>Top trending</h2>
                    {
                        groceries.length > 0 ?
                        <div className="tta">
                            <div className='pref' onClick={(e)=>scrollhorizontall('left', toptr)}><FontAwesomeIcon icon={faCaretLeft}/></div>
                            <div className='nexf' onClick={(e)=>scrollhorizontall('right',  toptr)}><FontAwesomeIcon icon={faCaretRight}/></div> 
                        </div>
                        :
                        ''
                    }
                    <div className="slider" ref={toptr}>
                    
                        {
                            groceries.length > 0 ?
                            <div className="slider-inner">
                                    {groceries.filter(items => items.toptrending === '1').slice(0,10).map((product, i)=>(
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
                        groceries.length > 0 ?
                        <div className="rya">
                            <div className='pref' onClick={(e)=>scrollhorizontall('left', reco)}><FontAwesomeIcon icon={faCaretLeft}/></div>
                            <div className='nexf' onClick={(e)=>scrollhorizontall('right',  reco)}><FontAwesomeIcon icon={faCaretRight}/></div> 
                        </div>
                        :
                        ''
                    }
                    <div className="slider" ref={reco}>
                    
                        {
                            groceries.filter(items => items.recommended === '1').length > 0 ?
                            <div className="slider-inner">
                                    {
                                        groceries.slice(0,20).map((product, i)=>(
                                            <div><Pcards type={2} width={'250px'} height={'90px'} vim={'200px'} information={product} route={'pro'}/></div>
                                        )) 
                                    }
                                </div>
                                :
                                <div className="loading">
                                    
                                </div>
                        }
                        {
                            groceries.length > 0 ?
                            <div className="slider-inner">
                                    {
                                        groceries.slice(30,40).map((product, i)=>(
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
                    </div>
                    : */}
                    <div className="featured" style={{textAlign:'center', padding:'40px 0', position:'relative'}}>
                        <div style={{width:'100%'}}>
                            <img src={bann} alt="" style={{width:'100%', objectFit:'contain'}}/>
                        </div>
                        {/* {
                            disp === 1 ?
                            <div style={{
                                fontSize:'1em', marginBottom:'40px', 
                                position:'absolute', display:'grid', 
                                width:'100%', top:'100px', left:'0',
                                height:'100%', justifyContent:'center',
                                alignItems:'center'}}>
                                    <button style={{display:'grid', alignItems:'center',
                                                    padding:'0 30px', border:'1px solid black', 
                                                    borderRadius:'5px', color:'black'}}>
                                                    <Link to={'/'}>Continue shopping</Link>
                                    </button>
                                </div>
                            :''
                        } */}
                    </div>
                 {/* } */}
        {/* <div className="low-banner">
           {
            bubble.slice(1,2).map(({id, img},i)=>(
                <div key={id}>
                    <img src={img} alt=""/>
                </div>
            ))
           }
        </div> */}
                {/* <div className="featured2">
                    <h2>Hot trends</h2>
                    <div className="slider">
                    
                        {
                            groceries.length > 0 ?
                            <div className="slider-inner">
                                {
                                    groceries.filter(items => items.viewerschoice === '1').slice(40, 76).map((product, i)=>(
                                        <div><Pcards type={4} width={220} height={290} vim={'200px'} information={product} route={'pro'}/></div>
                                    ))
                                }
                                </div>
                                :
                                <div className="loading">
                                    
                                </div>
                        }
                    
                    </div>
                </div> */}
            </div>
            <Foot />
        </div>
    )
}
export default  Groceries;