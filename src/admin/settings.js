import { useState,useEffect, useContext } from "react"
import { faUser, faLocationDot, faFilter, faCaretRight, faClose } from "@fortawesome/free-solid-svg-icons"
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
import axios from "axios"


const Settings = () => {
    const {details:{authlev, name,  email, address}, details, setDetails} = useContext(UserContext)
    const [payload, setpayload] = useState([
        
    ])
    const [opendrop, setopendrop] = useState(false)
    const [choice, setchoice] = useState('')
    const [product, setproduct] = useState([
        
    ])
    const gettranstype = (name)=> {
        setpayload({...payload, delivery:name})
    }
    useEffect(()=>{
        getloc()
    },[])

    useEffect(()=>{
            getparners()
        },[address])
    const getparners = async () => {
        try {
           const product = await axios.get("http://geo.vensle.com/api/product/"+address)
            setproduct(product.data)
            console.log(product)
        } catch (error) {
            console.log(error);
        }
    }
    const data = [
        {
            id:1,
            title:'Super Deals'
        },
        {
            id:2,
            title:'Top Purchased'
        },
        {
            id:3,
            title:'Top Trending'
        },
        {
            id:4,
            title:'Recommended for you'
        },
        {
            id:5,
            title:'Viewer\'s Choice'
        }
    ]
    const getloc = async () => {
            try {
                const response = await axios.get('http://ip-api.com/json/');
                setDetails({...details, address:response.data.country})
                console.log(response.data.country)
            } catch (error) {
                console.log(error);
            }
        }
   
    return(
        <div>
            <Menu />
            <div className="admin-sec">
                <Sidebar/>
                <div className="adm-main">
                    <div className="breadcrumbs-bar">
                        <div>Home <FontAwesomeIcon icon={faCaretRight} /> Settings</div>
                        <div><span>{name}</span><FontAwesomeIcon icon={faUser}/></div>
                    </div>
                    
                    <div className="up-options2">
                    <div className="inbox2">
                        <div className="inbox-arrow">
                            <div>Feature products</div>
                        </div>
                    </div>
                    <div className="join">
                    <div className="clone">
                        <input type='text'  placeholder='Select a category' value={choice} onClick={(e)=>setopendrop(!opendrop)}/>
                        { 
                        opendrop === true ?
                        <div className="drop">
                        
                            {
                                data.map(({id, title})=>(
                                    <div key={id}  className='name'>
                                        <div onClick={(e)=>{setchoice(title); setopendrop(!opendrop)}} className='nam'> {title}</div>
                                    </div>
                                ))
                        }
                        </div>
                        :
                        ''
                        }
                    </div>
                    </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Settings