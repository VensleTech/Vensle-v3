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

const Subcat = () => {
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    const [style, setstyle] = useState(1)
    const [subcats, setsubcats] = useState([])
    useEffect(()=>{
        getstuff()
    },[])
    const getstuff = async () => {
        try {
            const partners = await axios.get('http://1270.0.1:8000/json-api/subcat.json')

            setsubcats(partners.data)
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
            <h2>Fashion</h2></div>
            <div className="mains">
                <div className="left">
                {
                    subcats.slice(0, 3).map(({id, img, title})=>(
                        <Vertice id={id} img={img} title={title} />
                    ))
                }
                </div>
                <div className="middle">
                {
                    subcats.slice(3, 7).map(({id, img, title})=>(
                        <Vertice id={id} img={img} title={title} />
                    ))
                }
                </div>
                <div className="right">
                {
                    subcats.slice(7, 11).map(({id, img, title})=>(
                        <Vertice id={id} img={img} title={title} />
                    ))
                }
                </div>
                    
            </div>
            <Foot />
        </div>
        
    )
}
export default Subcat