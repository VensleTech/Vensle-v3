import axios from "axios";
import { useState, useEffect, useRef, useContext} from "react";
import Carousels from "../reusable/carousel";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faClose, faLocationDot, faUser, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import {UserContext} from "../auth/usercontext"
import Map from "./maps";
import Topheader from "./topheader";
import { Fade, Slide, Zoom } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css'

const Menus  = () => {
    // destructure context
    const {details, details:{userlocation, specialref, name},products, requests, groceries, setDetails} = useContext(UserContext)
    console.log(userlocation)
    const nav = useNavigate()
    // states
    const  location = useLocation()
    const [popmap, setpopmap] = useState(false)
    const [popout, setpopout] = useState(false)
    const [word, setword] = useState('')
    const [route, setroute] = useState('pro')
    const [routes, setroutes] = useState(products)
    const [radius, setradius] = useState(2000)
    const stick = useRef('')
    const stick2 = useRef('')
    const [catone, setcatone] = useState([])
    const ham = useRef('')
    const h = useRef('')
    const r = useRef('')
    const g = useRef('')
    const cloner = useRef('')
    const [all, setall] = useState([])

    const slidecontent = [
        {
            id:1,
            heading:'70% off fashion',
            par:'Save on wardrobe staples, unique finds & more. Ends 11 September 2023, 10am',
            mainlink:'./pro/1/Fashion',
            cats:[
                {
                    id:1,
                    img:'./rr12.png',
                    category:'Shop watches',
                    link:'./pr/1/Fashion/18/Jewelries%20&%20watches'
                },
                {
                    id:2,
                    img:'./rr7.jpg',
                    category:'Shop men\'s fashion',
                    link:'./pr/1/Fashion/16/Men%E2%80%99s%20clothing%20&%20Accessories'
                },
                {
                    id:3,
                    img:'./rr3.jpg',
                    category:'Shop women\'s fashion',
                    link:'./pr/1/Fashion/17/Women\'s%20clothing%20&%20Accessories'
                }
            ]
        },
        {
            id:2,
            heading:'Up to 95% off cosmetics',
            par:'Good timing for all things cosmetics',
            mainlink:'./pro/4/Health%20and%20beauty',
            cats:[
                {
                    id:1,
                    img:'./rr9.png',
                    category:'Shop lip glimmer',
                    link:'./pr/4/Health%20and%20beauty/37/Makeup'
                },
                {
                    id:2,
                    img:'./rr10.png',
                    category:'Shop makeup bag',
                    link:'./pr/4/Health%20and%20beauty/37/Makeup'
                },
                {
                    id:3,
                    img:'./rr11.png',
                    category:'Shop hair cream',
                    link:'./pr/4/Health%20and%20beauty/39/Hair%20care'
                }
            ]
        }
        

    ]

    console.log(userlocation.country)
    // effects
    useEffect(()=>{
        highlight()
    }, [])

    useEffect(()=>{
        spar()
    }, [location.pathname])

    useEffect(()=>{
            // jones()
    }, [window.scrollY])

    // pure functions
   const highlight = ()=>{
    location.pathname === '/requests' ? r.current.classList.add('highlight')
    : location.pathname === '/groceries' ? g.current.classList.add('highlight')
    : h.current.classList.add('highlight')
   }
   const spar = ()=>{
    location.pathname === '/requests' ? setroute('req')
    : location.pathname === '/groceries' ? setroute('gro')
    : setroute('pro')

    location.pathname === '/requests' ? setroutes(requests)
    : location.pathname === '/groceries' ? setroutes(groceries)
    : setroutes(products)
   }
//    useEffect(()=>{
//         document.body.addEventListener('click', (e)=>{
//             if(!cloner.current.contains(e.target)){
//                 setpopout(false)
//                 document.body.style.overflow = 'unset';
//             }
//         })
//     })
    const fetchresults = async (val) => {
        setword(val)
        const upp = val.toUpperCase()
        const low = val.toLowerCase()
        const sen = val.charAt(0).toUpperCase()+ val.slice(1)
        if(route === 'pro'){
            setall(products.filter(items => (items.title.indexOf(val) !== -1 || items.title.indexOf(upp) !== -1 || items.title.indexOf(low) !== -1 || items.title.indexOf(sen) !== -1) && items.location.search(userlocation.country) !==  -1))
        }
        else if(route === 'req'){
            setall(requests.filter(items => (items.title.indexOf(val) !== -1 || items.title.indexOf(upp) !== -1 || items.title.indexOf(low) !== -1 || items.title.indexOf(sen) !== -1) && items.location.search(userlocation.country) !==  -1))
        }
        else if(route === 'gro'){
            setall(groceries.filter(items => (items.title.indexOf(val) !== -1 || items.title.indexOf(upp) !== -1 || items.title.indexOf(low) !== -1 || items.title.indexOf(sen) !== -1) && items.location.search(userlocation.country) !==  -1))
        }
        else{
            setall(products.filter(items => (items.title.indexOf(val) !== -1 || items.title.indexOf(upp) !== -1 || items.title.indexOf(low) !== -1 || items.title.indexOf(sen) !== -1) && items.location.search(userlocation.country) !==  -1))
        }
    }
    const reveal = () => {
        setpopmap(!popmap)
    }
    const reveals = (ref) => {
        if (ref.current.style.display === 'grid') {
            ref.current.style.display = 'none'
        }
        else{
            ref.current.style.display = 'grid'
        }
        
    }
    const jones = () => {
        if(window.innerHeight+window.scrollY >= document.body.offsetHeight - 500){
            // setstop(stop+200)
        }
        if (window.scrollY > 50) {
            stick.current.classList.add('abs')
            stick2.current.classList.add('abs2')
        }
        else{
            stick.current.classList.remove('abs')
            stick2.current.classList.remove('abs2')
        }

        
    }


    // callbacks
    const close = ()=> {
        reveal()
    }
    const rad = (name)=> {
        setradius(name)
    }

    const destroy = () => {
        localStorage.removeItem('logs')
        setDetails({...details, 
            name:'',
            authlev:'',
            business_name:'',
            email:'',
            phone:'',
            address:'',
            specialref:'',
        })
        nav('/signin')
    }
    const categoryone = async (id, step) => {
        try {
            const categs = await axios.get("http://vensle.com/api/api/fresh/category/"+id)
            step(categs.data)
            //// console.log(categs.data)
        } catch (error) {
           // console.log(error);
        }
    } 
    useEffect(()=>{
        categoryone(0, setcatone)
    },[userlocation])
    
    return(
        <div className='gray'>
            <div>
                <Topheader />
                {/* <div className="topbar2">
                    <div className="all"><FontAwesomeIcon icon={faList}/> All</div>
                    <div className="catlist">
                        {
                            catone.slice(7, 11).map(({id,name,image})=>(
                                <Link to={'/pro/'+id+'/'+name}>
                                <div  className="inner-box">
                                    <p>{name}</p>
                                </div></Link>
                            ))
                        }
                    </div>
                </div> */}
                <div className="spread-banner">
                    {/* <Carousels slide={true} thumbs={false} /> */}
                    <Zoom scale={0.4} duration={5000} infinite={true} arrows={false}> 
                        {
                            slidecontent.map(({id, heading, par,mainlink, cats}, index)=>(
                                <div className="newslide" key={index}>
                                    <div className="slidelhs">
                                        <h2>{heading}</h2>
                                        <p>{par}</p>
                                        <Link to={mainlink}><button>Shop now <FontAwesomeIcon icon={faArrowRight}/></button></Link>
                                    </div>
                                    <div className="sliderhs">
                                        {
                                            cats.map(({id, img, category, link}, i)=>(
                                                <div className="slidecontent" key={i}>
                                                    <img src={img} alt=""/>
                                                    <Link to={link}><p>{category} <FontAwesomeIcon icon={faArrowRight}/></p></Link>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            ))
                        }
                        
                    </Zoom>
                </div>
                <div className="gc" style={{backgroundColor:'white',borderRadius: '10px 10px 0 0', width:'95%', margin:'0 auto', padding:'0 0 5px 0', position:'relative'}}>
                    <div className={'menu-tab'} ref={stick}>
                        <div ref={h}><Link to={"/"}>For Sale</Link></div>
                        <div ref={r}><Link to={"/requests"}>Requests</Link></div>
                        <div ref={g}><Link to={"/groceries"}>Groceries</Link></div>
                    </div>
                    <div className="search-location" ref={stick2}>
                        <div className="location-input">
                            <div className="loca" onClick={(e)=>setpopmap(true)}>
                            <FontAwesomeIcon icon={faLocationDot}/>
                            {/* { Object.keys(userlocation).length > 0 ? locats:''} */}
                            { Object.keys(userlocation).length > 0 ? userlocation.city +' '+radius/1000+' km' : ''}
                            </div>
                            <div style={{position:'relative'}}>
                                <div className="searcher">
                                    <input type="text" placeholder="What are you searching for" onChange={(e)=>{fetchresults(e.target.value);setpopout(true);document.body.style.overflow = 'hidden';} }/>
                                    <div className="s-button">
                                        {word === '' ? <FontAwesomeIcon icon={faSearch} /> : <Link to={"../../search/"+route+"/"+word}><FontAwesomeIcon icon={faSearch} onClick={(e)=>{setpopout(false); document.body.style.overflow = 'unset';}}/></Link>}
                                        {/* {word === '' ? <FontAwesomeIcon icon={faSearch} /> : <Link to={"../../search/"+cats.trim().replaceAll('-', ',').replaceAll(' ', '-').replaceAll('/', '&')+"/"+word.trim().replaceAll(' ', '-').replaceAll('/', '&')}><FontAwesomeIcon icon={faSearch} /></Link>} */}
                                    </div>
                                </div>
                                {
                                    popout === true ?
                                    <div className="s-results" ref={cloner}>
                                    <div className="sidebyside" useEffect>
                                        <div className="lo"></div>
                                        <div  className="clo" onClick={(e)=>{setpopout(false); document.body.style.overflow = 'unset';}}>Close</div>
                                    </div>
                                    {
                                        all.length  === 0 ?
                                        <div className="srs">
                                        {    routes.slice(0,7).map(({category_tree, id, title}, i)=>(
                                                <Link to={"/details/"+route+"/"+id+"/"+category_tree.split(",")[category_tree.split(",").length -1].replaceAll(' ', '-').replaceAll('/', ')')+"/"+title.trim().replaceAll(' ', '-').replaceAll('/', '&')}>
                                                    {title.length > 15 ? title.substr(0, 15)+'...' : title}
                                                </Link>
                                            )) }
                                        </div>
                                        :
                                        all.slice(0,10).map(({prodname, img, imgfolder,category_tree, id, title,feat_image}, i)=>(
                                            <Link to={"/details/"+route+"/"+id+"/"+category_tree.split(",")[category_tree.split(",").length -1].replaceAll(' ', '-').replaceAll('/', ')')+"/"+title.trim().replaceAll(' ', '-').replaceAll('/', '&')}>
                                                <div className="sr">
                                                    <div><img src={"http://vensle.com/api/storage/"+imgfolder+"/"+feat_image} alt=""/></div>
                                                    <div>{title}</div>
                                                </div>
                                            </Link>
                                        ))
                                    }
                                </div>
                                :
                                ''
                            }
                            </div>
                        </div>
                        {
                            popout === true ?
                            <div className="co">
                            <div className="sidebyside">
                                <div className="lo">
                                </div>
                                <div  className="clo" onClick={(e)=>{setpopout(false); document.body.style.overflow = 'unset';}}>Close</div>
                            </div>
                            {
                                        all.length  === 0 ?
                                        <div className="srs">
                                        {    routes.slice(0,7).map(({category_tree, id, title}, i)=>(
                                                <Link to={"/details/"+route+"/"+id+"/"+category_tree.split(",")[category_tree.split(",").length -1].replaceAll(' ', '-').replaceAll('/', ')')+"/"+title.trim().replaceAll(' ', '-').replaceAll('/', '&')}>
                                                    {title.length > 15 ? title.substr(0, 15)+'...' : title}
                                                </Link>
                                            )) }
                                        </div>
                                        :
                                    all.slice(0,10).map(({prodname, img, imgfolder,category_tree, id, title,feat_image}, i)=>(
                                        <Link to={"/details/"+route+"/"+id+"/"+category_tree.split(",")[category_tree.split(",").length -1].replaceAll(' ', '-').replaceAll('/', ')')+"/"+title.trim().replaceAll(' ', '-').replaceAll('/', '&')}>
                                            <div className="sr">
                                                <div><img src={"http://vensle.com/api/storage/"+imgfolder+"/"+feat_image} alt=""/></div>
                                                <div>{title}</div>
                                            </div>
                                        </Link>
                                    ))
                                }
                            </div>
                            :
                            ''
                        }
                    </div>
                </div>
            </div>
            {
                popmap===true ?
                <Map getref={close} getrad={rad} rad={radius} height={'300px'}/>
                :
                ''
            }
            <div className="ham-menu" ref={ham}>
                <div className="ham-inner">
                    <div className="logo">Vensle <FontAwesomeIcon icon={faClose} onClick={(e)=>reveals(ham)}/></div>
                    <div className="hr" />
                    <div className="menus">
                        <div>
                        {
                            specialref !== '' ?
                            <Link to={'/admin/profile'}><FontAwesomeIcon icon={faUser}/> {name}</Link>
                            :
                            <Link to={'/signin'}>Sign in/Sign up</Link>
                        }
                    </div>
                    </div>
                    <div className="menus">
                    </div>
                    <h3>Settings</h3>
                    <div className="menus">
                    <div><Link to={'/'}>Home</Link></div>
                    <div>
                    <div>
                        {
                            specialref !== '' ?
                            <Link to={'/admin/place'}>Start Selling</Link>
                            :
                            <Link to={'/signin'}>Start Selling</Link>
                        }
                    </div>
                    {
                        specialref !== '' ?
                        <div onClick={destroy} style={{padding:'20px 0', cursor:'pointer'}}>Logout</div>
                        :
                        ''
                    }
                    </div>
                    
                    </div>
                </div>
            </div>
        </div>
)
}
export default  Menus;