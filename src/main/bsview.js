
import Menu from "../reusable/menu"
import { useState, useRef, useEffect} from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import { faList, faPhone, faMessage, faBowlFood, faWheatAwn, faShirt, faBaby, faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons"
import { faPaintbrush, faTree, faVolleyball, faBars, faMicrophone, faBook, faHouseChimney, faClose, faCaretLeft, faCaretRight} from "@fortawesome/free-solid-svg-icons"

import Foot from "../reusable/footer"
import Drop from "../reusable/drop"
import Topheader from "../reusable/topheader"
const Bsview = () => {
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
          <Topheader/>
            <div className='PPol main-s'>
                <div className="main-sidebar">
                    <Link to={'/tutorial'}><Drop info={"HOME PAGE"}/></Link>
                    <Link to={'/tutorial-view'}><Drop info={<strong>VIEW MORE PAGE</strong>}/></Link>
                    <Link to={'/tutorial-seller'}><Drop info={"SELLER'S PROFILE"}/></Link>
                    <Link to={'/tutorial-dash'}><Drop info={"DASHBOARD"}/></Link>
                    <Link to={'/tutorial-products'}><Drop info={"PRODUCTS"}/></Link>
                    <Link to={'/tutorial-settings'}><Drop info={"SETTINGS"}/></Link>
                    <Link to={'/tutorial-message'}> <Drop info={"MESSAGE"}/></Link>
                </div>
                <div className="main-content">
                    <h4>PRODUCT FEATURES</h4>

                    The features of the product are all under the category below.
                    <p><b>Product:</b> is the name of the item. Group: refers to the group the item falls into. </p>
                    <p><b>Category:</b> is the smaller division of the item.</p>
                    <p><b>Condition:</b> is the status of the item which can either be <span class='badge badge-success'>NEW</span>, <span class='badge badge-primary'>USED</span> or <span class='badge badge-secondary'>NOT APPLICABLE</span>.</p>
                    <p><b>Ref No.:</b> is a special number specifically assigned to that item. You can use it to make reference anytime you contact customer care or the seller/buyer. </p>
                    <p><b>Price:</b> is the cost of the item </p>
                    <p>Mobile: is the contact of the person that wants to sell/buy the product. </p>
                    <p><b>Address:</b>  is the meeting location or the most covenient meeting point.</p>
                    <h5>PRODUCT DESCRIPTION</h5>
                    This section contains more details about the item .
                    <h5>SELLERS DETAILS</h5>
                    This section contails a quick view of the <i class='fa fa-user e'> Seller's Name</i>, <i class='fa fa-mobile e'> Contact number</i> and <i class='fa fa-map-marker e'> Sellers Address</i>
                    <p> <i class='fa fa-user-plus'> View Profile</i> is the button that takes you to the page that contains details of other products and the history of the seller.</p>
                    <p> <i class='fa fa-comments-o'> Chat Seller</i> is the button that takes you to the messaging section where you can send message directly to the seller </p>
                    <p> <b>Similar Products</b> and <b>Recently Viewed Item</b> are quite self explanatory</p>
                </div>
            </div>
            <Foot />
        </div>
        
    )
}
export default Bsview