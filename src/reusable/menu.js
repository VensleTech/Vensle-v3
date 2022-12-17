import { useEffect, useRef, useState, useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBasketShopping, faClose, faCommentDots, faUserAlt } from "@fortawesome/free-solid-svg-icons"
import Search from "./search"
import Popup from "../admin/popup"
import Input from "../admin/input"
import Flyouts from "./flyouts"
import axios from "axios"
import {UserContext} from '../auth/usercontext'
import { useGeoLocation } from "use-geo-location";


const Menu = () => {
    const [isOpen, setisOpen] = useState(false)
    const nav = useNavigate()
    const [log, setlog] = useState(true)
    const {setDetails} = useContext(UserContext)
    const {latitude, longitude} = useGeoLocation()
    const [location, setlocation] = useState('')
    useEffect(() => {
        // localStorage.setItem('logs', JSON.stringify(details))
        
        const truth = localStorage.getItem('logs');
        if(truth){
            const kept = JSON.parse(localStorage.getItem('logs'))
            const {full_name, business_name, email, address, is_admin, } = kept
            setDetails({
                name:full_name,
                authlev:is_admin,
                business_name: business_name,
                email: email
            })
            nav('/admin')
        }
    }, [])
    useEffect(()=>{
        loc()
    }, [latitude])
    const [payload, setpayload] = useState({
        
    })
    const [payload2, setpayload2] = useState({
        
    })
    const [locat, setlocat] = useState('')
    const [msg, setmsg] = useState('')
    const [msg2, setmsg2] = useState('')
    const axe =async (e)=>{
        e.preventDefault()
        console.log('clicked')
        var data = payload;
        try {
			const response = await axios.post('http://geo.vensle.com/api/login', data);
            setmsg(response.data.msg);
            if(response.data.status === 200){
                const {full_name, business_name, email, address, is_admin, } = response.data.credentials
                setDetails({
                    name:full_name,
                    authlev:is_admin,
                    business_name: business_name,
                    email: email,
                    location:locat.region
                })
                const itemize = {
                    name:full_name,
                    authlev:is_admin,
                    business_name: business_name,
                    email: email,
                    location:locat.region
                }
                localStorage.setItem('logs', JSON.stringify(itemize))
                nav('/admin')
            }
		} catch (err) {
            console.log(err)
			setmsg('An error occured');
		}
    }
    const axes =async (e)=>{
        e.preventDefault()
        console.log('clicked')
        var data = payload2;
        try {
			const response = await axios.post('http://geo.vensle.com/api/register', data);
            setmsg2(response.data.msg);
		} catch (err) {
            console.log(err)
			setmsg2('An error occured');
		}
    }
    const loc =async (e)=>{
        try {
			const response = await axios.get('http://api.positionstack.com/v1/reverse?access_key=0ec2ec85f10f677e66b410b2526fd84b&query='+latitude+','+longitude);
            console.log(response.data.data[0]);
            setlocat(response.data.data[0])
		} catch (err) {
            console.log(err)
		}
    }
    // console.log(payload.email)
    return (
        <div className="mcontainer" >
            <div className="menu">
                <div className="logo">
                    <Link to="/"><h1 style={{color:'black'}}>Vensle</h1></Link>
                </div>
                <Search switches={1}/> 
                <div className="icons">
                    <div className="bst">
                        <FontAwesomeIcon icon={faBasketShopping} />
                        <p><Link to={'/tutorial'}>Buy/sell tutorial</Link></p>
                    </div>
                    <div className="make" title="You must be signed in to make a request">
                        <FontAwesomeIcon icon={faCommentDots} />
                        <p>Make requests</p>
                    </div>
                    <div className="account" onClick={(e)=>setisOpen(!isOpen)} style={{cursor:'pointer'}}>
                        <FontAwesomeIcon icon={faUserAlt} />
                        <p>Account</p>
                    </div>
                </div>
            </div>
            {
                isOpen === true ? 
                <div className='popcontainer' > 
                    <div  className="inner-container" style={{display:'block', width:'500px', minHeight:'40%', position:'relative'}}>
                        <div className="up-bar" style={{background:'rgba(0, 0, 0, 0)', marginBottom:'0px'}}>
                            <div></div>
                            <div style={{color:'black', fontSize:'1em', justifySelf:'end', cursor:'pointer'}} onClick={(e)=>setisOpen(!isOpen)}><FontAwesomeIcon icon={faClose} /></div>
                        </div>
                        <Popup>
                            <div className="loginform">
                                <div className="tabs">
                                { log === true ? <div className="und">Sign In</div> : <div onClick={(e)=>setlog(!log)} className="curs">Sign In</div> }
                                { log === false ? <div className="und">Register</div> : <div onClick={(e)=>setlog(!log)} className="curs">Register</div> }
                                </div>
                                { log === true ? 
                                    <div className="sign">
                                        <div className="feedbacks">{msg}</div>
                                        <label>Email</label>
                                        <div className="input">
                                            <input type='text' placeholder="Email" onChange={(e)=>{if(e.target.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
                                                setpayload({...payload, email:e.target.value})
                                                e.target.style.border = '1px solid green'
                                                setmsg('');
                                            }
                                        else{
                                            e.target.style.border = '1px solid red'
                                            setmsg('Invalid email address');
                                        }}}/>
                                        </div>
                                        <label>Password</label>
                                        <div className="input">
                                            <input type='password' placeholder="Password" onChange={(e)=>setpayload({...payload, password:e.target.value})} />
                                        </div>
                                        
                                        <div className="submit" onClick={axe}>
                                            Sign in
                                        </div>
                                        
                                    </div>
                                    :
                                    <div className="reg">
                                    <div className="feedbacks">{msg2}</div>
                                        <label>Full name *</label>
                                        <div className="input">
                                            <input type='text' placeholder="Full name" onChange={(e)=>setpayload2({...payload2, full_name:e.target.value})}/>
                                        </div>
                                        <label>Business name</label>
                                        <div className="input">
                                            <input type='text' placeholder="Business name" onChange={(e)=>setpayload2({...payload2, business_name:e.target.value})}/>
                                        </div>
                                        <label>Email *</label>
                                        <div className="input">
                                            <input type='text' placeholder="Email" onChange={(e)=>setpayload2({...payload2, email:e.target.value})}/>
                                        </div>
                                        <label>Phone *</label>
                                        <div className="input">
                                            <input type='text' placeholder="Phone" onChange={(e)=>setpayload2({...payload2, phone:e.target.value})}/>
                                        </div>
                                        <label>Address *</label>
                                        <div className="input">
                                            <input type='text' placeholder="Address" onChange={(e)=>setpayload2({...payload2, address:e.target.value})}/>
                                        </div>
                                        <label>Password *</label>
                                        <div className="input">
                                            <input type='password' placeholder="Password" onChange={(e)=>setpayload2({...payload2,password:e.target.value})}/>
                                        </div>
                                        <label>Confirm Password *</label>
                                        <div className="input">
                                            <input type='password' placeholder=" Confirm Password" onChange={(e)=>setpayload2({...payload2, confirm:e.target.value})}/>
                                        </div>
                                        <div className="submit" onClick={axes}>
                                            Register
                                        </div>
                                    </div>
                                }
                            </div>
                        </Popup>
                    </div>
                </div> : null
            }
        </div>
    )
}
export default Menu