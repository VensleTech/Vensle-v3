import { useState, useEffect, useContext } from "react"
import { faUser, faLocationDot, faMapLocationDot, faLocationArrow,faCaretRight, faChevronDown, faCircleDot } from "@fortawesome/free-solid-svg-icons"
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
import { Link, useParams } from "react-router-dom"
import Map from "../reusable/maps"

const Track = () => {
    const {details:{authlev, name,  email, location}, setDetails} = useContext(UserContext)
    const {ordid, proid}= useParams()
    const [isOpen, setisOpen] = useState(false)
    const [topic, settopic] = useState(false)
    const [showdrop, setshowdrop] = useState('')
    const [showdrops, setshowdrops] = useState('')
    const [current, setcurrent] = useState('Orders for me')
    const [groceries, setgroceries] = useState()
    const [prod, setprod] = useState(
    )
    useEffect(()=>{
        getparners()
        producttime()
    },[])
    
    // setTimeout(() => {
    //     getparners()
    // }, 10000);
    // make plans to lean on pusher
    
    const getparners = async () => {
        const data = {
            productref:proid,
            delivererid:'del4838394',
            customerref:'cus54948'
        }
        try {
            const product = await axios.post('http://vensle.com/api/api/tsearch', data)
           // console.log(product.data)
            setgroceries(product.data)
            setisOpen(true)
         } catch (error) {
           // console.log(error);
         }
    }

    const producttime = async () => {
        const data = {
            productref:proid,
            orderid:ordid,
            customerref:'cus54948'
        }
        try {
            const product = await axios.post('http://vensle.com/api/api/pinsearch', data)
           // console.log(product.data)
            setprod(product.data)
            settopic(true)
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
                        <div>Home <FontAwesomeIcon icon={faCaretRight} /> Order Tracking</div>
                        <div><span>Abudonnigeria</span><FontAwesomeIcon icon={faUser}/></div>
                    </div>
                    <div className="top-trending">
                        <h3>Tracking</h3>
                        <div> <FontAwesomeIcon icon={faLocationDot} />Nigeria</div>
                    </div>
                    
                    {
                        isOpen === true ?
                        <Map late={parseFloat(groceries.lat)} long={parseFloat(groceries.long)} height={'400px'}/>
                        :''
                    }

                    <div className="ord-status">
                        <h3>Order Status</h3>
                        <div>
                        {
                            topic === true ?
                                <p><FontAwesomeIcon icon={faCircleDot}/> <span>{prod.updated_at.split('T')[1].substr(0,5)}</span> Product picked from vendor</p>
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
export default Track