import { faCoins, faChevronRight, faChartSimple, faNairaSign, faEllipsis } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
const SalesSummary = ({caption, num, icons}) => {
    return(
        <div className="x-box">
            <div className="x-box-top">
                <img src={icons} alt=''/>
                <h3>{num}</h3>
                <h4>{caption}</h4>
            </div>
        </div>
    )
}
export default SalesSummary