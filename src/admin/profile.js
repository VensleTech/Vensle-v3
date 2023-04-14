import { useState, useContext, useRef } from "react"
import { faUser, faLocationDot, faCaretRight, faClose, faEdit, faCamera, faPen } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Sidebar from "./sidebar"
import Menu from "./menu"
import ProdDisplay from "./proddisplay"
import Popup from "./popup"
import Sorts from "./sorts"
import Input from "./input"
import axios from "axios"
import { UserContext } from "../auth/usercontext"



const Profile = () => {
    const pwdref = useRef('')
    console.log(pwdref)

    const {details:{id, name, authlev, business_name, email, phone, address }, setDetails} = useContext(UserContext)
    const {details} = useContext(UserContext)
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
    const [payload2, setpayload2] = useState(
        {
            
        }
    )
    const [payload3, setpayload3] = useState({})
    console.log(id)
    const [msg, setmsg] = useState('')
    const [msge, setmsge] = useState('')
    const [msgp, setmsgp] = useState('')
    const getbn = (name)=> {setpayload({...payload, bank_name:name})}
    const getbac = (name)=> {setpayload({...payload, bank_acc_no:name})}
    const getban = (name)=> {setpayload({...payload, bank_acc_name:name})}

    const fn = (name)=> {setpayload2({...payload2, full_name:name})}
    const bn = (name)=> {setpayload2({...payload2, business_name:name})}
    const em = (name)=> {setpayload2({...payload2, email:name})}
    const ph = (name)=> {setpayload2({...payload2, phone:name})}
    const ad = (name)=> {setpayload2({...payload2, address:name})}


    const pw = (name)=> {setpayload2({...payload3, password:name})}


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
    const axle =async (e)=>{
        e.preventDefault()
        console.log('clicked')
        var loid = id
        var data = payload2;
        try {
			const response = await axios.post('http://geo.vensle.com/api/edit/'+loid, data);
            setmsge(response.data.msg);
            const {id,full_name, business_name, email, address, phone, is_admin, } = response.data.user
                setDetails({...details,
                    id:id,
                    name:full_name,
                    business_name: business_name,
                    email: email,
                    phone: phone,
                    address: address,
                })
                const itemize = {...details,
                    id:id,
                    name:full_name,
                    business_name: business_name,
                    email: email,
                    phone: phone,
                    address: address,
                }
                localStorage.setItem('logs', JSON.stringify(itemize))
            console.log(response.data);
		} catch (err) {
            console.log(err)
			setmsge('An error occured');
		}
    }
    const pwc =async (e)=>{
        e.preventDefault()
        console.log('changed')
        var loid = id
        var data = payload3;
        try {
			const response = await axios.post('http://geo.vensle.com/api/edit/'+loid, data);
            setmsgp(response.data.msg);
            console.log(response.data);
		} catch (err) {
            console.log(err)
			setmsge('An error occured');
		}
    }
    console.log(id)
    return(
        <div>
            <Menu />
            <div className="admin-sec">
                <Sidebar/>
                <div className="adm-main">
                    <div className="breadcrumbs-bar">
                        <div>Home <FontAwesomeIcon icon={faCaretRight} /> Profile</div>
                        <div><span>{name} </span> <FontAwesomeIcon icon={faUser}/></div>
                    </div>
                    <div className="profile-container">
                        <div className="pf-left">
                            <div className="pfr-img">
                                <img src={groceries[0].img} alt="" />
                            </div>
                            <div className="functions">
                                {    
                                    // <div><span><FontAwesomeIcon icon={faCamera} /></span> Change Photo</div>
                                }
                                <div onClick={(e)=>setupgrade(2)} style={{cursor:"pointer"}}><span><FontAwesomeIcon icon={faPen} /></span> Change Password</div>
                            </div>
                        </div>
                        <div className="pf-right">
                            <div className='bdetails'>
                                <div className="must">
                                    {
                                        authlev === 1 || authlev === 3 ? '' :
                                        <div  className="upg-acc" title={'Account upgrade'} onClick={(e)=>setupgrade(3)}>Upgrade account</div>
                                    }
                                    <div  className="green" title={'Edit profile'} onClick={(e)=>setupgrade(1)}><FontAwesomeIcon icon={faEdit}/></div>
                                </div>
                            </div>
                            {
                                upgrade === 0 ? 
                                <div>
                                    <h3>{name}</h3>
                                    <h5>Personal Information</h5>
                                    <table>
                                    <tr>
                                        <td>Email</td>
                                        <td>{email}</td>
                                    </tr>
                                    <tr>
                                        <td>Phone</td>
                                        <td>{phone}</td>
                                    </tr>
                                    <tr>
                                        <td>Address</td>
                                        <td>{address}</td>
                                    </tr>
                                    </table>
                                <h5>Business Information</h5>
                                    <table>
                                        <tr>
                                            <td>Email</td>
                                            <td>{email}</td>
                                        </tr>
                                        <tr>
                                            <td>Business name</td>
                                            <td>{business_name}</td>
                                        </tr>
                                        <tr>
                                            <td>Phone</td>
                                            <td>{phone}</td>
                                        </tr>
                                        <tr>
                                            <td>Address</td>
                                            <td>{address}</td>
                                        </tr>
                                    </table>
                            </div>
                            :
                            upgrade === 1 ?
                            <div className="upgradeform">
                            <span onClick={(e)=>setupgrade(0)}><FontAwesomeIcon icon={faClose}/></span>
                            <h4>Edit your profile</h4>
                            <form>
                                <Input title={'New Full name'} icon={''} type={"text"} getreadstate={fn} value={name} />
                                <Input title={'New business name'} icon={''} type={"text"} getreadstate={bn} value={business_name}/>
                                <Input title={'New email'} icon={''} type={"email"} getreadstate={em} value={email}/>
                                <Input title={'New phone'} icon={''} type={"text"} getreadstate={ph} value={phone}/>
                                <Input title={'New address'} icon={''} type={"text"} getreadstate={ad} />
                                <button onClick={axle}>Save changes</button>
                            </form>
                            
                            <div>{msge}</div> 
                            </div>
                            :
                            upgrade === 2 ?
                            <div className="upgradeform">
                            <span onClick={(e)=>setupgrade(0)}><FontAwesomeIcon icon={faClose}/></span>
                            <h4>Change password</h4>
                            <form>
                                <Input title={'New password'} icon={''} type={"password"} getreadstate={pw}  value={''}/>
                                <button onClick={pwc}>Save changes</button>
                            </form>
                            <div>{msgp}</div> 
                            </div>
                            :
                            <div className="upgradeform">
                            <span onClick={(e)=>setupgrade(0)}><FontAwesomeIcon icon={faClose}/></span>
                            <h4>Fill the details below to upgrade your account to a partner account</h4>
                            <form>
                                <Input title={'Bank Name'} icon={''} type={"text"} getreadstate={getbn} />
                                <Input title={'Bank account number'} icon={''} type={"text"} getreadstate={getbac}/>
                                <Input title={'Bank account name'} icon={''} type={"text"} getreadstate={getban}/>
                                <button onClick={axe}>Upgrade account</button>
                            </form>
                            
                            <div>{msg}</div> 
                            </div>
                            }
                            {console.log(details)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Profile