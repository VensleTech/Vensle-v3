import axios from "axios";
import { useState, useEffect, useRef, useContext} from "react";
import Pcards from "../reusable/pcards";
import bannerimg2 from '../winter.webp'
import lowlev from '../image 23.png'
import Foot from "../reusable/footer";
import Menu from "../reusable/menu"
import { UserContext } from "../auth/usercontext";
import { Link, useParams } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClose, faFilter, faAngleRight, faLocationDot, faPersonBreastfeeding } from "@fortawesome/free-solid-svg-icons" 
import { faChevronRight, faChevronDown, faBars } from "@fortawesome/free-solid-svg-icons"
import { faSquare } from "@fortawesome/free-solid-svg-icons"
import Drop from "../reusable/drop"
import Ops from "../reusable/ops"
import Fly from "../reusable/fly"

const Gsubcategory  = () => {
    const {catid, name, parname, parid} = useParams()
    const {details:{location}, setDetails} = useContext(UserContext)
    const [product, setproduct] = useState([])
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
    const sidebar = useRef('')

    const reveal = (e) => {
        if (sidebar.current.style.display === 'block') {
            sidebar.current.style.display = 'none'
        }
        else{
            sidebar.current.style.display = 'block'
        }
        
    }
  

    useEffect(()=>{
        getparners()
    },[product])
    const getparners = async () => {
        try {
            const product = await axios.get(" http://geo.vensle.com/api/search/"+name+'/'+location)
            setproduct(product.data)
            const groups = await axios.get('http://geo.vensle.com/api/group')
            setgroups(groups.data)
            const categories = await axios.get('http://geo.vensle.com/api/groupcat')
            setcategories(categories.data)
         } catch (error) {
            console.log(error);
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
    const getcats = (cat, type)=> {
        setfilt({...filt, [type]:cat})
        setarea(cat)
        setall(product.filter(items => items.state === cat))
        console.log(cat + ' '+type)
    }

    setTimeout(() => {
       if(truefalse === false){
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
    },[location, catid])
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    const jones = () => {
        // console.log(window.scrollY)
        if(window.innerHeight+window.scrollY >= document.body.offsetHeight - 500){
            setstop(stop+200)
        }
    }
    useEffect(()=>{
        jones()
    }, [window.scrollY])
    const categoryone = async (id, step) => {
        try {
            const categs = await axios.get("http://geo.vensle.com/api/fresh/gcategory/"+id)
            step(categs.data)
            console.log(categs.data)
        } catch (error) {
            console.log(error);
        }
    }
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
        <div style={{backgroundColor:'#fcfcfc'}}>
            <div>
                <Menu/>
                <div className="breadcrumbs">
                <div><Link to={'/'}>Home</Link> <FontAwesomeIcon icon={faAngleRight} /> Products <FontAwesomeIcon icon={faAngleRight} /> <Link to={'/category/'+parid+'/'+parname}>{parname} </Link><FontAwesomeIcon icon={faAngleRight} /> {name}</div>
            </div>
            <div className="main">
                <div className="main-sidebar" ref={sidebar}>
                    {catone.length > 0 ?
                        <div className="sidemenus">
                        <h3>Shop By Category</h3>
                        <div className="hr"></div>
                            <div>
                                <h4>{name}</h4>
                                    <div className="submenu">
                                    {
                                        catone.map(({id,name:n,image})=>(
                                            <div>
                                                <p><Link to={'/g/'+catid+'/'+name+'/'+id+'/'+n}>{n}</Link></p>
                                            </div>
                                        ))
                                    }
                                    </div>
                                </div>
                        </div>
                    :
                ''}
                    <div className="filter-cont">
                        <div className="filt-bar">
                            <FontAwesomeIcon icon={faBars} /><h3>Filter By</h3>
                        </div>
                        <div className="hr"></div>
                        
                        <div className="filt-params">
                            
                            <div className="location">
                                <h4>Location</h4>    
                            </div>
                            <Fly icon={<FontAwesomeIcon icon={faLocationDot} />} info={area} getcats={getcats} titles={'Location'}>
                            </Fly>
                            <div className="dist">
                                <select onChange={(e)=>setfilt({...filt, distance:e.target.value})}>
                                    <option value='' disabled>Distance</option>
                                    <option value='100km'>100km</option>
                                    <option value='200km'>200km</option>
                                    <option value='300km'>300km</option>
                                    <option value='400km'>400km</option>
                                </select>
                            </div>
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
                    </div>
                </div>
                <div className="main-right">
                {catone.length > 0 ? 
                    <div>
                    <div className="category">
                        <h2>{name}</h2>
                        <div className="slider">
                        <div className="slider-inner">
                                {
                                    catone.map(({id,name,image})=>(
                                        <div className="inner-box">
                                            <div className="imcont">
                                                <img src={'http://geo.vensle.com/storage/category/'+image} alt=""/>
                                            </div>
                                            <p>{name.length > 24 ? name.substr(0, 24)+'...':name.substr(0, 24)}</p>
                                        </div>
                                    ))
                                }
                        </div>
                        </div>
                    </div>
                    <div className="featured">
                        <div className="second-featured">
                            <h2 >Top purchased</h2>
                            <marquee><p>Winter sales</p></marquee>
                            <img src={bannerimg2} alt=""/>
                        </div>
                        <div className="slider">
                        <div className="slider-inner">
                                {
                                    product.map(({id, feat_image, title, price, transaction, imgfolder, category_name, item_contact_number, state, country, currency})=>(
                                            <div><Pcards type={4} width={220} height={290} vim={'200px'} id={id} title={title} price={price} folder={imgfolder} img={feat_image} information={[imgfolder, category_name, item_contact_number, state, country, currency]}/></div>
                                        ))
                                }
                        </div>
                        </div>
                    </div>
                    <div className="low-banner">
                        <img src={lowlev} alt=""/>
                    </div>
                    </div>
                    : ''
                }
                    <div className="mr-top">
                        <div className="mrt-left">
                            <h3>{name}</h3><span>({all.length+' results'})</span>
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
                            product.map(({id, feat_image, title, price, transaction, imgfolder, category_name, item_contact_number, state, country, currency})=>(
                                <div><Pcards type={4} width={217} height={330} vim={'100%'} id={id} title={title} price={price} img={feat_image} information={[imgfolder, category_name, item_contact_number, state, country, currency]}/></div>
                            ))
                        }
                        </div> :
                        <div className="mr-fourth">
                        {
                            product.map(({id, feat_image, title, price, transaction, imgfolder, category_name, item_contact_number, state, country, currency})=>(
                                <div><Pcards type={2} width={'100%'} height={'150px'} pdsize={'1.3em'} pcsize={'1.8em'} id={id} title={title} price={price} img={feat_image} information={[imgfolder, category_name, item_contact_number, state, country, currency]}/></div>
                            ))
                        }
                        </div>
                    }
                </div>
            </div>
            <div className="recent">
                {
                    product.filter(items => items.id === 904).slice(0,1).map(({id, category})=>(
                        
                            <div>
                                <div className="section">
                                    <div className="title">
                                        <h2>Recently Viewed Products</h2>
                                    </div>
                                    <div className="others">
                                    {    
                                        product.filter(items => items.category === category && items.id !== parseInt(id)).slice(0,4).map(({id, Images, title, price, transaction, group_name, category_name, item_contact_number, state, country, currency})=>(
                                            <div><Pcards type={3} pdsize={'.9em'} pcsize={'1em'} id={id} title={title} price={price} img={Images} information={[group_name, category_name, item_contact_number, state, country, currency]}/></div>
                                        ))
                                    }
                                    </div>
                                </div>
                            </div>
                        
                    ))
                }
            </div>
            <div className="filters" onClick={reveal}>
                <FontAwesomeIcon icon={faFilter}/>
            </div>

               
                
                
            </div>
            <Foot />
        </div>
    )
}
export default  Gsubcategory;