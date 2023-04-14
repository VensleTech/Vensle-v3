
import Menu from "../reusable/menu"
import { useState, useRef,useEffect} from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import { faList, faPhone, faMessage, faBowlFood, faWheatAwn, faShirt, faBaby, faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons"
import { faPaintbrush, faTree, faVolleyball, faBars, faMicrophone, faBook, faHouseChimney, faClose, faCaretLeft, faCaretRight} from "@fortawesome/free-solid-svg-icons"
import Foot from "../reusable/footer"
import Drop from "../reusable/drop"
const Bsprod = () => {
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
                    <Link to={'/tutorial-products'}><Drop info={<strong>PRODUCTS</strong>}/></Link>
                    <Link to={'/tutorial-settings'}><Drop info={"SETTINGS"}/></Link>
                    <Link to={'/tutorial-message'}> <Drop info={"MESSAGE"}/></Link>
                </div>
                <div className="main-content">
                    <h4>PRODUCTS</h4>

                        You need to click the <b>PRODUCTS</b> tab for the list of menus under it to display. These menus are explained below:
                        <h5>Upload New Item</h5>
                        This is the section where the items you want to display to the public are uploaded.
                        <p><b>Name of item</b>: This simply means the name of the item you're uploading (example is <em>IPHONE 6</em>). This name should not be longer than 200 letters to avoid being rejected by the system. </p>
                        <p><b>Item Condition</b>: Refers to the state of the item you're uploading. It can be  <span class='badge badge-success'>NEW</span> if it hasn't been used before, <span class='badge badge-primary'>USED</span> if it has been used before or <span class='badge badge-secondary'>NOT APPLICABLE</span> if the item you're uploading doesn't fall into this category (example is a Dry Cleaner).</p>
                        <p><b>Enter Amount</b>: You need to enter the price of item. If its a fixed price then leave it on fixed but if its a negotiable then choose negotiable. If you feel you need to be contacted for price them tick the contact for price button.</p>
                        <p><b>Group and Category</b>: Group is the bigger division the item you have for sale falls into while the Category is the smaller division. An example is the Iphone 6. It falls into the <b>Group</b> Called <b>Electronics</b> while the <b>Cateogry</b> is called <b>Smart Phones</b>.</p>
                        <p><b>Description</b>: In this section, you can describe the product you want to sell to the best of your capacity.</p>
                        <p><b>Contact Phone Number</b>: This is your personal phone number so the buyers can be able to reach out to you easily. A contact number is a neccesary requirement.</p>
                        <p><b>Region</b>: is the location the item is sold. If you want to sell to other regions (if you have stores in other places) you will need to upload the item again with the other regions.</p>
                        <p><b>Address</b>: If you have a store, this is the place to enter the address of your store but if you are an individual you mustn't enter your address if you feel unsafe, you can just enter your street address (without a number) or the most public, confortable and closest location to you.</p>
                        <p><b>Drag and drop pictures here</b>: This section is for you to upload the pictures of the item. The picture must be in jpg, jpeg or png format only.</p>
                        <p><input type='button' class='btn btn-info btn-xs' value='Save as draft' name=''/>: This button helps save your upload for later. When you save as draft, your product will be available in the <b>My Product</b> tab for edit later.</p>
                        <p><input type='submit' name='submit' class='btn btn-primary' value='Create'/>: Clicking the create butoon after filling the whole form will upload your content for review so the administrator can confirm that the uploaded product does not breach our <a href='https://vensle.com/policy/terms-conditions'>Terms of Use</a>. This process usually takes few minutes</p>
                        <h5>My Products</h5>
                        This section contain all the items you have uploaded. They are displayed one after the other in a box. Each box contains a picture of the item, the Name, The Address, The Category, The Condition, The Ref No., The Price and the Status of the Item.
                        <p>This is just a summary of the item you uploaded. The <a class='text-primary' href=''>View on Website</a> button takes you to a more detailed preview of how the item will appear to the general public when they click on them. If you see Approved, it means that your product is approved and live for everone to see but if pending it means its yet to be approved. Declined are items that are rejected by the administration and Draft are products you saved for later.</p>
                        <p><a class='btn btn-default btn-rounded' href=''><i class='fa fa-edit'></i> Edit</a> is a button that takes you to a page where you can edit the item. The <a class='btn btn-success btn-flat btn-addon btn-xs' href=''><i class='fa fa-handshake-o'></i> Sold</a> is the button you click when the item has been sold but you still want everyone to know that you have sold such items before. Customers that view your profile can still see them if the click on the Sold item button while the <a class='btn btn-danger btn-flat btn-addon btn-xs' href=''><i class='fa fa-close'></i> Delete</a> button is to completely remove it from the system. The Item will be permanently deleted and cannot be restored back.</p>
                        <h5>Sold Item</h5>
                        This is almost the same as the My Product section. The difference is that the status is offline.
                        <h5>Place a Request</h5>
                        This section is the same as Upload new item.
                        <h5>My Requests</h5>
                        This section is the same as My products. The difference is that the items shown here are the ones you requested.
                        <h5>Bought Items</h5>
                        This section is the same as Sold items. The difference is that they are bought item you still want your customers to see.
                </div>
            </div>
            <Foot />
        </div>
        
    )
}
export default Bsprod