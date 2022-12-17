import { useState } from "react"
import { faUser, faLocationDot, faFilter, faClose, faEdit, faCamera, faPen } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Sidebar from "./sidebar"
import Menu from "./menu"
import ProdDisplay from "./proddisplay"
import Popup from "./popup"
import Sorts from "./sorts"
import Input from "./input"
import axios from "axios"



const Profile = () => {
    const [isOpen, setisOpen] = useState(false)
    const [groceries, setgroceries] = useState([
        {
            id:1,
            img:"../../ffff.jpg",
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
    const [upgrade, setupgrade] = useState(0)
    const [payload, setpayload] = useState(
        {
            'partner_id': '36',
        }
    )
    const [msg, setmsg] = useState('')
    const getbn = (name)=> {
        setpayload({...payload, bank_name:name})
    }
    const getbac = (name)=> {
        setpayload({...payload, bank_acc_no:name})
    }
    const getban = (name)=> {
        setpayload({...payload, bank_acc_name:name})
    }

    const axe =async (e)=>{
        e.preventDefault()
        console.log('clicked')
        var data = payload;
        try {
			const response = await axios.post('http://geo.vensle.com/api/verified', data);
            setmsg(response.data.msg);
            console.log(response.data);
		} catch (err) {
            console.log(err)
			setmsg('An error occured');
		}
    }
    console.log(payload)
    return(
        <div>
            <Menu />
            <div className="admin-sec">
                <Sidebar/>
                <div className="adm-main">
                    <div className="breadcrumbs-bar">
                        <div>Home -> Profle</div>
                        <div><span>Abudonnigeria </span> <FontAwesomeIcon icon={faUser}/></div>
                    </div>
                    <div className="profile-container">
                        <div className="pf-left">
                            <div className="pfr-img">
                                <img src={groceries[0].img} alt="" />
                            </div>
                            <div className="functions">
                                <div><span><FontAwesomeIcon icon={faCamera} /></span> Change Photo</div>
                                <div><span><FontAwesomeIcon icon={faPen} /></span> Change Password</div>
                            </div>
                        </div>
                        <div className="pf-right">
                            <div className='bdetails'>
                                <div className="must">
                                    <div  className="upg-acc" title={'Account upgrade'} onClick={(e)=>setupgrade(1)}>Upgrade account</div>
                                    <div  className="green" title={'Edit profile'}><FontAwesomeIcon icon={faEdit}/></div>
                                </div>
                            </div>
                            {
                                upgrade === 0 ? 
                                <div>
                                    <h3>Abubakar Donatus</h3>
                                    <h5>Personal Information</h5>
                                    <table>
                                    <tr>
                                        <td>Email</td>
                                        <td>abudonnigeria@gmail.com</td>
                                    </tr>
                                    <tr>
                                        <td>Phone</td>
                                        <td>922-55444885</td>
                                    </tr>
                                    <tr>
                                        <td>Address</td>
                                        <td>Ikotun, Lagos Nigeria</td>
                                    </tr>
                                    </table>
                                <h5>Business Information</h5>
                                    <table>
                                        <tr>
                                            <td>Email</td>
                                            <td>abudonnigeria@gmail.com</td>
                                        </tr>
                                        <tr>
                                            <td>Phone</td>
                                            <td>922-55444885</td>
                                        </tr>
                                        <tr>
                                            <td>Address</td>
                                            <td>Ikotun, Lagos Nigeria</td>
                                        </tr>
                                    </table>
                            </div>
                            :
                            <div className="upgradeform">
                            <span onClick={(e)=>setupgrade(0)}>X</span>
                            <h4>Fill the details below to upgrade your account to a partner account</h4>
                            <Input title={'Bank Name'} icon={''} type={"text"} getreadstate={getbn}/>
                            <Input title={'Bank account number'} icon={''} type={"text"} getreadstate={getbac}/>
                            <Input title={'Bank account name'} icon={''} type={"text"} getreadstate={getban}/>
                            <button onClick={axe}>Upgrade account</button>
                            <div>{msg}</div> 
                            </div>
                            }
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Profile