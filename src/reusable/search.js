import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link, useSearchParams } from "react-router-dom"
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from "react"
import Dropdown from "./dropdown"
import Foot from "./footer"
import axios from "axios"

const Search = () => {
    const getreadstate = (readstate)=> {
        setopenCategories(!openCategories)
    }
    const getcat = (cat)=> {
        setcats(cat)
    }
    const [categories, setcategories] = useState([])
    const [openCategories, setopenCategories] = useState(false)
    const [gcategories, setgcategories] = useState([])
    const [cats, setcats] = useState('All')
    const [word, setword] = useState('')
    useEffect(()=>{
        getparners()
    },[])
    const getparners = async () => {
        try {
            const categories = await axios.get('http://geo.vensle.com/api/group')
            setcategories(categories.data)
            const groupcategories = await axios.get('http://geo.vensle.com/api/groupcat')
            setgcategories(groupcategories.data)
         } catch (error) {
            console.log(error);
         }
    }
    return (
        <div className="search">
            <input type='text' placeholder="Search product" onChange={(e)=>setword(e.target.value)}/>
            <div className="s-right">
                <div className="cat">
                    <p>{cats}</p>
                    <p><FontAwesomeIcon icon={faCaretDown} onClick={(e)=>setopenCategories(!openCategories)} style={{cursor:'pointer'}}/></p>
                </div>
                {
                    openCategories === true ?

                    <Dropdown position={'absolute'} margin={'75px -100px'} title={'All categories'} gc={gcategories} getreadstate={getreadstate} getcat={getcat}  type={'info'}/>
                    :
                    null
                }
                <div className="but">
                    {word === '' ? <FontAwesomeIcon icon={faSearch} /> : <Link to={"../../search/"+cats.trim().replaceAll('-', ',').replaceAll(' ', '-').replaceAll('/', '&')+"/"+word.trim().replaceAll(' ', '-').replaceAll('/', '&')}><FontAwesomeIcon icon={faSearch} /></Link>}
                </div>
            </div>
        </div>
    )
}
export default Search