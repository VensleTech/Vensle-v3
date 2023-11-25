import { useState, useEffect, useContext } from "react"
import { faUser, faLocationDot, faFilter,faArrowRight, faPaperPlane, faClose } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Sidebar from "./sidebar"
import Menu from "./menu"
import ReusableTable from "./reusabletable"
import MessageTable from "./messagetable"
import Popmessage from "./popmessage"
import Pusher from 'pusher-js'
import axios from "axios"
import { UserContext } from "../auth/usercontext"

const Contact = () => {

    const {details:{id:identifyer, name, authlev, business_name, email, phone, userlocation, address },  setDetails} = useContext(UserContext)
    const [IsOpen, setIsOpen] = useState(true)
    const [groceries, setgroceries] = useState([])
    const [prcard, setprcard] = useState([])
    const [message, setMessage] = useState('')
    const [chatscard, setchatscard] = useState([])
    const [last, setlast] = useState([])
    const [fresh, setfresh] = useState(0)
    useEffect(()=>{
        authorise()
        // setfresh(rer)
      }, [])

      const send = async ()=>{
       // console.log('clicked')
        var data = {
            senderid:''+identifyer+'',
            receiverid:''+1,
            productid:''+0,
            message:message
        };
        setchatscard([...chatscard, {
              message:message,
              position:1
            }]);
        try {
            const response = await axios.post('http://vensle.com/api/api/message', data);
            
               // console.log(response.data);
          } catch (err) {
                 // console.log(err)
            // setpayload('An error occured');
          }
        }
  
        // PUSHER
        useEffect(() => {
          // Pusher.logToConsole = true;
          var pusher = new Pusher('2ee6d4aa15f34a5f2876', {
            cluster: 'eu'
          });
          var channel = pusher.subscribe('chat');
          channel.bind('message', function(data) {
              // ALL.push(data);
              setlast(data)
              setfresh(fresh+1)
          })
      }, [])
  
      const authorise = () =>{
          if(last.length > 1 && parseInt(last.receiverid) === 1){
             // console.log(parseInt(last[0].receiverid))
              //// console.log('refresh '+ refr + ' times')
             // console.log('a match')
          }
          else{
             // console.log(parseInt(last.receiverid))
             // console.log(1)
             // console.log('not a match')
          }
      }
    return(
        <div>
            <Menu />
            <div className="admin-sec">
                <Sidebar/>
                <div className="adm-main">
                    <div className="breadcrumbs-bar">
                        <div>Home <FontAwesomeIcon icon={faArrowRight} /> Messages</div>
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
                                            <p>{name}</p>
                                            {
                                            chatscard.map(({message, position})=>(
                                                position === 0 ? 
                                                <div className="incoming">
                                                {message}
                                                </div>
                                                :
                                                <div className="outgoing">
                                                {message}
                                                </div>
                                            ))
                                            }
                                            
                                        </div>
                                        <div className="message-field">
                                            <input type="text" placeholder="Write a message" onChange={(e)=>setMessage(e.target.value)} />
                                            <div onClick={send}><FontAwesomeIcon icon={faPaperPlane} className="send-button"/></div>
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