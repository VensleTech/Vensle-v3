
import Menu from "../reusable/menu"
import { useState, useRef, useEffect} from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import { faList, faPhone, faMessage, faBowlFood, faWheatAwn, faShirt, faBaby, faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons"
import { faPaintbrush, faTree, faVolleyball, faBars, faMicrophone, faBook, faHouseChimney, faClose, faCaretLeft, faCaretRight} from "@fortawesome/free-solid-svg-icons"
import Foot from "../reusable/footer"
import Drop from "../reusable/drop"
const Bsdash = () => {
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
                    <Link to={'/tutorial-dash'}><Drop info={<strong>DASHBOARD</strong>}/></Link>
                    <Link to={'/tutorial-products'}><Drop info={"PRODUCTS"}/></Link>
                    <Link to={'/tutorial-settings'}><Drop info={"SETTINGS"}/></Link>
                    <Link to={'/tutorial-message'}> <Drop info={"MESSAGE"}/></Link>
                </div>
                <div className="main-content">
                    <h4>DASHBOARD</h4>
                    The dashboard is a brief summary of all the items you have in the system.
                    <h5>MENU TAB</h5>
                    The Vensle Logo  will take you to the home page when you click it from any page within the website.
                    <p>The <i class='fa fa-bell'></i> icon is for notifications when orders are placed.</p>
                    <p>The <i class='fa fa-envelope'></i> icon is for ease access to your messages from any where in the site.</p>
                    <p>The <i class='fa fa-user-circle-o profile-pic prflPcImg'></i> icon which can be your profile picture if you have any picture uploaded is for a quick shortcut to the most used features which include: </p>
                        <i class='fa fa-user'></i> <b>Profile</b> where you can update your profile, 
                        <i class='fa fa-credit-card'></i> <b>Go back to Website</b> takes you to the homepage, 
                        <i class='fa fa-inbox'></i> <b>Inbox</b> takes you to your messages, 
                        <i class='fa fa-cog'></i> <b>Setting</b> takes you to the settings of your password and 
                        <i class='fa fa-power-off'></i> <b>Logout</b> that logs you out of the system.
                    <h5>LEFT SIDE BAR</h5>
                    The section consist of the Dashboard Tab, Products (Collapsed) Tab, Settings (Collapsed) Tab and Message (Collapsed) Tab. To expand the Collapsed Tabs please click them and the list of menus under them will display. The next three sections will explain them more.
                    <h5>MID-CONTENT</h5>
                    The product box shows you the total number of items you have displayed on the website, <b>Most Recent Items</b> below shows you few of your your displayed products if you have any. If you don't have any, that section will be blank. <b>View all</b> is a shortcut to view all the items you have uploaded.
          
                   
                </div>
            </div>
            <Foot />
        </div>
        
    )
}
export default Bsdash