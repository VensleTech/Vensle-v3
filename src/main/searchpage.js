import { useState, useEffect, useRef, useContext } from "react"
import { Link, useParams } from "react-router-dom"
import Menu from "../reusable/menu"
import Pcards from "../reusable/pcards"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClose, faLocationDot } from "@fortawesome/free-solid-svg-icons" 
import { faAngleRight, faFilter, faBars } from "@fortawesome/free-solid-svg-icons"
import { faSquare } from "@fortawesome/free-solid-svg-icons"
import Drop from "../reusable/drop"
import Ops from "../reusable/ops"
import Fly from "../reusable/fly"
import axios from "axios"
import Foot from "../reusable/footer"
import { UserContext } from "../auth/usercontext"

const SearchPage = () => {
    const {details:{location}, setDetails} = useContext(UserContext)
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])

    
        
    const {cat,name} = useParams()
    const [style, setstyle] = useState(1)
    const [product, setproduct] = useState([])
    const [groups, setgroups] = useState([])
    const [categories, setcategories] = useState([])
    const [group, setgroup] = useState(0)
    const [area, setarea] = useState('Powys')
    const [choice, setchoice] = useState(0)
    const upp = name.toUpperCase()
    const low = name.toLowerCase()
    const sen = name.charAt(0).toUpperCase()+ name.slice(1)
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
        if(cat==="All"){
            setall(product.filter(items => items.title.indexOf(name) !== -1 || items.title.indexOf(upp) !== -1 || items.title.indexOf(low) !== -1 || items.title.indexOf(sen) !== -1))
        }
        else{
            setall(product.filter(items => items.category_name.indexOf(cat.replaceAll('-', ' ').replaceAll('&', '/').replaceAll(',', '-')) !== -1 && (items.title.indexOf(name) !== -1 || items.title.indexOf(upp) !== -1 || items.title.indexOf(low) !== -1 || items.title.indexOf(sen) === -1)))
        }
    },[product, name, cat])
    
    useEffect(()=>{
        getparners()
    },[location])
    
    const getparners = async () => {
        try {
            const product = await axios.get("http://geo.vensle.com/api/product/"+location)
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
        console.log(cat)
        setall(product.filter(items => items.state === cat && (items.title.indexOf(name) !== -1 || items.title.indexOf(upp) !== -1 || items.title.indexOf(low) !== -1 || items.title.indexOf(sen) !== -1)))
        console.log(cat + ' '+type)
    }
    
    return(
        <div>
            <Menu/>
            <div></div>
            <div className="breadcrumbs">
                <div><Link to={'/'}>Home</Link> <FontAwesomeIcon icon={faAngleRight} /> Search <FontAwesomeIcon icon={faAngleRight} /> {cat.replaceAll('-', ' ').replaceAll('&', '/').replaceAll(',', '-')} <FontAwesomeIcon icon={faAngleRight} /> {name.replaceAll('-', ' ').replaceAll('&', '/')}</div>
            </div>
            <div className="main">
                <div className="main-sidebar" ref={sidebar}>
                    <div className="filt-bar">
                        <FontAwesomeIcon icon={faBars} /><h3>Filter By</h3>
                    </div>
                    <div className="hr"></div>
                    <div className="filt-params">
                        <div className="location">
                            <h4>Location</h4>    
                        </div>
                        <Fly icon={<FontAwesomeIcon icon={faLocationDot} />} info={area} getcats={getcats} titles={'Choose location'}>
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
                            <select onChange={(e)=>{setgroup(e.target.value);setall(all.filter(items => items.item_group === parseInt(e.target.value)))}}>
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
                                <option onClick={(e)=>setall(product.filter(items => items.category_name.indexOf(cat.replaceAll('-', ' ').replaceAll('&', '/').replaceAll(',', '-')) !== -1 && (items.title.indexOf(name) !== -1 || items.title.indexOf(upp) !== -1 || items.title.indexOf(low) !== -1 || items.title.indexOf(sen) !== -1)))}>All Categories</option>
                                {
                                    categories.filter(items => items.id === parseInt(group)).map(({cat_name})=>(
                                        cat_name.split(',').map((a, i)=>(
                                            <option value={a}>{a}</option>
                                        ))
                                    ))
                                  }
                            </select>
                        </div>
                        <div className="hr"></div>
                        {
                            // <Fly info={'Brands'} getcats={getcats}></Fly>
                            // <div className="hr"></div>
                        }
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
                <div className="main-right">
                    <div className="mr-top">
                        <div className="mrt-left">
                            <h3>{name.replaceAll('-', ' ').replaceAll('&', '/')}</h3><span>({
                                all.length +' results'
                            })</span>
                                
                        </div>
                        <div className="mrt-right">
                            <select>
                                <option>Sort By</option>
                                <option value='upload_date'>Newest to oldest</option>
                                <option va>Oldest to Newest</option>
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
                            all.length === 0 ? 
                            <div style={{width:'100%', margin:'20px'}}>No results to display</div> :
                            all.slice(0,20).map(({id, Images, title, price, transaction, group_name, category_name, item_contact_number, state, country, currency})=>(
                                <div>{console.log(all)
                                }<Pcards type={4} width={217} height={330} vim={'100%'} id={id} title={title} price={price} img={Images} information={[group_name, category_name, item_contact_number, state, country, currency]}/></div>
                            ))
                        }
                        </div> :
                        <div className="mr-fourth">
                        {
                            all.slice(0,20).map(({id, Images, title, price, transaction, group_name, category_name, item_contact_number, state, country, currency})=>(
                                <div><Pcards type={2} width={'100%'} height={'150px'} pdsize={'1.3em'} pcsize={'1.8em'} id={id} title={title} price={price} img={Images} information={[group_name, category_name, item_contact_number, state, country, currency]}/></div>
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
            
        <Foot />
        </div>
        
    )
}
export default SearchPage