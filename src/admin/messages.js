import { useState } from "react"
import { faUser, faLocationDot, faFilter } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Sidebar from "./sidebar"
import Menu from "./menu"
import ReusableTable from "./reusabletable"
import MessageTable from "./messagetable"
const Messages = () => {
    const [groceries, setgroceries] = useState([
        {
            id:1,
            title:"Solid White leather shoes",
            sender:"Sandra",
            msgbody:"I need a urgent supply of Goods"
        },
        {
            id:2,
            title:"Solid White leather shoes",
            sender:"Melissa",
            msgbody:"Where can we get the product from at good price?"
        },
        {
            id:3,
            title:"Solid White leather shoes",
            sender:"Melissa",
            msgbody:"Musa just texted me"
        },
        {
            id:4,
            title:"Solid White leather shoes",
            sender:"Cassie",
            msgbody:"Keep the change. I like your customer service"
        },
        {
            id:5,
            title:"Solid White leather shoes",
            sender:"Sonia",
            msgbody:"Call this number and you will be attended to"
        },
        {
            id:6,
            title:"Solid White leather shoes",
            sender:"Jacob",
            msgbody:"I have a hard time processing your request"
        },
        {
            id:7,
            title:"Solid White leather shoes",
            sender:"Melissa",
            msgbody:"I havent had some good rest in days"
        }
    ])
    return(
        <div>
            <Menu />
            <div className="admin-sec">
                <Sidebar/>
                <div className="adm-main">
                    <div className="breadcrumbs-bar">
                        <div>Home -> Messages</div>
                        <div><span>Abudonnigeria</span><FontAwesomeIcon icon={faUser}/></div>
                    </div>
                    <div className="top-trending">
                        <h3>Messages</h3>
                        <div> <FontAwesomeIcon icon={faLocationDot} />Nigeria</div>
                    </div>
                    <div className="top-trending-list">
                    {
                        // groceries.slice(0,8).map(({id, img, title, price, transaction})=>(
                        //     <div><Pcards type={2} width={'100%'} height={'100px'} pdsize={'.8em'} pcsize={'.9em'} id={id} title={title} price={price} img={img} trans={transaction} /></div>
                        // ))
                    }
                    <div className="table-container">
                        <div className="table-top">
                            <div>
                                <select>
                                    <option>Inbox</option>
                                    <option>Outbox</option>
                                    <option>Drafts</option>
                                </select>
                            </div>
                            <p></p>
                        </div>
                        <div className="reusable-table-two" style={{border:'none', textTransform:'uppercase', fontSize:'smaller', fontWeight:'700', color:'rgba(0,0,0,.6)', height:'20px', padding:'20px 0 0 0', marginBottom:'20px'}}>
                            <div>SN</div>
                            <div>From</div>
                            <div>Message</div>
                            <div>Time</div>
                            <div>Action</div>
                        </div>
                        {
                            groceries.slice(0,8).map(({id, title, sender, msgbody})=>(
                            <div><MessageTable id={id} title={title} sender={sender} body={msgbody}/></div>
                        ))
                        }
                    </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Messages