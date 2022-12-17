import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import Menu from "../reusable/menu"
import Pcards from "../reusable/pcards"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons" 
import { faChevronRight, faChevronDown, faBars, faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons"
import { faSquare } from "@fortawesome/free-solid-svg-icons"
import ReactSlider from 'react-slider'
import Drop from "../reusable/drop"
import Flyouts from "../reusable/flyouts"
import Ops from "../reusable/ops"
import Fly from "../reusable/fly"
import Psections from "../reusable/psections"
import Carousels from "../reusable/carousel"
import Vertice from "./vertice"
import axios from "axios"
import Foot from "../reusable/footer"
import Gcards from "../reusable/gcards"

const Groceries = () => {
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    const [style, setstyle] = useState(1)
    const [subcats, setsubcats] = useState([])
    const [categories, setcategories] = useState([])
    const [groceries, setgroceries] = useState([])
    const [product, setproduct] = useState([])
    useEffect(()=>{
        getstuff()
    },[])
    const getstuff = async () => {
        try {
            const partners = await axios.get('../.http://geo.vensle.com/subcat.json')

            setsubcats(partners.data)
            const categories = await axios.get('http://geo.vensle.com/api/fresh/category')
            setcategories(categories.data)
            const groceries = await axios.get('http://geo.vensle.com/api/fresh/groceries')
            setgroceries(groceries.data)

            const product = await axios.get('http://geo.vensle.com/api/products')
            setproduct(product.data)
         } catch (error) {
            console.log(error);
         }
    }
    return(
        <div>
            <Menu/>
            <div></div>
            <div className="breadcrumbs"></div>
            <div className="main">
            <h2>Groceries</h2></div>
            <div className="g-banner">
                <h3>Get fresh groceries delivered to you at the comfort of your home</h3>
                <img src="../../grocery.jpg" alt="" />
            </div>
            <div className="recent">
                <div>
                    <div className="section">
                        <div className="title">
                            <h2 style={{lineHeight:'40px', fontWeight:300}}>Hot Picks</h2>
                        </div>
                        <div className="others">
                        {    
                            groceries.slice(0,4).map(({id, gimage, name, price, cat_name, state, country,  imgfolder})=>(
                                <div><Gcards type={3} pdsize={'.9em'} pcsize={'1em'} id={id} title={name} price={price} img={gimage} imgfolder={imgfolder} information={[cat_name, state, country]}/></div>
                            ))
                        }
                        </div>
                    </div>
                </div>
                        
            </div>
            <div className="third">
                <h3 style={{textAlign:'center', lineHeight:'40px', fontWeight:300}}>Our Grocery Partners</h3>
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
            <div className="third">
            <h3 style={{lineHeight:'40px', fontWeight:300}}>Grocery Categories</h3>
                <div className="mains" style={{width:'100%'}}>
                    <div className="left">
                    {
                        categories.slice(0, 3).map(({id, image, name, group_id})=>(
                            <Vertice id={id} img={"http://geo.vensle.com/storage/category/"+image} title={name} group={group_id}/>
                        ))
                    }
                    </div>
                    <div className="middle">
                    {
                        categories.slice(3, 7).map(({id, image, name, group_id})=>(
                            <Vertice id={id} img={"http://geo.vensle.com/storage/category/"+image} title={name} group={group_id}/>
                        ))
                    }
                    </div>
                    <div className="right">
                    {
                        categories.slice(7, 11).map(({id, image, name, group_id})=>(
                            <Vertice id={id} img={"http://geo.vensle.com/storage/category/"+image} title={name} group={group_id}/>
                        ))
                    }
                    </div>
                    
                </div>
            </div>
            
            <div className="recent">
                <div>
                    <div className="section">
                        <div className="title">
                            <h2 style={{lineHeight:'40px', fontWeight:300}}>ASDA Stores</h2>
                        </div>
                        <div className="others">
                        {    
                            groceries.slice(0,4).map(({id, gimage, name, price, cat_name, state, country,  imgfolder})=>(
                                <div><Gcards type={3} pdsize={'.9em'} pcsize={'1em'} id={id} title={name} price={price} img={gimage} imgfolder={imgfolder} information={[cat_name, state, country]}/></div>
                            ))
                        }
                        </div>
                    </div>
                </div>
                        
            </div>
            <div className="recent">
                <div>
                    <div className="section">
                        <div className="title">
                            <h2 style={{lineHeight:'40px', fontWeight:300}}>Agro Fetch Stores</h2>
                        </div>
                        <div className="others">
                        {    
                            groceries.slice(0,4).map(({id, gimage, name, price, cat_name, state, country,  imgfolder})=>(
                                <div><Gcards type={3} pdsize={'.9em'} pcsize={'1em'} id={id} title={name} price={price} img={gimage} imgfolder={imgfolder} information={[cat_name, state, country]}/></div>
                            ))
                        }
                        </div>
                    </div>
                </div>
                        
            </div>
            <div className="recent">
                <div>
                    <div className="section">
                        <div className="title">
                            <h2 style={{lineHeight:'40px', fontWeight:300}}>Nilesundays Stores</h2>
                        </div>
                        <div className="others">
                        {    
                            groceries.slice(0,4).map(({id, gimage, name, price, cat_name, state, country,  imgfolder})=>(
                                <div><Gcards type={3} pdsize={'.9em'} pcsize={'1em'} id={id} title={name} price={price} img={gimage} imgfolder={imgfolder} information={[cat_name, state, country]}/></div>
                            ))
                        }
                        </div>
                    </div>
                </div>
                        
            </div>
            <div className="recent">
                <div>
                    <div className="section">
                        <div className="title">
                            <h2 style={{lineHeight:'40px', fontWeight:300}}>Vensle Stores</h2>
                        </div>
                        <div className="others">
                        {    
                            groceries.slice(0,4).map(({id, gimage, name, price, cat_name, state, country,  imgfolder})=>(
                                <div><Gcards type={3} pdsize={'.9em'} pcsize={'1em'} id={id} title={name} price={price} img={gimage} imgfolder={imgfolder} information={[cat_name, state, country]}/></div>
                            ))
                        }
                        </div>
                    </div>
                </div>
                        
            </div>
            <Foot />
        </div>
        
    )
}
export default Groceries