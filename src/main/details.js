import { useState,useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import Menu from "../reusable/menu"
import Psections from "../reusable/psections"
import Revcards from "../reusable/revcards"
import pimage from '../prod.png'
import Carousels from '../reusable/carousel'
import Tabular from "./tabs"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart, faStar, faStarHalfAlt, faLocationDot, faMessage, faClose } from "@fortawesome/free-solid-svg-icons"
import Carouse from "../reusable/carouse"
import Popmessage from "../admin/popmessage"
import Poprev from "../admin/poprev"
import Pcards from "../reusable/pcards"
import Popup from "../admin/popup"

const Details = () => {
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    const {id} = useParams()
    const [isOpen, setIsOpen] = useState(false)
    const [read, setread] = useState(false)
    const [feat, setfeat] = useState(false)
    const [showcontact, setshowcontact] = useState(false)
    const [styled, setstyled] = useState(1)
    const [product, setProducts] = useState([
        {
            id:1,
            img:"../../pics (5).jpg",
            title:"Solid White leather shoes",
            price:"5,000",
            transaction:[
                {
                    type:'Must meet to buy',
                    avail:1,
                },
                {
                    type:'Delivery',
                    avail:1
                }
            ]
        },
        {
            id:2,
            img:"../../pics (3).jpg",
            title:"Premium sneakers",
            price:"22,000",
            transaction:[
                {
                    type:'Must meet to buy',
                    avail:1,
                },
                {
                    type:'Delivery',
                    avail:1
                }
            ]
        },
        {
            id:3,
            img:"../../pics (4).jpg",
            title:"Apple i-watch",
            price:"15,000",
            transaction:[
                {
                    type:'Must meet to buy',
                    avail:1,
                },
                {
                    type:'Delivery',
                    avail:1
                }
            ]
        },
        {
            id:4,
            img:"../../pics (18).jpg",
            title:"RayBan sun glasses",
            price:"4,500",
            transaction:[
                {
                    type:'Must meet to buy',
                    avail:1,
                },
                {
                    type:'Delivery',
                    avail:1
                }
            ]
        },
        {
            id:5,
            img:"../../pics (19).jpg",
            title:"Nikon D9000 Camera(Wide angle lens)",
            price:"325,000",
            transaction:[
                {
                    type:'Must meet to buy',
                    avail:1,
                },
                {
                    type:'Delivery',
                    avail:1
                }
            ]
        },
        {
            id:6,
            img:"../../pics (20).jpg",
            title:"All Stars sneakers",
            price:"7,000",
            transaction:[
                {
                    type:'Must meet to buy',
                    avail:1,
                },
                {
                    type:'Delivery',
                    avail:1
                }
            ]
        },
        {
            id:7,
            img:"../../pics (22).jpg",
            title:"Denim School bag",
            price:"6,300",
            transaction:[
                {
                    type:'Must meet to buy',
                    avail:1,
                },
                {
                    type:'Delivery',
                    avail:1
                }
            ]
        }
        

    ])
    const data = [{
        id:1,
        title:'Premium Sneakers',
        price:'22,000',
        location:'Washington DC',
        transaction:'Meet to Buy',
        features:[
          {
            id:1,
            type:'Category',
            info:'Fashion'
          },
          {
            id:2,
            type:'Condition',
            info:'Neatly used and clean'
          },
          {
            id:3,
            type:'Description',
            info:'White color, touch screen and lightweight'
          },
          {
            id:3,
            type:'Description',
            info:'White color, touch screen and lightweight'
          },
          {
            id:2,
            type:'Condition',
            info:'Neatly used and clean'
          },
          {
            id:3,
            type:'Description',
            info:'White color, touch screen and lightweight'
          }
        ],
        images:
          [
            {
              image: "../../pics (4).jpg",
            },
            {
              image: "../../iwatch (13).jpg",
            },
            {
              image: "../../iwatch (14).jpg",
            },
            {
              image: "../../iwatch (1).jpg",
            },
            {
              image: "../../iwatch (2).jpg",
            },
            {
              image: "../../iwatch (3).jpg",
            },
            {
              image: "../../iwatch (4).jpg",
            },
            {
              image: "../../iwatch (5).jpg",
            },
            {
              image: "../../iwatch (6).jpg",
            },
            {
              image: "../../iwatch (7).jpg",
            },
            {
              image: "../../iwatch (8).jpg",
            },
            {
              image: "../../iwatch (9).jpg",
            },
            {
              image: "../../iwatch (10).jpg",
            },
            {
              image: "../../iwatch (11).jpg",
            },
            {
              image: "../../iwatch (12).jpg",
            },
            {
              image: "../../iwatch (15).jpg",
            }
          ]
        }
    ];
    const [all] = data
    const {images, features, title, price, location, transaction} = all
    const single = [
        {
            
        }
    ]
    return(
        <div>
            <Menu/>
            <div className="breadcrumbs">
                <div>Home -> Products -> Fashion -> REDVNK Hand Woven Blucher Dress Shoe - Black</div>
            </div>
            <div className="details-container-top">
                <div className="details-left">
                    <div className="dl-first">
                        
                        <Carouse />
                    </div>
                    <div className="dl-second">
                        <div className="tabular">
                            <div className="tab-title">
                                {styled === 1 ? <div style={{borderBottom:'5px solid orangered'}}> <h4>Product Description</h4></div>:<div onClick={(e)=>setstyled(1)} style={{cursor:'pointer'}}> <h4 style={{fontWeight:'200'}}>Product Description</h4></div>}
                                {styled === 2 ? <div style={{borderBottom:'5px solid orangered'}}> <h4>Product Features & Specifications</h4></div>:<div onClick={(e)=>setstyled(2)} style={{cursor:'pointer'}} > <h4 style={{fontWeight:'200'}}>Product Features & Specifications</h4></div>}
                            </div>
                            <div className="tab-body">
                            {styled === 1 ? <p>There are different means by which student identity can be verified and their data stored for reference. 
                                This project was able to achieve an optimized system which would serve as an alternative to the manual multi-database system. 
                                The unified Identity management system provided by this project uses QR-codes to store the basic student data on the cards. 
                                This code would be generated using a JS library and would be printed on a plastic card which would be issued to students as 
                                a replacement for the current ID cards. With the development of numerous new technologies over the last ten years, including 
                                e-commerce, e-learning, e-business, and e-registration, to name a few, the field of information technology has advanced significantly. 
                                Information is viewed as a valuable resource for all institutions in the modern technology era. One area of interest in information 
                                technology is the field that deals with identity and access management. 
                                Its significance cuts across several fields of endeavour, be it businesses, education or governance just to mention a few. 
                                It has gained heightened interest nowadays given the rise in the cases of persons having their identities stolen and other 
                                identity-related crimes. 
                                 
                                It is general knowledge that in Nigeria as a country, various identification systems are used to validate the authenticity 
                                of a person’s identity... <span onClick={(e)=>setread(true)} style={{cursor:'pointer'}}><b>Read More</b></span></p> :
                                <div className="spread">
                                    
                                    <div>
                                        <div className="table-within">
                                            <h3>Features</h3>
                                            <table>
                                            {
                                            features.map(({type, info})=>(
                                                <tr>
                                                    <td>{type}</td>
                                                    <td>{info}</td>
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
                                            features.map(({type, info})=>(
                                                <tr>
                                                    <td>{type}</td>
                                                    <td>{info}</td>
                                                </tr>
                                            ))
                                            }
                                            </table>
                                        </div>
                                    </div>
                                    <div className="rm" onClick={(e)=>setfeat(!feat)} style={{cursor:'pointer', alignSelf:'end'}}><b>Read More</b></div>
                                </div>
                            }
                            </div>
                        </div>
                    </div>
                </div>
                {read === true ?
                    <div className='popcontainer' style={{zIndex:'1500'}}> 
                        <div  className="inner-container" style={{display:'block', width:'500px', minHeight:'50%', position:'relative'}}>
                            <div className="up-bar">
                                <div>Product Description</div>
                                <div style={{color:'black', fontSize:'1em', justifySelf:'end', cursor:'pointer'}} onClick={(e)=>setread(!read)}><FontAwesomeIcon icon={faClose} /></div>
                            </div>
                            <Popup>
                            <h3>Product Description</h3>
                            <p>There are different means by which student identity can be verified and their data stored for reference. 
                            This project was able to achieve an optimized system which would serve as an alternative to the manual multi-database system. 
                            The unified Identity management system provided by this project uses QR-codes to store the basic student data on the cards. 
                            This code would be generated using a JS library and would be printed on a plastic card which would be issued to students as 
                            a replacement for the current ID cards. With the development of numerous new technologies over the last ten years, including 
                            e-commerce, e-learning, e-business, and e-registration, to name a few, the field of information technology has advanced significantly. 
                            Information is viewed as a valuable resource for all institutions in the modern technology era. One area of interest in information 
                            technology is the field that deals with identity and access management. 
                            Its significance cuts across several fields of endeavour, be it businesses, education or governance just to mention a few. 
                            It has gained heightened interest nowadays given the rise in the cases of persons having their identities stolen and other identity-related crimes.
                            It is general knowledge that in Nigeria as a country, various identification systems are used to validate the authenticity of a person’s identit</p>   
                            </Popup>  
                        </div>
                    </div>: null
                }
                {feat === true ?
                    <div className='popcontainer' style={{zIndex:'1500'}}> 
                        <div  className="inner-container" style={{display:'block', width:'500px', minHeight:'50%', position:'relative'}}>
                            <div className="up-bar">
                                <div>Product Features</div>
                                <div style={{color:'black', fontSize:'1em', justifySelf:'end', cursor:'pointer'}} onClick={(e)=>setfeat(!feat)}><FontAwesomeIcon icon={faClose} /></div>
                            </div>
                            <Popup>
                            <div className="spread">
                                <div>
                                    <div className="table-within">
                                        <h3>Features</h3>
                                        <table>
                                        {
                                        features.map(({type, info})=>(
                                            <tr>
                                                <td>{type}</td>
                                                <td>{info}</td>
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
                                        features.map(({type, info})=>(
                                            <tr>
                                                <td>{type}</td>
                                                <td>{info}</td>
                                            </tr>
                                        ))
                                        }
                                        </table>
                                    </div>
                                </div>
                                </div>
                            </Popup>  
                        </div>
                    </div>: null
                }
                <div className="details-right">
                    <div className="dr-first-">
                        <div className="caption">
                            <h3>Brand New - In stock</h3> <p><FontAwesomeIcon icon={faHeart} /></p>
                        </div>
                        <div className="dr-price">
                            <h4>Price</h4><span>Rating <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStarHalfAlt} /></span>
                            <p>$57</p>
                        </div>
                        <div className="s-location"><FontAwesomeIcon icon={faLocationDot} /> Washington DC</div>
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
                                <h4>RedVNK</h4>
                            </div>
                            <button className="click-phone" onClick={(e)=>setshowcontact(!showcontact)}>
                            {
                                showcontact === false ? <p onClick={(e)=>setshowcontact(!showcontact)} style={{cursor:'pointer'}}>Click to view contact </p>:<a href="tel:08138732889" >08138732889</a>
                            } 
                            </button>
                            <button  className="click-profile"><Link to={'../../vendor/'+id}>Click to view profile</Link></button>
                            <textarea>Hi Resvnk I am interested in your product</textarea>
                            <button className="click-send"><FontAwesomeIcon icon={faMessage}></FontAwesomeIcon> Send</button>
                        </div>
                    </div>
                    <div className="reviews">
                        <h2>Reviews</h2>
                        <div className="hr" />
                        <Revcards />
                        {isOpen === true ?
                            <div className='popcontainer' style={{zIndex:'1500'}}> 
                                <div  className="inner-container" style={{display:'block', width:'100%'}}>
                                    <div className="up-bar">
                                        <div>Reviews</div>
                                        <div style={{color:'black', fontSize:'1em', justifySelf:'end', cursor:'pointer'}} onClick={(e)=>setIsOpen(!isOpen)}><FontAwesomeIcon icon={faClose} /></div>
                                    </div>
                                    <Poprev/>
                                </div>
                            </div>: null
                        }
                        
                        <div className="more" onClick={(e)=>setIsOpen(!isOpen)} style={{cursor:'pointer'}} >More reviews</div>
                    </div>
                </div>
            </div>
            <div className="details-container-top">
                <div className="details-left">
                    <Psections sects={product} start={0} info={"Other Products in this Category "}></Psections>
                    <Psections sects={product} start={3} info={"Recently Viewed "}></Psections>
                </div>
                <div className="details-right">
                    <div style={{background:'white', padding:'20px', boxSizing:'border-box', display:'grid', gap:'15px'}}>
                    <h3>Similar Products by seller</h3>
                    {
                        product.slice(5, 7).map(({id, img, title, price})=>(
                            <div><Pcards type={3} pdsize={'.9em'} pcsize={'1em'} id={id} title={title} price={price} img={img}/></div>
                        ))
                    } 
                    </div>
                    <div className="more" style={{background:'white', padding:'20px 10px', boxSizing:'border-box', marginTop:'7px', cursor:'pointer'}}>More</div>   
                </div>
            </div>
            
        </div>
        
    )
}
export default Details