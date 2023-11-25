import { useState,useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import Menu from "../reusable/menu"
import Psections from "../reusable/psections"
import Revcards from "../reusable/revcards"
import pimage from '../prod.png'
import Carousels from '../reusable/carousel'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart, faStar, faStarHalfAlt, faLocationDot, faMessage, faAngleRight } from "@fortawesome/free-solid-svg-icons"
import Carouse from "../reusable/carouse"
import Popmessage from "../admin/popmessage"
import Poprev from "../admin/poprev"
import Pcards from "../reusable/pcards"
import Popup from "../admin/popup"
import Newpup from "../reusable/newpop"
import Tabone from "./tabone"
import Foot from "../reusable/footer"
import axios from "axios"
import Gcards from "../reusable/gcards"
import Gcarouse from "../reusable/gcarouse"


const Gdetails = () => {
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    const {id, group, name} = useParams()
   // console.log(name)
    const [isOpen, setIsOpen] = useState(false)
    const [read, setread] = useState(false)
    const [feat, setfeat] = useState(false)
    const [showcontact, setshowcontact] = useState(false)
    const [styled, setstyled] = useState(1)
    const [product, setproduct] = useState([])
    const [igroup, setigroup] = useState("77")
    
    const getreadstate = (readstate)=> {
      setread(readstate)
      setIsOpen(readstate)
    }
    useEffect(()=>{
        getparners()
    },[])
    const getparners = async () => {
        try {
            const product = await axios.get('http://vensle.com/api/api/fresh/groceries')
            setproduct(product.data)
         } catch (error) {
           // console.log(error);
         }
    }
    function formatMoney(n) {
        return (Math.round(n * 100) / 100).toLocaleString();
    }
    return(
        <div>
            <Menu/>
            <div className="breadcrumbs">
                <div><Link to={'/'}>Home</Link> <FontAwesomeIcon icon={faAngleRight} /> Products <FontAwesomeIcon icon={faAngleRight} /> {name.replaceAll('-', ' ').replaceAll('&', '/')}</div>
            </div>
            <div className="details-container-top">
                <div className="details-left">
                    <div className="dl-first">
                        {
                            product.filter(item => item.id === id).map(({gimage, imgfolder})=>(
                                <Gcarouse prodname={name.replaceAll('-', ' ').replaceAll('&', '/')} img={gimage}  imgfolder={imgfolder}  id={id}/>
                            //// console.log(product.filter(item => item.id === id))
                            ))
                        }
                    </div>    
                    {
                        product.filter(item => item.id === id).map(({description})=>(
                            <div className="dl-second">
                                <div className="tabular">
                                    <div className="tab-title">
                                        {styled === 1 ? <div style={{borderBottom:'5px solid orangered'}}> <h4>Product Description</h4></div>:<div onClick={(e)=>setstyled(1)} style={{cursor:'pointer'}}> <h4 style={{fontWeight:'200'}}>Product Description</h4></div>}
                                        {styled === 2 ? <div style={{borderBottom:'5px solid orangered'}}> <h4>Product Features & Specifications</h4></div>:<div onClick={(e)=>setstyled(2)} style={{cursor:'pointer'}} > <h4 style={{fontWeight:'200'}}>Product Features & Specifications</h4></div>}
                                    </div>
                                    <div className="tab-body">
                                    {styled === 1 ? 
                                    <Tabone>
                                    <p>{description}{description.length > 1000 ? <span onClick={(e)=>setread(true)} style={{cursor:'pointer'}}><b>... Read More</b></span> : null }</p>
                                        {read === true ?
                                        <Newpup getreadstate={getreadstate} heading={"Product Description"}>
                                            <h3>Product Description</h3>
                                            <p onClick={(e)=>setread(true)} style={{cursor:'pointer'}}>{description}</p>
                                        </Newpup> : null
                                    }
                                        </Tabone>:
                                        <Tabone>
                                        <div className="spread">
                                            
                                            <div>
                                                <div className="table-within">
                                                    <h3>Features</h3>
                                                    <table>
                                                    {
                                                    product.filter(item => item.id === id).map(({item_condition})=>(
                                                        <tr>
                                                            <td>Item Condition</td>
                                                            <td>{item_condition === 1 ? "New" : 'Used'}</td>
                                                        </tr>
                                                    ))
                                                    }
                                                    </table>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="table-within">
                                                    <h3> Specifications</h3>
                                                    <table>
                                                    {
                                                        product.filter(item => item.id === id).map(({group_name})=>(
                                                            <tr>
                                                                <td>Product type</td>
                                                                <td>{group_name}</td>
                                                            </tr>
                                                        ))
                                                        }
                                                        {
                                                            product.filter(item => item.id === id).map(({category_name})=>(
                                                                <tr>
                                                                    <td>Category</td>
                                                                    <td>{category_name}</td>
                                                                </tr>
                                                            ))
                                                            }
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        {read === true ?
                                        <Newpup getreadstate={getreadstate} heading={"Product Features"}>
                                            <div className="spread">
                                                <div>
                                                    <div className="table-within">
                                                        <h3>Features</h3>
                                                        <table>
                                                        {
                                                        // features.map(({type, info})=>(
                                                        //     <tr>
                                                        //         <td>{type}</td>
                                                        //         <td>{info}</td>
                                                        //     </tr>
                                                        // ))
                                                        }
                                                        </table>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="table-within">
                                                        <h3> Specifications</h3>
                                                        <table>
                                                        {
                                                        // features.map(({type, info})=>(
                                                        //     <tr>
                                                        //         <td>{type}</td>
                                                        //         <td>{info}</td>
                                                        //     </tr>
                                                        // ))
                                                        }
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </Newpup>  
                                        : null
                                        }
                                        </Tabone>
                                    }
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    
                </div>
                <div className="details-right">
                {
                    product.filter(item => item.id === id).map(({price, state, full_name, phone, user_id})=>(

                       <div className="dr-first-">
                            <div className="caption">
                                <h3>Brand New - In stock</h3> <p><FontAwesomeIcon icon={faHeart} /></p>
                            </div>
                            <div className="dr-price">
                                <h4>Price</h4><span>Rating <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStarHalfAlt} /></span>
                                <p>${formatMoney(price)}</p>
                            </div>
                            <div className="s-location"><FontAwesomeIcon icon={faLocationDot} /> {state}</div>
                            <div className="trans-type">
                                <table>
                                    <tr>
                                        <td>Transaction type</td>
                                        <td>Meet to Buy</td>
                                    </tr>
                                </table>
                            </div>
                            <div className="seller-info">
                                <h4>Seller information</h4>
                                <div className="hr"></div>
                                <div className="seller-name">
                                    <h4>{full_name}</h4>
                                </div>
                                {
                                    // <button className="click-phone" onClick={(e)=>setshowcontact(!showcontact)}>
                                
                                //     showcontact === false ? <p onClick={(e)=>setshowcontact(!showcontact)} style={{cursor:'pointer'}}>Click to view contact </p>:<a href={"tel:"+phone} >{phone}</a>
                                 
                                // </button>
                                // <button  className="click-profile"><Link to={'../../vendor/'+user_id+'/'+full_name.trim().replaceAll(' ','-').replaceAll('/','&')}>Click to view profile</Link></button>
                                // <textarea value={"Hi "+full_name+" I am interested in your product"}/>
                                }
                                <button className="click-send"><FontAwesomeIcon icon={faMessage}></FontAwesomeIcon> Send</button>
                            </div>
                        </div> 
                    ))
                }
                    
                    <div className="reviews">
                        <h2>Reviews</h2>
                        <div className="hr" />
                        <Revcards />
                        {isOpen === true ?
                            <Newpup getreadstate={getreadstate} heading={"Reviews"}>
                            <Revcards />
                            <Revcards />
                            <Revcards />
                            <Revcards />
                            <Revcards />
                            <Revcards />
                            <Revcards />
                            <Revcards />
                            <Revcards />
                            </Newpup>
                            : null
                        }
                        
                        <div className="" onClick={(e)=>setIsOpen(!isOpen)} style={{cursor:'pointer'}} >More reviews</div>
                    </div>
                </div>
            </div>
            <div className="details-container-top">
                <div className="details-left" style={{background:'white'}}>
                    {
                        product.filter(items => items.id === id).slice(0,1).map(({id, category})=>(
                            
                                <div>
                                    <div className="section">
                                        <div className="title">
                                            <h2>Other Products in this Category</h2>
                                            {
                                                // product.filter(items => items.category === category && items.id !== id).slice(0,1).map(({item_group, group_name})=>(
                                                //     <Link to={"/products/"+item_group+"/"+group_name.split('(')[0]} className="moore"><div >More</div>  <FontAwesomeIcon icon={faAngleRight} /></Link>
                                                // ))
                                            }
                                        </div>
                                        <div className="other">
                                        {    
                                            product.slice(0,3).map(({id, gimage, name, price, cat_name, state, country,  imgfolder})=>(
                                                <div><Gcards type={3} pdsize={'.9em'} pcsize={'1em'} id={id} title={name} price={price} img={gimage} imgfolder={imgfolder} information={[cat_name, state, country]}/></div>
                                            ))
                                        }
                                        </div>
                                    </div>
                                </div>
                            
                        ))
                    }
                    {
                        product.filter(items => parseInt(items.id) === 2).slice(0,1).map(({id, cat_name})=>(
                            
                                <div>
                                    <div className="section">
                                        <div className="title">
                                            <h2>Recently Viewed Products</h2>
                                            {
                                                product.filter(items => items.category === cat_name && items.id !== id).slice(0,1).map(({item_group, group_name})=>(
                                                    <Link to={"/products/"+item_group+"/"+group_name.split('(')[0]} className="moore"><div >More</div>  <FontAwesomeIcon icon={faAngleRight} /></Link>
                                                ))
                                            }
                                        </div>
                                        <div className="other">
                                        {    
                                            product.slice(0,3).sort((a, b)=> b.name.localeCompare(a.name)).map(({id, gimage, name, price, cat_name, state, country,  imgfolder})=>(
                                                <div><Gcards type={3} pdsize={'.9em'} pcsize={'1em'} id={id} title={name} price={price} img={gimage} imgfolder={imgfolder} information={[cat_name, state, country]}/></div>
                                            ))
                                        }
                                        </div>
                                    </div>
                                </div>
                            
                        ))
                    }
                </div>
                <div className="details-right" style={{background:'white'}}>
                    <div style={{background:'white', padding:'20px', boxSizing:'border-box', display:'grid', gap:'15px'}}>
                    <h3>Similar Products by seller</h3>
                    {
                        product.filter(items => items.id === id).slice(0,1).map(({id,partner_id})=>(
                            product.filter(items => parseInt(items.partner_id) === 1 && items.id !== id).slice(0,20).map(({id, gimage, name, price, cat_name, state, country,  imgfolder})=>(
                                <div><Gcards type={2} width={'100%'} height={'150px'} pdsize={'1.3em'} pcsize={'1.8em'} id={id} title={name} price={price} img={gimage} imgfolder={imgfolder} information={[cat_name, state, country]}/></div>
                            ))
                        ))
                    }
                    <div className="more" style={{background:'', padding:'20px', boxSizing:'border-box', marginTop:'7px', cursor:'pointer'}}>More <FontAwesomeIcon icon={faAngleRight} /></div>   
                    </div>
                    
                </div>
            </div>
            <Foot/>
        </div>
        
    )
}
export default Gdetails