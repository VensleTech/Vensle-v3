import { useState } from "react"
import { faUser, faLocationDot, faFilter, faCaretRight, faClose } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Sidebar from "./sidebar"
import Menu from "./menu"
import ReusableTable from "./reusabletable"
import MessageTable from "./messagetable"
import Popup from "./popup"
import Sorts from "./sorts"
import Newpup from "../reusable/newpop"
import Customertable from "./custtable"
const Customers = () => {
    const [isOpen, setisOpen] = useState(false)
    const [isView, setisView] = useState(false)
    const [groceries, setgroceries] = useState([
        {
            id:1,
            fullname:"Midas Global Touch",
            email:"sandra@gmail.com",
            phone:"09-2993822"
        },
        {
            id:2,
            fullname:"Melissa",
            email:"Melissa@yahoo.com",
            phone:"888-3827893"
        },
        {
            id:3,
            fullname:"Jasper",
            email:"jasper231@gmail.com",
            phone:"081283237487"
        },
        {
            id:4,
            fullname:"Cassie",
            email:"cassieandrews@mail.com",
            phone:"98993848-77"
        },
        {
            id:5,
            fullname:"Sonia",
            email:"Sonia@hotmail.com",
            phone:"888-3827893"
        },
        {
            id:6,
            fullname:"Tatiana",
            email:"tatiana@outlook.com",
            phone:"888-3827893"
        },
        {
            id:7,
            fullname:"Elsa",
            email:"elsa@yahoo.com",
            phone:"888-3827893"
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
    const getreadstate = (readstate)=> {
        setisView(readstate)
      }
    return(
        <div>
            <Menu />
            <div className="admin-sec">
                <Sidebar/>
                <div className="adm-main">
                    <div className="breadcrumbs-bar">
                        <div>Home <FontAwesomeIcon icon={faCaretRight} /> Customers</div>
                        <div><span>Abudonnigeria</span><FontAwesomeIcon icon={faUser}/></div>
                    </div>
                    <div className="top-trends">
                        <h3>Customers</h3>
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
                        // groceries.slice(0,8).map(({id, img, title, price, transaction})=>(
                        //     <div><Pcards type={2} width={'100%'} height={'100px'} pdsize={'.8em'} pcsize={'.9em'} id={id} title={title} price={price} img={img} trans={transaction} /></div>
                        // ))
                    }
                    <div className="table-container">
                        <div className="reusable-table-three" style={{border:'none', textTransform:'uppercase', fontSize:'smaller', fontWeight:'700', color:'rgba(0,0,0,.6)', height:'20px', padding:'20px 0 0 0', marginBottom:'20px'}}>
                            <div>SN</div>
                            <div>fullname</div>
                            <div>Email</div>
                            <div>Phone</div>
                            <div>Action</div>
                        </div>
                        {
                            groceries.slice(0,8).map(({id, fullname, email, phone})=>(
                            <div>
                                <Customertable id={id} fullname={fullname} email={email} phone={phone} />
                            </div>
                            
                        ))
                        }
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

            </div>
        </div>
    )
}
export default Customers