import axios from "axios";
import { useState, useEffect, useRef, useContext} from "react";
import maps from '../map.png'
import Carousels from "../reusable/carousel";
import { Link, useLocation, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faSearch, faClose, faLocationDot, faNairaSign, faDollarSign, faUser, faBars, faShoppingCart, faShoppingBag, faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import {UserContext} from "../auth/usercontext"
import { useGeoLocation } from "use-geo-location";
import Map from "./maps";
import { specialCharMap } from "@testing-library/user-event/dist/keyboard";

const Menus  = () => {
    // destructure context
    const {details, details:{item, userlocation, specialref, name},products, requests, groceries, setDetails} = useContext(UserContext)
    // console.log(userlocation)
    // states
    const  location = useLocation()
    const [popmap, setpopmap] = useState(false)
    const [product, setproduct] = useState([])
    const [truefalse, settruefalse] = useState(false)
    const [popout, setpopout] = useState(false)
    const [word, setword] = useState('')
    const [route, setroute] = useState('pro')
    const [routes, setroutes] = useState(products)
    const [cats, setcats] = useState('All')
    const [radius, setradius] = useState(2000)
    const flash = useRef('')
    const stick = useRef('')
    const stick2 = useRef('')
    const ham = useRef('')
    const h = useRef('')
    const r = useRef('')
    const g = useRef('')
    const [all, setall] = useState([])

    // console.log(userlocation)
    // effects
    setTimeout(() => {
       if(truefalse === false){
            flash.current.style.opacity = 0.2
            settruefalse(!truefalse)
       }
       else{
            flash.current.style.opacity = 1
            settruefalse(!truefalse)
       }
    }, 100);
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
    : setroute('products')
   }
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

    
    
    return(
        <div className='gray'>
            <div>
                <div className="topbar">
                <div className="logo">
                <div><FontAwesomeIcon icon={faBars} /></div> <Link to={'/'}>Vensle</Link>
                </div>
                <div className="rightside">
                    <div><FontAwesomeIcon icon={faSearch}  onClick={(e)=>reveals(stick2)}/></div>
                    <div><FontAwesomeIcon icon={faBars} onClick={(e)=>reveals(ham)}/></div>
                    <div>
                    {
                        specialref !== '' ?
                        <Link to={'/admin/profile'}><FontAwesomeIcon icon={faUser}/> {name}</Link>
                        :
                        <Link to={'/signin'}>Sign in/Sign up</Link>
                    }
                    </div>
                    <div ref={flash} className="glob">
                    {
                        specialref !== '' ?
                        <Link to={'/admin/place'}>Start Selling</Link>
                        :
                        <Link to={'/signin'}>Start Selling</Link>
                    }
                    </div>
                    <div><Link to={'/cart'}><FontAwesomeIcon icon={faShoppingBasket} /> <span>{item.length}</span></Link></div>
                    </div>
                </div>
                <div className="spread-banner">
                <div  className="upon">
                <h3>Best Deals</h3>
                <h5>Only on Vensle MarketPlace</h5>
                </div>
                <Carousels slide={true} thumbs={false} />
                </div>
                <div className="gc" style={{backgroundColor:'white', width:'95%', margin:'0 auto', padding:'0 0 5px 0'}}>
                    <div className={'menu-tab'} ref={stick}>
                        <div ref={h}><Link to={"/"}>For Sale</Link></div>
                        <div ref={r}><Link to={"/requests"}>Requests</Link></div>
                        <div ref={g}><Link to={"/groceries"}>Groceries</Link></div>
                    </div>
                    <div className="search-location" ref={stick2}>
                        <div className="location-input">
                            <div className="loca" onClick={(e)=>setpopmap(true)}>
                            <FontAwesomeIcon icon={faLocationDot}/>
                            { Object.keys(userlocation).length > 0 ? userlocation.city +' '+radius/1000+' km' : ''}
                            </div>
                            <div style={{position:'relative'}}>
                                <div className="searcher">
                                    <input type="text" placeholder="What are you searching for" onChange={(e)=>fetchresults(e.target.value)}  onClick={(e)=>setpopout(true)}/>
                                    <div className="s-button">
                                        {word === '' ? <FontAwesomeIcon icon={faSearch} /> : <Link to={"../../search/"+cats.trim().replaceAll('-', ',').replaceAll(' ', '-').replaceAll('/', '&')+"/"+word.trim().replaceAll(' ', '-').replaceAll('/', '&')}><FontAwesomeIcon icon={faSearch} /></Link>}
                                    </div>
                                </div>
                                {
                                    popout === true ?
                                    <div className="s-results">
                                    <div className="sidebyside">
                                        <div className="lo"></div>
                                        <div  className="clo" onClick={(e)=>setpopout(false)}>Close</div>
                                    </div>
                                    {
                                        all.length  === 0 ?
                                        <div className="srs">
                                        {    groceries.map(({category_tree, id, title}, i)=>(
                                                <Link to={"/details/"+route+"/"+id+"/"+category_tree.split(",")[category_tree.split(",").length -1].replaceAll(' ', '-').replaceAll('/', ')')+"/"+title.trim().replaceAll(' ', '-').replaceAll('/', '&')}>
                                                        <span>{title}</span>
                                                </Link>
                                            )) }
                                        </div>
                                        :
                                        all.slice(0,10).map(({prodname, img, imgfolder,category_tree, id, title,feat_image}, i)=>(
                                            <Link to={"/details/"+route+"/"+id+"/"+category_tree.split(",")[category_tree.split(",").length -1].replaceAll(' ', '-').replaceAll('/', ')')+"/"+title.trim().replaceAll(' ', '-').replaceAll('/', '&')}>
                                                <div className="sr">
                                                    <div><img src={"http://geo.vensle.com/storage/"+imgfolder+"/"+feat_image} alt=""/></div>
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
                                <div  className="clo" onClick={(e)=>setpopout(false)}>Close</div>
                            </div>
                            {
                                        all.length  === 0 ?
                                        <div className="srs">
                                        {    groceries.slice(0,10).map(({category_tree, id, title}, i)=>(
                                                <Link to={"/details/"+route+"/"+id+"/"+category_tree.split(",")[category_tree.split(",").length -1].replaceAll(' ', '-').replaceAll('/', ')')+"/"+title.trim().replaceAll(' ', '-').replaceAll('/', '&')}>
                                                        <span>{title}</span>
                                                </Link>
                                            )) }
                                        </div>
                                        :
                                    all.slice(0,10).map(({prodname, img, imgfolder,category_tree, id, title,feat_image}, i)=>(
                                        <Link to={"/details/"+route+"/"+id+"/"+category_tree.split(",")[category_tree.split(",").length -1].replaceAll(' ', '-').replaceAll('/', ')')+"/"+title.trim().replaceAll(' ', '-').replaceAll('/', '&')}>
                                            <div className="sr">
                                                <div><img src={"http://geo.vensle.com/storage/"+imgfolder+"/"+feat_image} alt=""/></div>
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
                    </div>
                    
                    </div>
                </div>
            </div>
        </div>
)
}
export default  Menus;