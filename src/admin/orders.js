import { useState } from "react"
import { faUser, faLocationDot, faFilter, faClose } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Drop from "../reusable/drop"
import Ops from "../reusable/ops"
import Search from "../reusable/search"
import Pcards from "../reusable/pcards"
import Sidebar from "./sidebar"
import Menu from "./menu"
import ReusableTable from "./reusabletable"
import Popup from "./popup"
import Sorts from "./sorts"

const MyOrders = () => {
    const [isOpen, setisOpen] = useState(false)
    const [groceries, setgroceries] = useState([
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
            <Menu />
            <div className="admin-sec">
                <Sidebar/>
                <div className="adm-main">
                    <div className="breadcrumbs-bar">
                        <div>Home -> Orders</div>
                        <div><span>Abudonnigeria</span><FontAwesomeIcon icon={faUser}/></div>
                    </div>
                    <div className="top-trending">
                        <h3>Orders</h3>
                        <div> <FontAwesomeIcon icon={faLocationDot} />Nigeria</div>
                    </div>
                    <div className="top-trending-list">
                    {
                        // groceries.slice(0,8).map(({id, img, title, price, transaction})=>(
                        //     <div><Pcards type={2} width={'100%'} height={'100px'} pdsize={'.8em'} pcsize={'.9em'} id={id} title={title} price={price} img={img} trans={transaction} /></div>
                        // ))
                    }
                    <div className="table-container">
                        <div className="table-top">
                            <div>
                            {
                                // <input type='text' placeholder="Today" />
                            }
                            </div>
                            <div onClick={(e)=>setisOpen(!isOpen)}> FIlters <FontAwesomeIcon icon={faFilter} /> </div>
                        </div>
                        <div className="reusable-table" style={{border:'none', textTransform:'uppercase', fontSize:'smaller', fontWeight:'700', color:'rgba(0,0,0,.6)', height:'20px', padding:'20px 0 0 0', marginBottom:'20px'}}>
                            <div>SN</div>
                            <div>Image</div>
                            <div>Product name</div>
                            <div>Location</div>
                            <div>Time ordered</div>
                            <div>Price</div>
                            <div>Action</div>
                        </div>
                        {
                            groceries.slice(0,8).map(({id, img, title, price, transaction})=>(
                            <div><ReusableTable id={id} title={title} price={price} img={img} trans={transaction}/></div>
                        ))
                        }
                    </div>
                    {
                        isOpen === true ? 
                        <div className='popcontainer' > 
                            <div  className="inner-container" style={{display:'block', width:'80%', height:'70%', position:'relative'}}>
                                <div className="up-bar" style={{background:'rgba(0, 0, 0, 0)', marginBottom:'0px'}}>
                                    <div>Filters</div>
                                    <div style={{color:'black', fontSize:'1em', justifySelf:'end', cursor:'pointer'}} onClick={(e)=>setisOpen(!isOpen)}><FontAwesomeIcon icon={faClose} /></div>
                                </div>
                                <Popup>
                                    <Sorts title={"Type"} options={[{val:"Musa Stores"}, {val:'Redvnk'}]} />
                                    <Sorts title={"Category"} options={[{val:"Fashion"}, {val:'Kids & Baby'}]} />
                                    <Sorts title={"Status"} options={[{val:"Musa Stores"}, {val:'Redvnk'}]} />
                                    <Sorts title={"Brand"} options={[{val:"Musa Stores"}, {val:'Redvnk'}]} />
                                    <Sorts title={"Condition"} options={[{val:"New"}, {val:'Neatly Used'}, {val:'Used'}]} />
                                    <p className="apply" onClick={(e)=>setisOpen(!isOpen)}>Apply Filters</p>
                                </Popup>
                            </div>
                        </div> : null
                    }
                    </div>
                </div>

            </div>
        </div>
    )
}
export default MyOrders