import {useState, useEffect} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import Flyouts from './flyouts'
import axios from 'axios'
const Fly = ({getcats, info, icon, titles}) => {
    const [categories, setcategories] = useState([])
    useEffect(()=>{
        getparners()
    },[])
    const getparners = async () => {
        try {
            const categories = await axios.get('http://geo.vensle.com/api/states')
            setcategories(categories.data)
         } catch (error) {
            console.log(error);
         }
    }
    const getreadstate = (readstate)=> {
        setopenfly(!openfly)
    }
    const getcat = (cat, type)=> {
        // setfill({...fill, type:cat})
        // console.log(cat + ' '+type)
        getcats(cat,type)
    }
    const [openfly, setopenfly] = useState(false)
    
    return(
        <div>
            <div className="brands" onClick={()=>setopenfly(!openfly)} style={{cursor:'pointer'}}>
                <p>{icon} {info}</p><FontAwesomeIcon icon={faChevronRight}  style={{cursor:'pointer'}} className="rr"/>
            </div>
            {
                openfly === true ? <Flyouts position={'fixed'} align={'center'} margin={'0'} title={titles} icon={''} cat={categories} background={'rgba(0, 0,0, 0.2)'} getreadstate={getreadstate} getcat={getcat}/>
                : null
            }
            <div className="hr"></div>
        </div>
    )
}
export default Fly