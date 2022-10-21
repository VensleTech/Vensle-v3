import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBasketShopping, faClose, faCommentDots, faUserAlt } from "@fortawesome/free-solid-svg-icons"
import Search from "./search"
import Popup from "../admin/popup"
import Input from "../admin/input"

const Menu = () => {
    const [isOpen, setisOpen] = useState(false)
    const [log, setlog] = useState(true)
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
                                        <label>Email</label>
                                        <div className="input">
                                            <input type='text' placeholder="Email"/>
                                        </div>
                                        <label>Password</label>
                                        <div className="input">
                                            <input type='text' placeholder="Password"/>
                                        </div>
                                        
                                        <div className="submit">
                                            Sign in
                                        </div>
                                    </div>
                                    :
                                    <div className="reg">
                                        <label>Full name *</label>
                                        <div className="input">
                                            <input type='text' placeholder="Full name"/>
                                        </div>
                                        <label>Business name</label>
                                        <div className="input">
                                            <input type='text' placeholder="Business name"/>
                                        </div>
                                        <label>Email *</label>
                                        <div className="input">
                                            <input type='text' placeholder="Email"/>
                                        </div>
                                        <label>Phone *</label>
                                        <div className="input">
                                            <input type='text' placeholder="Phone"/>
                                        </div>
                                        <label>Address *</label>
                                        <div className="input">
                                            <input type='text' placeholder="Address"/>
                                        </div>
                                        <label>Password *</label>
                                        <div className="input">
                                            <input type='text' placeholder="Password"/>
                                        </div>
                                        <label>Confirm Password *</label>
                                        <div className="input">
                                            <input type='text' placeholder=" Confirm Password"/>
                                        </div>
                                        <div className="submit">
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