import { useState, useContext,useEffect } from "react"
import { faCoins, faUser, faCaretRight, faBarChart, faChartSimple, faNairaSign, faEllipsis, faChevronDown, faCheckCircle, faReorder, faUpload } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ProdDisplay from "./proddisplay"
import Sidebar from "./sidebar"
import Menu from "./menu"
import SalesSummary from "./salessumm"
import SalesList from "./saleslist"
import {UserContext} from '../auth/usercontext';
import axios from "axios"
import Pcards from "../reusable/pcards"
import SalesMsg from "./salesmsg"
import Uploads from '../font/Uploads.svg'
import Cancel from '../font/Cancel.svg'
import Sand from '../font/Sand Watch.svg'
import Good from '../font/Good Quality.svg'

const HAdmin = () => {
    const {details:{authlev, name, id, email, location},products, groceries:groce, requests, messages} = useContext(UserContext)
    const [topic, settopic] = useState('Top Trending Products')
    const [showdrop, setshowdrop] = useState(false)
    const [number, setnumber] = useState(false)
    const [groceries, setgroceries] = useState([])
    useEffect(()=>{
        getparners()
    },[])
    const getparners = async () => {
        try {
            const product = await axios.get('http://vensle.com/api/api/prods')
            setgroceries(product.data)
         } catch (error) {
           // console.log(error);
         }
    }
    return(
        <div>
            <Menu />
            <div className="admin-sec">
                <Sidebar />
                <div className="adm-main">
                    <div className="breadcrumbs-bar">
                        <div>Home <FontAwesomeIcon icon={faCaretRight} /> Dashboard</div>
                        <div><span>{name} </span><FontAwesomeIcon icon={faUser}/></div>
                    </div>
                    <div className="adm-main-second">
                            <div className="topbox">
                                <SalesSummary caption={'Products Uploaded'} num={authlev === 1? products.length+groce.length:products.filter(item=>parseInt(item.user_id) === id).length+groce.filter(item=>parseInt(item.user_id) === id).length} icons={Uploads}/>
                                <SalesSummary caption={'Products Approved'} num={authlev === 1? products.filter(item=> item.approved === '1').length+groce.filter(item=> item.approved === '1').length:products.filter(item=> item.approved === '1' && parseInt(item.user_id) === id).length+groce.filter(item=> item.approved === '1'&& parseInt(item.user_id) === id).length} icons={Good}/>
                                <SalesSummary caption={'Pending Products'} num={authlev === 1? products.filter(item=> item.approved === '0').length+groce.filter(item=> item.approved === '0').length:products.filter(item=> item.approved === '0' && parseInt(item.user_id) === id).length+groce.filter(item=> item.approved === '0'&& parseInt(item.user_id) === id).length} icons={Sand}/>
                                <SalesSummary caption={'Rejected'} num={authlev === 1? products.filter(item=> item.approved === '2').length+groce.filter(item=> item.approved === '2').length:products.filter(item=> item.approved === '2' && parseInt(item.user_id) === id).length+groce.filter(item=> item.approved === '0'&& parseInt(item.user_id) === id).length} icons={Cancel}/>
                            </div>
                    </div>
                    <div className="adm-main-third">
                        <SalesMsg title={'Messages'} usage={1} prod={messages}/>
                        <SalesMsg title={'Notifications'} usage={2}/>
                    </div>
                    <div className="adm-main-fourth">
                        <SalesMsg title={'Most recent uploads'} usage={3} prod={authlev === 1? products.slice(0,10) : products.filter(item=>parseInt(item.user_id) === id).slice(0,10)}/>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default HAdmin