import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
const Search = () => {
    return (
        <div className="search">
            <input type='text' placeholder="Search product"/>
            <div className="s-right">
                <div className="cat">
                    <p>All Categories</p>
                    <p><FontAwesomeIcon icon={faCaretDown} /></p>
                </div>
                <div className="but">
                    <Link to={"../../search/"+1}><FontAwesomeIcon icon={faSearch} /></Link>
                </div>
            </div>
            
        </div>
    )
}
export default Search