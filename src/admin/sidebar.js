import { useState, useContext, useEffect, useRef} from "react"
import { faUser, faLocationDot, faDashboard, faHome, faBox, faPersonDress, faBoxesPacking, faGear, faMessage, faSignOut, faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Drop from "../reusable/drop"
import Ops from "../reusable/ops"
import Search from "../reusable/search"
import Pcards from "../reusable/pcards"
import Flys from "../reusable/flys"
import { Link, useLocation, useNavigate } from "react-router-dom"
import {UserContext} from '../auth/usercontext';
import axios from "axios"

const Sidebar = () => {
    const {details:{authlev}, details, setDetails, products, groceries, collapse, setcollapse, orders, messages} = useContext(UserContext)
    const nav = useNavigate()
    const loca = useLocation()
   // console.log(loca.pathname.split('/')[2])
    const [dropprod, setdropprod] = useState(false)
    const [dropmessage, setdropmessage] = useState(false)
    // const products = useRef('')
    const dash = useRef('')
    const orderz = useRef('')
    const roles = useRef('')
    const settings = useRef('')
    const upl = useRef('')
    const upls = useRef('')
    const create = useRef('')
    const convo = useRef('')
    const help = useRef('')
    const msg = useRef('')

    useEffect(()=>{
        if(loca.pathname.split('/')[2] === 'products') {
            setdropprod(true)
            upls.current.style.filter = 'invert(86%) sepia(0%) saturate(591%) hue-rotate(157deg) brightness(87%) contrast(92%)';
        }
        else if(loca.pathname.split('/')[2] === 'place') {
            setdropprod(true)
            
            create.current.style.filter = 'invert(86%) sepia(0%) saturate(591%) hue-rotate(157deg) brightness(87%) contrast(92%)';
        }
        else if(loca.pathname.split('/')[2] === 'messages') {
            setdropmessage(true)
            convo.current.style.filter = 'invert(86%) sepia(0%) saturate(591%) hue-rotate(157deg) brightness(87%) contrast(92%)';
        }
        else if(loca.pathname.split('/')[2] === 'support') {
            setdropmessage(true)
            help.current.style.filter = 'invert(86%) sepia(0%) saturate(591%) hue-rotate(157deg) brightness(87%) contrast(92%)';
        }
        else if(loca.pathname.split('/')[2] === 'orders'){
            orderz.current.style.filter = 'invert(86%) sepia(0%) saturate(591%) hue-rotate(157deg) brightness(87%) contrast(92%)';
        }
        else if(loca.pathname.split('/')[2] === 'profile'){
            settings.current.style.filter = 'invert(86%) sepia(0%) saturate(591%) hue-rotate(157deg) brightness(87%) contrast(92%)';
        }
        else if(loca.pathname.split('/')[2] === 'roles'){
            roles.current.style.filter = 'invert(86%) sepia(0%) saturate(591%) hue-rotate(157deg) brightness(87%) contrast(92%)';
        }
        else if(loca.pathname.split('/')[2] === 'upload'){
            upl.current.style.filter = 'invert(86%) sepia(0%) saturate(591%) hue-rotate(157deg) brightness(87%) contrast(92%)';
        }
        else if(loca.pathname.split('/')[2] === 'request'){
            upl.current.style.filter = 'invert(86%) sepia(0%) saturate(591%) hue-rotate(157deg) brightness(87%) contrast(92%)';
        }
        else if(loca.pathname.split('/')[2] === 'grocery'){
            upl.current.style.filter = 'invert(86%) sepia(0%) saturate(591%) hue-rotate(157deg) brightness(87%) contrast(92%)';
        }
        else if(loca.pathname.split('/')[2] === 'settings'){
            settings.current.style.filter = 'invert(86%) sepia(0%) saturate(591%) hue-rotate(157deg) brightness(87%) contrast(92%)';
        }
        else{
            dash.current.style.filter = 'invert(86%) sepia(0%) saturate(591%) hue-rotate(157deg) brightness(87%) contrast(92%)';
        }
    }, [loca])
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
    if (collapse === true) {
        return(
            
            <div className="adm-sidebar" style={{width:'100px'}}>
            
                <div className="in" style={{width:'100px'}}>
                {
                    authlev === 1 ? 
                    <>
                    <Link to={'/admin'} ref={dash}><Flys icon={<FontAwesomeIcon icon={faHome} />} info={''} /></Link>
                    <Flys icon={<FontAwesomeIcon icon={faBox} />} info={''} inst={dropprod}>
                        <div className="options">
                            <div ref={upls}><Link to={'../../admin/products'} >All products</Link></div>
                        </div>
                    </Flys>
                    <Link to={'/admin/orders'} ref={orderz}><Flys icon={<FontAwesomeIcon icon={faBoxesPacking} />} info={''}/></Link>
                    <Link to={'/admin/roles'} ref={roles}><Flys icon={<FontAwesomeIcon icon={faPersonDress} />} info={''}/></Link>
                    <Link to={'/admin/profile'} ref={settings}><Flys icon={<FontAwesomeIcon icon={faGear} />} info={''}/></Link>
                    <div ref={msg}>
                        <Flys icon={<FontAwesomeIcon icon={faMessage} />} info={''} inst={dropmessage}>
                        <div className="options">
                            <div><Link to={'/admin/messages'} ref={convo}>Conversations</Link></div>
                        </div>
                    </Flys>
                    </div>
                    </>
                    :
                    authlev === 2 || authlev === 0?
                    <>
                    <Link to={'/admin'} ref={dash}><Flys icon={<FontAwesomeIcon icon={faHome} />} info={''} /></Link>
                    <div ref={upl}>
                        <Flys icon={<FontAwesomeIcon icon={faBox} />} info={''} inst={dropprod} count={''}>
                            <div className="options">
                                <div ref={create}><Link to={'/admin/place'} >Create New Item</Link></div>
                                <div ref={upls}><Link to={'../../admin/products'} >My uploads </Link></div>
                                {/* <div ref={requests}><Link to={'../../admin/requests'}>My requests</Link></div> */}
                                {/* <div><Link to={'../../admin/products/bought'}>Bought Items</Link></div>
                                <div><Link to={'../../admin/drafts'}>Drafts</Link></div> */}
                            </div>
                        </Flys>
                    </div>
                    <Link to={'/admin/orders'} ref={orderz}><Flys icon={<FontAwesomeIcon icon={faBoxesPacking} />} info={''} count={''}/></Link>
                    <Link to={'/admin/profile'} ref={settings}><Flys icon={<FontAwesomeIcon icon={faGear} />} info={''}/></Link>
                    <div ref={msg}>
                        <Flys icon={<FontAwesomeIcon icon={faMessage} />} info={''} inst={dropmessage} count={''}>
                            <div className="options">
                                <div ref={convo}><Link to={'/admin/messages'} >Conversations</Link></div>
                                <div ref={help}><Link to={'../../admin/support'} >Get Help</Link></div>
                            </div>
                        </Flys>
                    </div>
                    </>
                    :
                    authlev === 3?
                    <>
                    <Link to={'/admin'} ref={dash}><Flys icon={<FontAwesomeIcon icon={faHome} />} info={'Dashboard'} /></Link>
                    <Link to={'/admin/orders'} ref={orderz}><Flys icon={<FontAwesomeIcon icon={faBoxesPacking} />} info={'Orders'}/></Link>
                    <Link to={'/admin/profile'} ref={settings}><Flys icon={<FontAwesomeIcon icon={faGear} />} info={'Settings'}/></Link>
                    <div ref={msg}>
                    <Flys icon={<FontAwesomeIcon icon={faMessage} />} info={'Messages'} inst={dropmessage}>
                        <div className="options">
                            <div><Link to={'/admin/messages'} ref={convo}>Conversations</Link></div>
                            <div><Link to={'../../admin/support'} ref={help}>Get Help</Link></div>
                        </div>
                    </Flys>
                    </div>
                    </>
                    :
                    ''
                    }
                    <div onClick={destroy}><Flys icon={<FontAwesomeIcon icon={faSignOut} />} info={''} /></div>
                    <Link to={'/'}><Flys icon={<FontAwesomeIcon icon={faArrowCircleLeft} />} info={''} /></Link>
                </div>
            </div>
        )
    } else {
        return(
            
            <div className="adm-sidebar">
            
                <div className="in">
                {
                    authlev === 1 ? 
                    <>
                    <Link to={'/admin'} ref={dash}><Flys icon={<FontAwesomeIcon icon={faHome} />} info={'Dashboard'} /></Link>
                    <Flys icon={<FontAwesomeIcon icon={faBox} />} info={'Products'} inst={dropprod} count={products.length+groceries.length}>
                        <div className="options">
                            <div ref={upls}><Link to={'../../admin/products'} >All products <div className="prodcount">{products.length+groceries.length}</div></Link></div>
                            {/* <div><Link to={'../../admin/products'}>Pending products</Link></div>
                            <div><Link to={'../../admin/requests'}>All requests</Link></div>
                            <div><Link to={'../../admin/products'}>Product category</Link></div> */}
                        </div>
                    </Flys>
                    <Link to={'/admin/orders'} ref={orderz}><Flys icon={<FontAwesomeIcon icon={faBoxesPacking} />} info={'Orders'} count={orders.length}/></Link>
                    <Link to={'/admin/roles'} ref={roles}><Flys icon={<FontAwesomeIcon icon={faPersonDress} />} info={'Roles'}/></Link>
                    <Link to={'/admin/profile'} ref={settings}><Flys icon={<FontAwesomeIcon icon={faGear} />} info={'Settings'}/></Link>
                    <div ref={msg}>
                        <Flys icon={<FontAwesomeIcon icon={faMessage} />} info={'Messages'} inst={dropmessage} count={messages.length}>
                        <div className="options">
                            <div ref={convo}><Link to={'/admin/messages'} >Conversations</Link></div>
                        </div>
                    </Flys>
                    </div>
                    </>
                    :
                    authlev === 2 || authlev === 0?
                    <>
                    <Link to={'/admin'} ref={dash}><Flys icon={<FontAwesomeIcon icon={faHome} />} info={'Dashboard'} /></Link>
                    <div ref={upl}>
                        <Flys icon={<FontAwesomeIcon icon={faBox} />} info={'Products'} inst={dropprod} count={products.filter(item=>parseInt(item.user_id) === details.id).length+groceries.filter(item=>parseInt(item.user_id) === details.id).length}>
                            <div className="options">
                                <div ref={create}><Link to={'/admin/place'} >Create New Item</Link></div>
                                <div ref={upls}><Link to={'../../admin/products'} >My uploads <div className="prodcount">{products.filter(item=>parseInt(item.user_id) === details.id).length+groceries.filter(item=>parseInt(item.user_id) === details.id).length}</div></Link></div>
                                {/* <div ref={requests}><Link to={'../../admin/requests'}>My requests</Link></div> */}
                                {/* <div><Link to={'../../admin/products/bought'}>Bought Items</Link></div>
                                <div><Link to={'../../admin/drafts'}>Drafts</Link></div> */}
                            </div>
                        </Flys>
                    </div>
                    <Link to={'/admin/orders'} ref={orderz}><Flys icon={<FontAwesomeIcon icon={faBoxesPacking} />} info={'Orders'} count={orders.filter(item=>(item.vendorid === details.specialref || item.customerref === details.specialref)).length}/></Link>
                    <Link to={'/admin/profile'} ref={settings}><Flys icon={<FontAwesomeIcon icon={faGear} />} info={'Settings'}/></Link>
                    <div ref={msg}>
                        <Flys icon={<FontAwesomeIcon icon={faMessage} />} info={'Messages'} inst={dropmessage} count={messages.length}>
                            <div className="options">
                                <div ref={convo}><Link to={'/admin/messages'} >Conversations</Link></div>
                                <div ref={help}><Link to={'../../admin/support'} >Get Help</Link></div>
                            </div>
                        </Flys>
                    </div>
                    </>
                    :
                    authlev === 3?
                    <>
                    <Link to={'/admin'} ref={dash}><Flys icon={<FontAwesomeIcon icon={faHome} />} info={'Dashboard'} /></Link>
                    <Link to={'/admin/orders'} ref={orderz}><Flys icon={<FontAwesomeIcon icon={faBoxesPacking} />} info={'Orders'}/></Link>
                    <Link to={'/admin/profile'} ref={settings}><Flys icon={<FontAwesomeIcon icon={faGear} />} info={'Settings'}/></Link>
                    <div ref={msg}>
                    <Flys icon={<FontAwesomeIcon icon={faMessage} />} info={'Messages'} inst={dropmessage}>
                        <div className="options">
                            <div><Link to={'/admin/messages'} ref={convo}>Conversations</Link></div>
                            <div><Link to={'../../admin/support'} ref={help}>Get Help</Link></div>
                        </div>
                    </Flys>
                    </div>
                    </>
                    :
                    ''
                    }
                    <div onClick={destroy}><Flys icon={<FontAwesomeIcon icon={faSignOut} />} info={'Logout'} /></div>
                    <Link to={'/'}><Flys icon={<FontAwesomeIcon icon={faArrowCircleLeft} />} info={'Vensle.com'} /></Link>
                </div>
            </div>
        )
    }
}
export default Sidebar