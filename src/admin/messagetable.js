import { useState, useEffect, useRef, createRef} from "react"
import {Link} from 'react-router-dom'
import { faHeart, faLocationDot, faBars,faClose, faStar, faEye, faHandshake, faTruck, faStarHalfAlt, faNairaSign, faMessage, faPaperPlane } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Drop from "../reusable/drop"
import Ops from "../reusable/ops"
import Search from "../reusable/search"
import Pcards from "../reusable/pcards"
import Fly from "../reusable/fly"
import ProdPop from "../reusable/prodpop"
import Popmessage from "./popmessage"
import axios from "axios"
import Mcards from "../reusable/mcards"
import Pusher from 'pusher-js'
import { format} from 'timeago.js';
const MessageTable = ({id, sender, body, time, chatid, prod, identify, pair, rer}) => {
    const [isOpen, setIsOpen] = useState(false)
    const [prcard, setprcard] = useState([])
    const [prodid, setprodid] = useState(prod)
    const [message, setMessage] = useState('')
    const [chatscard, setchatscard] = useState([])
    const [last, setlast] = useState([])
    const [fresh, setfresh] = useState(0)
    let ALL = []
    const acpr = useRef([])
    const chatting = useRef(null)
    acpr.current=[];

    const addto =(all)=>{
      if(all && !acpr.current.includes(all)){
        acpr.current.push(all)
      }
    }
    // setTimeout(() => {
    //   setfresh(fresh+4)
    // }, 4000);


    useEffect(()=>{
      authorise()
      // setfresh(rer)
    }, [rer])

    useEffect(()=>{
        axe()
    }, [chatid])

    useEffect(()=>{
      chat()
      chatting.current?.scrollIntoView({behaviour: 'smooth'})
  }, [prodid, last])

  useEffect(()=>{
    chatting.current?.scrollIntoView({behaviour: 'smooth'})
  }, [chatscard])

  useEffect(() => {
      highlight()
  }, [prcard])

    const axe =async ()=>{
        var data ={accountid:''+identify+'',messageid:chatid};
        try {
			const response = await axios.post('http://vensle.com/api/api/productsofchat', data);
            setprcard(response.data);
            //// console.log(response.data);
		} catch (err) {
           // console.log(err)
			// setpayload('An error occured');
		}
    } 
    const chat =async ()=>{
       // console.log('working')
        var data ={accountid:''+identify+'',messageid:chatid,productid:prodid};
        try {
			const response = await axios.post('http://vensle.com/api/api/chat', data);
            setchatscard(response.data);
            //// console.log(response.data);
      } catch (err) {
             // console.log(err)
        // setpayload('An error occured');
      }
    }
    const send = async ()=>{
     // console.log('clicked')
      var data = {
          senderid:''+identify+'',
          receiverid:''+pair+'',
          productid:prodid,
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
        var pusher = new Pusher(process.env.REACT_APP_PUSHER, {
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
        if(last.length > 1 && parseInt(last.receiverid) === identify){
           // console.log(parseInt(last[0].receiverid))
            //// console.log('refresh '+ refr + ' times')
           // console.log('a match')
        }
        else{
            //// console.log(parseInt(last[0].receiverid))
           // console.log(identify)
           // console.log('not a match')
        }
    }

    // highlight the last product

    const highlight = () => {
      if(acpr.current.length > 0){
      acpr.current[acpr.current.length-1].style.opacity = 1
      const lore = acpr.current.filter(element=> element !== acpr.current[acpr.current.length-1])
        for (let i = 0; i < lore.length; i++) {
          lore[i].style.opacity = 0.3
        }
      }
      }
    return(
        <div className="reusable-table-two-">
        <div className="big-scr">
            <div>{id+1}</div>
            <div>{sender}</div>
            <div>{body}</div>
            <div>{format(Date.parse(time.substr(0, 19)), 'en_US')}</div>
            <div className="viewer" onClick={(e)=>setIsOpen(!isOpen)} ><FontAwesomeIcon icon={faEye}/> View</div>
        </div>
            <div className="small-table" onClick={(e)=>setIsOpen(!isOpen)}>
                        <div className="dp">{sender.substr(0,1)}</div>
                        <div className="chat-inform">
                            <div>{sender}</div>
                            <div>{body}</div>
                        </div>
                        <div className="time">7:17am</div>
            </div>
            {isOpen === true ?
                <div className='popcontainer' > 
                    <div  className="inner-container" style={{display:'block'}}>
                        <div className="up-bar">
                            <div>Thread</div>
                            <div style={{color:'black', fontSize:'1em', justifySelf:'end', cursor:'pointer'}} onClick={(e)=>setIsOpen(!isOpen)}><FontAwesomeIcon icon={faClose} /></div>
                        </div>
                        <Popmessage id={id} >
                            <div className="msg-box">
                                <div className="msg-pop2">
                                    {
                                      // prcard.map(({id, Images, title, price, transaction, group_name, category_name, item_contact_number, state, country, currency}, index)=>(
                                      //     <div 
                                      //     onClick={(e)=>{setprodid(''+id+''); 
                                      //     //// console.log(e.currentTarget)
                                      //     //// console.log(acpr.current[index])
                                      //         if(e.currentTarget === acpr.current[index]){
                                      //           acpr.current[index].style.opacity = 1
                                      //             // acpr.current[index].style.border = '1px solid red'
                                      //           const lore = acpr.current.filter(element=> element !== e.currentTarget)
                                      //           for (let i = 0; i < lore.length; i++) {
                                      //             lore[i].style.opacity = 0.3
                                      //           }
                                      //         }
                                      //       } 
                                      //     }
                                      //     style={{cursor:'pointer', borderRadius:'10px', marginBottom:'10px'}} 
                                      //     key={index}
                                      //     ref={addto}
                                      //     >
                                      //     <Mcards type={2} width={'100%'} height={'100px'} pdsize={'1.1em'} pcsize={'1.2em'} id={id} title={title} price={price} img={Images} information={[group_name, category_name, item_contact_number, state, country, currency]}/></div>
                                      //   ))
                                    }
                                    
                                </div>
                                <div className="chat-box">
                                    <p>{sender}</p>
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
                                    
                                    <div ref={chatting} />
                                </div>
                                <div className="message-field">
                                    <input type="text" placeholder="Write a message" onChange={(e)=>setMessage(e.target.value)} />
                                    <div onClick={send}><FontAwesomeIcon icon={faPaperPlane} className="send-button"/></div>
                                </div>
                            </div>
                            <div className="msg-pop">
                                {
                                  // prcard.map(({id, Images, title, price, transaction, group_name, category_name, item_contact_number, state, country, currency}, index)=>(
                                  //     <div 
                                  //     onClick={(e)=>{setprodid(''+id+''); 
                                  //     //// console.log(e.currentTarget)
                                  //     //// console.log(acpr.current[index])
                                  //         if(e.currentTarget === acpr.current[index]){
                                  //           acpr.current[index].style.opacity = 1
                                  //             // acpr.current[index].style.border = '1px solid red'
                                  //           const lore = acpr.current.filter(element=> element !== e.currentTarget)
                                  //           for (let i = 0; i < lore.length; i++) {
                                  //             lore[i].style.opacity = 0.3
                                  //           }
                                  //         }
                                  //       } 
                                  //     }
                                  //     style={{cursor:'pointer', borderRadius:'10px', marginBottom:'10px'}} 
                                  //     key={index}
                                  //     ref={addto}
                                  //     >
                                  //     <Mcards type={2} width={'100%'} height={'100px'} pdsize={'1.1em'} pcsize={'1.2em'} id={id} title={title} price={price} img={Images} information={[group_name, category_name, item_contact_number, state, country, currency]}/></div>
                                  //   ))
                                }
                                
                            </div>
                        </Popmessage>
                    </div>
                </div>: null
            }
        </div>
    )
}
export default MessageTable