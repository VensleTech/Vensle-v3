import { useState } from "react"
import { faUser, faLocationDot, faDashboard, faHome, faBox, faPersonDress, faBoxesPacking, faGear, faMessage } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Drop from "../reusable/drop"
import Ops from "../reusable/ops"
import Search from "../reusable/search"
import Pcards from "../reusable/pcards"
import Fly from "../reusable/fly"
import { Link } from "react-router-dom"

const Sidebar = () => {
    return(
        <div className="adm-sidebar">
            <h2>Menu</h2>
            <Link to={'/admin'}><Fly icon={<FontAwesomeIcon icon={faHome} />} info={'Dashboard'} /></Link>
            <Fly icon={<FontAwesomeIcon icon={faBox} />} info={'Products'}>
                <div className="options">
                    <div><Link to={'../../admin/upload'}>Upload New Item</Link></div>
                    <div><Link to={'../../admin/products'}>All products</Link></div>
                    <div><Link to={'../../admin/products'}>My products</Link></div>
                    <div><Link to={'../../admin/products'}>Pending products</Link></div>
                    <div><Link to={'../../admin/products'}>Product category</Link></div>
                    <div><Link to={'../../admin/products/sold'}>Sold Items</Link></div>
                    <div><Link to={'../../admin/request'}>Place a Request</Link></div>
                    <div><Link to={'../../admin/requests'}>All requests</Link></div>
                    <div><Link to={'../../admin/requests'}>My requests</Link></div>
                    <div><Link to={'../../admin/products/bought'}>Bought Items</Link></div>
                    <div><Link to={'../../admin/drafts'}>Drafts</Link></div>
                </div>
            </Fly>
            <Link to={'/admin/customers'}><Fly icon={<FontAwesomeIcon icon={faPersonDress} />} info={'Customers'}/></Link>
            <Link to={'/admin/orders'}><Fly icon={<FontAwesomeIcon icon={faBoxesPacking} />} info={'Orders'}/></Link>
            <Link to={'/admin/profile'}><Fly icon={<FontAwesomeIcon icon={faGear} />} info={'Profile'}/></Link>
            <Link to={'/admin/messages'}><Fly icon={<FontAwesomeIcon icon={faMessage} />} info={'Messages'}>
                
                <div className="options">
                    <div><Link to={'../../admin/support'}>Get Help</Link></div>
                </div>
            </Fly></Link>
        </div>
    )
}
export default Sidebar