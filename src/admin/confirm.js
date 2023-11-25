import { useState, useEffect, useContext } from "react"
import { faUser, faLocationDot, faMapLocationDot, faLocationArrow,faCaretRight, faChevronDown } from "@fortawesome/free-solid-svg-icons"
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
import Map from "../reusable/maps"
import OrdersTable from "./orderstable"

const Confirm = () => {
    const {details:{authlev, name,  email, location}, setDetails} = useContext(UserContext)
    const [isOpen, setisOpen] = useState(false)
    const [topic, settopic] = useState('Orders from me')
    const [orderno, setorderno] = useState('')
    const [showdrops, setshowdrops] = useState('')
    const [current, setcurrent] = useState('Orders for me')
    const [groceries, setgroceries] = useState([

    ])
    useEffect(()=>{
        // getparners()
    },[])
    const getparners = async () => {
        const data = {
            orderid:orderno,
        }
        try {
            const product = await axios.post('http://vensle.com/api/api/csearch', data)
            setgroceries(product.data)
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
                        <div>Home <FontAwesomeIcon icon={faCaretRight} /> Order Confirmation</div>
                        <div><span>Abudonnigeria</span><FontAwesomeIcon icon={faUser}/></div>
                    </div>
                    <div className="top-trending">
                        <h3>Confirm Orders</h3>
                        <div> <FontAwesomeIcon icon={faLocationDot} />Nigeria</div>
                    </div>
                    <div className="ord-cont">
                        <div className="ord-form">
                            <h3>Order Number</h3>
                            <input type='text'  placeholder="Enter the order number" onChange={(e)=>setorderno(e.target.value)}/>
                            <span onClick={getparners}>Check</span>
                        </div>
                        
                        <div className="results-table">
                        <h3>Results</h3>
                        <div className="reusable-table-orders" style={{border:'none', textTransform:'uppercase', fontSize:'smaller', fontWeight:'700', color:'rgba(0,0,0,.6)', height:'20px', padding:'20px 0 0 0', marginBottom:'20px'}}>
                            <div>SN</div>
                            <div>Order Ref</div>
                            <div>Location</div>
                            <div>Time ordered</div>
                            <div>Price</div>
                            <div></div>
                        </div>
                        <div className="hr"/>
                        {
                            groceries.map(({id, orderid, location, created_at, cost}, i)=>(
                                <OrdersTable sn={i} orderid={orderid} location={location} created_at={created_at} cost={cost}/>
                            ))
                        }    
                        </div>
                    </div>
                    
                    
                </div>

            </div>
        </div>
    )
}
export default Confirm