import { useState } from "react"
import { useParams, Link } from "react-router-dom"
import Menu from "../reusable/menu"
import Pcards from "../reusable/pcards"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons" 
import { faChevronRight, faChevronDown, faBars, faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons"
import { faSquare } from "@fortawesome/free-solid-svg-icons"
import ReactSlider from 'react-slider'
import Drop from "../reusable/drop"
import Flyouts from "../reusable/flyouts"
import Ops from "../reusable/ops"
import Fly from "../reusable/fly"
import Psections from "../reusable/psections"
import Carousels from "../reusable/carousel"
import Vertice from "./vertice"

const Subcat = () => {
    const [style, setstyle] = useState(1)
    const [product, setProducts] = useState([
        {
            id:1,
            img:"./pics (1).jpg",
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
            img:"./pics (3).jpg",
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
            img:"./pics (4).jpg",
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
            img:"./pics (18).jpg",
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
            img:"./pics (19).jpg",
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
            img:"./pics (20).jpg",
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
            img:"./pics (22).jpg",
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
    const [subcats, setsubcats] = useState([
        {
            id:1,
            img:"../../fashion (34).jpg",
            title:"Watches",
        },
        {
            id:2,
            img:"../../fashion (38).jpg",
            title:"Ladis Bags",
            
        },
        {
            id:3,
            img:"../../fashion (24).jpg",
            title:"Denim Jeans",
            
        },
        {
            id:4,
            img:"../../fashion (25).jpg",
            title:"Rings",
            
        },
        {
            id:5,
            img:"../../fashion (27).jpg",
            title:"Men's shoes",
            
        },
        {
            id:6,
            img:"../../fashion (37).jpg",
            title:"Necklaces and bangles",
            
        },
        {
            id:7,
            img:"../../fashion (40).jpg",
            title:"Hats(Unisex)",
            
        },
        {
            id:8,
            img:"../../fashion (42).jpg",
            title:"Men's Suits",
            
        },
        {
            id:9,
            img:"../../fashion (32).jpg",
            title:"Jackets",
            
        },
        {
            id:10,
            img:"../../fashion (33).jpg",
            title:"Ladies Shoes",
            
        },
        {
            id:11,
            img:"../../fashion (1).jpg",
            title:"Ladies tops",
            
        },
        {
            id:12,
            img:"../../fashion (33).jpg",
            title:"Denim School bag",
            
        },
        {
            id:13,
            img:"../../fashion (34).jpg",
            title:"Denim School bag",
            
        }
    ])
    return(
        <div>
            <Menu/>
            <div></div>
            <div className="breadcrumbs"></div>
            <div className="main">
            <h2>Fashion</h2></div>
            <div className="mains">
                <div className="left">
                {
                    subcats.slice(0, 3).map(({id, img, title, price, transaction})=>(
                        <Vertice id={id} img={img} title={title} />
                    ))
                }
                </div>
                <div className="middle">
                {
                    subcats.slice(3, 7).map(({id, img, title, price, transaction})=>(
                        <Vertice id={id} img={img} title={title} />
                    ))
                }
                </div>
                <div className="right">
                {
                    subcats.slice(7, 11).map(({id, img, title, price, transaction})=>(
                        <Vertice id={id} img={img} title={title} />
                    ))
                }
                </div>
                    
            </div>
            
        </div>
        
    )
}
export default Subcat