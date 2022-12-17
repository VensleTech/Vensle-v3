import { useState, useContext } from "react"
import { faUser, faLocationDot, faFilter, faImage, faClose } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import banner1 from '../fashion (27).jpg'
import banner2 from '../grocerydelivery.webp'
import banner3 from '../fashion (36).jpg'
import Drop from "../reusable/drop"
import Ops from "../reusable/ops"
import Search from "../reusable/search"
import Pcards from "../reusable/pcards"
import Sidebar from "./sidebar"
import Menu from "./menu"
import ReusableTable from "./reusabletable"
import Input from "./input"
import Select from "../select"
import { Link } from "react-router-dom"

import {UserContext} from '../auth/usercontext';
const Placead = () => {
   
    const {details:{authlev, name,  email, location}, setDetails} = useContext(UserContext)
    return(
        <div>
            <Menu />
            <div className="admin-sec">
                <Sidebar/>
                <div className="adm-main">
                    <div className="breadcrumbs-bar">
                        <div>Home -> Upload</div>
                        <div><span>{name}</span><FontAwesomeIcon icon={faUser}/></div>
                    </div>
                    
                    <div className="up-options">
                    <div className="inbox">
                        <div><img src={banner1} alt="" /></div>
                        <Link to={"/admin/upload"} className="inbox-arrow">
                            <div>Regular Product</div>
                            <div>-></div>
                        </Link>
                    </div>
                    <div className="inbox">
                    <div><img src={banner2} alt="" /></div>
                       <Link to={"/admin/grocery"}  className="inbox-arrow">
                            <div>Groceries</div> 
                            <div>-></div>
                       </Link>
                    </div>
                    <div className="inbox">
                    <div><img src={banner3} alt="" /></div>
                        <Link to={"/admin/request"}  className="inbox-arrow">
                            <div>Request a Product</div>
                            <div>-></div>
                        </Link>
                    </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Placead