import { useState, useEffect, useRef, useContext} from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faSearch, faClose,  faUser, faBars,faShoppingBasket, faDashboard, faEnvelope, faGear, faSignOut, faUpload, faChalkboardTeacher, faHomeAlt } from "@fortawesome/free-solid-svg-icons";
import {UserContext} from "../auth/usercontext"
import upl from "../font/Upload.svg"
import req from "../font/req.svg"
import vend from "../font/vend.svg"
import logolegit from "../logo2.png"


const Topheader  = () => {
    // destructure context
    const {details, details:{item, specialref, name, flag, authlev},setDetails} = useContext(UserContext)
    //// console.log(userlocation)
    const  location = useLocation()
    const nav = useNavigate()
    useEffect(()=>{
        spar()
    }, [location.pathname])
    // states
    const [route, setroute] = useState('pro')
    const [word, setword] = useState('')
    const ham = useRef('')
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

    const reveals = (ref) => {
        if (ref.current.style.display === 'grid') {
            ref.current.style.display = 'none'
        }
        else{
            ref.current.style.display = 'grid'
        }
        
    }
    const spar = ()=>{
        location.pathname === '/requests' ? setroute('req')
        : location.pathname === '/groceries' ? setroute('gro')
        : setroute('pro')
       }

    return(
        <div className='gray'>
            <div>
                <div className="topbar2" >
                    <div className="wraps">
                        <div className="capital">
                            Welcome to vensle marketplace
                        </div>
                        <div className="priority">
                            {
                                flag ? <div><img src={flag} alt="logo"/></div> : ''
                            }
                        <div style={{width:'1px', backgroundColor:'#b8b8b8', height:'20px'}}></div>             
                        {
                                specialref !== '' ?
                                <div className="hover">
                                    <Link to={'/admin'}><FontAwesomeIcon icon={faUser}/> {name}</Link>
                                    <div className="dd">
                                        <Link to={'/admin/profile'}><FontAwesomeIcon icon={faUser} /> Profile</Link>
                                        <Link to={'/admin'}><FontAwesomeIcon icon={faDashboard} /> Dashboard</Link>
                                        <Link to={'/admin/messages'}><FontAwesomeIcon icon={faEnvelope} /> Inbox</Link>
                                        <Link to={'/'}><FontAwesomeIcon icon={faGear} /> Settings</Link>
                                        <Link onClick={destroy}><FontAwesomeIcon icon={faSignOut} /> Logout</Link>
                                    </div>
                                </div>
                                :
                                <div><Link to={'/signin'}>Sign in</Link>/<Link to={'/register'}>Register</Link></div>
                            }
                            <div style={{width:'1px', backgroundColor:'#b8b8b8', height:'20px'}}></div>
                                
                            <div><Link to={'/contact'}>Contact us</Link></div>
                        </div>
                    </div>
                    
                </div>
                <div className="topbar">
                    <div className="wraps">
                        <div className="logo">
                            <Link to={'/'}>
                                <img src={logolegit} alt="logo"/>
                            </Link>
                        </div>
                        <div className="rightside">
                            <div className="smallscr">
                                {/* <div><FontAwesomeIcon icon={faSearch}  
                                    onClick={(e)=>reveals(stick2)}
                                /></div> */}
                                <div style={{fontSize:'1.7em'}}><FontAwesomeIcon icon={faBars} 
                                    onClick={(e)=>reveals(ham)}
                                /></div>
                            </div>
                            <div className="priority">
                            <Link to={'/admin/upload'}>
                                <img src={upl} alt="logo"/>
                                Upload product
                            </Link>
                            <Link to={'/admin/request'}>
                                <img src={req} alt="logo"/>
                                Place a request product
                            </Link>
                            {
                                authlev !== 2 ?
                                <Link to={'/signin'}>
                                    <img src={vend} alt="logo"/>
                                    Become a vendor
                                </Link>
                                :
                                <Link to={'/admin/grocery'}>
                                    <img src={vend} alt="logo"/>
                                    Upload Groceries
                                </Link>
                            }
                            <div><Link to={'/cart'}><FontAwesomeIcon icon={faShoppingBasket} /> <span>{item.length}</span></Link></div>
                            </div>
                            </div>
                            
                        </div>
                    </div>
                
                    
            </div>
            <div className="ham-menu" ref={ham}>
                <div className="ham-inner">
                    <div className="smallscrsear">
                    <input className="" type="text" placeholder="Search" onChange={(e)=>setword(e.target.value)} />
                    {
                        word.length > 0 ?
                        <div className="sbutton" onClick={(e)=>reveals(ham)}><Link to={"../../search/"+route+"/"+word}><FontAwesomeIcon icon={faSearch} /></Link></div>
                        :
                        <div className="sbutton"><FontAwesomeIcon icon={faSearch} /></div>
                    }
                    </div>
                    <div className="hr" />
                    {
                         specialref !== '' ?
                         <div className="menus">
                            <div><Link to={'/'}><FontAwesomeIcon icon={faHomeAlt}/> Home</Link></div>
                            <div><Link to={'/admin/profile'}><FontAwesomeIcon icon={faUser} /> Profile</Link></div>
                            <div><Link to={'/admin'}><FontAwesomeIcon icon={faDashboard} /> Dashboard</Link></div>
                            <div><Link to={'/admin/messages'}><FontAwesomeIcon icon={faEnvelope} /> Inbox</Link></div>
                            <div><Link to={'/'}><FontAwesomeIcon icon={faGear} /> Settings</Link></div>
                            <div><Link onClick={destroy}><FontAwesomeIcon icon={faSignOut} /> Logout</Link></div>
                         </div>
                         :
                         <div className="menus">
                            <div><Link to={'/'}><FontAwesomeIcon icon={faHomeAlt}/> Home</Link></div>
                            <div><Link to={'/admin/upload'}><FontAwesomeIcon icon={faUpload}/> Upload product</Link></div>
                            <div><Link to={'/tutorial'}><FontAwesomeIcon icon={faChalkboardTeacher}/> Sell & Buy Tutorial</Link></div>
                            {/* <div><Link to={'/'}><FontAwesomeIcon icon={fareq} />Place a request</Link></div> */}
                            <div><Link to={'/signin'}><FontAwesomeIcon icon={faUser}/> Sign in</Link></div>
                            {/* <div><Link to={'/'}><FontAwesomeIcon icon={faUser}/> Register</Link></div> */}
                        </div>
                    }
                    <div className="minimize"><FontAwesomeIcon icon={faClose} onClick={(e)=>reveals(ham)}/></div>
                </div>
            </div>
        </div>
)
}
export default  Topheader;