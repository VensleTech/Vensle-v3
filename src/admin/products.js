import { useState,useEffect, useContext, useRef } from "react"
import { faUser, faLocationDot, faArrowCircleRight,faArrowCircleLeft, faClose,faCaretRight, faCaretDown } from "@fortawesome/free-solid-svg-icons"
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
    //    // console.log(filt)
    // }, [])
    const [causerefresh, setcauserefresh] = useState('')
    const [category, setcategory] = useState(['product', 'prods', 'updatesec','propending'])
    const [selected, setselected] = useState('For sale')
    const [filts, setfilts] = useState('All')
    const [country, setcountry] = useState(userlocation.country)
    const [countrys, setcountrys] = useState([])
    const [popmap, setpopmap] = useState(false)
    const [radius, setradius] = useState('')
    const [show, setshow] = useState(false)
    const [showc, setshowc] = useState(false)
    const [shows, setshows] = useState(false)
    const [product, setproduct] = useState([])
    const [fill, setfill] = useState([])
    const brew = useRef('')
    const brewed = useRef('')
    const [filt, setfilt] = useState({
    })
    const [page, setpage] = useState(1)
    const [posit, setposit] = useState([0, 20])

    useEffect(()=>{
        getparners()
    },[causerefresh, category, country])
    useEffect(()=>{
        countries()
    },[causerefresh, category, country])
    const refresh = (name)=> {
        // if(name === 1){
            setcauserefresh(causerefresh+1)
        // }
    }
    useEffect(()=>{
        document.body.addEventListener('click', (e)=>{
            if(brew && !brew.current.contains(e.target)){
                setshow(false)
            }
            if(brewed && !brewed.current.contains(e.target)){
                setshows(false)
            }
        })
    }, [])
    const getparners = async () => {
       // console.log(category)
        
        const data = {
            userid : id+''
        }
        console.log(id+'')
        try {
            if (authlev !== 1) {
                const product = await axios.post("http://vensle.com/api/api/"+category[0]+"/"+country, data)
                setproduct(product.data)
                setfill(product.data)
               // console.log(product.data)
            //    Start from here and create a new state for the filtering purpose
            }
            else{
                const products = await axios.get("http://vensle.com/api/api/"+category[0]+"/"+country)
                setproduct(products.data)
                setfill(products.data)
               // console.log(products.data)
            }
            
            
        } catch (error) {
           // console.log(error);
            setproduct([])
        }
    }
    const countries = async () => {
         try {
                const countris = await axios.get("http://vensle.com/api/api/"+category[3])
                 setcountrys(countris.data)
                console.log(countris)
         } catch (error) {
            // console.log(error);
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
            setcategory(['product', 'prods', 'updatesec','propending'])
            setshow(!show)
            setselected(e.target.innerText)
        }
        else if(e.target.innerText === "Requests"){
            setcategory(['request','requests', 'updatesecr','reqpending'])
            setshow(!show)
            setselected(e.target.innerText)
        }
        else if(e.target.innerText === "Groceries"){
            setcategory(['groceries','groceries','updatesecg','gropending'])
            setshow(!show)
            setselected(e.target.innerText)
        }
        else{

        }
    }
    const swapf = (e) => {
        if(e.target.innerText === "Pending"){
            setproduct(fill.filter(item => item.approved === '0'))
            setfilts(e.target.innerText)
            setshows(!shows)
        }
        else if(e.target.innerText === "Declined"){
            setproduct(fill.filter(item => item.approved === '2'))
            setfilts(e.target.innerText)
            setshows(!shows)
        }
        else if(e.target.innerText === "Approved"){
            setproduct(fill.filter(item => item.approved === '1'))
            setfilts(e.target.innerText)
            setshows(!shows)
        }
        else if(e.target.innerText === "All"){
            setproduct(fill)
            setfilts(e.target.innerText)
            setshows(!shows)
        }
        else{

        }
    }
    const swapc = (ep) => {
        setshowc(!showc)
        setcountry(ep)
        
    }
    const paginate = (direction) => {
        if (direction === 'forward' && posit[1] < product.length) {
            setposit([posit[0]+20, posit[1]+20])
            setpage(page+1)
            window.scrollTo(0,0)
        }
        else if (direction === 'backward' && posit[0] > 0) {
            setposit([posit[0]-20, posit[1]-20])
            setpage(page-1)
            window.scrollTo(0,0)
        }
        else{}
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
                        {
                            authlev === 1 ?
                        
                            <div style={{position:'relative', padding:'20px 0', minWidth:'150px'}}>
                                <div className="inpbox2" onClick={(e)=>{setshowc(!showc)}}>{country} <FontAwesomeIcon icon={faCaretDown}/></div>
                                {
                                    showc === true ?
                                    <div className="dropbox" style={{right:0}}>
                                        {
                                            countrys.map(({name, count})=>(
                                                <div onClick={(e)=>swapc(name)} className="prod"><span>{name}</span><span>{count}</span></div>  
                                            ))
                                        }
                                    </div>
                                    :
                                    ''
                                }
                            </div> 
                            :
                            <div className="locations" onClick={(e)=>setpopmap(true)}> <FontAwesomeIcon icon={faLocationDot} />{userlocation.country }</div>
                        }
                    </div>
                    <div className="catchoice" style={{display:'inline-flex', gap:'20px'}}>
                        <span>Product Category</span>
                        <div style={{position:'relative'}} ref={brew}>
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
                        <span>Filter</span>
                        <div style={{position:'relative'}} ref={brewed}>
                            <div className="inpbox" onClick={(e)=>{setshows(!shows)}}>{filts} <FontAwesomeIcon icon={faCaretDown}/></div>
                            {
                                shows === true ?
                                <div className="dropbox">
                                    <div onClick={(e)=>swapf(e)}>All</div>
                                    <div onClick={(e)=>swapf(e)}>Pending</div>
                                    <div onClick={(e)=>swapf(e)}>Declined</div>
                                    <div onClick={(e)=>swapf(e)}>Approved</div>
                                </div>
                                :
                                ''
                            }
                        </div>
                    </div>
                    <div className="top-trending-list">
                    {
                        product.slice(posit[0], posit[1]).map((product)=>(
                            <div><ProdDisplay type={2} width={'100%'} height={'180px'} pdsize={'1.2em'} pcsize={'1.6em'} prod={product} getrefstate={refresh} approval={category[1]} update={category[2]} authlev={authlev}/></div>
                        ))
                    }
                    </div>
                    {
                        product.length > 20 ?
                        <div className="pagin">
                            <div onClick={(e)=>paginate('backward')}><FontAwesomeIcon icon={faArrowCircleLeft}/> Prev</div>
                            <p>Page {page} of {Math.ceil(product.length/20)}</p>
                            <div onClick={(e)=>paginate('forward')}>Next <FontAwesomeIcon icon={faArrowCircleRight}/></div>
                        </div>
                        :
                        ''
                    }
                    
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