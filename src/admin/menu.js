import { useState, useEffect, useContext} from "react"
import { faUser, faAdd, faQuestionCircle, faHome, faBox, faPersonDress, faBoxesPacking, faGear, faMessage, faSearch, faBell, faSignOut } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Drop from "../reusable/drop"
import Ops from "../reusable/ops"
import Search from "../reusable/search"
import Pcards from "../reusable/pcards"
import Fly from "../reusable/fly"
import { UserContext } from "../auth/usercontext"
import { Link, useNavigate } from "react-router-dom"

const Menu = () => {
    const {details:{authlev}, details, setDetails} = useContext(UserContext)
    const nav = useNavigate()
    const destroy = () => {
        localStorage.removeItem('logs')
        setDetails( {...details,
            name:'',
            authlev:'',
            business_name:'',
            email:'',
            phone:'',
            specialref:'',
        })
        nav('/signin')
    }
    return(
        <div className="admin-first">
            <h1><Link to={'/'}>Vensle</Link></h1>
            <div className="adfr">
                <h1>Dashboard</h1>
                <div className="admin-first-third">
                    <div className="v-search">
                        <div className="search">
                            <form>
                                <input type='text' placeholder="Search product" />
                            </form>
                            <div className="but">
                                <FontAwesomeIcon icon={faSearch} />
                            </div>
                        </div>
                    </div>
                    <div className="pops" >
                        <div><FontAwesomeIcon icon={faBell}/></div>
                        <div onClick={destroy}><FontAwesomeIcon icon={faSignOut}/></div>
                    </div>
                    
                </div>
            </div>
            {
                authlev === 1 ?
                <div className="basemenu">
                    <Link to={"/admin/profile"}><div><FontAwesomeIcon icon={faHome}/><p></p>Home</div></Link>
                    <Link to={"/admin/products"}><div><FontAwesomeIcon icon={faAdd}/><p>Products</p></div></Link>
                    <Link to={"/admin/messages"}><div><FontAwesomeIcon icon={faMessage}/><p>Messages</p></div></Link>
                    <Link to={"/admin/roles"}><div><FontAwesomeIcon icon={faUser}/><p>Roles</p></div></Link>
                    <Link to={"/admin/orders"}><div><FontAwesomeIcon icon={faBoxesPacking}/><p>Orders</p></div></Link>
                </div> 
                :
                authlev === 2 || authlev === 0 ?
                <div className="basemenu">
                    <Link to={"/admin/profile"}><div><FontAwesomeIcon icon={faHome}/><p></p>Home</div></Link>
                    <Link to={"/admin/place"}><div><FontAwesomeIcon icon={faAdd}/><p>Sell</p></div></Link>
                    <Link to={"/admin/messages"}><div><FontAwesomeIcon icon={faMessage}/><p>Messages</p></div></Link>
                    <Link to={"/admin/orders"}><div><FontAwesomeIcon icon={faBoxesPacking}/><p>Orders</p></div></Link>
                </div> 
                :
                authlev === 3 ?
                <div className="basemenu">
                    <Link to={"/admin/profile"}><div><FontAwesomeIcon icon={faHome}/><p></p>Home</div></Link>
                    <Link to={"/admin/orders"}><div><FontAwesomeIcon icon={faBoxesPacking}/><p>Orders</p></div></Link>
                </div> 
                :
                ''

        }
        </div>

    )
}
export default Menu