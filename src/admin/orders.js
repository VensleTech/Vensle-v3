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
const MyOrders = () => {
    const {details:{authlev, name,  specialref, userlocation}, setDetails} = useContext(UserContext)
    const [isOpen, setisOpen] = useState(false)
    const [topic, settopic] = useState('Orders from me')
    const [showdrop, setshowdrop] = useState('')
    const [showdrops, setshowdrops] = useState('')
    const [current, setcurrent] = useState('Orders for me')
    const [groceries, setgroceries] = useState([
       
    ])
    const [payload, setpayload] = useState({
        'customerref': specialref
    })
    useEffect(()=>{
        getparners('fromme', authlev)
    },[])
    const getparners = async (val, auth) => {
        if (auth !== 1) {
            const data = payload;
           // console.log(val)
            try {
                const product = await axios.post('http://vensle.com/api/api/'+val, data)
                setgroceries(product.data)
               // console.log(product.data)
            } catch (error) {
               // console.log(error);
            }
        }
        else{
            const data = payload;
           // console.log(val)
            try {
                const product = await axios.get('http://vensle.com/api/api/order')
                setgroceries(product.data)
               // console.log(product.data)
            } catch (error) {
               // console.log(error);
            }
        }
    }
    return(
        <div>
            <Menu />
            <div className="admin-sec">
                <Sidebar/>
                <div className="adm-main">
                    <div className="breadcrumbs-bar">
                        <div>Home <FontAwesomeIcon icon={faCaretRight} /> Orders</div>
                        <div><span>{name}</span><FontAwesomeIcon icon={faUser}/></div>
                    </div>
                    <div className="top-trending">
                        <h3>Orders</h3>
                        {/* <div> <FontAwesomeIcon icon={faLocationDot} />{userlocation.country}</div> */}
                    </div>
                    <div className="top-trending-list">
                    <div className="table-container">
                    
                        <div className="table-top">
                        {
                            authlev === 2 || authlev === 0 ?
                            <div className="top-trending">
                                <h3>{topic}</h3>
                                <FontAwesomeIcon icon={faChevronDown} onClick={(e)=>setshowdrop(!showdrop)} style={{cursor:'pointer'}}/>
                                {
                                    showdrop === true ? 
                                    <div className="dropdow">
                                        <div onClick={(e)=>{
                                            settopic(e.target.innerText);
                                            setshowdrop(!showdrop);
                                            setcurrent(topic);
                                            topic === 'Orders from me' ? getparners('tome') : getparners('fromme')
                                         }}>{current}</div>
                                    </div> :
                                    null
                                }
                            </div>
                            :
                            ''
                            // <div style={{padding:'20px', backgroundColor:'#EB3223', fontWeight:'600', borderRadius:'5px'}}>
                            //     <Link to={'/admin/confirm'}>Confirm Order</Link>
                            // </div>
                        }
                            
                            
                        </div>
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
export default MyOrders