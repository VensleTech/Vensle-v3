
import Menu from "../reusable/menu"
import { useState, useRef, useEffect} from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import { faList, faPhone, faMessage, faBowlFood, faWheatAwn, faShirt, faBaby, faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons"
import { faPaintbrush, faTree, faVolleyball, faBars, faMicrophone, faBook, faHouseChimney, faClose, faCaretLeft, faCaretRight} from "@fortawesome/free-solid-svg-icons"
import Loafers from "../loafers.jpg"
import Iphone from "../iphone.webp"
import pimage from '../prod.png'
import Pcards from "../reusable/pcards"
import ProdPop from "../reusable/prodpop"
import Carousels from "../reusable/carousel"
import Groce from '../grocerydelivery.webp'
import Vertice from "./vertice"
import Fly from "../reusable/fly"
import Foot from "../reusable/footer"
import Drop from "../reusable/drop"
const Bssell = () => {
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
                    <Link to={'/tutorial-seller'}><Drop info={<strong>SELLER'S PROFILE</strong>}/></Link>
                    <Link to={'/tutorial-dash'}><Drop info={"DASHBOARD"}/></Link>
                    <Link to={'/tutorial-products'}><Drop info={"PRODUCTS"}/></Link>
                    <Link to={'/tutorial-settings'}><Drop info={"SETTINGS"}/></Link>
                    <Link to={'/tutorial-message'}> <Drop info={"MESSAGE"}/></Link>
                </div>
                <div className="main-content">
                <h4>SELLER'S DETAILS</h4>
                    On the left side bar are the details of the seller and and below it is a <i class='fa fa-comments-o'> Chat Seller</i> is the button that takes you to the messaging section where you can send message directly to the seller. 
                    <p> <b>Active Products</b> are items that the seller presently have for sale while</p>
                    <p> <b>Sold Products</b> are items that the seller has already sold out. This is just to give you a history of the kind of items the seller sells.</p>
                    
                </div>
            </div>
            <Foot />
        </div>
        
    )
}
export default Bssell