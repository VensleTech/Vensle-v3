import { useEffect, useRef, useState, useContext } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import ap from '../apple-icon.webp'
import go from '../google.png'
import fb from '../Facebook.webp'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBasketShopping, faSearch, faClose, faUser, faBars, faCircleXmark, faEye, faEyeLowVision } from "@fortawesome/free-solid-svg-icons"
import Search from "./search"
import Popup from "../admin/popup"
import Input from "../admin/input"
import Flyouts from "./flyouts"
import axios from "axios"
import {UserContext} from '../auth/usercontext'
import { useGeoLocation } from "use-geo-location";
import Menu from "./menu"
import Details from "../main/details"
import { LoginSocialApple, LoginSocialFacebook, LoginSocialGoogle } from "reactjs-social-login"
import { createButton, FacebookLoginButton } from "react-social-login-buttons"
import random from "random-string-generator"


const Sign = () => {
    const [isOpen, setisOpen] = useState(true)
    const nav = useNavigate()
    const location = useLocation()

    const redirectpath = location.state?.path || '/admin/profile'

    const [log, setlog] = useState(true)
    const {details, details:{specialref, name}, setDetails} = useContext(UserContext)
    const {latitude, longitude} = useGeoLocation()
    const [facebook, setfacebook] = useState({})
    const [google, setgoogle] = useState({})
    const [fbdata, setfbdata] = useState({})
    const [ggdata, setggdata] = useState({})
    const [apple, setapple] = useState({})
     const [payload, setpayload] = useState({})
    const [payload2, setpayload2] = useState({})
    const [sucl, setsucl] = useState('')
    const [msg, setmsg] = useState('')
    const [sucl2, setsucl2] = useState('')
    const [msg2, setmsg2] = useState('')
    const [shp, setshp] = useState(false)
    const flash = useRef('')
    const ham = useRef('')
    
    
   
    const axe =async (e)=>{
        e.preventDefault()
        console.log('clickedddddddd')
        var data = payload;
        try {
			const response = await axios.post('http://geo.vensle.com/api/login', data);
            // setsucl(response.data.msg);
            console.log(response.data)
            if(response.data.status !== 200){
                setsucl(<div className="feedbacks">{response.data.msg}</div>)
            }
            if(response.data.status === 200){
                const {id,full_name, business_name, email, address, phone, a_lev,token } = response.data.credentials
                setDetails({...details, 
                    id:id,
                    name:full_name,
                    authlev:parseInt(a_lev),
                    business_name: business_name,
                    email: email,
                    phone: phone,
                    address: address,
                    specialref:token
                })
                const itemize = {...details,
                    id:id,
                    name:full_name,
                    authlev:parseInt(a_lev),
                    business_name: business_name,
                    email: email,
                    phone: phone,
                    address: address,
                    specialref:token
                }
                localStorage.setItem('logs', JSON.stringify(itemize))
                nav(redirectpath, {replace:true})
            }
		} catch (err) {
            console.log(err)
            setsucl('')
			setmsg(err.response.data.errors);
		}
    }
    const axes =async (e)=>{
        e.preventDefault()
        console.log('clicked')
        var data = payload2;
        try {
			const response = await axios.post('http://geo.vensle.com/api/register', data);
            setsucl2(<div className="feedback">{response.data.msg}</div>);
            setmsg2('')
		} catch (err) {
			setsucl2('')
			setmsg2(err.response.data.errors);
            window.scrollTo(0,0)
		}
    }
    const fbs =async (data)=>{
        console.log('clicked')
        try {
			const response = await axios.post('http://geo.vensle.com/api/lauth', data);
            if(response.data){
                const {id,full_name, business_name, email, address, phone, a_lev,token } = response.data
                setDetails({...details, 
                    id:id,
                    name:full_name,
                    authlev:parseInt(a_lev),
                    business_name: '',
                    email: email,
                    phone: '',
                    address: '',
                    specialref:token
                })
                const itemize = {...details,
                    id:id,
                    name:full_name,
                    authlev:parseInt(a_lev),
                    business_name: '',
                    email: email,
                    phone: '',
                    address: '',
                    specialref:token
                }
                localStorage.setItem('logs', JSON.stringify(itemize))
                nav(redirectpath, {replace:true})
                } 
            else{
                try {
                    const response = await axios.post('http://geo.vensle.com/api/rauth', data);
                    const {id,full_name, business_name, email, address, phone, a_lev,token } = response.data
                    setDetails({...details, 
                        id:id,
                        name:full_name,
                        authlev:parseInt(a_lev),
                        business_name: '',
                        email: email,
                        phone: '',
                        address: '',
                        specialref:token
                    })
                    const itemize = {...details,
                        id:id,
                        name:full_name,
                        authlev:parseInt(a_lev),
                        business_name: '',
                        email: email,
                        phone: '',
                        address: '',
                        specialref:token
                    }
                    localStorage.setItem('logs', JSON.stringify(itemize))
                    nav(redirectpath, {replace:true})
                }
                catch (err) {
                        console.log(err)
                    }
                }
		} catch (err) {
            console.log(err)
		}
        
        }
    const reveal = (ref) => {
        if (ref.current.style.display === 'grid') {
            ref.current.style.display = 'none'
        }
        else{
            ref.current.style.display = 'grid'
        }
        
    }

    return (
        <div className="sign">
        <div className="topbar">
            <div className="logo">
                <Link to={'/'}>Vensle</Link>
            </div>
            <div className="rightside">
                <div></div>
                <div><FontAwesomeIcon icon={faBars} onClick={(e)=>reveal(ham)}/></div>
                    <div><Link to={'/signin'}>Sign in/Sign up</Link></div>
                    <div ref={flash}>Start Selling</div>
                </div>
            </div>
                <div className='popcont' > 
                    <div  className="" >
                       
                            <div className="loginform">
                                <div className="tabs">
                                { log === true ? <div className="und">Sign In</div> : <div onClick={(e)=>setlog(!log)} className="curs">Sign In</div> }
                                { log === false ? <div className="und">Register</div> : <div onClick={(e)=>setlog(!log)} className="curs">Register</div> }
                                </div>
                                { log === true ? 
                                    <form>
                                    <div className="sign">
                                        {sucl}
                                        {
                                            Object.entries(msg).length > 0 ?
                                            <div className="feedbacks">
                                            {Object.entries(msg).map((keys,i)=>(
                                                <div>
                                                    <span><FontAwesomeIcon icon={faCircleXmark}/> {keys[1][0]}</span>
                                                </div>
                                            ))}
                                            </div>
                                            :
                                            ''
                                        }
                                        
                                            <label>Email</label>
                                            <div className="input">
                                                <input type='email' placeholder="Email" onChange={(e)=>{if(e.target.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
                                                    setpayload({...payload, email:e.target.value})
                                                    e.target.style.border = '1px solid rgba(0,255,0, 0)'
                                                    setsucl('');
                                                }
                                            else{
                                                e.target.style.border = '1px solid red'
                                                setsucl(<div className="feedbacks">Invalid email address</div>)
                                            }}}/>
                                            </div>
                                            <label>Password</label>
                                            <div className="input">
                                                <input type='password' placeholder="Password" onChange={(e)=>setpayload({...payload, password:e.target.value})} />
                                            </div>
                                            
                                            <div className="submit" onClick={axe} >
                                                Sign in
                                            </div>
                                        
                                    </div>
                                    
                                    <div className="caption-socials">Login in with</div>
                    <div className="socials">
                        <LoginSocialFacebook
                                    appId="519240347027384"
                                    onResolve={(response)=>{
                                        console.log(response)
                                        const data =  {
                                            'full_name': response.data.name,
                                            'email': response.data.email,
                                            'phone': 'xxxxxx',
                                            'address': 'xxxx',
                                            'password': response.data.name+' '+response.data.email,
                                          }
                                        fbs(data)
                                    }}
                                    onReject={(error)=>{
                                        console.log(error)
                                    }}
                        >
                        <div className="icon"><img  src={fb} alt='' /></div>
                        </LoginSocialFacebook>
                        <LoginSocialGoogle
                                    client_id="6784803343-a7237i4s172lg9b4kvu1bse5946ga5i1.apps.googleusercontent.com"
                                    onResolve={(response)=>{
                                        console.log(response)
                                        const data =  {
                                            'full_name': response.data.name,
                                            'email': response.data.email,
                                            'phone': 'xxxxxx',
                                            'address': 'xxxx',
                                            'password': response.data.name+' '+response.data.email,
                                          }
                                        fbs(data)
                                    }}
                                    onReject={(error)=>{
                                        console.log(error)
                                    }}
                                    scope="https://www.googleapis.com/auth/userinfo.email"
                        >
                        <div className="icon"><img  src={go} alt='' /></div>
                        </LoginSocialGoogle>
                        <LoginSocialFacebook
                                    appId="519240347027384"
                                    onResolve={(response)=>{
                                        console.log(response)
                                    }}
                                    onReject={(error)=>{
                                        console.log(error)
                                    }}
                        >
                        <div className="icon"><img  src={ap} alt='' /></div>
                        </LoginSocialFacebook>

                    </div></form>
                                    :
                                    <div className="reg"><form className="rf">
                                        {sucl2}
                                        {
                                            Object.entries(msg2).length > 0 ?
                                            <div className="feedbacks">
                                            {Object.entries(msg2).map((keys,i)=>(
                                                <div>
                                                    <span><FontAwesomeIcon icon={faCircleXmark}/> {keys[1][0]}</span>
                                                </div>
                                            ))}
                                            </div>
                                            :
                                            ''
                                        }
                                    
                                        
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
                                            <input type='email' placeholder="Email" onChange={(e)=>setpayload2({...payload2, email:e.target.value})}/>
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
                                        <span style={{textAlign:'right',color:'gray',fontSize:'.6em', border:'1px solid gray', padding:'5px', borderRadius:'4px', cursor:'pointer'}} onClick={(e)=>setpayload2({...payload2,password:random(16)})}>Generate Password</span>
                                        <div className="input">
                                            <input type={shp === true ?'text':'password'} placeholder="Password" onChange={(e)=>setpayload2({...payload2,password:e.target.value})} value={payload2.password}/>
                                            <p><FontAwesomeIcon icon={shp === true ?faEyeLowVision:faEye} onClick={(e)=>setshp(!shp)}/></p>
                                        </div>
                                        <label>Confirm Password *</label>
                                        <div className="input">
                                            <input type={shp === true ?'text':'password'} placeholder=" Confirm Password" onChange={(e)=>setpayload2({...payload2, confirm:e.target.value}) }value={payload2.password}/>
                                            
                                        </div>
                                        
                                        <div className="submit" onClick={axes}>
                                            Register
                                        </div>
                                        </form>
                                    </div>
                                }
                            </div>
                    </div>

                </div>
            <div className="ham-menu" ref={ham}>
                <div className="ham-inner">
                    <div className="logo">Vensle <FontAwesomeIcon icon={faClose} onClick={(e)=>reveal(ham)}/></div>
                    <div className="hr" />
                    
                        {
                            specialref !== '' ?
                            <div className="menus">
                                <div>
                                <Link to={'/admin/profile'}><FontAwesomeIcon icon={faUser}/> {name}</Link>
                                </div>
                            </div>
                            :
                            ''
                        }
                    
                    <div className="menus">
                    </div>
                    <h3>Settings</h3>
                    <div className="menus">
                    <div><Link to={'/'}>Home</Link></div>
                    
                        {
                            specialref !== '' ?
                            <div>
                                <Link to={'/admin/place'}>Start Selling</Link>
                            </div>
                            :
                            ''
                        }
                    
                    
                    </div>
                </div>
            </div>
        </div>
        
    )
}
export default Sign