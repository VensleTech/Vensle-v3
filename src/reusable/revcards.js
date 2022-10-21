import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"
const RevCards = () => {
    return (
        <div>
            <div className="revcards">
                <div className="title">
                    <h3>Verified purchases</h3>
                </div>
                <div className="mainrev">
                    <div className="rating">
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                    </div>
                    <div className="c-title">
                        <h4>Excellent shoe quality</h4>
                    </div>
                    <div className="comment">
                        The sole is very light and the shoe fits nicely
                    </div>
                    <div className="ident">
                        <div className="person"> 
                            <p>Oladele Martins Bamidele</p>
                        </div>
                        <div className="date">
                            <p>12-30-2022</p>
                        </div>
                    </div>
                    <div className="hr"></div>
                </div>
                
            </div>
        </div>
    )
}
export default RevCards