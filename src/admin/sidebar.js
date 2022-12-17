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
    const {details:{authlev}, setDetails} = useContext(UserContext)
    const nav = useNavigate()
    console.log(authlev)
    const destroy = () => {
        localStorage.removeItem('logs')
        setDetails({
            name:'',
            authlev:'',
            business_name:'',
            email:'',
        })
        nav('/')
    }
    // const nav = useNavigate()
    // useEffect(() => {
    //     // localStorage.setItem('logs', JSON.stringify(details))
    //     const truth = localStorage.getItem('logs');
    //     if(truth){
    //         const kept = JSON.parse(localStorage.getItem('logs'))
    //         const {full_name, business_name, email, address, is_admin, } = kept
    //         setDetails({
    //             name:full_name,
    //             authlev:is_admin,
    //             business_name: business_name,
    //             email: email
    //         })
    //     }
    //     else{
    //         nav('/')
    //     }
    // }, [])
    return(
        
        <div className="adm-sidebar">
        <div className="in">
            <h2>Menu</h2>
            <Link to={'/admin'}><Flys icon={<FontAwesomeIcon icon={faHome} />} info={'Dashboard'} /></Link>
            <Flys icon={<FontAwesomeIcon icon={faBox} />} info={'Products'}>
                <div className="options">

                {
                    authlev === '1' ? 
                    <>
                        <div><Link to={'../../admin/products'}>All products</Link></div>
                        <div><Link to={'../../admin/products'}>Pending products</Link></div>
                        <div><Link to={'../../admin/requests'}>All requests</Link></div>
                        <div><Link to={'../../admin/products'}>Product category</Link></div>
                    </> 
                    :
                    <>
                        <div><Link to={'/admin/place'}>Create New Item</Link></div>
                        <div><Link to={'../../admin/products'}>My products</Link></div>
                        <div><Link to={'../../admin/products/sold'}>Sold Items</Link></div>
                        <div><Link to={'../../admin/requests'}>My requests</Link></div>
                        <div><Link to={'../../admin/products/bought'}>Bought Items</Link></div>
                        <div><Link to={'../../admin/drafts'}>Drafts</Link></div>
                    </>
                }
                    
                </div>
            </Flys>
            {
                authlev === '1' ? 
                <>
                    <Link to={'/admin/orders'}><Flys icon={<FontAwesomeIcon icon={faBoxesPacking} />} info={'Orders'}/></Link>
                    <Link to={'/admin/customers'}><Flys icon={<FontAwesomeIcon icon={faPersonDress} />} info={'Customers'}/></Link>
                    <Flys icon={<FontAwesomeIcon icon={faMessage} />} info={'Messages'}>
                        <div className="options">
                            <div><Link to={'/admin/messages'}>Conversations</Link></div>
                        </div>
                    </Flys>
                </>
                :
                <>
                    
                    <Link to={'/admin/orders'}><Flys icon={<FontAwesomeIcon icon={faBoxesPacking} />} info={'Orders'}/></Link>
                    <Link to={'/admin/profile'}><Flys icon={<FontAwesomeIcon icon={faGear} />} info={'Profile'}/></Link>
                    <Flys icon={<FontAwesomeIcon icon={faMessage} />} info={'Messages'}>
                        <div className="options">
                            <div><Link to={'/admin/messages'}>Conversations</Link></div>
                            <div><Link to={'../../admin/support'}>Get Help</Link></div>
                        </div>
                    </Flys>
                </>
                }
                <div onClick={destroy} style={{padding:'20px 40px', cursor:'pointer'}}>Logout</div>
            </div>
        </div>
    )
}
export default Sidebar