import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"
import Menu from "../reusable/menu"
import Pcards from "../reusable/pcards"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationDot, faPhone, faStar, faStoreAlt } from "@fortawesome/free-solid-svg-icons" 
import { faChevronRight, faChevronDown, faBars, faSearch, faMessage } from "@fortawesome/free-solid-svg-icons"
import { faSquare } from "@fortawesome/free-solid-svg-icons"
import ReactSlider from 'react-slider'
import Drop from "../reusable/drop"
import Flyouts from "../reusable/flyouts"
import Ops from "../reusable/ops"
import Fly from "../reusable/fly"
import Psections from "../reusable/psections"
import banner from "../vendbanner.png"
import Search from "../reusable/search"
import ProdPop from "../reusable/prodpop"
import Foot from "../reusable/footer"
import axios from "axios"

const Products = () => {
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    const {vendorid,name} = useParams()
    const [styles, setstyles] = useState(1)
    const [styled, setstyled] = useState(1)
    const [product, setproduct] = useState([])
    const [groups, setgroups] = useState([])
    const [categories, setcategories] = useState([])
    const [group, setgroup] = useState(0)
    const [reveal, setreveal] = useState(0)
    useEffect(()=>{
        getparners()
    },[])
    const getparners = async () => {
        try {
            const product = await axios.get('http://geo.vensle.com/api/products')
            setproduct(product.data)
            const groups = await axios.get('http://geo.vensle.com/api/group')
            setgroups(groups.data)
            const categories = await axios.get('http://geo.vensle.com/api/groupcat')
            setcategories(categories.data)
         } catch (error) {
            console.log(error);
         }
    }
    return(
        <div>
            <Menu/>
            <div>
                <div className="v-img">
                    <img src={banner} alt=""/>
                </div>
            </div>
            <div className="breadcrumbs"></div>
            <div className="main-top">
                <div style={{width:'80%', margin:'0 auto', display:'grid', gridTemplateColumns:'300px 60% auto', alignItems:'center'}}>
                    <div className="v-logo">
                        <h3>{name.replaceAll('-', ' ')}</h3>
                    </div>
                    <div className="v-menu">
                    {styled === 1 ? <div style={{borderBottom:'5px solid orangered'}}> Home</div>:<div onClick={(e)=>setstyled(1)}> Home</div>}
                    {styled === 2 ? <div style={{borderBottom:'5px solid orangered'}}> Active Products</div>:<div onClick={(e)=>setstyled(2)}> Active Products</div>}
                    {styled === 3 ? <div style={{borderBottom:'5px solid orangered'}}> Recently Sold</div>:<div onClick={(e)=>setstyled(3)}> Recently Sold</div>}
                    {styled === 4 ? <div style={{borderBottom:'5px solid orangered'}}> Most Bought</div>:<div onClick={(e)=>setstyled(4)}> Most Bought</div>}
                    </div>
                    <div className="v-search">
                        <div className="search">
                            <input type='text' placeholder="Search product" />
                            <div className="but">
                                <FontAwesomeIcon icon={faSearch} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main">
                <div className="main-sidebar" style={{background:'#FBFBFB'}}>
                    <div style={{background:'#ffff', paddingBottom:'10px', marginBottom:'10px'}}>
                        <div className="filt-bar">
                            <h3>Contact Seller</h3>
                        </div>
                        <div className="hr"></div>
                        <div className="filt-params">
                            <div className="location">
                                <h4>{name.replaceAll('-', ' ')}</h4>    
                            </div>
                            <div className="contact-details">
                                <table>
                                    <tr>
                                        <td> <FontAwesomeIcon icon={faLocationDot} /></td>
                                        <td> 
                                        {
                                            product.filter(items => items.user_id === parseInt(vendorid)).slice(0,1).map(({address})=>(
                                                <p> {address} </p>
                                            ))
                                        }
                                            
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> <FontAwesomeIcon icon={faPhone} /></td>
                                        <td>
                                        {
                                            product.filter(items => items.user_id === parseInt(vendorid)).slice(0,1).map(({phone, active})=>(
                                             <p>{reveal === true ? phone : <p onClick={(e)=>setreveal(!reveal)} style={{cursor:'pointer'}}>Click to reveal</p>}</p>
                                            ))
                                        }
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> <FontAwesomeIcon icon={faStar} /></td>
                                        <td> 4.33 rating from 3 reviews</td>
                                    </tr>
                                    <tr>
                                        <td> <FontAwesomeIcon icon={faStoreAlt} /></td>
                                        <td> Store Open</td>
                                    </tr>
                                </table>
                                {
                                    // <div className="v-socials">
                                    //     <FontAwesomeIcon icon={faStoreAlt} />
                                    //     <FontAwesomeIcon icon={faStoreAlt} />
                                    //     <FontAwesomeIcon icon={faStoreAlt} />
                                    //     <FontAwesomeIcon icon={faStoreAlt} />
                                    //     <FontAwesomeIcon icon={faStoreAlt} />
                                    //     <FontAwesomeIcon icon={faStoreAlt} />
                                    // </div>
                                }
                                <textarea value={"Hi "+name.replaceAll('-', ' ')+" I am interested in your product"}></textarea>
                                <button className="click-send"><FontAwesomeIcon icon={faMessage}></FontAwesomeIcon> Send</button>
                            </div>
                        </div>
                    </div>
                    <div  style={{background:'#ffff'}}>
                        <div className="filt-bar">
                            <h3>Categories</h3>
                        </div>
                    </div>
                </div>
                <div className="main-right">
                    <div className="mr-top">
                        <div className="mrt-left">
                            {
                                styled === 1 ? <div><h3>All Products</h3><span>({product.filter(items => items.user_id === parseInt(vendorid)).length+' products'})</span></div> 
                                : 
                                styled === 2 ? <div><h3>Active Products</h3><span>({product.filter(items => items.user_id === parseInt(vendorid)  && items.sold !== 0).length+' products'} )</span></div>
                                : 
                                styled === 3 ? <div><h3>Recently Sold</h3><span>({product.filter(items => items.user_id === parseInt(vendorid)).length+' products'} )</span></div>
                                : 
                                styled === 4 ? <div><h3>Most Bought</h3><span>({product.filter(items => items.user_id === parseInt(vendorid)  && items.sold !== 0).length+' products'} )</span></div>
                                : 
                                ''
                                
                            }
                        </div>
                        <div className="mrt-right">
                            <p>Sort By</p> 
                            <select>
                                <option>Popularity</option>
                            </select>
                        </div>
                    </div>
                    {styled === 1 || styled === 3 ? 
                        <div className="mr-third">
                        {
                            product.filter(items => items.user_id === parseInt(vendorid)).slice(0,20).map(({id, Images, title, price, transaction, group_name, category_name, item_contact_number, state, country, currency})=>(
                                <div><Pcards type={1} width={217} height={330} vim={'100%'} id={id} title={title} price={price} img={Images} information={[group_name, category_name, item_contact_number, state, country, currency]}/></div>
                            ))
                        }
                        </div> :
                        <div className="mr-third">
                        {
                            product.filter(items => items.user_id === parseInt(vendorid)  && items.sold !== 0).slice(0,20).map(({id, Images, title, price, transaction, group_name, category_name, item_contact_number, state, country, currency})=>(
                                <div><Pcards type={1} width={217} height={330} vim={'100%'} id={id} title={title} price={price} img={Images} information={[group_name, category_name, item_contact_number, state, country, currency]}/></div>
                            ))
                        }
                        </div>
                    }
                </div>
            </div>
            <Foot />
        </div>
        
    )
}
export default Products