import { useState, useContext, useEffect } from "react"
import { faUser, faLocationDot, faDashboard, faHome, faBox, faPersonDress, faBoxesPacking, faGear, faMessage } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Drop from "../reusable/drop"
import Ops from "../reusable/ops"
import Search from "../reusable/search"
import Pcards from "../reusable/pcards"
import Flys from "../reusable/flys"
import { Link, useNavigate } from "react-router-dom"
import {UserContext} from '../auth/usercontext';

const Sidebar = () => {
    const {details:{authlev}, details, setDetails} = useContext(UserContext)
    const nav = useNavigate()
    // console.log(authlev)
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
    return(
        
        <div className="adm-sidebar">
        <div className="in">
            <h2>Menu</h2>
            {
                authlev === 1 ? 
                <>
                <Link to={'/admin/profile'}><Flys icon={<FontAwesomeIcon icon={faHome} />} info={'Dashboard'} /></Link>
                <Flys icon={<FontAwesomeIcon icon={faBox} />} info={'Products'}>
                    <div className="options">
                        <div><Link to={'../../admin/products'}>All products</Link></div>
                        <div><Link to={'../../admin/products'}>Pending products</Link></div>
                        <div><Link to={'../../admin/requests'}>All requests</Link></div>
                        <div><Link to={'../../admin/products'}>Product category</Link></div>
                    </div>
                </Flys>
                <Link to={'/admin/orders'}><Flys icon={<FontAwesomeIcon icon={faBoxesPacking} />} info={'Orders'}/></Link>
                <Link to={'/admin/roles'}><Flys icon={<FontAwesomeIcon icon={faPersonDress} />} info={'Roles'}/></Link>
                <Link to={'/admin/settings'}><Flys icon={<FontAwesomeIcon icon={faGear} />} info={'Settings'}/></Link>
                <Flys icon={<FontAwesomeIcon icon={faMessage} />} info={'Messages'}>
                    <div className="options">
                        <div><Link to={'/admin/messages'}>Conversations</Link></div>
                    </div>
                </Flys>
                </>
                :
                authlev === 2 || authlev === 0?
                <>
                <Link to={'/admin/profile'}><Flys icon={<FontAwesomeIcon icon={faHome} />} info={'Dashboard'} /></Link>
                <Flys icon={<FontAwesomeIcon icon={faBox} />} info={'Products'}>
                    <div className="options">
                        <div><Link to={'/admin/place'}>Create New Item</Link></div>
                        <div><Link to={'../../admin/products/sold'}>Sold Items</Link></div>
                        <div><Link to={'../../admin/requests'}>My requests</Link></div>
                        <div><Link to={'../../admin/products/bought'}>Bought Items</Link></div>
                        <div><Link to={'../../admin/drafts'}>Drafts</Link></div>
                    </div>
                </Flys>
                <Link to={'/admin/orders'}><Flys icon={<FontAwesomeIcon icon={faBoxesPacking} />} info={'Orders'}/></Link>
                    <Flys icon={<FontAwesomeIcon icon={faMessage} />} info={'Messages'}>
                        <div className="options">
                            <div><Link to={'/admin/messages'}>Conversations</Link></div>
                            <div><Link to={'../../admin/support'}>Get Help</Link></div>
                        </div>
                    </Flys>
                </>
                :
                authlev === 3?
                <>
                <Link to={'/admin/profile'}><Flys icon={<FontAwesomeIcon icon={faHome} />} info={'Dashboard'} /></Link>
                <Link to={'/admin/orders'}><Flys icon={<FontAwesomeIcon icon={faBoxesPacking} />} info={'Orders'}/></Link>
                <Flys icon={<FontAwesomeIcon icon={faMessage} />} info={'Messages'}>
                    <div className="options">
                        <div><Link to={'/admin/messages'}>Conversations</Link></div>
                        <div><Link to={'../../admin/support'}>Get Help</Link></div>
                    </div>
                </Flys>
                </>
                :
                ''
                }
                <div onClick={destroy} style={{padding:'20px 40px', cursor:'pointer'}}>Logout</div>
            </div>
        </div>
    )
}
export default Sidebar