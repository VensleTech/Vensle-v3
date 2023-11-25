import axios from "axios";
import { useState, useEffect, useRef, useContext} from "react";
import Input from "../admin/input";
import Pcards from "../reusable/pcards";
import bannerimg from '../Vector.png'
import maps from '../map.png'
import bannerimg2 from '../winter.webp'
import lowlev from '../image 23.png'
import Carousels from "../reusable/carousel";
import Foot from "../reusable/footer";
import logo from "../logo2.png"
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faSearch, faClose, faLocationDot, faMessage, faQuestionCircle, faUser, faBars, faShoppingBag, faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import Iframe from "react-iframe";
import { UserContext } from "../auth/usercontext";
import Map from "./maps";
import Topheader from "./topheader";


const Menu  = () => {
    const nav = useNavigate()
        // destructure context
        const {details, details:{item, userlocation, specialref, name},products, requests, groceries, setDetails} = useContext(UserContext)
        //// console.log(userlocation)
        // states
        const  location = useLocation()
        const [popmap, setpopmap] = useState(false)
        const [product, setproduct] = useState([])
        const [truefalse, settruefalse] = useState(false)
        const [popout, setpopout] = useState(false)
        const [word, setword] = useState('')
        const [route, setroute] = useState('pro')
        const [cats, setcats] = useState('All')
        const [radius, setradius] = useState(2000)
        const flash = useRef('')
        const stick = useRef('')
        const stick2 = useRef('')
        const ham = useRef('')
        const h = useRef('')
        const r = useRef('')
        const g = useRef('')
        const cloner = useRef('')
        const [all, setall] = useState([])
    
        //// console.log(userlocation)
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
            spar()
        }, [location.pathname])
    
        useEffect(()=>{
                // jones()
        }, [window.scrollY])
    
        // useEffect(()=>{
        //     document.body.addEventListener('click', (e)=>{
        //         if(cloner && !cloner.current.contains(e.target)){
        //             setpopout(false)
        //             document.body.style.overflow = 'unset';
        //         }
        //     })
        // })
        // pure functions
       const spar = ()=>{
        location.pathname.split('/')[2] === 'req' ? setroute('req')
        : location.pathname.split('/')[2] === 'gro' ? setroute('gro')
        : setroute('pro')
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
            nav('/')
        }
    return(
        <div className='gray menu-new'>
        <div >
            
            <Topheader/>
            <div className="gc" style={{backgroundColor:'white', width:'100%', margin:'0 auto', padding:'5px 20px', boxSizing:'border-box'}}>
                <div className="search-location" ref={stick2}>
                    <div className="location-input">
                        <div className="loca" onClick={(e)=>setpopmap(true)}>
                        <FontAwesomeIcon icon={faLocationDot}/>
                        { Object.keys(userlocation).length > 0 ? userlocation.city +' '+radius/1000+' km' : ''}
                        </div>
                        <div style={{position:'relative'}}>
                            <div className="searcher">
                                <input type="text" placeholder="What are you searching for" onChange={(e)=>{fetchresults(e.target.value);setpopout(true)}}/>
                                <div className="s-button">
                                    {word === '' ? <FontAwesomeIcon icon={faSearch} /> : <Link to={"../../search/"+cats.trim().replaceAll('-', ',').replaceAll(' ', '-').replaceAll('/', '&')+"/"+word.trim().replaceAll(' ', '-').replaceAll('/', '&')}><FontAwesomeIcon icon={faSearch} /></Link>}
                                </div>
                            </div>
                            {
                                popout === true ?
                                <div className="s-results" ref={cloner}>
                                <div className="sidebyside">
                                    <div className="lo"></div>
                                    <div  className="clo" onClick={(e)=>setpopout(false)}>Close</div>
                                </div>
                               {
                                all.slice(0,10).map(({prodname, img, imgfolder,category_tree, id, title,feat_image}, i)=>(
                                    <Link to={"/details/"+route+"/"+id+"/"+category_tree.split(",")[category_tree.split(",").length -1].replaceAll(' ', '-').replaceAll('/', ')')+"/"+title.trim().replaceAll(' ', '-').replaceAll('/', '&')} onClick={(e)=>setpopout(false)}>
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
                            <div className="lo"></div>
                            <div  className="clo" onClick={(e)=>setpopout(false)}>Close</div>
                        </div>
                       {
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
export default  Menu;