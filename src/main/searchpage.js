import { useState } from "react"
import { useParams } from "react-router-dom"
import Menu from "../reusable/menu"
import Pcards from "../reusable/pcards"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons" 
import { faChevronRight, faChevronDown, faBars } from "@fortawesome/free-solid-svg-icons"
import { faSquare } from "@fortawesome/free-solid-svg-icons"
import ReactSlider from 'react-slider'
import Drop from "../reusable/drop"
import Flyouts from "../reusable/flyouts"
import Ops from "../reusable/ops"
import Fly from "../reusable/fly"
import Psections from "../reusable/psections"
const SearchPage = () => {
    const {id} = useParams()
    const [style, setstyle] = useState(1)
    const product= [
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

    ]
    const [products, setProducts] = useState([
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
    return(
        <div>
            <Menu/>
            <div className="breadcrumbs">
                <div>Home -> Search -> Apple i-Watch</div>
            </div>
            <div className="main">
                <div className="main-sidebar">
                    <div className="filt-bar">
                        <FontAwesomeIcon icon={faBars} /><h3>Filter By</h3>
                    </div>
                    <div className="hr"></div>
                    <div className="filt-params">
                        <div className="location">
                            <h4>Location</h4>    
                        </div>
                        <Fly icon={<FontAwesomeIcon icon={faLocationDot} />} info={' Arkansas, USA'}>
                            <Flyouts position={'absolute'} margin={'-60px 0 0 300px'} title={'Your Location'} icon={<FontAwesomeIcon icon={faLocationDot} />}/>
                        </Fly>
                        <div className="dist">
                            <select>
                                <option>Distance</option>
                            </select>
                        </div>
                        <div className="Groups">
                        <p>Group</p>
                            <select>
                                <option>All Groups</option>
                            </select>
                        </div>
                        <div className="Categories">
                            <p>Categories</p>
                            <select>
                                <option>All Categories</option>
                            </select>
                        </div>
                        <div className="hr"></div>
                        <Fly info={'Brands'}>
                            <Flyouts position={'absolute'} margin={'-450px 0 0 300px'} title={'Top selling brands'} icon={''}/>
                        </Fly>
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
                            <Ops/>
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
                            <h3>Apple Watch</h3><span>(1025 products)</span>
                        </div>
                        <div className="mrt-right">
                            <p>Sort By</p> 
                            <select>
                                <option>Popularity</option>
                            </select>
                        </div>
                    </div>
                    <div className="mr-second">
                        <div className="mrs-left">
                            <p>Filters</p>
                        </div>
                        <div className="mrs-right">
                            <p><FontAwesomeIcon icon={faBars} onClick={(e)=>setstyle(2)}/></p>
                            <p><FontAwesomeIcon icon={faSquare} onClick={(e)=>setstyle(1)} /></p>
                        </div>
                    </div>
                    {style === 1 ? 
                        <div className="mr-third">
                        {
                            product.slice(1,7).map(({id, img, title, price, transaction})=>(
                                <div><Pcards type={1} width={217} height={330} vim={'100%'} id={id} title={title} price={price} img={img} trans={transaction}/></div>
                            ))
                        }
                        </div> :
                        <div className="mr-fourth">
                        {
                            product.slice(1,7).map(({id, img, title, price, transaction})=>(
                                <div><Pcards type={2} width={'100%'} height={'150px'} pdsize={'1.3em'} pcsize={'1.8em'} id={id} title={title} price={price} img={img} trans={transaction}/></div>
                            ))
                        }
                        </div>
                    }
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
export default SearchPage