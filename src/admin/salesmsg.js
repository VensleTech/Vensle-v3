import { faCoins, faChevronRight, faFilter, faNairaSign, faEllipsis, faChartSimple } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Good from '../prod.png'
import ProdDisplay from "./proddisplay"
import { format, render, cancel, register } from 'timeago.js';

const SalesMsg = ({title, usage, prod}) => {
    return(
        <div className="x-box">
            <div className="x-box-tops">
                <div className="title">
                   {title}
                </div>
            </div>
            {
                usage === 1 ?
                <div className="figures">
                {
                    prod.map(({id, msg, chatname, time})=>(
                        <div className="type-2" key={id}>
                            <div className="f-img">
                                {/* <img src={Good} alt=''/> */}
                                <p>{chatname.substr(0,1)}</p>
                            </div>
                            <div className="msgs">
                                <h3>{msg}</h3>    
                                <p>{chatname}</p>    
                                <span>{format(Date.parse(time.substr(0, 19)), 'en_US')}</span>    
                            </div>
                        </div>
                    ))
                }
            </div>
            : 
            usage === 2 ?
            <div className="centerstage">
            No new notifications
        </div>
        :
        <div className="centerstage">
            {
                prod.map((product)=>(
                    <div><ProdDisplay type={2} width={'100%'} height={'180px'} pdsize={'1.2em'} pcsize={'1.6em'} prod={product} /></div>
                ))
            }
        </div>
            }
        </div>
    )
}
export default SalesMsg