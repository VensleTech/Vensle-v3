import { faCoins, faChevronRight, faFilter, faNairaSign, faEllipsis, faChartSimple } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const SalesList = () => {
    return(
        <div className="x-box">
            <div className="x-box-top">
                <div>
                    <FontAwesomeIcon icon={faChartSimple} /> Sales History
                </div>
                <FontAwesomeIcon icon={faFilter} />
            </div>
            <div className="figure">
                <div className="type-2">
                    <div className="n">Ladies Jacket</div>
                    <div className="p"><FontAwesomeIcon icon={faNairaSign}/>15,000</div>
                    <div className="c">Nigeria</div>
                    <div className="t">5 mins ago</div>
                </div>
                <div className="type-2">
                    <div className="n">Ladies Jacket</div>
                    <div className="p"><FontAwesomeIcon icon={faNairaSign}/>15,000</div>
                    <div className="c">Nigeria</div>
                    <div className="t">5 mins ago</div>
                </div>
                <div className="type-2">
                    <div className="n">Ladies Jacket</div>
                    <div className="p"><FontAwesomeIcon icon={faNairaSign}/>15,000</div>
                    <div className="c">Nigeria</div>
                    <div className="t">5 mins ago</div>
                </div>
                <div className="type-2">
                    <div className="n">Ladies Jacket</div>
                    <div className="p"><FontAwesomeIcon icon={faNairaSign}/>15,000</div>
                    <div className="c">Nigeria</div>
                    <div className="t">5 mins ago</div>
                </div>
                <div className="type-2">
                    <div className="n">Ladies Jacket</div>
                    <div className="p"><FontAwesomeIcon icon={faNairaSign}/>15,000</div>
                    <div className="c">Nigeria</div>
                    <div className="t">5 mins ago</div>
                </div>
                <div className="type-2">
                    <div className="n">Ladies Jacket</div>
                    <div className="p"><FontAwesomeIcon icon={faNairaSign}/>15,000</div>
                    <div className="c">Nigeria</div>
                    <div className="t">5 mins ago</div>
                </div>
                <div className="type-2">
                    <div className="n">Ladies Jacket</div>
                    <div className="p"><FontAwesomeIcon icon={faNairaSign}/>15,000</div>
                    <div className="c">Nigeria</div>
                    <div className="t">5 mins ago</div>
                </div>
            </div>
        </div>
    )
}
export default SalesList