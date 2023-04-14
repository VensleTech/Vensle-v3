import React, { useRef , useEffect} from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBasketShopping, faSearch, faClose, faUserAlt, faCancel, faHome, faAdd, faMessage, faPerson, faInfo, faInfoCircle, faQuestion, faQuestionCircle, faUser, faBars, faCircleXmark } from "@fortawesome/free-solid-svg-icons"
import Showdrop from '../reusable/showdrop'
import Foot from '../reusable/footer'

const Faq = () => {
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
  const faq = [
    {
      id:1,
      que:'What is vensle.com all about?',
      ans:'Vensle.com is an online marketplace that bring buyers and sellers in a neighbourhood together. You can display all the product you sell if you have a shop and you can also sell off your personal used items as an individual. It is very easy to use. If you\'re not cleared enough and you still want to make more findings, please feel free to send us your questions via info@vensle.com.'
    },
    {
      id:2,
      que:'How can I make my product among the featured products that displays on the homepage?',
      ans:'The featured products are selected at random and it can be anyone\'s product. However you can ensure the picture of your product is clear enough and the category is properly chosen to stand a chance of your product being selected among the featured products.'
    },
    {
      id:3,
      que:'How can I upload my product on vensle.com?',
      ans:'It is very easy to upload your product on vensle.com. You can click on the Upload an item on the menu bar or you can go to the dashboard and click the product tab on the side bar (if you are using a mobile device or a tablet and you can\'t see the side bar please click on the expand button so you can see the side bar). Then click on upload new item, fill in the details and upload. That\'s all.'
    },
    {
      id:4,
      que:'Are there products I cannot sell or request on vensle.com?',
      ans:'Yes there are products you cannot sell or request on vensle.com. Products like ammunition of any kind, drugs, pornographic contents of all types and any contraband according to the law of your locality are all prohibited on vensle.com. To better understand this please read the Terms and Conditions of use.'
    },
    {
      id:5,
      que:'Why must product be pending when I upload?',
      ans:'This is to avoid the upload of dirty, pornographic and contents that are disturbing. As much as possible we want to make vensle.com a comfortable platform for all users.'
    },
    {
      id:6,
      que:'Can I upload an item without registering or creating an account?',
      ans:'No please. You can\'t. You must create an account before you can upload any item.'
    },
    {
      id:7,
      que:'How can I make my product among the featured products that displays on the homepage?',
      ans:'The featured products are selected at random and it can be anyone\'s product. However you can ensure the picture of your product is clear enough and the category is properly chosen to stand a chance of your product being selected among the featured products.'
    },
    {
      id:8,
      que:'How can I make my product among the featured products that displays on the homepage?',
      ans:'The featured products are selected at random and it can be anyone\'s product. However you can ensure the picture of your product is clear enough and the category is properly chosen to stand a chance of your product being selected among the featured products.'
    },
    {
      id:9,
      que:'Are there products I cannot sell or request on vensle.com?',
      ans:'Yes there are products you cannot sell or request on vensle.com. Products like ammunition of any kind, drugs, pornographic contents of all types and any contraband according to the law of your locality are all prohibited on vensle.com. To better understand this please read the Terms and Conditions of use.'
    },
    {
      id:10,
      que:'Why must product be pending when I upload?',
      ans:'This is to avoid the upload of dirty, pornographic and contents that are disturbing. As much as possible we want to make vensle.com a comfortable platform for all users.'
    }
  ]
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
        <div className='PPol'>
          <h2>Frequently Asked Questions</h2>
          <div className='sections faq'>
              {
                faq.map(({que, ans})=>(
                  <Showdrop quest={que} ans={ans}/>
                ))
              }
          </div>
        </div>
        <Foot/>
    </div>
  )
}

export default Faq