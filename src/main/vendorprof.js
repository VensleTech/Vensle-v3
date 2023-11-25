import { useState,useEffect, useContext } from "react"
import { useParams } from "react-router-dom"
import Menu from "../reusable/menu"
import Pcards from "../reusable/pcards"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretDown, faLocationDot, faPhone, faStar, faStoreAlt,faArrowCircleRight, faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons" 
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
import { UserContext } from "../auth/usercontext"

const Products = () => {
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    const {vendorid,name} = useParams()
    const [vendor, setvendor] = useState({
        address:'',
        phone:'',
        profile_img:''
    })
    const {details:{userlocation, item, currency, specialref},  details, setDetails} = useContext(UserContext)
    
    const [styled, setstyled] = useState(1)
    const [product, setproduct] = useState([])
    const [groups, setgroups] = useState([])
    const [categories, setcategories] = useState([])
    const [grocery, setgrocery] = useState(0)
    const [reveal, setreveal] = useState(0)
    const [show, setshow] = useState(true)
    const [page, setpage] = useState(1)
    const [posit, setposit] = useState([0, 20])
    useEffect(()=>{
        getparners()
    },[userlocation.country])
    const getparners = async () => {
        try {
            // const product = await axios.get('http://vensle.com/api/api/products')
            // setproduct(product.data)
            const products = await axios.get('http://vensle.com/api/api/vendorproducts/'+vendorid+'/'+userlocation.country)
            setproduct(products.data)
            const groceries = await axios.get('http://vensle.com/api/api/vendorgroceries/'+vendorid+'/'+userlocation.country)
            setgrocery(groceries.data)
            const groups = await axios.get('http://vensle.com/api/api/group')
            setgroups(groups.data)
            const vendorinfo = await axios.get('http://vensle.com/api/api/vendor/'+vendorid)
            setvendor(vendorinfo.data)
         } catch (error) {
           // console.log(error);
         }
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
    // const choose = () => {
    //    // console.log(loc)
    //    // console.log(loc.pathname.split('/')[1])
    //     if( loc.pathname.split('/')[1]=== 'pro'){
    //         setpath(['pro', 'category', 'pr', 'Products', 'search'])
    //        // console.log('pro')
    //     }
    //     else if(loc.pathname.split('/')[1] === 'gro'){
    //         setpath(['gro', 'gcategory', 'gr', 'Groceries','gsearch'])
    //        // console.log('gro')
    //     }
    // }
    console.log(vendor)
    return(
        <div className="vendor">
            <Menu/>
            <div>
                <div className="v-img">
                    { vendor.profile_img.length > 1 ?
                    <img src={'http://vensle.com/api/storage/'+vendor.profile_img} alt="" />
                    :
                    <img src={banner} alt=""/>
                    }
                </div>
            </div>
            <div className="main-top">
                <div  className="v-bar">
                    <div className="v-logo">
                        <h3>{name.length > 15 ? name.replaceAll('-', ' ').substr(0, 15)+'...' : name.replaceAll('-', ' ')}</h3>
                        <span onClick={(e)=>setshow(!show)}><FontAwesomeIcon icon={faCaretDown}/></span>
                    </div>
                    {
                        show === true ?
                        <div className="main-side" style={{background:'#FBFBFB'}}>
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
                                </div>
                            </div>
                        </div>
                        :
                        ''
                    }
                    
                    <div className="v-menu">
                    {styled === 1 ? <div style={{borderBottom:'5px solid orangered'}}> For Sale</div>:<div onClick={(e)=>setstyled(1)}> For Sale</div>}
                    {styled === 2 ? <div style={{borderBottom:'5px solid orangered'}}> Groceries</div>:<div onClick={(e)=>setstyled(2)}> Groceries</div>}
                    {/* {styled === 3 ? <div style={{borderBottom:'5px solid orangered'}}> Recently Sold</div>:<div onClick={(e)=>setstyled(3)}> Recently Sold</div>}
                    {styled === 4 ? <div style={{borderBottom:'5px solid orangered'}}> Most Bought</div>:<div onClick={(e)=>setstyled(4)}> Most Bought</div>} */}
                    </div>
                    <div className="v-search">
                        {/* <div className="search">
                            <input type='text' placeholder="Search product" />
                            <div className="but">
                                <FontAwesomeIcon icon={faSearch} />
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
            <div className="main">
                <div className="main-sidebar" style={{background:'none'}}>
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
                                            <p> {vendor.address} </p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> <FontAwesomeIcon icon={faPhone} /></td>
                                        <td>
                                            <p>{reveal === true ? vendor.phone : <p onClick={(e)=>setreveal(!reveal)} style={{cursor:'pointer'}}>Click to reveal</p>}</p>
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
                        {/* <div className="filt-bar">
                            <h3>Categories</h3>
                        </div> */}
                    </div>
                </div>
                <div className="main-right">
                    <div className="mr-top">
                        <div className="mrt-left">
                            {
                                styled === 1 ? <div><h3>For Sale</h3><span>({product.length+' products'})</span></div> 
                                : 
                                styled === 2 ? <div><h3>Groceries</h3><span>({grocery.length+' products'} )</span></div>
                                : 
                                ''
                                
                            }
                        </div>
                        <div className="mrt-right">
                            <select>
                                <option>Sort by</option>
                            </select>
                        </div>
                    </div>
                    {styled === 1 ? 
                        <div className="mr-third">
                        {
                            product.slice(posit[0], posit[1]).map((product, i)=>(
                                <div><Pcards type={4} width={200} height={330} vim={'100%'} information={product} route={'pro'}/></div>
                            ))
                        }
                        </div> :
                        <div className="mr-third">
                        {
                            grocery.slice(posit[0], posit[1]).map((product, i)=>(
                                <div><Pcards type={4} width={200} height={330} vim={'100%'} information={product} route={'gro'}/></div>
                            ))
                        }
                        </div>
                    }
                    {
                        product.length > 20 ?
                        <div className="pagin">
                            <div onClick={(e)=>paginate('backward')}><FontAwesomeIcon icon={faArrowCircleLeft}/> Prev</div>
                            <p>Page {page} of {Math.ceil(product.length/20)}</p>
                            <div onClick={(e)=>paginate('forward')}>Next <FontAwesomeIcon icon={faArrowCircleRight}/></div>
                        </div>
                        :
                        ''
                        // make for grocery too
                    }
                </div>
                
            </div>
            <Foot />
        </div>
        
    )
}
export default Products