
import Menu from "../reusable/menu"
import { useState, useRef} from "react"
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
import Fly from "../../src/reusable/fly"
const BSTutorial = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [product, setProducts] = useState([
        {
            id:1,
            img:"./pics (5).jpg",
            title:"Solid White leather shoes",
            price:"5,000",
            transaction:[
                {
                    id:1,
                    type:'Must meet to buy',
                    avail:0,
                },
                {
                    id:2,
                    type:'Delivery',
                    avail:1
                }
            ]
        },
        {
            id:2,
            img:"./pics (3).jpg",
            title:"Premium sneakers",
            price:"22,000",
            transaction:[
                {
                    id:1,
                    type:'Must meet to buy',
                    avail:1,
                },
                {
                    id:2,
                    type:'Delivery',
                    avail:0
                }
            ]
        },
        {
            id:3,
            img:"./pics (4).jpg",
            title:"Apple i-watch",
            price:"15,000",
            transaction:[
                {
                    id:1,
                    type:'Must meet to buy',
                    avail:0,
                },
                {
                    id:2,
                    type:'Delivery',
                    avail:1
                }
            ]
        },
        {
            id:4,
            img:"./pics (18).jpg",
            title:"RayBan sun glasses",
            price:"4,500",
            transaction:[
                {
                    id:1,
                    type:'Must meet to buy',
                    avail:1,
                },
                {
                    id:2,
                    type:'Delivery',
                    avail:1
                }
            ]
        },
        {
            id:5,
            img:"./pics (19).jpg",
            title:"Nikon D9000 Camera(Wide angle lens)",
            price:"325,000",
            transaction:[
                {
                    id:1,
                    type:'Must meet to buy',
                    avail:1,
                },
                {
                    id:2,
                    type:'Delivery',
                    avail:1
                }
            ]
        },
        {
            id:6,
            img:"./pics (20).jpg",
            title:"All STars sneakers",
            price:"7,000",
            transaction:[
                {
                    id:1,
                    type:'Must meet to buy',
                    avail:1,
                },
                {
                    id:2,
                    type:'Delivery',
                    avail:1
                }
            ]
        },
        {
            id:7,
            img:"./pics (22).jpg",
            title:"Denim School bag",
            price:"6,300",
            transaction:[
                {
                    id:1,
                    type:'Must meet to buy',
                    avail:1,
                },
                {
                    id:2,
                    type:'Delivery',
                    avail:1
                }
            ]
        }
    ])
    const menuref = useRef()
    return(
        <div>
            <Menu/>
            <div className="breadcrumbs">
                <div>Home -> Tutorials</div>
            </div>
            <div className="main">
                <div className="main-sidebar">
                    <Fly info={"WELCOME"}/>
                    <Fly info={"HOME PAGE"}/>
                    <Fly info={"SELLER'S PROFILE"}/>
                    <Fly info={"DASHBOARD"}/>
                    <Fly info={"PRODUCTS"}/>
                    <Fly info={"SETTINGS"}/>
                    <Fly info={"MESSAGE"}/>
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
        </div>
        
    )
}
export default BSTutorial