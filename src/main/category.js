import axios from "axios";
import { useState, useEffect, useRef, useContext} from "react";
import Pcards from "../reusable/pcards";
import bannerimg2 from '../winter.webp'
import lowlev from '../image 23.png'
import Foot from "../reusable/footer";
import Menu from "../reusable/menu"
import { UserContext } from "../auth/usercontext";
import { Link, useLocation, useParams } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClose, faFilter, faAngleRight, faLocationDot, faPersonBreastfeeding, faArrowAltCircleRight, faArrowCircleLeft, faArrowCircleRight } from "@fortawesome/free-solid-svg-icons" 
import { faChevronRight, faChevronDown, faBars } from "@fortawesome/free-solid-svg-icons"
import { faSquare } from "@fortawesome/free-solid-svg-icons"
import Drop from "../reusable/drop"
import Ops from "../reusable/ops"
import Fly from "../reusable/fly"


const Category  = () => {
    const {catid, name} = useParams()
    const {details:{userlocation}, setDetails} = useContext(UserContext)
    const [product, setproduct] = useState([])
    const  loc = useLocation()
    const [path, setpath] = useState(['pro', 'category', 'pr', 'Products', 'search'])
    const [truefalse, settruefalse] = useState(false)
    const [start, setstart] = useState(51)
    const [stop, setstop] = useState(start+50)
    const [catone, setcatone] = useState([])
    const flash2 = useRef('')
    const [style, setstyle] = useState(1)
    const [groups, setgroups] = useState([])
    const [categories, setcategories] = useState([])
    const [group, setgroup] = useState(0)
    const [area, setarea] = useState('Powys')
    const [all, setall] = useState([])
    const [page, setpage] = useState(1)
    const [posit, setposit] = useState([0, 20])
    const sidebar = useRef('')

    // pure function
    const reveal = (e) => {
        if (sidebar.current.style.display === 'block') {
            sidebar.current.style.display = 'none'
        }
        else{
            sidebar.current.style.display = 'block'
        }
        
    }
    const choose = () => {
       // console.log(loc)
       // console.log(loc.pathname.split('/')[1])
        if( loc.pathname.split('/')[1]=== 'pro'){
            setpath(['pro', 'category', 'pr', 'Products', 'search'])
           // console.log('pro')
        }
        else if(loc.pathname.split('/')[1] === 'gro'){
            setpath(['gro', 'gcategory', 'gr', 'Groceries','gsearch'])
           // console.log('gro')
        }
    }
    const [filt, setfilt] = useState({
    })
    const splice =(i)=>{
        setfilt(current => {
            const copy = {...current};
            delete copy[i];
            return copy
            
        })
    }
    const jones = () => {
        //// console.log(window.scrollY)
        if(window.innerHeight+window.scrollY >= document.body.offsetHeight - 500){
            setstop(stop+200)
        }
    }
    const getcats = (cat, type)=> {
        setfilt({...filt, [type]:cat})
        setarea(cat)
        setall(product.filter(items => items.state === cat))
       // console.log(cat + ' '+type)
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
    // axios
    const getparners = async () => {
       // console.log(path[4])
       console.log("http://vensle.com/api/api/"+path[4]+'/'+name+'/'+userlocation.region)
        try {
            const product = await axios.get("http://vensle.com/api/api/"+path[4]+'/'+name+'/'+userlocation.country)
            setproduct(product.data)
            console.log(product.data)
            const groups = await axios.get('http://vensle.com/api/api/group')
            setgroups(groups.data)
            const categories = await axios.get('http://vensle.com/api/api/groupcat')
            setcategories(categories.data)
         } catch (error) {
           // console.log(error);
         }
    }
    const categoryone = async (id, step) => {
       // console.log(path)
        try {
            const categs = await axios.get("http://vensle.com/api/api/fresh/"+path[1]+"/"+id)
            step(categs.data)
           // console.log(categs.data)
        } catch (error) {
           // console.log(error);
        }
    }
    
    
    // effects
    setTimeout(() => {
       if(truefalse === false && flash2){
            flash2.current.style.opacity = 1
            settruefalse(!truefalse)
       }
       else{
            flash2.current.style.opacity = 0.2
            settruefalse(!truefalse)
       }
    }, 100);
    useEffect(()=>{
        getparners()
        categoryone(catid, setcatone)
    },[path, userlocation.country, catid])
    useEffect(()=>{
        choose()
    },[])
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    useEffect(()=>{
        jones()
    }, [window.scrollY])

    
    const bubble=[
        {
            id:1,
            img:'../../Vector6.jpg'
        },
        {
            id:2,
            img:'../../Vector5.jpg'
        },
        {
            id:3,
            img:'../../Vector7.jpg'
        },
        {
            id:4,
            img:'../../Vector8.jpg'
        }
    ]
    return(
        <div className='gray'>
            <div>
                <Menu/>
                <div className="breadcrumbs">
                <div><Link to={'/'}>Home</Link> <FontAwesomeIcon icon={faAngleRight} /> {path[3]} <FontAwesomeIcon icon={faAngleRight} /> {name}</div>
            </div>
            <div className="main">
                <div className="main-sidebar" ref={sidebar}>
                <div className="sidemenus">
                <h3>Shop By Category</h3>
                <div className="hr"></div>
                    <div>
                        <h4>{name}</h4>
                            <div className="submenu">
                            {
                                catone.map(({id,name:n,image})=>(
                                    <div>
                                    <Link to={'/'+path[2]+'/'+catid+'/'+name+'/'+id+'/'+n}><p>{n}</p></Link>
                                    </div>
                                ))
                            }
                            </div>
                        </div>
                    </div>
                    {/* <div className="filter-cont">
                        <div className="filt-bar">
                            <FontAwesomeIcon icon={faBars} /><h3>Filter By</h3>
                        </div>
                        <div className="hr"></div>
                        
                        <div className="filt-params">
                            <div className="Groups">
                            <p>Group</p>
                                <select onChange={(e)=>{setgroup(e.target.value);setall(all.filter(items => items.item_group === e.target.value))}}>
                                    <option>All Groups</option>
                                    {
                                        groups.map(({id, name})=>(
                                            <option value={id}>{name}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <div className="Categories">
                                <p>Categories</p>
                                <select onChange={(e)=>setall(all.filter(items => items.category_name === e.target.value))}>
                                    <option>All Categories</option>
                                    {
                                        categories.filter(items => items.id === group).map(({cat_name})=>(
                                            cat_name.split(',').map((a, i)=>(
                                                <option>{a}</option>
                                            ))
                                        ))
                                    }
                                </select>
                            </div>
                            <div className="hr"></div>
                            <div className="brands">
                                Price
                                <div className="slider">
                                </div>
                                <div className="minmax">
                                    <input type="text" placeholder="Min"/>
                                    <input type="text" placeholder="Max"/>
                                </div>
                                
                            </div>
                            <div className="hr"></div>
                            <Drop info={'Discount'}>
                                <div className="options">
                                    <div onClick={(e)=>setfilt({...filt, discount:e.target.innerText})}>50%</div>
                                    <div onClick={(e)=>setfilt({...filt, discount:e.target.innerText})}>30%</div>
                                    <div onClick={(e)=>setfilt({...filt, discount:e.target.innerText})}>20%</div>
                                    <div onClick={(e)=>setfilt({...filt, discount:e.target.innerText})}>10%</div>
                                </div>
                            </Drop>
                            <Drop info={'Sizes'}>
                                <Ops/>
                            </Drop>
                            <Drop info={'Climate Friendly'}>
                                <Ops/>
                            </Drop>
                            <Drop info={'Department'}>
                                <Ops/>
                            </Drop>
                            <Drop info={'Availability'}>
                                <Ops/>
                            </Drop>
                            <Drop info={'Condition'}>
                                <Ops/>
                            </Drop>
                            <Drop info={'Delivery Type'}>
                                <Ops/>
                            </Drop>
                            <Drop info={'Product Certifications'}>
                                <Ops/>
                            </Drop>
                            
                            
                            
                        </div>
                    </div> */}
                </div>
                <div className="main-right">
                    <div className="mr-top">
                        <div className="mrt-left">
                            <h3>{name}</h3><span>({product.length+' results'})</span>
                        </div>
                        <div className="mrt-right">
                            <select>
                                <option>Sort by</option>
                            </select>
                        </div>
                    </div>
                    <div className="mr-second">
                        <div className="mrs-left">
                        <h3>Filters</h3>
                            <div className="filtration">
                            {
                                Object.entries(filt).slice(-3).map((keys,i)=>(
                                    <div>{keys[1]}  <FontAwesomeIcon icon={faClose} onClick={(e)=>splice(keys[0])} style={{cursor:'pointer'}}/></div>   
                                ))
                            }
                            </div>
                        </div>
                        <div className="mrs-right">
                            <p><FontAwesomeIcon icon={faBars} onClick={(e)=>setstyle(2)}/></p>
                            <p><FontAwesomeIcon icon={faSquare} onClick={(e)=>setstyle(1)} /></p>
                        </div>
                    </div>
                    {style === 1 ? 
                        <div className="mr-third">
                        {
                            product.slice(posit[0], posit[1]).map((product, i)=>(
                                <div><Pcards type={4} width={217} height={330} vim={'100%'} information={product} route={path[0]}/></div>
                            ))
                        }
                        </div> :
                        <div className="mr-fourth">
                        {
                            product.slice(posit[0], posit[1]).map((product, i)=>(
                                <div><Pcards type={2} width={'100%'} height={'150px'} pdsize={'1.3em'} pcsize={'1.8em'} information={product} route={path[0]}/></div>
                            ))
                        }
                        </div>
                    }
                </div>
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
            <div className="filters" onClick={reveal}>
                <FontAwesomeIcon icon={faFilter}/>
            </div>

               
                
                
            </div>
            <Foot />
        </div>
    )
}
export default  Category;