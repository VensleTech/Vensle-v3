import { useState, useEffect, useContext } from "react"
import { faUser, faLocationDot, faCaretRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Sidebar from "./sidebar"
import Menu from "./menu"
import ReusableTable from "./reusabletable"
import MessageTable from "./messagetable"
import axios from "axios"
import { UserContext } from "../auth/usercontext"
import Pusher from 'pusher-js'


// AN ISSUE EXISTS HERE
const Messages = () => {
    const {details:{id:identifyer, name, authlev, business_name, email, phone, userlocation, address },  setDetails} = useContext(UserContext)
   
    const [messages, setmessages] = useState([])
    let allmsg =[]
    const [last, setlast] = useState([])
    const [refr, setrefr] = useState(0)
    useEffect(()=>{
        axe()
    }, [refr])
    useEffect(()=>{
        authorise()
    }, [last])
    //// console.log(last[0])
    const axe =async ()=>{
        //// console.log('coming up')
        var data ={accountid:''+identifyer};

       // console.log(data)
        try {
			const response = await axios.post('http://vensle.com/api/api/lastmessage', data);
           // console.log(response.data)
            setmessages(response.data);
            // setlast(response.data[0].msg);
           // console.log(response.data);
		} catch (err) {
           // console.log(err)
			// setpayload('An error occured');
		}
    }
    // PUSHER
    useEffect(() => {
        var pusher = new Pusher(process.env.REACT_APP_PUSHER, {
          cluster: 'eu'
        });
        var channel = pusher.subscribe('chat');
        channel.bind('message', function(data) {
            // allmsg.push(data);
            setlast(data)
        })
    }, [])
    const authorise = () =>{
        if(last.length > 1 && parseInt(last.receiverid) === identifyer){
            setrefr(refr+1)
        }
        else{
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
                        <div>Home <FontAwesomeIcon icon={faCaretRight} /> Messages</div>
                        <div><span>{name}</span><FontAwesomeIcon icon={faUser}/></div>
                    </div>
                    <div className="top-trending">
                        <h3>Messages</h3>
                        <div> <FontAwesomeIcon icon={faLocationDot} />{userlocation.country}</div>
                    </div>
                    <div className="top-trending-list">
                    <div className="table-container">
                        <div className="reusable-table-two" style={{border:'none', textTransform:'uppercase', fontSize:'smaller', fontWeight:'700', color:'rgba(0,0,0,.6)', height:'20px', padding:'20px 0 0 0', marginBottom:'20px'}}>
                            <div>SN</div>
                            <div>From</div>
                            <div>Message</div>
                            <div>Time</div>
                            <div>Action</div>
                        </div>
                        {
                            messages.map(({id, chatname, chatid, msg, time, prod, receiver}, i)=>(
                            <div key={id}><MessageTable id={i} sender={chatname} body={msg} time={time} chatid={chatid} prod={prod} pair={receiver} identify={identifyer} last={last} rer={refr}/></div>
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