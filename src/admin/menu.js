import { useState, useEffect, useContext, useRef} from "react"
import { faUser, faAdd, faUpload, faHome, faBox, faPersonDress, faBoxesPacking, faGear, faMessage, faSearch, faBell, faSignOut, faList, faBars, faDotCircle, faArrowLeft, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Drop from "../reusable/drop"
import Ops from "../reusable/ops"
import Search from "../reusable/search"
import Pcards from "../reusable/pcards"
import Fly from "../reusable/fly"
import { UserContext } from "../auth/usercontext"
import { Link, useNavigate } from "react-router-dom"
import Good from '../apple-icon.webp'

const Menu = () => {
    const {details:{authlev, userlocation,profile_image}, details, setDetails, collapse, setcollapse} = useContext(UserContext)
    const nav = useNavigate()
    const go = useRef('')
    const parent = useRef('')
    const cparent = useRef('')
    const ico = useRef('')
    const destroy = () => {
        localStorage.removeItem('logs')
        setDetails( {...details,
            name:'',
            authlev:'',
            business_name:'',
            email:'',
            phone:'',
            specialref:'',
        })
        nav('/signin')
    }
    const shrink = () => {
        if(collapse === false){
            parent.current.style.gridTemplateColumns = '300px 1fr'
            // parent.current.style.transition = 'grid-template-columns 2s'
            cparent.current.style.gridTemplateColumns = '50px 1fr'
            setTimeout(()=>{
                go.current.style.display='block'
            }, 1100)
            ico.current.style.justifySelf = 'center'
            // setcollapse(false)
        }
        else{
             go.current.style.display='none'
            parent.current.style.gridTemplateColumns = '100px 1fr'
            cparent.current.style.gridTemplateColumns = '100px'
            ico.current.style.justifySelf = 'center'
            // setcollapse(true)
        }
        
    }
    useEffect(()=>{
        shrink()
    }, [collapse])
    return(
        <div className="admin-first" ref={parent}>
            <div className="adfl" ref={cparent}>
                <div className="top-icon" ref={ico}>
                <img src={authlev === 1 ? Good: 'http://vensle.com/api/storage/'+profile_image} alt="" />
                </div>
                <div ref={go} className="designation">
                    <h3>{details.name}</h3>
                    <p>{authlev === 1 ? 'Admin': authlev === 2 ? 'Vendor' : authlev === 3 ? 'Delivery guy' : 'Regular User'}</p>
                </div>
            </div>
            <div className="adfr">
                <div className="admin-first-third">
                   <h1 style={{cursor:'pointer'}}><FontAwesomeIcon icon={faBars} onClick={(e)=>setcollapse(!collapse)}/></h1>
                    <div className="pops" >
                        <div className="notifs"><FontAwesomeIcon icon={faBell}/>
                            <div className="notifcount">5</div>
                        </div>
                        <div className="adfls">
                            <div className="top-icons">
                            <img src={authlev === 1 ? Good: 'http://vensle.com/api/storage/'+profile_image} alt="" />
                            </div>
                            <div>
                                <h3>{details.name}</h3>
                            </div>
                            <div className="dd">
                                <Link to={'/admin/profile'}><FontAwesomeIcon icon={faUser} /> Profile</Link>
                                <Link to={'/'}><FontAwesomeIcon icon={faArrowLeft} /> Back to website</Link>
                                <Link to={'/admin/messages'}><FontAwesomeIcon icon={faEnvelope} /> Inbox</Link>
                                <Link to={'/'}><FontAwesomeIcon icon={faGear} /> Settings</Link>
                                <Link onClick={destroy}><FontAwesomeIcon icon={faSignOut} /> Logout</Link>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="admin-first-third">
                   <h1>Dashboard</h1>
                    <div className="pops" >
                        <div><FontAwesomeIcon icon={faDotCircle} /> {userlocation.city}</div>
                    </div>
                    
                </div>
            </div>
            {
                authlev === 1 ?
                <div className="basemenu">
                    <Link to={"/admin/profile"}><div><FontAwesomeIcon icon={faHome}/><p></p>Home</div></Link>
                    <Link to={"/admin/products"}><div><FontAwesomeIcon icon={faAdd}/><p>Products</p></div></Link>
                    <Link to={"/admin/messages"}><div><FontAwesomeIcon icon={faMessage}/><p>Messages</p></div></Link>
                    <Link to={"/admin/roles"}><div><FontAwesomeIcon icon={faUser}/><p>Roles</p></div></Link>
                    <Link to={"/admin/orders"}><div><FontAwesomeIcon icon={faBoxesPacking}/><p>Orders</p></div></Link>
                </div> 
                :
                authlev === 2 || authlev === 0 ?
                <div className="basemenu">
                    <Link to={"/admin/profile"}><div><FontAwesomeIcon icon={faHome}/><p></p>Home</div></Link>
                    <Link to={"/admin/products"}><div><FontAwesomeIcon icon={faUpload}/><p>Uploads</p></div></Link>
                    <Link to={"/admin/place"}><div><FontAwesomeIcon icon={faAdd}/><p>Sell</p></div></Link>
                    <Link to={"/admin/messages"}><div><FontAwesomeIcon icon={faMessage}/><p>Messages</p></div></Link>
                    <Link to={"/admin/orders"}><div><FontAwesomeIcon icon={faBoxesPacking}/><p>Orders</p></div></Link>
                </div> 
                :
                authlev === 3 ?
                <div className="basemenu">
                    <Link to={"/admin/profile"}><div><FontAwesomeIcon icon={faHome}/><p></p>Home</div></Link>
                    <Link to={"/admin/orders"}><div><FontAwesomeIcon icon={faBoxesPacking}/><p>Orders</p></div></Link>
                </div> 
                :
                ''

        }
        </div>

    )
}
export default Menu