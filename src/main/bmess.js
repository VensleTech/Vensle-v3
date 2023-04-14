
import Menu from "../reusable/menu"
import { useState, useRef, useEffect} from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import { faList, faPhone, faMessage, faBowlFood, faWheatAwn, faShirt, faBaby, faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons"
import { faPaintbrush, faTree, faVolleyball, faBars, faMicrophone, faBook, faHouseChimney, faClose, faCaretLeft, faCaretRight} from "@fortawesome/free-solid-svg-icons"
import Foot from "../reusable/footer"
import Drop from "../reusable/drop"
const Bsmes = () => {
    const reveal = (ref) => {
        if (ref.current.style.display === 'grid') {
            ref.current.style.display = 'none'
        }
        else{
            ref.current.style.display = 'grid'
        }
        
    }
    useEffect(()=>{
        window.scrollTo(0,0)
      },[])
    const flash = useRef('')
        const ham = useRef('')
      return (
        <div>
          <div className="topbar">
                <div className="logo">
                    <Link to={'/'}>Vensle</Link>
                </div>
                <div className="rightside">
                    <div></div>
                    <div><FontAwesomeIcon icon={faBars} onClick={(e)=>reveal(ham)}/></div>
                    <div><Link to={'/signin'}>Sign in/Sign up</Link></div>
                    <div ref={flash} ><Link to={'/admin/upload'} style={{color:'black'}}>Start Selling</Link></div>
                </div>
            </div>
            <div className='PPol main-s'>
                <div className="main-sidebar">
                    <Link to={'/tutorial'}><Drop info={"HOME PAGE"}/></Link>
                    <Link to={'/tutorial-view'}><Drop info={"VIEW MORE PAGE"}/></Link>
                    <Link to={'/tutorial-seller'}><Drop info={"SELLER'S PROFILE"}/></Link>
                    <Link to={'/tutorial-dash'}><Drop info={"DASHBOARD"}/></Link>
                    <Link to={'/tutorial-products'}><Drop info={"PRODUCTS"}/></Link>
                    <Link to={'/tutorial-settings'}><Drop info={"SETTINGS"}/></Link>
                    <Link to={'/tutorial-message'}> <Drop info={<strong>MESSAGE</strong>}/></Link>
                </div>
                <div className="main-content">
                    <h4>MESSAGE</h4>

                    This section is divided into two Categories. They are:
                    <h5>COMPOSE</h5>
                    This section is for you to compose message to the seller you want to chat. You must have chatted the seller or buyer before now to see the contact details as a suggestion in the address bar. 
                    <h5>ALL</h5>
                    This section is just showing the message section in full. The Inbox, Draft, Sent Mail, Trash are the contents. It is quite self explanatory.
                </div>
            </div>
            <Foot />
        </div>
        
    )
}
export default Bsmes