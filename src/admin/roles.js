import { useState, useEffect, useContext } from "react"
import { faUser, faLocationDot, faListDots, faClose,faCaretRight, faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Drop from "../reusable/drop"
import Ops from "../reusable/ops"
import Search from "../reusable/search"
import Pcards from "../reusable/pcards"
import Sidebar from "./sidebar"
import Menu from "./menu"
import ReusableTable from "./reusabletable"
import Popup from "./popup"
import Sorts from "./sorts"
import axios from "axios"
import {UserContext} from '../auth/usercontext';
import { Link } from "react-router-dom"
import OrdersTable from "./orderstable"
import RolesTable from "./rolestable"
const Roles = () => {
    const {details:{authlev, name,  email, userlocation}, setDetails} = useContext(UserContext)
    const [isOpen, setisOpen] = useState(false)
    const [topic, settopic] = useState('Orders from me')
    const [showdrop, setshowdrop] = useState('')
    const [showdrops, setshowdrops] = useState(0)
    const [causerefresh, setcauserefresh] = useState('')
    const [current, setcurrent] = useState('Orders for me')
    const [groceries, setgroceries] = useState([
       
    ])
    useEffect(()=>{
        getparners()
    },[causerefresh])
    const refresh = (name)=> {
        // if(name === 1){
            setcauserefresh(causerefresh+1)
        // }
    }
    const getparners = async () => {
        try {
            const product = await axios.get('http://vensle.com/api/api/allusers')
            setgroceries(product.data)
           // console.log(product.data)
         } catch (error) {
           // console.log(error);
         }
    }
    return(
        <div>
            <Menu />
            <div className="admin-sec">
                <Sidebar/>
                <div className="adm-main">
                    <div className="breadcrumbs-bar">
                        <div>Home <FontAwesomeIcon icon={faCaretRight} /> Roles</div>
                        <div><span>{name}</span><FontAwesomeIcon icon={faUser}/></div>
                    </div>
                    <div className="top-trending">
                        <h3>Roles</h3>
                        <div> <FontAwesomeIcon icon={faLocationDot} />{userlocation.country}</div>
                    </div>
                    <div className="top-trending-list">
                    <div className="table-container">
                    
                        <div className="reusable-table-orders4" style={{border:'none', textTransform:'uppercase', fontSize:'smaller', fontWeight:'700', color:'rgba(0,0,0,.6)', height:'20px', padding:'20px 0 0 0', marginBottom:'20px'}}>
                            <div>SN</div>
                            <div>Full Name</div>
                            <div>Business name</div>
                            <div>Email</div>
                            <div>Phone</div>
                            <div>Role</div>
                        </div>
                        <div className="hr"/>
                    {
                        groceries.map(({id, full_name, business_name, email, a_lev, phone}, i)=>(
                            <RolesTable sn={i} id={id} orderid={full_name} location={business_name} created_at={email} cost={a_lev} phone={phone} getreadstate={refresh}/>
                        ))
                    }    
                    </div>
                    
                    {
                        isOpen === true ? 
                        <div className='popcontainer' > 
                            <div  className="inner-container" style={{display:'block', width:'80%', height:'70%', position:'relative'}}>
                                <div className="up-bar" style={{background:'rgba(0, 0, 0, 0)', marginBottom:'0px'}}>
                                    <div>Filters</div>
                                    <div style={{color:'black', fontSize:'1em', justifySelf:'end', cursor:'pointer'}} onClick={(e)=>setisOpen(!isOpen)}><FontAwesomeIcon icon={faClose} /></div>
                                </div>
                                <Popup>
                                    <Sorts title={"Type"} options={[{val:"Musa Stores"}, {val:'Redvnk'}]} />
                                    <Sorts title={"Category"} options={[{val:"Fashion"}, {val:'Kids & Baby'}]} />
                                    <Sorts title={"Status"} options={[{val:"Musa Stores"}, {val:'Redvnk'}]} />
                                    <Sorts title={"Brand"} options={[{val:"Musa Stores"}, {val:'Redvnk'}]} />
                                    <Sorts title={"Condition"} options={[{val:"New"}, {val:'Neatly Used'}, {val:'Used'}]} />
                                    <p className="apply" onClick={(e)=>setisOpen(!isOpen)}>Apply Filters</p>
                                </Popup>
                            </div>
                        </div> : null
                    }
                    
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Roles