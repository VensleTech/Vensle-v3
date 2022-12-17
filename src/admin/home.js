import { useState, useContext } from "react"
import { faCoins, faUser, faChevronRight, faBarChart, faChartSimple, faNairaSign, faEllipsis, faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ProdDisplay from "./proddisplay"
import Sidebar from "./sidebar"
import Menu from "./menu"
import SalesSummary from "./salessumm"
import SalesList from "./saleslist"

import {UserContext} from '../auth/usercontext';

const HAdmin = () => {
    const {details:{authlev, name,  email, location}, setDetails} = useContext(UserContext)
    const [topic, settopic] = useState('Top Trending Products')
    const [showdrop, setshowdrop] = useState(false)
    const [groceries, setgroceries] = useState([
        {
            id:1,
            img:"../../groceries (15).jpg",
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
            img:"../../groceries (16).jpg",
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
            img:"../../groceries (17).jpg",
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
            img:"../../groceries (18).jpg",
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
            img:"../../groceries (19).jpg",
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
            img:"../../groceries (20).jpg",
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
            img:"../../groceries (21).jpg",
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
        },
        {
            id:8,
            img:"../../groceries (11).jpg",
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
        },
        {
            id:9,
            img:"../../groceries (12).jpg",
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
        },
        {
            id:10,
            img:"../../groceries (13).jpg",
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
            <Menu />
            <div className="admin-sec">
                <Sidebar />
                <div className="adm-main">
                    <div className="breadcrumbs-bar">
                        <div>Home -> Dashboard</div>
                        <div><span>{name} </span><FontAwesomeIcon icon={faUser}/></div>
                    </div>
                    <div className="adm-main-second">
                        <div className="adm-main-left">
                            <div className="topbox">
                                <SalesSummary caption={'Revenue'}/>
                                <SalesSummary caption={'Orders'}/>
                            </div>
                            <div className="top-trending">
                                <h3>{topic}</h3>
                                <FontAwesomeIcon icon={faChevronDown} onClick={(e)=>setshowdrop(!showdrop)} style={{cursor:'pointer'}}/>
                                {
                                    showdrop === true ? 
                                    <div className="dropdown">
                                        <div onClick={(e)=>{settopic(e.target.innerText);setshowdrop(!showdrop)}}>Top trending products</div>
                                        <div onClick={(e)=>{settopic(e.target.innerText);setshowdrop(!showdrop)}}>Most viewed products</div>
                                        <div onClick={(e)=>{settopic(e.target.innerText);setshowdrop(!showdrop)}}>Most bought products</div>
                                    </div> :
                                    null
                                }
                                
                            </div>
                            
                            <div className="top-trending-list">
                            {
                                groceries.slice(0,8).map(({id, img, title, price, transaction})=>(
                                    <div><ProdDisplay type={2} width={'100%'} height={'150px'} pdsize={'1.5em'} pcsize={'1.7em'} id={id} title={title} price={price} img={img} trans={transaction} /></div>
                                ))
                            }
                            </div>
                        </div>
                        <div className="adm-main-right">
                            <SalesList/>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default HAdmin