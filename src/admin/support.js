import { useState } from "react"
import { faUser, faLocationDot, faFilter, faPaperPlane, faClose } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Sidebar from "./sidebar"
import Menu from "./menu"
import ReusableTable from "./reusabletable"
import MessageTable from "./messagetable"
import Popmessage from "./popmessage"
const Contact = () => {
    const [IsOpen, setIsOpen] = useState(true)
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
                    {IsOpen === true ?
                        <div className='popcontainer' > 
                            <div  className="inner-container" style={{display:'block'}}>
                                <div className="up-bar">
                                    <div>Contact Support</div>
                                    <div style={{color:'black', fontSize:'1em', justifySelf:'end', cursor:'pointer'}} onClick={(e)=>setIsOpen(!IsOpen)}><FontAwesomeIcon icon={faClose} /></div>
                                </div>
                                <Popmessage>
                                    <div className="msg-box">
                                        <div className="chat-box">
                                            <p>James Boluwatife</p>
                                            <div className="incoming">
                                                Please can I have this product at
                                                a cheaper rate
                                            </div>
                                            <div className="outgoing">
                                                Why not! How soon do you need
                                                the product?
                                            </div>
                                        </div>
                                        <div className="message-field">
                                            <input type="text" placeholder="Write a message"/>
                                            <FontAwesomeIcon icon={faPaperPlane} className="send-button"/>
                                        </div>
                                    </div>
                                </Popmessage>
                            </div>
                        </div>:null
                    }
                </div>
            
            </div>
        </div>
    )
}
export default Contact