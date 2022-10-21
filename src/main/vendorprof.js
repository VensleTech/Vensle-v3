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
const Products = () => {
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    const {id} = useParams()
    const [styles, setstyles] = useState(1)
    const [styled, setstyled] = useState(1)
    const [product, setProduct] = useState([
        {
            id:1,
            img:"../../pics (5).jpg",
            title:"Solid White leather shoes",
            price:"5,000",
            transaction:[
                {
                    id:1,
                    type:'Must meet to buy',
                    avail:0,
                },
                {
                    id:2,
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
                    id:1,
                    type:'Must meet to buy',
                    avail:1,
                },
                {
                    id:2,
                    type:'Delivery',
                    avail:0
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
                    id:1,
                    type:'Must meet to buy',
                    avail:0,
                },
                {
                    id:2,
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
                    id:1,
                    type:'Must meet to buy',
                    avail:1,
                },
                {
                    id:2,
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
                    id:1,
                    type:'Must meet to buy',
                    avail:1,
                },
                {
                    id:2,
                    type:'Delivery',
                    avail:1
                }
            ]
        },
        {
            id:6,
            img:"../../pics (20).jpg",
            title:"All STars sneakers",
            price:"7,000",
            transaction:[
                {
                    id:1,
                    type:'Must meet to buy',
                    avail:1,
                },
                {
                    id:2,
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
                    id:1,
                    type:'Must meet to buy',
                    avail:1,
                },
                {
                    id:2,
                    type:'Delivery',
                    avail:1
                }
            ]
        }
    ])
    const [products, setProducts] = useState([
        {
            id:1,
            img:"../../pics (3).jpg",
            title:"Premium sneakers",
            price:"22,000",
            transaction:[
                {
                    id:1,
                    type:'Must meet to buy',
                    avail:1,
                },
                {
                    id:2,
                    type:'Delivery',
                    avail:0
                }
            ]
        },
        {
            id:2,
            img:"../../pics (4).jpg",
            title:"Apple i-watch",
            price:"15,000",
            transaction:[
                {
                    id:1,
                    type:'Must meet to buy',
                    avail:0,
                },
                {
                    id:2,
                    type:'Delivery',
                    avail:1
                }
            ]
        },
        {
            id:3,
            img:"../../pics (20).jpg",
            title:"All STars sneakers",
            price:"7,000",
            transaction:[
                {
                    id:1,
                    type:'Must meet to buy',
                    avail:1,
                },
                {
                    id:2,
                    type:'Delivery',
                    avail:1
                }
            ]
        },
        {
            id:4,
            img:"../../pics (22).jpg",
            title:"Denim School bag",
            price:"6,300",
            transaction:[
                {
                    id:1,
                    type:'Must meet to buy',
                    avail:1,
                },
                {
                    id:2,
                    type:'Delivery',
                    avail:1
                }
            ]
        }
        

    ])
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
                        <h3>Redvnk</h3>
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
                                <h4>REDVNK</h4>    
                            </div>
                            <div className="contact-details">
                                <table>
                                    <tr>
                                        <td> <FontAwesomeIcon icon={faLocationDot} /></td>
                                        <td> Ikeja, Lagos State, Nigeria</td>
                                    </tr>
                                    <tr>
                                        <td> <FontAwesomeIcon icon={faPhone} /></td>
                                        <td> 09094714076 </td>
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
                                <textarea placeholder="Hi Resvnk I am interested in your product"></textarea>
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
                                styled === 1 ? <div><h3>All Products</h3><span>(1025 products)</span></div> 
                                : 
                                styled === 2 ? <div><h3>Active Products</h3><span>(195 products)</span></div>
                                : 
                                styled === 3 ? <div><h3>Recently Sold</h3><span>(15 products)</span></div>
                                : 
                                styled === 4 ? <div><h3>Most Bought</h3><span>(165 products)</span></div>
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
                            product.slice(1,7).map(({id, img, title, price, transaction})=>(
                                <div><Pcards type={1} width={217} height={330} vim={'100%'} id={id} title={title} price={price} img={img} trans={transaction}/></div>
                            ))
                        }
                        </div> :
                        <div className="mr-third">
                        {
                            products.slice(1,7).map(({id, img, title, price, transaction})=>(
                                <div><Pcards type={1} width={217} height={330} vim={'100%'} id={id} title={title} price={price} img={img} trans={transaction}/></div>
                            ))
                        }
                        </div>
                    }
                </div>
            </div>
            
        </div>
        
    )
}
export default Products