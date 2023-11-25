import { useEffect, useRef, useState, useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import ap from '../apple-icon.webp'
import go from '../google.png'
import fb from '../Facebook.webp'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faCheckCircle, faTrash, faCreditCard,faClose,faBars, faBasketShopping, faCartShopping } from "@fortawesome/free-solid-svg-icons"
import axios from "axios"
import {UserContext} from '../auth/usercontext'
import { LoginSocialApple, LoginSocialFacebook, LoginSocialGoogle } from "reactjs-social-login"
import { PaystackButton } from "react-paystack"
import Map from "../reusable/maps"


const Cart = () => {

    // Destructure store
    const {details:{userlocation, item,specialref}, details, setDetails} = useContext(UserContext)

    // cummulative
    
    let groups = Object.entries(item.reduce((acc, currentItem) => {
        acc[currentItem.currency] = acc[currentItem.currency] || [];
        acc[currentItem.currency].push(currentItem)
        return acc
    }, {}));
    const sum = item.reduce((accumulator, object) => {
        return accumulator + (object.quantity*object.price)
     }, 0);

    
    function htmlDecode(input){
        var e = document.createElement('div');
        e.innerHTML = input;
        return e.childNodes[0].nodeValue;
      }
     
    // states
    const nav = useNavigate()
    const [done, setdone] = useState(false)
    const [msg, setmsg] = useState(false)
    const [popmap, setpopmap] = useState(false)
    const [radius, setradius] = useState(120)
    const [acc, setacc] = useState({
        name:'',
        custref:'',
        email:'',
        phone:'',
        shipping:userlocation.city+', '+userlocation.country
    })
    const [success, setsuccess] = useState(0)
    const [info, setinfo] = useState(0)
    const [pop, setpop] = useState(false)
    const [cartitems, setcartitems] = useState(item)
    const [facebook, setfacebook] = useState({})
    const [google, setgoogle] = useState({})
    const [signed, setsigned] = useState('')
    const [currentproducts, setcurrentproducts] = useState([])
    const [currentcurrency, setcurrentcurrency] = useState()


    // effects

    useEffect(()=>{
        const data =  {
                 'full_name': facebook.name,
                 'email': facebook.email,
                 'phone': 'xxxxxx',
                 'address': 'xxxx',
                 'password': facebook.name+' '+facebook.email,
               }
         fbs(data)
     },[facebook])
     useEffect(()=>{
         const data =  {
                  'full_name': google.name,
                  'email': google.email,
                  'phone': 'xxxxxx',
                  'address': 'xxxx',
                  'password': google.name+' '+google.email,
                }
          fbs(data)
      },[google])

    // Refs
    const flash = useRef('')
    const ham = useRef('')

    // pure functions
    
    const reveal = (ref) => {
        if (ref.current.style.display === 'grid') {
            ref.current.style.display = 'none'
        }
        else{
            ref.current.style.display = 'grid'
        }
        
    }

     const add = (id) => {
        cartitems.forEach((items)=>{
            if(items.productid === id){
                items.quantity = items.quantity + 1
               // console.log(items.product)
                // setsuccess(1)
            }
        })
    setinfo(info-1)
    
    } 
    const reduce = (id) => {
        cartitems.forEach((items)=>{
            if(items.productid=== id){
                if(items.quantity > 1){
                    items.quantity = items.quantity - 1
                    // setsuccess(2)
                }
            }
        })
       // console.log(item)
    setinfo(info+1)
    } 
    
     const remove = (id) =>{
        let index = cartitems.findIndex(item=>item.productid === id);
       // console.log(index)
       // console.log(cartitems.splice(index, 1))
        setcartitems(cartitems)
        setinfo(info-1)

     }
    const accumulate = (currency) => {
        const products = item.filter(items=>items.currency === currency)
        var sums = products.reduce((accumulator, item) => {
            return accumulator + item.quantity * item.price;
        }, 0);
        return sums
     }
     const checkout = (currency) => {
       // console.log(currency)
        const products = item.filter(items=>items.currency === currency)
        setcurrentproducts(products)
        setcurrentcurrency(currency)
        setpop(!pop)
        
     }
    // axios
    var coins = []
    const pushOrd = async() =>{
        for (let index = 0; index < currentproducts.length; index++) {
            coins.push(currentproducts[index].productid+'+'+currentproducts[index].product+'+'+currentproducts[index].price*currentproducts[index].quantity+'+'+currentproducts[index].quantity+'+'+currentproducts[index].currency+'+'+currentproducts[index].vendorid);
        } 
        //convert all the individual money to the currency of the country
        const data = {
            products:coins,
            customerref: acc.custref,
            loc: userlocation.city+', '+userlocation.country,
            price: ''+accumulate(currentcurrency),
        }
        try {
			const response = await axios.post('http://vensle.com/api/api/order', data);
                setmsg(response.data.msg);
                setdone(true)
                let remainder = cartitems.filter(prod => prod.currency !== currentcurrency)
                setDetails( {...details,
                    item:remainder
                })
            //     setDetails(current => {

            //     const {submit, ...rest} = current;
            //     return rest;
            //   });
		} catch (err) {
           // console.log(err)
			// setmsg('An error occured');
		}
    }
    const fbs =async (data)=>{
       // console.log('clicked')
        try {
			const response = await axios.post('http://vensle.com/api/api/lauth', data);
            if(response.data){
                const {id,full_name, business_name, email, address, phone, a_lev,token } = response.data
                setDetails({...details, 
                    id:id,
                    name:full_name,
                    authlev:a_lev,
                    business_name: '',
                    email: email,
                    phone: '',
                    address: '',
                    specialref:token
                })
                const itemize = {...details,
                    id:id,
                    name:full_name,
                    authlev:a_lev,
                    business_name: '',
                    email: email,
                    phone: '',
                    address: '',
                    specialref:token
                }
                localStorage.setItem('logs', JSON.stringify(itemize))
                // nav('/admin/profile')
                setsigned(true)
                } 
            else{
                try {
                    const response = await axios.post('http://vensle.com/api/api/rauth', data);
                    const {id,full_name, business_name, email, address, phone, a_lev, token} = response.data
                    setDetails({...details, 
                        id:id,
                        name:full_name,
                        authlev:a_lev,
                        business_name: '',
                        email: email,
                        phone: '',
                        address: '',
                        specialref:token
                    })
                    const itemize = {...details,
                        id:id,
                        name:full_name,
                        authlev:a_lev,
                        business_name: '',
                        email: email,
                        phone: '',
                        address: '',
                        specialref:token
                    }
                    localStorage.setItem('logs', JSON.stringify(itemize))
                    // nav('/admin/profile')
                    setsigned(true)
                }
                catch (err) {
                       // console.log(err)
                    }
                }
		} catch (err) {
           // console.log(err)
		}
        
        }
   
    
    // paystack
    const componentProps = {
        reference:(new Date()).getTime().toString(),
        email:acc.email,
        amount:accumulate(currentcurrency)*100,
        metadata: {
          name:details.name,
          phone:details.phone,
        },
        publicKey:process.env.REACT_APP_PAYS,
        text: "Pay now",
        onSuccess: ({ reference }) => { 
            pushOrd()
        }
    }

      // callbacks
    const close = ()=> {
        setpopmap(false)
    }
    const rad = (name)=> {
        setradius(name)
    }

    const check = () =>{
        if (acc.email ===  '' || acc.phone === '' || acc.name ===''){
            setsigned(false)
           // console.log('jgjffgjfffhd')
        }
        else{
            setacc({...acc, custref:'guest'+getRndInteger(1000, 200000000)})
           // console.log(acc)
            setsigned(true)
        }
    }
    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
      }

   // console.log(Object.entries(groups))
    return (
        <div className="sign">
        <div className="topbar">
            <div className="logo">
                <Link to={'/'}>Vensle</Link>
            </div>
            <div className="rightside">
                <div></div>
                <div><FontAwesomeIcon icon={faBars} onClick={(e)=>reveal(ham)}/></div>
                    <div></div>
                    <div ref={flash}>Start Selling</div>
                </div>
            </div>
            <div className="car">
            <h2 className="carh2">Items</h2>
            {
                    cartitems.length < 1 ? 
                    
                    <div className="empty">
                        <div className="rotate">
                        <FontAwesomeIcon icon={faCartShopping}/>
                        </div>
                        <p>You have no items in shopping basket</p>
                    </div> 
                    
                    :
                    groups.map((a, i)=>(
                    <div className="elon-title">
                        <div className="elontitle-holder"><h2>Purchased in {htmlDecode(a[0])}</h2></div>
                        <div className="tableau-head">
                            <div>S/N</div>
                            <div>Item name</div>
                            <div>Price</div>
                            <div>Quantity</div>
                            <div>Total</div>
                            <div></div>
                        </div>
                        {
                            a[1].map(({id, product, price,quantity, productid}, i)=>(
                                <div className="tableau" key={id}>
                                    <div>{i+1}</div>
                                    <div>{product.length > 10 ? product.substr(0,10) + '...' : product}</div>
                                    <div>{htmlDecode((a[0]))+parseInt(price)}</div>
                                    <div><span  onClick={(e)=>reduce(productid)}>-</span><span>{quantity}</span> <span onClick={(e)=>add(productid)}>+</span></div>
                                    <div>{htmlDecode((a[0])) + quantity*price}</div>
                                    <div title="Remove item" style={{color:'red'}}onClick={(e)=>remove(productid)}><FontAwesomeIcon icon={faTrash} /> Remove</div>
                                </div>
                            ))
                        }
                        <div className="grand">Grand total = {htmlDecode(a[0]) + accumulate(a[0])}</div>
                        <div className="lower">
                            {
                                cartitems.length > 0 ?<div className="pay" onClick={(e)=>checkout(a[0])}><FontAwesomeIcon icon={faCreditCard}/> Pay</div>:''
                            }
                            
                        </div>
                    </div>
                    

                   ))
                }
                {
                    success === 1 ?
                    <div className="added2" onClick={(e)=>setsuccess(!success)}><FontAwesomeIcon icon={faCheckCircle}/> Quantity added</div>
                    :
                    success ===2 ?
                    <div className="added2" onClick={(e)=>setsuccess(!success)}><FontAwesomeIcon icon={faCheckCircle}/>  Quantity reduced</div>
                    : ''
                }
                {
                pop === true ?
                <div className="popup">
                    {
                        done === true ?
                        <div className="pop-content">
                            <div className="pop-head">
                                <h2>Checkout</h2>
                                <div className="close" onClick={(e)=>setpop(!pop)}>
                                    <FontAwesomeIcon icon={faClose}/>
                                </div>
                            </div>
                            <div>{msg}</div>
                        </div>
                        :
                        <div className="pop-content">
                            <div className="pop-head">
                                <h2>Checkout</h2>
                                <div className="close" onClick={(e)=>setpop(!pop)}>
                                   
                                <FontAwesomeIcon icon={faClose}/>
                                </div>
                                { signed === false ? 
                                       <div className="feedbacks" style={{marginLeft:0}}>Kindly complete the form below</div>
                                        :
                                        '' 
                                    } 
                            </div>
                            <div className="formlist">
                            
                                <form onSubmit={(e)=>e.preventDefault()}>
                                 
                                    <div>
                                        <label>Email</label>
                                        <input type="email" placeholder="Email" onChange={(e)=>setacc({...acc, email:e.target.value})} value={acc.email}/>
                                    </div>
                                    <div>
                                        <label>Name</label>
                                        <input type="text" placeholder="Name" onChange={(e)=>setacc({...acc, name:e.target.value})} value={acc.name}/>
                                    </div>
                                    <div>
                                        <label>Shipping address</label>
                                        <input type="text" placeholder="Shipping address" onChange={(e)=>setacc({...acc, shipping:e.target.value})} value={userlocation.city} onClick={(e)=>setpopmap(true)}/>
                                    </div>
                                    <div>
                                        <label>Phone</label>
                                        <input type="number" placeholder="Phone " onChange={(e)=>setacc({...acc, phone:e.target.value})}/>
                                    </div>
                                    <button className="guestcheckout" onClick={check}>Checkout as guest</button>
                                    <div className="caption-socials">Sign in with</div>
                                    <div className="socials">
                                        <LoginSocialFacebook
                                                    appId="519240347027384"
                                                    onResolve={(response)=>{
                                                       // console.log(response)
                                                        setacc(response.data)
                                                        setfacebook(response.data)
                                                    }}
                                                    onReject={(error)=>{
                                                       // console.log(error)
                                                    }}
                                        >
                                        <div className="icon"><img  src={fb} alt='' /></div>
                                        </LoginSocialFacebook>
                                        <LoginSocialGoogle
                                                    client_id="6784803343-a7237i4s172lg9b4kvu1bse5946ga5i1.apps.googleusercontent.com"
                                                    onResolve={(response)=>{
                                                       // console.log(response)
                                                        setacc(response.data)
                                                        setfacebook(response.data)
                                                    }}
                                                    onReject={(error)=>{
                                                       // console.log(error)
                                                    }}
                                                    scope="https://www.googleapis.com/auth/userinfo.email"
                                        >
                                        <div className="icon"><img  src={go} alt='' /></div>
                                        </LoginSocialGoogle>
                                        <LoginSocialFacebook
                                                    appId="519240347027384"
                                                    onResolve={(response)=>{
                                                       // console.log(response)
                                                    }}
                                                    onReject={(error)=>{
                                                       // console.log(error)
                                                    }}
                                        >
                                        <div className="icon"><img  src={ap} alt='' /></div>
                                        </LoginSocialFacebook>
                                    </div>
                                </form>
                                <div className="order-summary">
                                <h4>Order Summary</h4>
                                <div className="order-content">
                                    {
                                        currentproducts.map(({id, product, price,quantity, currency}, i)=>(
                                            <div className="tableau" key={id}>
                                                <div>{i+1}</div>
                                                <div>{product}</div>
                                                <div>{quantity}{quantity > 1 ? 'pcs': 'pc'}</div>
                                                <div>{htmlDecode(currency)+quantity*price}</div>
                                            </div>
                                        ))
                                    }
                                </div>
                                    <div className="grand">Grand total = {htmlDecode(currentcurrency)+accumulate(currentcurrency)}</div>
                                    
                                    { signed === true ? 
                                        <PaystackButton className="submitt"  {...componentProps}/>
                                        :
                                        ''
                                    }  
                                </div>
                            </div>
                        </div>
                    }
                </div>
                :

                ''
            }
            
            {
                popmap===true ?
                <Map getref={close} getrad={rad} rad={radius} height={'300px'}/>
                :
                ''
            }
        </div>
            <div className="ham-menu" ref={ham}>
            <div className="ham-inner">
                <div className="logo">Vensle <FontAwesomeIcon icon={faClose} onClick={(e)=>reveal(ham)}/></div>
                <div className="hr" />
                <h3>Settings</h3>
                <div className="menus">
                    <div><Link to={'/'}>Home</Link></div>
                    <div>Start selling</div>
                    <div><Link to={'/signin'}>Sign in</Link></div>
                </div>
            </div>
        </div>
        </div>
        
    )
}
export default Cart