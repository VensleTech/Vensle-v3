import { useContext, useEffect, useState } from "react"
import { faUser, faLocationDot, faChevronRight,faClose, faHome, faEye, faBox, faPersonDress, faBoxesPacking, faGear, faMessage, faEllipsisVertical, faCaretDown, faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ProdPop from "../reusable/prodpop"
import { Link } from "react-router-dom"
import { UserContext } from "../auth/usercontext"
import axios from "axios"

const RolesTable = ({sn, id, orderid, location, created_at, cost, phone, getreadstate}) => {
    const {details:{authlev}, setDetails} = useContext(UserContext)
    const [isOpen, setIsOpen] = useState(false)
    const [causerefresh, setcauserefresh] = useState(0)
    const [showdrops, setshowdrops] = useState(false)
    
    

    const [payload, setpayload] = useState({
        'orderid': orderid
    })
    console.log(cost)
    const [groceries, setgroceries] = useState([
    ])
    useEffect(() => {
        // getparners()
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
    const dropupdate = async (val, valu) => {
        const data = {
            authlevel: valu,
        };
        setshowdrops(!showdrops)
        console.log(data)
        try {
            const product = await axios.post('http://geo.vensle.com/api/assign/'+val, data)
            // setgroceries(product.data)
            console.log(product.data)
            getreadstate(causerefresh+1)
         } catch (error) {
            console.log(error);
         }
    }
    // getreadstate(e.target.value)
    return(
        <div>
                <div className="reusable-table-orders4" style={{padding:'0px 20px'}} >
                    <div>{sn+1}</div>
                    <div>{orderid}</div>
                    <div>{location}</div>
                    <div>{created_at}</div>
                    <div>{phone}</div>
                    <div style={{position:'relative'}} className="role">
                    {
                        cost==='0' ? <span onClick={(e)=>setshowdrops(!showdrops)}>Regular user <FontAwesomeIcon icon={faCaretDown}/> </span>
                        : cost === '1' ?<span onClick={(e)=>setshowdrops(!showdrops)}>Admin <FontAwesomeIcon icon={faCaretDown}/> </span>
                        : cost === '2' ?<span onClick={(e)=>setshowdrops(!showdrops)}>Vendor <FontAwesomeIcon icon={faCaretDown}/> </span>
                        : cost === '3' ?<span onClick={(e)=>setshowdrops(!showdrops)}>Delivery Agent <FontAwesomeIcon icon={faCaretDown}/> </span>
                        : ''
                    }
                    
                    {
                        showdrops === true ? 
                        <div style={{width:'90%', margin:'0 auto', }} className='floatout'>
                        <p onClick={(e)=>dropupdate()}>New Role</p>
                        <div className="hr"/>
                        <p onClick={(e)=>dropupdate(id, '1')}>Admin</p>
                        <p onClick={(e)=>dropupdate(id, '2')}>Vendor</p>
                        <p onClick={(e)=>dropupdate(id, '3')}>Delivery Ag.</p>
                        <p onClick={(e)=>dropupdate(id, '0')}>Regular user</p>
                        </div>:
                        null
                    }
                    </div>
                        
                </div>
                
        </div>
    )
}

export default RolesTable