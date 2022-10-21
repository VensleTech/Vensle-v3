import { faCoins, faChevronRight, faChartSimple, faNairaSign, faEllipsis } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const SalesSummary = ({caption}) => {
    return(
        <div className="x-box">
            <div className="x-box-top">
                <FontAwesomeIcon icon={faCoins} />
                <FontAwesomeIcon icon={faEllipsis} />
                <h4>{caption}</h4>
            </div>
            <div className="figure">
                <h3><FontAwesomeIcon icon={faNairaSign}/> 185,000</h3>
            </div>
            <div>
                <p><FontAwesomeIcon icon={faChartSimple}/> 20% from last week</p>
            </div>
            <div className="hr"></div>
            <div className="x-box-report">
                <p>View report</p>
                <FontAwesomeIcon icon={faChevronRight}/>
            </div>
        </div>
    )
}
export default SalesSummary