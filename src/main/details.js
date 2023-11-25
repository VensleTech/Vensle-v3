import { useState,useEffect,useRef, useContext } from "react"
import { Link, useLocation, useParams } from "react-router-dom"
import Menu from "../reusable/menu"
import Psections from "../reusable/psections"
import Revcards from "../reusable/revcards"
import pimage from '../prod.png'
import Carousels from '../reusable/carousel'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart, faStar, faStarHalfAlt, faLocationDot, faMessage, faAngleRight, faStore, faBasketShopping } from "@fortawesome/free-solid-svg-icons"
import Carouse from "../reusable/carouse"
import Popmessage from "../admin/popmessage"
import Poprev from "../admin/poprev"
import Pcards from "../reusable/pcards"
import Popup from "../admin/popup"
import Newpup from "../reusable/newpop"
import Tabone from "./tabone"
import Foot from "../reusable/footer"
import axios from "axios"
import { UserContext } from "../auth/usercontext"
import Reauth2 from "../reusable/reauth2"
import {decode} from 'html-entities';
import Relogged from "../reusable/reauth2"
import { Fade } from "react-awesome-reveal"


const Details = () => {
    const {details:{id:identifyer, location, item, currency, specialref},  details, setDetails} = useContext(UserContext)
    const container =useRef('')
    const {products} = useContext(UserContext)
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    useEffect(()=>{
        choose()
    },[])
    const loc = useLocation()
    const curr = localStorage.getItem('curr')
    const {id, group, name} = useParams()
//// console.log(container.current.clientHeight)
    const [isOpen, setIsOpen] = useState(false)
    const [read, setread] = useState(false)
    const [quantity, setquantity] = useState(0)
    const [showcontact, setshowcontact] = useState(false)
    const [existing, setexisting] = useState(item)
    const [styled, setstyled] = useState(1)
    // const [products, setproduct] = useState([])
    const [nloc, setnloc] = useState('Location')
    const [mail, setmail] = useState('')
    const [path, setpath] = useState()
    const [success, setsuccess] = useState(0)
    const [info, setinfo] = useState('')
    const [cartitems, setcartitems] = useState(item)
    const [product, setproduct] = useState(
        {
            id: '',
            user_id: '',
            title: '',
            item_condition: 1,
            item_group: '',
            category: '',
            item_address: '',
            description: '',
            tags: '',
            ref_no: '',
            sale_status: '',
            item_contact_number: '',
            state: '',
            location: '',
            price: '',
            min_price: '',
            max_price: '',
            currency: currency,
            online: '',
            approved: '',
            featured: '',
            position: '',
            display: '',
            sold: '',
            date_sold: '',
            upload_date: '',
            gimage: '',
            group_name: '',
            category_name: '',
            full_name: '',
            business_name: '',
            email: '',
            phone: '',
            address: '',
        }
    )
    const mailer = async (e) =>{
        e.preventDefault()
       // console.log('clicked')
        var data = {
            senderid:''+identifyer,
            receiverid:product.user_id,
            productid:product.ref_no,
            message:mail
        };
        if(mail.length >= 1){
        try {
            const response = await axios.post('http://vensle.com/api/api/message', data);
            
               // console.log(response.data);
          } catch (err) {
                 // console.log(err)
            // setpayload('An error occured');
          }
        }
        }
    const add = (packtype, price, productid, vendorid, currency) => {
        const duplicate = item.filter((element)=> element.product === packtype)
        if(duplicate.length > 0){
            duplicate.forEach((elem)=>elem.quantity = elem.quantity + 1)
            setsuccess(2)
            setinfo(info+1)
        }
        else{
            item.push({
                id:item.length + 1,
               productid:productid, 
               product: packtype, 
                price: price, 
                quantity:1,
                vendorid:vendorid,
                currency:currency,
            })
            setinfo(info+1)
            setsuccess(1)
        }
        setquantity(item.filter(items => items.product === product.title)[0].quantity)
    }
    const addquan = (id) => {
       // console.log(id)
        cartitems.forEach((items)=>{
            if(items.id=== id){
                items.quantity = items.quantity + 1
               // console.log(items.product)
                setsuccess(1)
            }
        })
    // setinfo(info+1)
    
    } 
    const reduce = (packtype, price) => {
        const duplicate = item.filter((element)=> element.product === packtype)
        //// console.log(duplicate)
        if(duplicate.length === 1){
           // console.log(duplicate[0].quantity)
            duplicate.forEach((elem)=>{
                // elem.quantity = elem.quantity - 1
            if (elem.quantity === 0) {
               remove(elem.id)
            }
            else if(elem.quantity > 1)
            elem.quantity = elem.quantity - 1
            })
            setsuccess(2)
            setinfo(info+1)
        }
        else{
            item.push({id:item.length + 1, product: packtype, price: price, quantity:1})
            setinfo(info+1)
            setsuccess(1)
        }
        setquantity(item.filter(items => items.product === product.title)[0].quantity)
    } 
    const remove = (id) =>{
       // console.log(cartitems.splice(id, 1))
        setcartitems(cartitems)
        setinfo(info-1)
     }
     
    function formatMoney(n) {
        return (Math.round(n * 100) / 100).toLocaleString();
    }
    const price2 = formatMoney(product.price)
      const pricemin = formatMoney(product.min_price)
      const pricemax = formatMoney(product.max_price)
    const choose = () => {
       // console.log(loc.pathname.split('/')[2])
        //// console.log(loc.pathname.split('/')[2])
        if( loc.pathname.split('/')[2]=== 'pro'){
            setpath(['pro', 'category', 'pr', 'Product', 'prods'])
            //// console.log('pro')
        }
        else if(loc.pathname.split('/')[2] === 'gro'){
            setpath(['gro', 'gcategory', 'gr', 'Groceries','grocery'])
            //// console.log('gro')
        }
        else if(loc.pathname.split('/')[2] === 'req'){
            setpath(['req', 'category', 'pr', 'Requests','requests'])
            //// console.log('req')
        }
    }
    const exist =()=>{
        if(item.filter(items => items.product === product.title).length === 1){
            setsuccess(1)
            setquantity(item.filter(items => items.product === product.title)[0].quantity)
        }
        else{
           // console.log('object')
        }
    }
    
   console.log(products)
    const getreadstate = (readstate)=> {
      setread(readstate)
      setIsOpen(readstate)
    }
    useEffect(()=>{
        getpartners()
    },[path, id])
    useEffect(()=>{
        window.scrollTo(0,0)
    },[name])
    useEffect(()=>{
        exist()
    },[product.title, info])

    useEffect(()=>{
        // getparners()
        // locs()
    },[nloc])
    const getpartners = async () => {
        //// console.log(path)
        try {
            const product = await axios.get("http://vensle.com/api/api/"+path[4]+"/"+id)
            console.log(product.data)
            setproduct(product.data)
        } catch (error) {
           // console.log(error);
        }
    }
    const getparners = async () => {
        try {
            const product = await axios.get("http://vensle.com/api/api/product/"+location)
            setproduct(product.data)
         } catch (error) {
           // console.log(error);
         }
    }
    function formatMoney(n) {
        return (Math.round(n * 100) / 100).toLocaleString();
    }
    return(
        <div ref={container}>
            <Menu/>
            <div className="breadcrumbs">
                <div><Link to={'/'}>Home</Link> <FontAwesomeIcon icon={faAngleRight} /> {loc.pathname.split('/')[2] === 'pro' ? 'Product' : loc.pathname.split('/')[2] === 'gro' ? 'Groceries' : loc.pathname.split('/')[2] === 'req' ? 'Requests' : ''} <FontAwesomeIcon icon={faAngleRight} /> {name.replaceAll('-', ' ').replaceAll(')', '/')}</div>
            </div>
            <Fade>
                <div className="details-container-top">
                    <div className="details-left">
                        <div className="dl-first brad">
                        <Carouse prodname={name.replaceAll('-', ' ').replaceAll('&', '/')} img={product.gimage} imgfolder={product.imgfolder} id={id}/>
                        </div>    
                        <div className="dr-first- brad">
                                <div className="caption">
                                    <h3>Brand New - In stock</h3> 
                                    {/* <p><FontAwesomeIcon icon={faHeart} /></p> */}
                                </div>
                                <div className="dr-price">
                                    {/* <h4>Price</h4><span></span> */}
                                    <p>{product.price !== undefined ? decode(product.currency)+price2 : decode(product.currency)+pricemin +'-'+decode(product.currency)+pricemax}</p>
                                </div>
                                <div className="s-location"><FontAwesomeIcon icon={faLocationDot} /> {product.location.split('+|+')[product.location.split('+|+').length-2]}</div>
                                {
                                    loc.pathname.split('/')[2] !== 'gro' ?
                                    <div className="trans-type">
                                    <table>
                                        <tr>
                                            {/* <td>Transaction type</td> */}
                                            <td>Meet to Buy</td>
                                        </tr>
                                    </table>
                                </div>
                                :
                                ''
                                }
                                <div className="seller-info">
                                {
                                    loc.pathname.split('/')[2] === 'req' ?
                                    ''
                                    :
                                    <div>
                                        <h4>Seller information</h4>
                                        <div className="hr"></div>
                                    </div>

                                } 
                                    <div className="seller-name">
                                        <h4>{product.full_name}</h4>
                                    </div>
                                    {
                                        loc.pathname.split('/')[2] === 'gro' ?
                                        success === 0 ? 
                                        <div>
                                            <button className="click-cart" onClick={(e)=>add(product.title, product.price, product.ref_no, product.vendorid, product.currency)}>
                                            <FontAwesomeIcon icon={faBasketShopping}/> Add to cart 
                                            </button>
                                            <button  className="click-profile"><Link to={'../../vendor/'+product.user_id+'/'+product.full_name.replaceAll(' ','-').replaceAll('/','&')}><FontAwesomeIcon icon={faStore}/> View store</Link></button>
                                        </div>
                                        : 
                                        <div>
                                        <div className="incr"><div  onClick={(e)=>reduce(product.title, product.price)}>-</div><div>{quantity}</div> <div onClick={(e)=>add(product.title, product.price)}>+</div></div>
                                        <button  className="click-profile"><Link to={'../../vendor/'+product.user_id+'/'+product.full_name.replaceAll(' ','-').replaceAll('/','&')}><FontAwesomeIcon icon={faStore}/> View store</Link></button>
                                        </div>
                                    :
                                    <div>
                                    <button className="click-phone" onClick={(e)=>setshowcontact(!showcontact)}>
                                    {
                                        showcontact === false ? <p onClick={(e)=>setshowcontact(!showcontact)} style={{cursor:'pointer'}}>Click to view contact </p>:<a href={"tel:"+product.phone} >{product. phone}</a>
                                    } 
                                    </button>
                                {
                                    loc.pathname.split('/')[2] === 'req' ?
                                    ''
                                    :
                                    <button  className="click-profile"><Link to={'../../vendor/'+product.user_id+'/'+product.full_name.replaceAll(' ','-').replaceAll('/','&')}>Click to view profile</Link></button>
                                }
                                    </div>
                                    }
                                    
                                    <textarea placeholder={"Hi "+product.full_name+" I am interested in your product"} onChange={(e)=>setmail(e.target.value)}/>
                                    {
                                        !specialref ? <button className="click-send" ><Link to={'/signin'}><div>Sign up</div></Link></button>  
                                        : 
                                        <button className="click-send" onClick={mailer}><FontAwesomeIcon icon={faMessage}></FontAwesomeIcon> Send</button>
                                        
                                    }  
                                        
                                    
                                </div>
                            </div>        
                        
                    </div>
                    <div className="details-right " >
                    
                            
                            <div className="dl-second brad">
                            <div className="tabular">
                                <div className="tab-title">
                                    {/* {styled === 1 ? <div style={{borderBottom:'5px solid orangered'}}> <h4>Product Description</h4></div>:<div onClick={(e)=>setstyled(1)} style={{cursor:'pointer'}}> <h4 style={{fontWeight:'200'}}>Product Description</h4></div>} */}
                                    {/* {styled === 2 ? <div style={{borderBottom:'5px solid orangered'}}> <h4>Product Features & Specifications</h4></div>:<div onClick={(e)=>setstyled(2)} style={{cursor:'pointer'}} > <h4 style={{fontWeight:'200'}}>Product Features & Specifications</h4></div>} */}
                                </div>
                                <div className="tab-body">
                                {styled === 1 ? 
                                <Tabone>
                                    <h3 style={{marginBottom:'10px'}}>Product Description</h3>
                                <p>{product.description}{product.description.length > 1000 ? <span onClick={(e)=>setread(true)} style={{cursor:'pointer'}}><b>... Read More</b></span> : null }</p>
                                    {read === true ?
                                    <Newpup getreadstate={getreadstate} heading={"Product Description"}>
                                        <h3>Product Description</h3>
                                        <p onClick={(e)=>setread(true)} style={{cursor:'pointer'}}>{product.description}</p>
                                    </Newpup> : null
                                }
                                    </Tabone>:
                                    <Tabone>
                                    <div className="spread">
                                        
                                        <div>
                                            <div className="table-within">
                                                <h3>Features</h3>
                                                <table>
                                                    <tr>
                                                        <td>Item Condition</td>
                                                        <td>{product.item_condition}</td>
                                                    </tr>
                                                </table>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="table-within">
                                                <h3> Specifications</h3>
                                                <table>
                                                        <tr>
                                                            <td>Product type</td>
                                                            <td>{}</td>
                                                        </tr>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    {read === true ?
                                    <Newpup getreadstate={getreadstate} heading={"Product Features"}>
                                        <div className="spread">
                                            <div>
                                                <div className="table-within">
                                                    <h3>Features</h3>
                                                    <table>
                                                    {
                                                    // features.map(({type, info})=>(
                                                    //     <tr>
                                                    //         <td>{type}</td>
                                                    //         <td>{info}</td>
                                                    //     </tr>
                                                    // ))
                                                    }
                                                    </table>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="table-within">
                                                    <h3> Specifications</h3>
                                                    <table>
                                                    {
                                                    // features.map(({type, info})=>(
                                                    //     <tr>
                                                    //         <td>{type}</td>
                                                    //         <td>{info}</td>
                                                    //     </tr>
                                                    // ))
                                                    }
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </Newpup>  
                                    : null
                                    }
                                    </Tabone>
                                }
                                </div>
                            </div>
                            </div> 
                        <div className="reviews brad">
                            <h2 style={{marginTop:'10px'}}>Reviews</h2>
                            <div className="hr" />
                            No reviews yet
                            {/* <Revcards />
                            {isOpen === true ?
                                <Newpup getreadstate={getreadstate} heading={"Reviews"}>
                                <Revcards />
                                <Revcards />
                                <Revcards />
                                <Revcards />
                                <Revcards />
                                <Revcards />
                                <Revcards />
                                <Revcards />
                                <Revcards />
                                </Newpup>
                                : null
                            }
                            
                            <div className="" onClick={(e)=>setIsOpen(!isOpen)} style={{cursor:'pointer'}} >More reviews</div> */}
                        </div>
                    </div>
                </div>
            </Fade>
            {/* <div className="details-container-top"> */}
                <div className="details-let ">
                    <div className="lefthand ">
                        <div className="featured brad">
                        <h2>Other products in this category</h2>
                        <div className="slider">
                            {
                                products.length > 0 ?
                                <div className="mr-third">
                                        {products.filter(items => items.category_tree === product.category_tree).slice(0,5).map((product, i)=>(
                                            <div><Pcards type={4} width={220} height={290} vim={'200px'} information={product} route={'pro'}/></div>
                                        ))}
                                    </div>
                                    :
                                    <div className="loading">
                                        
                                    </div>
                            }
                        </div>
                        </div>
                        <div className="featured brad">
                            <h2>Picked for you</h2>
                            <div className="slider">
                                {
                                    products.length > 0 ?
                                    <div className="mr-third">
                                            {products.filter(items => items.approved === '1').slice(20,25).map((product, i)=>(
                                                <div><Pcards type={4} width={220} height={290} vim={'200px'} information={product} route={'pro'}/></div>
                                            ))}
                                        </div>
                                        :
                                        <div className="loading">
                                            
                                        </div>
                                }
                            </div>
                        </div>
                    
                    </div>
                    <div>
                        <div className="simi brad"style={{background:'white', padding:'20px', boxSizing:'border-box', display:'grid', gap:'15px'}}>
                        <h3>Similar Product by seller</h3>
                        <div className="mr-fourth">
                                {
                                    products.filter(item=>item.user_id === product.user_id).slice(0, 7).map((products, i)=>(
                                        <div><Pcards type={2} width={'100%'} height={'90px'} pdsize={'1em'} pcsize={'1.4em'} information={products} route={'pro'}/></div>
                                    ))
                                }
                            </div>
                            {
                            products.filter(item=>item.user_id === product.user_id).length > 7 ?
                                        <div className="more" style={{background:'', padding:'20px', boxSizing:'border-box', marginTop:'7px', cursor:'pointer'}}>
                                            <Link to={'../../vendor/'+product.user_id+'/'+product.full_name.replaceAll(' ','-').replaceAll('/','&')}>More <FontAwesomeIcon icon={faAngleRight} /></Link>
                                        </div>
                                        :
                                        ''
                            }
                        
                        </div>
                        
                    </div> 
                </div>
            {/* </div> */}
            <Foot/>
        </div>
        
    )
}
export default Details