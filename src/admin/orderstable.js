import { useContext, useEffect, useState } from "react"
import { faUser, faLocationDot, faListDots,faClose, faHome, faEye, faBox, faPersonDress, faBoxesPacking, faGear, faMessage, faEllipsisVertical } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ProdPop from "../reusable/prodpop"
import { Link } from "react-router-dom"
import { UserContext } from "../auth/usercontext"
import axios from "axios"

const OrdersTable = ({sn, orderid, location, created_at, cost}) => {
    const {details:{authlev, specialref}, setDetails} = useContext(UserContext)
    const [isOpen, setIsOpen] = useState(false)
    const [causerefresh, setcauserefresh] = useState(0)
    const [showdrops, setshowdrops] = useState(false)
    const getreadstate = (readstate)=> {
        setIsOpen(readstate)
      }
      const [payload, setpayload] = useState({
        'orderid': orderid
    })
    const [groceries, setgroceries] = useState([
    ])
    useEffect(() => {
        getparners()
    }, [causerefresh])
    const getparners = async () => {
        const data = payload;
        console.log(data)
        try {
            const product = await axios.post('http://geo.vensle.com/api/osearch', data)
            setgroceries(product.data)
            console.log(product.data)
         } catch (error) {
            console.log(error);
         }
    }
    const dropupdate = async (val, valu, prodref, ordid) => {
        const data = {
            customerref: specialref,
            productref: prodref,
            status: valu,
            orderid: ordid 
        };
        console.log(data)
        try {
            const product = await axios.put('http://geo.vensle.com/api/order/'+val, data)
            // setgroceries(product.data)
            console.log(product.data)
            setcauserefresh(causerefresh+1)
         } catch (error) {
            console.log(error);
         }
    }
    console.log(authlev)
    return(
        <div>
                                
                                    <div className="reusable-table-orders2" style={{padding:'0px 20px'}} onClick={(e)=>setshowdrops(!showdrops)}>
                                        <div>{sn+1}</div>
                                        <div>{orderid}</div>
                                        <div>{location}</div>
                                        <div>{created_at.split('T')[0]}</div>
                                        <div>{cost}</div>
                                    </div>
                                    {
                                        showdrops === true ? 
                                        <div style={{width:'90%', margin:'0 auto', }}>
                                                <div className="reusable-table-orders3" style={{padding:'0px 20px', fontWeight:'700', fontSize:'.8em'}} onClick={(e)=>setshowdrops(!showdrops)}>
                                                    
                                                    <div>PRODUCT NAME</div>
                                                    <div>QUANTITY</div>
                                                    <div>PRICE</div>
                                                    <div>STATUS</div>
                                                    <div>ACTION</div>
                                                    <div></div>
                                                </div>
                                            {
                                                groceries.map(({id, productref, productname, quantity, status, cost, orderid}, i)=>(
                                                    <div className="reusable-table-orders3" style={{padding:'0px 20px'}}>
                                                        
                                                        <div>{productname}</div>
                                                        <div>{quantity}</div>
                                                        <div>{cost}</div>
                                                        <div>
                                                            {
                                                                parseInt(status)===0 ? 'Ordered' 
                                                                : parseInt(status) === 1 ? 'Ready' 
                                                                : parseInt(status) === 2 ? 'Picked up' 
                                                                :   authlev === 3 &&  parseInt(status) === 3 ? 'Delivering' 
                                                                : authlev === 0 &&  parseInt(status) === 3 ? 'Collecting' 
                                                                : authlev === 3 && parseInt(status) ===4 ? 'Delivered' 
                                                                : authlev === 0 && parseInt(status) ===4 ? 'Received' 
                                                                : ''
                                                            }
                                                        </div>
                                                        <div>
                                                            {
                                                                (authlev === 1 || authlev === 0) && parseInt(status) === 2 ? 
                                                                <Link to={'/admin/track/'+orderid+'/'+productref}>Track</Link> 
                                                                :  
                                                                (authlev === 1 || authlev === 0) && parseInt(status) === 1 ? 'Wait'
                                                                : 
                                                                authlev === 2 && parseInt(status) === 0 ?  
                                                                <span onClick={(e)=>dropupdate(id, '1', productref, orderid)}>Mark ready</span>
                                                                : 
                                                                authlev === 2 && parseInt(status) === 2 ?  
                                                                ''
                                                                : 
                                                                authlev === 3 && parseInt(status) === 3 ?  
                                                                ''
                                                                :
                                                                authlev === 3 && parseInt(status) === 1 ?  
                                                                <span onClick={(e)=>dropupdate(id, '2', productref, orderid)}>Take up</span>
                                                                :
                                                                authlev === 3 && parseInt(status) === 2 ?  
                                                                <span onClick={(e)=>dropupdate(id, '3', productref, orderid)}>At location</span>
                                                                :
                                                                authlev === 0 && parseInt(status) === 3 ?  
                                                                <span onClick={(e)=>dropupdate(id, '4', productref, orderid)}>Confirm receipt</span>
                                                                :
                                                                ''
                                                            }
                                                        </div>
                                                        {/* <div><FontAwesomeIcon icon={faClose}/></div> */}
                                                    </div>
                                                ))
                                            }  
                                        </div>
                                            :
                                        null
                                    }
                            </div>
    )
}

export default OrdersTable