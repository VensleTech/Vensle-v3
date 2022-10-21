import { useState,useEffect } from "react"
import { faUser, faLocationDot, faFilter, faClose } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Sidebar from "./sidebar"
import Menu from "./menu"
import ProdDisplay from "./proddisplay"
import Popup from "./popup"
import Sorts from "./sorts"

const MyProducts = () => {
    const [isOpen, setisOpen] = useState(false)
    // useEffect(() => {
    //     setfill(Object.entries(fill))
    //     console.log(filt)
    // }, [])
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
    const [fill, setfill] = useState({
    })
    const [filt, setfilt] = useState({
    })
    
    const splice =(i)=>{
        setfilt(current => {
            const copy = {...current};
            delete copy[i];
            return copy
        })
    }
    
    return(
        <div>
            <Menu />
            <div className="admin-sec">
                <Sidebar/>
                <div className="adm-main">
                    <div className="breadcrumbs-bar">
                        <div>Home -> Product</div>
                        <div><span>Abudonnigeria</span> <FontAwesomeIcon icon={faUser}/></div>
                    </div>
                    {
                        // <div className="top-trending">
                        //     <div>
                        //         Filters
                        //         </div>
                        //     <div> <FontAwesomeIcon icon={faLocationDot} />Nigeria</div>
                        // </div>
                    }
                    <div className="top-trends">
                    <h3>All Products</h3>
                            
                            <div className="filtration">
                            {
                                Object.entries(filt).map((keys,i)=>(
                                    <div>{keys[1]}  <FontAwesomeIcon icon={faClose} onClick={(e)=>splice(keys[0])} style={{cursor:'pointer'}}/></div>   
                                ))
                            }
                            </div>
                            <div onClick={(e)=>setisOpen(!isOpen)} className="filter"><FontAwesomeIcon icon={faFilter} /> </div>
                        </div>
                    <div className="top-trending-list">
                    {
                        groceries.slice(0,8).map(({id, img, title, price, transaction})=>(
                            <div><ProdDisplay type={2} width={'100%'} height={'200px'} pdsize={'1.7em'} pcsize={'1.9em'} id={id} title={title} price={price} img={img} trans={transaction} /></div>
                        ))
                    }
                    </div>
                </div>
                {
                    isOpen === true ? 
                    <div className='popcontainer' > 
                        <div  className="inner-container" style={{display:'block', width:'500px', minHeight:'300px', position:'relative'}}>
                            <div className="up-bar" style={{background:'rgba(0, 0, 0, 0)', marginBottom:'0px'}}>
                                <div>Filters</div>
                                <div style={{color:'black', fontSize:'1em', justifySelf:'end', cursor:'pointer'}} onClick={(e)=>setisOpen(!isOpen)}><FontAwesomeIcon icon={faClose} /></div>
                            </div>
                            <Popup>
                            <div className="sorts">
                                <div><span>Country</span> </div>
                                <div><select onChange={(e)=>setfill({...fill, country:e.target.value})}>
                                    <option>All</option>
                                    <option>United Kingdom</option>
                                    <option>Nigeria</option>
                                    <option>Cameroon</option>
                                    <option>Algeria</option>
                                    <option>Nepal</option>
                                </select></div>
                            </div>
                            <div className="sorts">
                                <div><span>Type</span> </div>
                                <div><select onChange={(e)=>setfill({...fill, type:e.target.value})}>
                                    <option>All</option>
                                    <option>Musa Stores</option>
                                    <option>Redvnk</option>
                                </select></div>
                            </div>
                            <div className="sorts last">
                                <div><span>Category</span> </div>
                                <div><select onChange={(e)=>setfill({...fill, category:e.target.value})}>
                                    <option>All</option>
                                    <option>Fashion</option>
                                    <option>Kids & Baby</option>
                                </select></div>
                            </div>
                                {
                                    // <Sorts title={"Type"} options={[{val:"Musa Stores"}, {val:'Redvnk'}]} />
                                    // <Sorts title={"Category"} options={[{val:"Fashion"}, {val:'Kids & Baby'}]} />
                                    // <Sorts title={"Status"} options={[{val:"Musa Stores"}, {val:'Redvnk'}]} />
                                    // <Sorts title={"Brand"} options={[{val:"Musa Stores"}, {val:'Redvnk'}]} />
                                    // <Sorts title={"Condition"} options={[{val:"New"}, {val:'Neatly Used'}, {val:'Used'}]} />
                            }
                                <p className="apply" onClick={(e)=>{setisOpen(!isOpen); setfilt(fill)}}>Apply Filters</p>
                            </Popup>
                        </div>
                    </div> : null
                }
            </div>
        </div>
    )
}
export default MyProducts