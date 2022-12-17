import { useState, useEffect, useContext} from "react"

import { faUser, faLocationDot, faDashboard, faHome, faBox, faPersonDress, faBoxesPacking, faGear, faMessage, faSearch, faBell } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Drop from "../reusable/drop"
import Ops from "../reusable/ops"
import Search from "../reusable/search"
import Pcards from "../reusable/pcards"
import Fly from "../reusable/fly"
import { UserContext } from "../auth/usercontext"
import { useNavigate } from "react-router-dom"

const Menu = () => {
    const {details, setDetails} = useContext(UserContext)
    const nav = useNavigate()
    useEffect(() => {
        // localStorage.setItem('logs', JSON.stringify(details))
        const truth = localStorage.getItem('logs');
        if(truth){
            const kept = JSON.parse(localStorage.getItem('logs'))
            const {name, business_name, email, location, authlev, } = kept
            setDetails({
                name:name,
                authlev:authlev,
                business_name: business_name,
                email: email,
                location: location
            })
        }
        else{
            nav('/')
        }
    }, [])
    return(
        <div className="admin-first">
            <h1>Vensle</h1>
            <div className="adfr">
                <h1>Dashboard</h1>
                <div className="admin-first-third">
                    <div className="v-search">
                        <div className="search">
                            <input type='text' placeholder="Search product" />
                            <div className="but">
                                <FontAwesomeIcon icon={faSearch} />
                            </div>
                        </div>
                    </div>
                    <div className="pops" >
                        <div><FontAwesomeIcon icon={faBell}/></div>
                        <div><FontAwesomeIcon icon={faMessage}/></div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
export default Menu