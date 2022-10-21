
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
const Home = () => {
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
    const [groceries, setgroceries] = useState([
        {
            id:1,
            img:"../../groceries (15).jpg",
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
            img:"../../groceries (16).jpg",
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
            img:"../../groceries (17).jpg",
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
            img:"../../groceries (18).jpg",
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
            img:"../../groceries (19).jpg",
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
            img:"../../groceries (20).jpg",
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
            img:"../../groceries (21).jpg",
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
        },
        {
            id:8,
            img:"../../groceries (11).jpg",
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
        },
        {
            id:9,
            img:"../../groceries (12).jpg",
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
        },
        {
            id:10,
            img:"../../groceries (13).jpg",
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
    const [partners, setpartners] = useState([
        {
            id:1,
            img:"../../pics (5).jpg",
            title:"Asda"
        },
        {
            id:2,
            img:"../../pics (3).jpg",
            title:"Vensle"
        },
        {
            id:3,
            img:"../../pics (4).jpg",
            title:"Agro Fetch"
        },
        {
            id:4,
            img:"../../pics (18).jpg",
            title:"Nilesun"
        }
    ])
    const menuref = useRef()
    return(
        <div>
            <Menu/>
            <div className="banner">
                <div className="categories"> 
                    <div className="stay">
                        <FontAwesomeIcon icon={faList} style={{fontSize:'1.3em'}}/> 
                        <h2>Categories</h2>
                    </div>
                    <div className="slide"  ref={menuref}>
                        <ul>
                            <li><FontAwesomeIcon icon={faWheatAwn}/> Groceries</li>
                            <Link to={"../../subcat"}><li><FontAwesomeIcon icon={faShirt}/>Fashion</li></Link>
                            <li><FontAwesomeIcon icon={faBaby}/>Kids & Baby</li>
                            <li><FontAwesomeIcon icon={faScrewdriverWrench}/>Electronics</li>
                            <li><FontAwesomeIcon icon={faPaintbrush}/>Collectibles & Art</li>
                            <li><FontAwesomeIcon icon={faTree}/>Home & Garden</li>
                            <li><FontAwesomeIcon icon={faVolleyball}/>Sporting Goods</li>
                            <li><FontAwesomeIcon icon={faBowlFood}/>General Business & Industrial</li>
                            <li><FontAwesomeIcon icon={faMicrophone}/>Musical</li>
                            <li><FontAwesomeIcon icon={faBowlFood}/>Food & Beverages</li>
                            <li><FontAwesomeIcon icon={faBook}/>Books</li>
                            <li><FontAwesomeIcon icon={faHouseChimney}/>Real Estate</li>
                        </ul>
                    </div>
                </div>
                <div className="banner-img">
                    <div className="big" >
                        <Carousels slide={true} thumbs={false} />
                    </div>
                    <div className="small" style={{borderLeft:'1px solid whitesmoke'}}>
                        <img src='./pics (22).jpg' alt="" />
                        <div className="tag">
                            <h2>Free Delivery</h2>
                        </div>
                        <div className="base"></div>
                        <div className="skew"></div>
                    </div>
                    <div className="writeup">
                        <h2>Best Deals</h2>
                        <p>Limited Stock available</p>
                    </div>
                </div>
            </div>
            
            <div className="first">
                <h2 >Top Requests</h2>
                <div className="top-grid">
                    <div className="top-left">
                    {
                        
                        product.slice(0,1).map(({id, img, title, price, transaction})=>(
                        <div>        
                            <div className="img">
                                <img src={img} alt=""/>
                            </div>
                            <div className='pdetails'>
                                <div className="prodname">
                                    <p>{title}</p>
                                </div>
                                <div className="price">
                                    <p>{price}</p>
                                </div>
                            </div>
                            <div className="hr"></div>
                            {
                                console.log(transaction)
                            }
                            <div className="no-name">
                                <div className="table-within">
                                    <table>
                                        <tr>
                                            <td>Category</td>
                                            <td>Fashion</td>
                                        </tr>
                                        <tr>
                                            <td>Condition</td>
                                            <td>Fairly used, Very Neat</td>
                                        </tr>
                                        <tr>
                                            <td>Address</td>
                                            <td>37 Brooklyn Heights, Illinois</td>
                                        </tr>
                                        <tr>
                                            <td>Description</td>
                                            <td>A size 35 shoe that is in very good condition</td>
                                        </tr>
                                    </table>
                                </div>
                                <div className="actions">
                                    <div className="call">
                                        <FontAwesomeIcon icon={faPhone}/>
                                    </div>
                                    <div className="chat">
                                        <FontAwesomeIcon icon={faMessage}/>
                                    </div>
                                    <Link to={"/details/"+id}><div className='more-details'>
                                        <FontAwesomeIcon icon={faBars} /><p>More details</p>
                                    </div></Link>
                                </div>

                            </div>
                        </div>
                        ))
                    }    
                    {
                        
                    }
                    </div>
                    <div className="top-right">

                        {
                            product.slice(1,7).map(({id, img, title, price, transaction})=>(
                                <div><Pcards type={1} width={200} height={270} vim={'100%'} id={id} title={title} price={price} img={img} trans={transaction}/></div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="second">
                <div><FontAwesomeIcon icon={faWheatAwn}/> Groceries</div>
                <div><FontAwesomeIcon icon={faWheatAwn}/> Groceries</div>
                <div><FontAwesomeIcon icon={faWheatAwn}/> Groceries</div>
                <div><FontAwesomeIcon icon={faWheatAwn}/> Groceries</div>
                <div><FontAwesomeIcon icon={faWheatAwn}/> Groceries</div>
            </div>

            <div className="third">
                <h2>Our Product Partners</h2>
                <div className="pgrid">
                    <div className="pg-one">
                        <div><img src="./images/brands (1).png" alt=""/></div>
                        <div><img src="./images/brands (4).jpg" alt=""/></div>
                    </div>
                    <div className="pg-two">
                        <div><img src="./images/brands (1).jpeg" alt=""/></div>
                        <div><img src="./images/brands (3).webp" alt=""/></div>
                    </div>
                    <div className="pg-three">
                        <div className="pg-three-first">
                            <div><img src="./images/brands (5).jpg" alt=""/></div>
                            <div><img src="./images/brands (7).jpg" alt=""/></div>
                            <div><img src="./images/brands (1).webp" alt=""/></div>
                        </div>
                        <div className="pg-three-second">
                            <div><img src="./images/brands (1).jpg" alt=""/></div>
                            <div><img src="./images/brands (6).jpg" alt=""/></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fourth">
                <div className="fourth-first-container">
                    <div className="fourth-first-title">
                        <h3>Groceries</h3>
                    </div>
                    
                    <div className="fourth-top">
                        <div className="fourth-top-left">
                            <div className="one">
                                <img src={Groce} alt=""/>
                            </div>
                            <div className="two">
                                <div className="fflgrid">
                                    {
                                        groceries.slice(0,8).map(({id, img, title, price, transaction})=>(
                                            <div><Pcards type={2} width={'100%'} height={'100px'} pdsize={'.8em'} pcsize={'.9em'} id={id} title={title} price={price} img={img} thestate={isOpen} trans={transaction} /></div>
                                        ))
                                    }
                                </div>
                                <div className="fflgrid-two">
                                {
                                    groceries.slice(6,8).map(({id, img, title, price, transaction})=>(
                                        <div onClick={(e)=>setIsOpen(!isOpen)}><Pcards type={1} width={'150px'} height={'210px'} vim={'100%'} pdsize={'.9em'} pcsize={'1em'} id={id} title={title} price={price} img={img} trans={transaction}/></div>
                                    ))
                                }
                                </div>
                                
                            </div>
                            
                            <div className="three">
                                <h4>Our Partners</h4>
                                <div className="part-cards-container">
                                    {
                                        partners.slice(0, 4).map(({id, img, title, price, transaction})=>(
                                            <Vertice id={id} img={img} title={title} />
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="fourth-first-right">
                            
                        </div>
                    </div>
                    <Link to={"./../products"}><div className="more">More ...</div></Link>
                </div>
                <div className="fourth-first-container">
                    <div className="fourth-first-title">
                        <h3>Fashion</h3>
                        <div className="second">
                            <p>Gucci</p>
                            <p>Prada</p>
                            <p>Ferragamo</p>
                            <p>D&G</p>
                            <p>Gucci</p>
                            <p>Prada</p>
                            <p>Ferragamo</p>
                            <p>D&G</p>
                        </div>
                    </div>
                    
                    <div className="fourth-first">
                        <div className="fourth-first-left">
                            <div className="fourth-banner">
                                <img src="./fashion.jpg" alt=""/>
                            </div>
                            <div className="fflgrid">
                            {
                                product.slice(0,4).map(({id, img, title, price, transaction})=>(
                                    <div><Pcards type={2} width={'100%'} height={'200px'} pdsize={'1.3em'} pcsize={'1.6em'} id={id} title={title} price={price} img={img} thestate={isOpen} trans={transaction}>
                                        <div className='popcontainer' > 
                                            <div  className="inner-container">
                                            <div style={{color:'black', fontSize:'1em', justifySelf:'end', cursor:'pointer'}} onClick={(e)=>setIsOpen(!isOpen)}><FontAwesomeIcon icon={faClose} /></div>
                                                <ProdPop id={id} title={title} price={price} img={img}/>
                                            </div>
                                        </div>
                                        </Pcards>
                                    </div>
                                ))
                            }
                            </div>
                        </div>
                        <div className="fourth-first-right">
                            {
                                product.slice(4,6).map(({id, img, title, price, transaction})=>(
                                    <div onClick={(e)=>setIsOpen(!isOpen)}><Pcards type={1} width={'257px'} height={'320px'} vim={'100%'} pdsize={'1.1em'} pcsize={'1.5em'} id={id} title={title} price={price} img={img} trans={transaction}/></div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="more">More ...</div>
                </div>
                <div className="fourth-first-container">
                    <div className="fourth-first-title">
                        <h3>Fashion</h3>
                        <div className="second">
                            <p>Gucci</p>
                            <p>Prada</p>
                            <p>Ferragamo</p>
                            <p>D&G</p>
                            <p>Gucci</p>
                            <p>Prada</p>
                            <p>Ferragamo</p>
                            <p>D&G</p>
                        </div>
                    </div>
                    
                    <div className="fourth-first">
                        <div className="fourth-first-left">
                            <div className="fourth-banner">
                                <img src="./fashion.jpg" alt=""/>
                            </div>
                            <div className="fflgrid">
                            {
                                product.slice(0,4).map(({id, img, title, price, transaction})=>(
                                    <div><Pcards type={2} width={'100%'} height={'200px'} pdsize={'1.3em'} pcsize={'1.6em'} id={id} title={title} price={price} img={img} thestate={isOpen} trans={transaction}>
                                        <div className='popcontainer' > 
                                            <div  className="inner-container">
                                            <div style={{color:'black', fontSize:'1em', justifySelf:'end', cursor:'pointer'}} onClick={(e)=>setIsOpen(!isOpen)}><FontAwesomeIcon icon={faClose} /></div>
                                                <ProdPop id={id} title={title} price={price} img={img}/>
                                            </div>
                                        </div>
                                        </Pcards>
                                    </div>
                                ))
                            }
                            </div>
                        </div>
                        <div className="fourth-first-right">
                            {
                                product.slice(4,6).map(({id, img, title, price, transaction})=>(
                                    <div onClick={(e)=>setIsOpen(!isOpen)}><Pcards type={1} width={'257px'} height={'320px'} vim={'100%'} pdsize={'1.1em'} pcsize={'1.5em'} id={id} title={title} price={price} img={img} trans={transaction}/></div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="more">More ...</div>
                </div>
                <div className="fourth-first-container">
                    <div className="fourth-first-title">
                        <h3>Fashion</h3>
                        <div className="second">
                            <p>Gucci</p>
                            <p>Prada</p>
                            <p>Ferragamo</p>
                            <p>D&G</p>
                            <p>Gucci</p>
                            <p>Prada</p>
                            <p>Ferragamo</p>
                            <p>D&G</p>
                        </div>
                    </div>
                    
                    <div className="fourth-first">
                        <div className="fourth-first-left">
                            <div className="fourth-banner">
                                <img src="./fashion.jpg" alt=""/>
                            </div>
                            <div className="fflgrid">
                            {
                                product.slice(0,4).map(({id, img, title, price, transaction})=>(
                                    <div><Pcards type={2} width={'100%'} height={'200px'} pdsize={'1.3em'} pcsize={'1.6em'} id={id} title={title} price={price} img={img} thestate={isOpen} trans={transaction}>
                                        <div className='popcontainer' > 
                                            <div  className="inner-container">
                                            <div style={{color:'black', fontSize:'1em', justifySelf:'end', cursor:'pointer'}} onClick={(e)=>setIsOpen(!isOpen)}><FontAwesomeIcon icon={faClose} /></div>
                                                <ProdPop id={id} title={title} price={price} img={img}/>
                                            </div>
                                        </div>
                                        </Pcards>
                                    </div>
                                ))
                            }
                            </div>
                        </div>
                        <div className="fourth-first-right">
                            {
                                product.slice(4,6).map(({id, img, title, price, transaction})=>(
                                    <div onClick={(e)=>setIsOpen(!isOpen)}><Pcards type={1} width={'257px'} height={'320px'} vim={'100%'} pdsize={'1.1em'} pcsize={'1.5em'} id={id} title={title} price={price} img={img} trans={transaction}/></div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="more">More ...</div>
                </div>
                <div className="fourth-first-container">
                    <div className="fourth-first-title">
                        <h3>Fashion</h3>
                        <div className="second">
                            <p>Gucci</p>
                            <p>Prada</p>
                            <p>Ferragamo</p>
                            <p>D&G</p>
                            <p>Gucci</p>
                            <p>Prada</p>
                            <p>Ferragamo</p>
                            <p>D&G</p>
                        </div>
                    </div>
                    
                    <div className="fourth-first">
                        <div className="fourth-first-left">
                            <div className="fourth-banner">
                                <img src="./fashion.jpg" alt=""/>
                            </div>
                            <div className="fflgrid">
                            {
                                product.slice(0,4).map(({id, img, title, price, transaction})=>(
                                    <div><Pcards type={2} width={'100%'} height={'200px'} pdsize={'1.3em'} pcsize={'1.6em'} id={id} title={title} price={price} img={img} thestate={isOpen} trans={transaction}>
                                        <div className='popcontainer' > 
                                            <div  className="inner-container">
                                            <div style={{color:'black', fontSize:'1em', justifySelf:'end', cursor:'pointer'}} onClick={(e)=>setIsOpen(!isOpen)}><FontAwesomeIcon icon={faClose} /></div>
                                                <ProdPop id={id} title={title} price={price} img={img}/>
                                            </div>
                                        </div>
                                        </Pcards>
                                    </div>
                                ))
                            }
                            </div>
                        </div>
                        <div className="fourth-first-right">
                            {
                                product.slice(4,6).map(({id, img, title, price, transaction})=>(
                                    <div onClick={(e)=>setIsOpen(!isOpen)}><Pcards type={1} width={'257px'} height={'320px'} vim={'100%'} pdsize={'1.1em'} pcsize={'1.5em'} id={id} title={title} price={price} img={img} trans={transaction}/></div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="more">More ...</div>
                </div>
                <div className="fourth-first-container">
                    <div className="fourth-first-title">
                        <h3>Vehicles</h3>
                        <div className="second">
                            <p>Gucci</p>
                            <p>Prada</p>
                            <p>Ferragamo</p>
                            <p>D&G</p>
                            <p>Gucci</p>
                            <p>Prada</p>
                            <p>Ferragamo</p>
                            <p>D&G</p>
                        </div>
                    </div>
                    
                    <div className="fourth-first">
                        <div className="fourth-first-left">
                            <div className="fourth-banner">
                                <img src="./fashion.jpg" alt=""/>
                            </div>
                            <div className="fflgrid">
                            {
                                product.slice(0,4).map(({id, img, title, price, transaction})=>(
                                    <div><Pcards type={2} width={'100%'} height={'200px'} pdsize={'1.3em'} pcsize={'1.6em'} id={id} title={title} price={price} img={img} thestate={isOpen} trans={transaction}>
                                        <div className='popcontainer' > 
                                            <div  className="inner-container">
                                            <div style={{color:'black', fontSize:'1em', justifySelf:'end', cursor:'pointer'}} onClick={(e)=>setIsOpen(!isOpen)}><FontAwesomeIcon icon={faClose} /></div>
                                                <ProdPop id={id} title={title} price={price} img={img}/>
                                            </div>
                                        </div>
                                        </Pcards>
                                    </div>
                                ))
                            }
                            </div>
                        </div>
                        <div className="fourth-first-right">
                            {
                                product.slice(4,6).map(({id, img, title, price, transaction})=>(
                                    <div onClick={(e)=>setIsOpen(!isOpen)}><Pcards type={1} width={'257px'} height={'320px'} vim={'100%'} pdsize={'1.1em'} pcsize={'1.5em'} id={id} title={title} price={price} img={img} trans={transaction}/></div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="more">More ...</div>
                </div>
            </div>
        </div>
        
    )
}
export default Home