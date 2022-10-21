import { useState } from "react"
import { faUser, faLocationDot, faFilter, faEye, faClose } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Sidebar from "./sidebar"
import Menu from "./menu"
import ReusableTable from "./reusabletable"
import MessageTable from "./messagetable"
import Popup from "./popup"
import Sorts from "./sorts"
const Customers = () => {
    const [isOpen, setisOpen] = useState(false)
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
    return(
        <div>
            <Menu />
            <div className="admin-sec">
                <Sidebar/>
                <div className="adm-main">
                    <div className="breadcrumbs-bar">
                        <div>Home -> Customers</div>
                        <div><span>Abudonnigeria</span><FontAwesomeIcon icon={faUser}/></div>
                    </div>
                    <div className="top-trending">
                        <h3>Customers</h3>
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
                        <div className="reusable-table-three" style={{border:'none', textTransform:'uppercase', fontSize:'smaller', fontWeight:'700', color:'rgba(0,0,0,.6)', height:'20px', padding:'20px 0 0 0', marginBottom:'20px'}}>
                            <div>SN</div>
                            <div>fullname</div>
                            <div>Email</div>
                            <div>Phone</div>
                            <div>Action</div>
                        </div>
                        {
                            groceries.slice(0,8).map(({id, fullname, email, phone})=>(
                            <div className="reusable-table-three">
                                <div>{id}</div>
                                <div>{fullname}</div>
                                <div>{email}</div>
                                <div>{phone}</div>
                                <div className="viewer" ><FontAwesomeIcon icon={faEye}/> View</div>
                            </div>
                        ))
                        }
                    </div>
                    {
                        isOpen === true ? 
                        <div className='popcontainer' > 
                            <div  className="inner-container" style={{display:'block', width:'80%', height:'50%', position:'relative'}}>
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
export default Customers