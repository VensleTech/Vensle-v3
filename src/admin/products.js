import { useState,useEffect, useContext } from "react"
import { faUser, faLocationDot, faFilter, faClose,faCaretRight, faCaretDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Sidebar from "./sidebar"
import Menu from "./menu"
import ProdDisplay from "./proddisplay"
import Popup from "./popup"
import Sorts from "./sorts"
import { useGeoLocation } from "use-geo-location"
import axios from "axios"
import { UserContext } from "../auth/usercontext"
import Map from "../reusable/maps"


const MyProducts = () => {
    const [isOpen, setisOpen] = useState(false)
    const {details:{userlocation, name,id,authlev},products, setDetails} = useContext(UserContext)
    // useEffect(() => {
    //     setfill(Object.entries(fill))
    //     console.log(filt)
    // }, [])
    const [causerefresh, setcauserefresh] = useState('')
    const [category, setcategory] = useState(['product', 'prods', 'updatesec'])
    const [selected, setselected] = useState('For sale')
    const [popmap, setpopmap] = useState(false)
    const [radius, setradius] = useState('')
    const [show, setshow] = useState(false)
    const [product, setproduct] = useState([])
    const [fill, setfill] = useState({
    })
    const [filt, setfilt] = useState({
    })
    useEffect(()=>{
        getparners()
    },[causerefresh, category])
    const refresh = (name)=> {
        // if(name === 1){
            setcauserefresh(causerefresh+1)
        // }
    }
    
    const getparners = async () => {
        console.log(category)
        
        const data = {
            userid : id+''
        }
        try {
            if (authlev !== 1) {
                const product = await axios.post("http://geo.vensle.com/api/"+category[0]+"/"+userlocation.country, data)
                setproduct(product.data)
                console.log(product.data)
            }
            else{
                const product = await axios.get("http://geo.vensle.com/api/"+category[0]+"/"+userlocation.country)
                setproduct(product.data)
                console.log(product.data)
            }
            
            
        } catch (error) {
            console.log(error);
            setproduct([])
        }
    }
    const splice =(i)=>{
        setfilt(current => {
            const copy = {...current};
            delete copy[i];
            return copy
        })
    }
    const swap = (e) => {
        if(e.target.innerText === "For Sale"){
            setcategory(['product', 'prods', 'updatesec'])
            setshow(!show)
            setselected(e.target.innerText)
        }
        else if(e.target.innerText === "Requests"){
            setcategory(['request','requests', 'updatesecr'])
            setshow(!show)
            setselected(e.target.innerText)
        }
        else if(e.target.innerText === "Groceries"){
            setcategory(['groceries','groceries','updatesecg'])
            setshow(!show)
            setselected(e.target.innerText)
        }
        else{

        }
    }
     // callbacks
     const close = ()=> {
        setpopmap(false)
    }
    const rad = (name)=> {
        setradius(name)
    }
    return(
        <div>
            <Menu />
            <div className="admin-sec">
                <Sidebar/>
                <div className="adm-main">
                    <div className="breadcrumbs-bar">
                        <div>Home <FontAwesomeIcon icon={faCaretRight} /> Product</div>
                        <div><span>{name}</span> <FontAwesomeIcon icon={faUser}/></div>
                    </div>
                    {
                        // <div className="top-trending">
                        //     <div>
                        //         Filters
                        //         </div>
                        //     <div> <FontAwesomeIcon icon={faLocationDot} />Nigeria</div>
                        // </div>
                    }
                    <div className="top-trends">
                        <h3>All Products</h3>
                            <div className="locations" onClick={(e)=>setpopmap(true)}><FontAwesomeIcon icon={faLocationDot}  /> 
                            {userlocation.country} 
                           {
                               //<span>Change</span>
                           }
                       </div>
                        
                    </div>
                    <div className="catchoice">
                    <span>Product Category</span>
                        <div style={{position:'relative'}}>
                                <div className="inpbox" onClick={(e)=>{setshow(!show)}}>{selected} <FontAwesomeIcon icon={faCaretDown}/></div>
                                {
                                    show === true ?
                                    <div className="dropbox">
                                        <div onClick={(e)=>swap(e)}>For Sale</div>
                                        <div onClick={(e)=>swap(e)}>Requests</div>
                                        <div onClick={(e)=>swap(e)}>Groceries</div>
                                    </div>
                                    :
                                    ''
                                }
                        </div>
                    </div>
                    <div className="top-trending-list">
                    {
                        product.slice(0,8).map((products)=>(
                            <div><ProdDisplay type={2} width={'100%'} height={'150px'} pdsize={'1.3em'} pcsize={'1.8em'} prod={products} getrefstate={refresh} approval={category[1]} update={category[2]} authlev={authlev}/></div>
                        ))
                    }
                    </div>
                </div>
                {
                    popmap===true ?
                    <Map getref={close} getrad={rad} height={'300px'}/>
                    :
                    ''
                }
            </div>
        </div>
    )
}
export default MyProducts