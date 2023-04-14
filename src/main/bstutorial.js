
import Menu from "../reusable/menu"
import { useState, useRef, useEffect} from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import { faList, faPhone, faMessage, faBowlFood, faWheatAwn, faShirt, faBaby, faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons"
import { faPaintbrush, faTree, faVolleyball, faBars, faMicrophone, faBook, faHouseChimney, faClose, faCaretLeft, faCaretRight} from "@fortawesome/free-solid-svg-icons"

import Foot from "../reusable/footer"
import Drop from "../reusable/drop"
const BSTutorial = () => {
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
                    <Link to={'/tutorial'}><Drop info={<strong>HOME PAGE</strong>}/></Link>
                    <Link to={'/tutorial-view'}><Drop info={"VIEW MORE PAGE"}/></Link>
                    <Link to={'/tutorial-seller'}><Drop info={"SELLER'S PROFILE"}/></Link>
                    <Link to={'/tutorial-dash'}><Drop info={"DASHBOARD"}/></Link>
                    <Link to={'/tutorial-products'}><Drop info={"PRODUCTS"}/></Link>
                    <Link to={'/tutorial-settings'}><Drop info={"SETTINGS"}/></Link>
                    <Link to={'/tutorial-message'}> <Drop info={"MESSAGE"}/></Link>
                </div>
                <div className="main-content">
                    <h4>INTRODUCTION</h4>

                    <p>Welcome to the guide on how to use the vensle.com online market platform. This 
                    comprehensive guide is to give you a good understanding of how to use this platform. On the 
                    left is a sidebar of the list of topics covered (if you're using a tablet or a smart phone the side 
                    bar will be at the top). The list of headings cover are Welcome, Home Page, View More Page, 
                    Customers Profile, Dashboard, Products, Settings and Message. You can navigate through 
                    these topics until you're cleared of any doubts and if you feel you're no satisfied please visit 
                    our frequently asked question (FAQ) or contact us and we will be glad to attend to you.
                    </p>
                    
                    
                    <h4>The Menu Tabs</h4>
                    <ul>
                        <li>
                            The logo vensle ogo will take you to the home page when you click it from any page within 
                            the website
                        </li>
                        <li>
                            The search bar is to guide you to search for any item you want. You can search by the 
                            name of the product, the description or by the location.
                        </li>
                        <li>
                            The Sign in | Register button is quite self explanatory. The purpose is simply for you to login 
                            if you're already registered or for you to register if you've never registered before. On 
                            clicking it, a pop up box will appear so you can easily login or register without having to 
                            leave the page where you are currently. If you didn't see the pop up then that's because the 
                            javascript of your browser is turned off. Please turn it on.
                        </li>
                        <li>
                            The Upload an Item button is a very easy shortcut for you to click and be taken to the 
                            upload page direct for easy upload of items. However, you must be logged in before you 
                            can upload an item. If you haven't loggin already and you click it you will be required to 
                            login.
                        </li>
                        <li>
                            The Sell/Buy Tutorial button takes you to this page you're currently in. Designed to guide 
                            you on how to use the website.
                        </li>
                        <li>
                            The Place a Request button is meant to take you directly to the page where you can place 
                            a request
                        </li>
                    </ul>
                </div>
            </div>
            <Foot />
        </div>
        
    )
}
export default BSTutorial