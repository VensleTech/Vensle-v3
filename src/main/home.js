
import Menu from "../reusable/menu"
import { useState, useRef, useEffect} from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import { faList, faPhone, faMessage, faBowlFood, faWheatAwn, faShirt, faBaby, faScrewdriverWrench, faChevronCircleRight } from "@fortawesome/free-solid-svg-icons"
import { faPaintbrush, faTree, faVolleyball, faBars, faMicrophone, faBook, faHouseChimney, faClose, faCaretLeft, faCaretRight} from "@fortawesome/free-solid-svg-icons"
import Loafers from "../loafers.jpg"
import Iphone from "../iphone.webp"
import pimage from '../prod.png'
import Pcards from "../reusable/pcards"
import ProdPop from "../reusable/prodpop"
import Carousels from "../reusable/carousel"
import Groce from '../grocerydelivery.webp'
import Vertice from "./vertice"
import axios from "axios"
import Foot from "../reusable/footer"
import Gcards from "../reusable/gcards"
const Home = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [product, setproduct] = useState([])
    const [group, setgroup] = useState([])
    const [groceries, setgroceries] = useState([])
    const [partners, setpartners] = useState([])
    useEffect(()=>{
        getparners()
    },[])
    const getparners = async () => {
        try {
            // const partners = await axios.get("http://geo.vensle.com/partners.json")
            const groceries = await axios.get("http://geo.vensle.com/api/fresh/groceries")
            const product = await axios.get("http://geo.vensle.com/api/products")
            const group = await axios.get("http://geo.vensle.com/api/group")
            // setpartners(partners.data)
            setgroceries(groceries.data)
            setproduct(product.data)
            setgroup(group.data)
        } catch (error) {
            console.log(error);
        }
    }
    const categ = product.filter(items => items.category === 174)
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
                            {
                                // <li><FontAwesomeIcon icon={faWheatAwn}/> Groceries</li>
                                // <Link to={"../../subcat"}><li><FontAwesomeIcon icon={faShirt}/>Fashion</li></Link>
                                // <li><FontAwesomeIcon icon={faBaby}/>Kids & Baby</li>
                                // <li><FontAwesomeIcon icon={faScrewdriverWrench}/>Electronics</li>
                                // <li><FontAwesomeIcon icon={faPaintbrush}/>Collectibles & Art</li>
                                // <li><FontAwesomeIcon icon={faTree}/>Home & Garden</li>
                                // <li><FontAwesomeIcon icon={faVolleyball}/>Sporting Goods</li>
                                // <li><FontAwesomeIcon icon={faBowlFood}/>General Business & Industrial</li>
                                // <li><FontAwesomeIcon icon={faMicrophone}/>Musical</li>
                                // <li><FontAwesomeIcon icon={faBowlFood}/>Food & Beverages</li>
                                // <li><FontAwesomeIcon icon={faBook}/>Books</li>
                                // <li><FontAwesomeIcon icon={faHouseChimney}/>Real Estate</li>
                                group.map(({name})=>(
                                    <Link to={"../../subcat"}><li>{name.split('(')[0]}</li></Link>
                                ))
                            }
                            
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
                        
                        product.slice(0,1).map(({id, Images, title, price, transaction, group_name, description, category_name, item_address, item_contact_number, state, country, currency})=>(
                            
                        <div>     
                        {
                            console.log(Images.split(',')[0]) 
                        }   
                            <div className="img">
                                <img src={"https://vensle.com/vensle-assets/backend/images/uploads/"+id+"/"+Images.split(',')[0]} alt=""/>
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
                            <div className="no-name">
                                <div className="table-within">
                                    <table>
                                        <tr>
                                            <td>Category</td>
                                            <td>{category_name}</td>
                                        </tr>
                                        <tr>
                                            <td>Condition</td>
                                            <td>Fairly used, Very Neat</td>
                                        </tr>
                                        <tr>
                                            <td>Address</td>
                                            <td>{item_address}</td>
                                        </tr>
                                        <tr>
                                            <td>Description</td>
                                            <td>{description.substring(0, 30)+"..."}</td>
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
                                    <Link to={"/details/"+id+"/"+title.trim().replaceAll(' ', '-').replaceAll('/', '&')}><div className='more-details'>
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
                            product.slice(1,7).map(({id, Images, title, price, transaction, group_name, category_name, item_contact_number, state, country, currency})=>(
                                <div><Pcards type={1} width={200} height={270} vim={'100%'} id={id} title={title} price={price} img={Images} information={[group_name, category_name, item_contact_number, state, country, currency]}/></div>
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
                                        groceries.slice(0,8).map(({id, gimage, name, price, cat_name, state, country,  imgfolder})=>(
                                            <div><Gcards type={2} width={'100%'} height={'100px'} pdsize={'.8em'} pcsize={'.9em'} id={id} title={name} price={price} img={gimage} imgfolder={imgfolder} information={[cat_name, state, country]}/></div>
                                        ))
                                    }
                                </div>
                                <div className="fflgrid-two">
                                {
                                    groceries.slice(6,8).map(({id, gimage, name, price, cat_name, state, country,  imgfolder})=>(
                                        <div onClick={(e)=>setIsOpen(!isOpen)}><Gcards type={1} width={'150px'} height={'210px'} vim={'100%'} pdsize={'.9em'} pcsize={'1em'} id={id} title={name} price={price} img={gimage} imgfolder={imgfolder} information={[cat_name, state, country]}/></div>
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
                        <Link to={"./../groceries"} className="more"><div >More</div> <FontAwesomeIcon icon={faChevronCircleRight}/></Link>
                    </div>
                    
                </div>

                {
                    // each block atarts here
                }
                <div className="fourth-first-container">
                    <div className="fourth-first-title">
                    {
                        product.filter(items => parseInt(items.item_group) === 7).slice(0,1).map(({group_name})=>(
                            <h3>{group_name.split('(')[0]}</h3>
                        ))
                    }
                        
                    {
                        product.filter(items => parseInt(items.item_group) === 7).slice(0,1).map(({item_group, group_name})=>(
                            <Link to={"../../subcat"} className="moore"><div >{"Categories under " + group_name.split('(')[0]+""} </div>  -></Link>
                        ))
                    }
                    </div>
                    
                    <div className="fourth-first">
                        <div className="fourth-first-left">
                            <div className="fourth-banner">
                                <img src="./baby.jpg" alt=""/>
                            </div>
                            <div className="fflgrid">
                            {
                                product.filter(items => parseInt(items.item_group) === 7).slice(0,4).map(({id, Images, title, price, transaction, group_name, category_name, item_contact_number, state, country, currency})=>(
                                    <div><Pcards type={2} width={'100%'} height={'200px'} pdsize={'1.3em'} pcsize={'1.6em'} id={id} title={title} price={price} img={Images} information={[group_name, category_name, item_contact_number, state, country, currency]}/>
                                    </div>
                                ))
                            }
                            {
                                console.log(categ)
                            }
                            </div>
                        </div>
                        <div className="fourth-first-right">
                            {
                                product.filter(items => parseInt(items.item_group) === 7).slice(4, 6).map(({id, Images, title, price, transaction, group_name, category_name, item_contact_number, state, country, currency})=>(
                                    <div onClick={(e)=>setIsOpen(!isOpen)}><Pcards type={1} width={'257px'} height={'320px'} vim={'100%'} pdsize={'1.1em'} pcsize={'1.5em'}id={id} title={title} price={price} img={Images} information={[group_name, category_name, item_contact_number, state, country, currency]}/></div>
                                ))
                            }
                        </div>
                    </div>
                    {
                        product.filter(items => parseInt(items.item_group) === 7).slice(0,1).map(({item_group, group_name})=>(
                            <Link to={"./../products/"+item_group+"/"+group_name.split('(')[0]} className="more"><div >More</div> <FontAwesomeIcon icon={faChevronCircleRight}/></Link>
                        ))
                    }
                    
                </div>
                {
                    // and ends here
                }
                {
                    // each block atarts here
                }
                <div className="fourth-first-container">
                    <div className="fourth-first-title">
                    {
                        product.filter(items => parseInt(items.item_group) === 11).slice(0,1).map(({group_name})=>(
                            <h3>{group_name.split('(')[0]}</h3>
                        ))
                    }
                    {
                        product.filter(items => parseInt(items.item_group) === 11).slice(0,1).map(({item_group, group_name})=>(
                            <Link to={"../../subcat"} className="moore"><div >{"Categories under " + group_name.split('(')[0]+""} </div>  -></Link>
                        ))
                    }
                    </div>
                    
                    <div className="fourth-first">
                        <div className="fourth-first-left">
                            <div className="fourth-banner">
                                <img src="./books.jpg" alt=""/>
                            </div>
                            <div className="fflgrid">
                            {
                                product.filter(items => parseInt(items.item_group) === 11).slice(0,4).map(({id, Images, title, price, transaction, group_name, category_name, item_contact_number, state, country, currency})=>(
                                    <div><Pcards type={2} width={'100%'} height={'200px'} pdsize={'1.3em'} pcsize={'1.6em'} id={id} title={title} price={price} img={Images} information={[group_name, category_name, item_contact_number, state, country, currency]}/>
                                    </div>
                                ))
                            }
                            {
                                console.log(categ)
                            }
                            </div>
                        </div>
                        <div className="fourth-first-right">
                            {
                                product.filter(items => parseInt(items.item_group) === 11).slice(7, 9).map(({id, Images, title, price, transaction, group_name, category_name, item_contact_number, state, country, currency})=>(
                                    <div onClick={(e)=>setIsOpen(!isOpen)}><Pcards type={1} width={'257px'} height={'320px'} vim={'100%'} pdsize={'1.1em'} pcsize={'1.5em'}id={id} title={title} price={price} img={Images} information={[group_name, category_name, item_contact_number, state, country, currency]}/></div>
                                ))
                            }
                        </div>
                    </div>
                    {
                        product.filter(items => parseInt(items.item_group) === 11).slice(0,1).map(({item_group, group_name})=>(
                            <Link to={"../../products/"+item_group+"/"+group_name.split('(')[0]} className="more"><div >More</div> <FontAwesomeIcon icon={faChevronCircleRight}/></Link>
                        ))
                    }
                    
                </div>
                {
                    // and ends here
                }
                {
                    // each block atarts here
                }
                <div className="fourth-first-container">
                    <div className="fourth-first-title">
                    {
                        product.filter(items => parseInt(items.item_group) === 2).slice(0,1).map(({group_name})=>(
                            <h3>{group_name.split('(')[0]}</h3>
                        ))
                    }
                        
                        {
                            product.filter(items => parseInt(items.item_group) === 2).slice(0,1).map(({item_group, group_name})=>(
                                <Link to={"../../subcat"} className="moore"><div >{"Categories under " + group_name.split('(')[0]+""} </div>  -></Link>
                            ))
                        }
                    </div>
                    
                    <div className="fourth-first">
                        <div className="fourth-first-left">
                            <div className="fourth-banner">
                                <img src="./fashion.jpg" alt=""/>
                            </div>
                            <div className="fflgrid">
                            {
                                product.filter(items => parseInt(items.item_group) === 2).slice(0,4).map(({id, Images, title, price, transaction, group_name, category_name, item_contact_number, state, country, currency})=>(
                                    <div><Pcards type={2} width={'100%'} height={'200px'} pdsize={'1.3em'} pcsize={'1.6em'} id={id} title={title} price={price} img={Images} information={[group_name, category_name, item_contact_number, state, country, currency]}/>
                                    </div>
                                ))
                            }
                            {
                                console.log(categ)
                            }
                            </div>
                        </div>
                        <div className="fourth-first-right">
                            {
                                product.filter(items => parseInt(items.item_group) === 2).slice(0, 2).map(({id, Images, title, price, transaction, group_name, category_name, item_contact_number, state, country, currency})=>(
                                    <div onClick={(e)=>setIsOpen(!isOpen)}><Pcards type={1} width={'257px'} height={'320px'} vim={'100%'} pdsize={'1.1em'} pcsize={'1.5em'}id={id} title={title} price={price} img={Images} information={[group_name, category_name, item_contact_number, state, country, currency]}/></div>
                                ))
                            }
                        </div>
                    </div>
                    {
                        product.filter(items => parseInt(items.item_group) === 2).slice(0,1).map(({item_group, group_name})=>(
                            <Link to={"./../products/"+item_group+"/"+group_name.split('(')[0]} className="more"><div >More</div> <FontAwesomeIcon icon={faChevronCircleRight}/></Link>
                        ))
                    }
                    
                </div>
                {
                    // and ends here
                }
                {
                    // each block atarts here
                }
                <div className="fourth-first-container">
                    <div className="fourth-first-title">
                    {
                        product.filter(items => parseInt(items.item_group) === 5).slice(0,1).map(({group_name})=>(
                            <h3>{group_name.split('(')[0]}</h3>
                        ))
                    }
                        
                    {
                        product.filter(items => parseInt(items.item_group) === 5).slice(0,1).map(({item_group, group_name})=>(
                            <Link to={"../../subcat"} className="moore"><div >{"Categories under " + group_name.split('(')[0]+""} </div>  -></Link>
                        ))
                    }
                    </div>
                    
                    <div className="fourth-first">
                        <div className="fourth-first-left">
                            <div className="fourth-banner">
                                <img src="./home.jpg" alt=""/>
                            </div>
                            <div className="fflgrid">
                            {
                                product.filter(items => parseInt(items.item_group) === 5).slice(0,4).map(({id, Images, title, price, transaction, group_name, category_name, item_contact_number, state, country, currency})=>(
                                    <div><Pcards type={2} width={'100%'} height={'200px'} pdsize={'1.3em'} pcsize={'1.6em'} id={id} title={title} price={price} img={Images} information={[group_name, category_name, item_contact_number, state, country, currency]}/>
                                    </div>
                                ))
                            }
                            {
                                console.log(categ)
                            }
                            </div>
                        </div>
                        <div className="fourth-first-right">
                            {
                                product.filter(items => parseInt(items.item_group) === 5).slice(9, 11).map(({id, Images, title, price, transaction, group_name, category_name, item_contact_number, state, country, currency})=>(
                                    <div onClick={(e)=>setIsOpen(!isOpen)}><Pcards type={1} width={'257px'} height={'320px'} vim={'100%'} pdsize={'1.1em'} pcsize={'1.5em'}id={id} title={title} price={price} img={Images} information={[group_name, category_name, item_contact_number, state, country, currency]}/></div>
                                ))
                            }
                        </div>
                    </div>
                    {
                        product.filter(items => parseInt(items.item_group) === 5).slice(0,1).map(({item_group, group_name})=>(
                            <Link to={"./../products/"+item_group+"/"+group_name.split('(')[0]} className="more"><div >More</div> <FontAwesomeIcon icon={faChevronCircleRight}/></Link>
                        ))
                    }
                    
                </div>
                {
                    // and ends here
                }
                {
                    // each block atarts here
                }
                <div className="fourth-first-container">
                    <div className="fourth-first-title">
                    {
                        product.filter(items => parseInt(items.item_group) === 9).slice(0,1).map(({group_name})=>(
                            <h3>{group_name.split('(')[0]}</h3>
                        ))
                    }
                        
                    {
                        product.filter(items => parseInt(items.item_group) === 9).slice(0,1).map(({item_group, group_name})=>(
                            <Link to={"../../subcat"} className="moore"><div >{"Categories under " + group_name.split('(')[0]+""} </div>  -></Link>
                        ))
                    }
                    </div>
                    
                    <div className="fourth-first">
                        <div className="fourth-first-left">
                            <div className="fourth-banner">
                                <img src="./musicals.jpg" alt=""/>
                            </div>
                            <div className="fflgrid">
                            {
                                product.filter(items => parseInt(items.item_group) === 9).slice(0,4).map(({id, Images, title, price, transaction, group_name, category_name, item_contact_number, state, country, currency})=>(
                                    <div><Pcards type={2} width={'100%'} height={'200px'} pdsize={'1.3em'} pcsize={'1.6em'} id={id} title={title} price={price} img={Images} information={[group_name, category_name, item_contact_number, state, country, currency]}/>
                                    </div>
                                ))
                            }
                            {
                                console.log(categ)
                            }
                            </div>
                        </div>
                        <div className="fourth-first-right">
                            {
                                product.filter(items => parseInt(items.item_group) === 9).slice(4,6).map(({id, Images, title, price, transaction, group_name, category_name, item_contact_number, state, country, currency})=>(
                                    <div onClick={(e)=>setIsOpen(!isOpen)}><Pcards type={1} width={'257px'} height={'320px'} vim={'100%'} pdsize={'1.1em'} pcsize={'1.5em'}id={id} title={title} price={price} img={Images} information={[group_name, category_name, item_contact_number, state, country, currency]}/></div>
                                ))
                            }
                        </div>
                    </div>
                    {
                        product.filter(items => parseInt(items.item_group) === 9).slice(0,1).map(({item_group, group_name})=>(
                            <Link to={"./../products/"+item_group+"/"+group_name.split('(')[0]} className="more"><div >More</div> <FontAwesomeIcon icon={faChevronCircleRight}/></Link>
                        ))
                    }
                    
                </div>
                {
                    // and ends here
                }
                
            </div>
            <Foot />
        </div>
        
    )
}
export default Home