import { useState, useContext, useEffect } from "react"
import ProdPop from "./prodpop"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClose, faHamburger, faTruck, faNairaSign, faDollarSign } from "@fortawesome/free-solid-svg-icons"
import {CurrencyContext} from "../auth/currencycontext"
import imageCompression from "browser-image-compression";
import axios from "axios"

const Pcards = ({information, vim, width,height,pdsize,pcsize, type,route}) => {
    // destructure information

    const {id, feat_image, min_price, max_price, title, price, gimage, imgfolder, category_tree, phone, location, currency} = information
    // const handleCompression = async (e) => {
    //     if (information) {
    //       const options = {
    //         maxSizeMB: 2,
    //         maxWidthOrHeight: vim,
    //         useWebWorker: true
    //       };

    //       try {
    //         const product = await axios.get("http://vensle.com/api/storage/"+imgfolder+"/"+feat_image)
    //             console.log(product)
    //         } catch (error) {
    //         // console.log(error);
    //         }
    //     //   imageCompression(new File("http://vensle.com/api/storage/"+imgfolder+"/"+feat_image), options).then((img) => {
    //     //     // setCompressedImage(img);
    //     //     console.log(blobs)
    //     //   });
    //     }
    //   };

    // useEffect(()=>{
    //     handleCompression()
    //     console.log("http://vensle.com/api/storage/"+imgfolder+"/"+feat_image)
    // }, [information])
    // const curr = localStorage.getItem('curr')
    const [isOpen, setIsOpen] = useState(false)
    const [CompressedImage, setCompressedImage] = useState('')
    const [blobs, setblobs] = useState('')
    function formatMoney(n) {
        return (Math.round(n * 100) / 100).toLocaleString();
    }
    const price2 = formatMoney(price)
    const pricemin = formatMoney(min_price)
    const pricemax = formatMoney(max_price)
    //// console.log(pricemin)
    const getreadstate = (readstate)=> {
        setIsOpen(readstate)
      }
    // const data = '&#65284;'
    function htmlDecode(input){
        var e = document.createElement('div');
        e.innerHTML = input;
        return e.childNodes[0].nodeValue;
      }
    //  // console.log(htmlDecode(data))
    return (
        
        <div className="ccc">
            {type === 1 ? 
                <div className="vertical" style={{width:width, height:height}} >
                    <div className="img" style={{height:vim}}  onClick={(e)=>{setIsOpen(!isOpen); document.body.style.overflow = 'hidden';}}>
                        <img src={"http://vensle.com/api/storage/"+imgfolder+"/"+feat_image} alt=""/>
                    </div>
                    <div className='pdetails' onClick={(e)=>{setIsOpen(!isOpen); document.body.style.overflow = 'hidden';}}>
                        <div className="prodname" style={{fontSize:pdsize}}>
                            <p>{title}</p>
                        </div>
                        <div className="price" style={{fontSize:pdsize}}  >
                            <p>{price !== undefined ? htmlDecode(currency)+price2 : htmlDecode(currency)+pricemin +' - '+htmlDecode(currency)+pricemax}</p>
                        </div>
                    </div>
                    <div className='bdetails'>
                        <div className="prodname">
                            {
                                // data.map(({type, id, avail})=>(
                                //     <div className="must">
                                //     <span>{avail === 1 && id === 1 ?<div  className="green" title={type}><FontAwesomeIcon icon={faHandshakeSimple}/></div>  
                                //     : avail === 1 && id === 2 ? <div  className="green" title={type}><FontAwesomeIcon icon={faTruck}/></div> 
                                //     : null}</span>
                                //     </div>
                                // ))
                            }
                        </div>
                    </div>
                    {isOpen === true ?
                     <ProdPop getreadstate={getreadstate} information={information} route={route}/>: null}
                </div>
: type === 2 ?
            <div className="horizontal" style={{width:width, height:height, gridTemplateColumns:height+' auto auto'}}  >
                <div className="img" style={{width:height, height:height}} onClick={(e)=>{setIsOpen(!isOpen); document.body.style.overflow = 'hidden';}}>
                    <img src={"http://vensle.com/api/storage/"+imgfolder+"/"+feat_image} alt=""/>
                </div>
                <div className='pdetails' onClick={(e)=>{setIsOpen(!isOpen); document.body.style.overflow = 'hidden';}}>
                        <div className="prodname" style={{fontSize:pdsize}} >
                            <p>{title.substring(0, 36)}{title.length > 36 ? '...' : ''}</p>
                        </div>
                        <div className="price" style={{fontSize:pcsize}}  >
                           <p>{price !== undefined ? htmlDecode(currency)+price2 : htmlDecode(currency)+pricemin +'-'+htmlDecode(currency)+pricemax}</p>
                        </div>
                </div>
                <div className='bdetails'>
                        <div className="prodname">
                            {
                                // data.map(({type, avail, id})=>(
                                //     <div className="must">
                                //     <span>{avail === 1 && id === 1 ?<div  className="green" title={type}><FontAwesomeIcon icon={faHandshakeSimple}/></div>  
                                //     : avail === 1 && id === 2 ? <div  className="green" title={type}><FontAwesomeIcon icon={faTruck}/></div> 
                                //     : null}</span>
                                //     </div>
                                // ))
                            }
                      </div>
                    </div>
                    {isOpen === true ?
                        <ProdPop id={id} title={title} price={price} img={gimage} getreadstate={getreadstate} information={information} route={route}/>: null}
            </div>
            : type === 3 ? 
            <div className="vhor" style={{width:width, height:height}}  >
                <div className="img" style={{width:height, height:height}} onClick={(e)=>{setIsOpen(!isOpen); document.body.style.overflow = 'hidden';}}>
                    <img src={"http://vensle.com/api/storage/"+imgfolder+"/"+feat_image} alt=""/>
                </div>
                <div className='pdetails' onClick={(e)=>{setIsOpen(!isOpen); document.body.style.overflow = 'hidden';}}>
                    <div className="prodname" style={{fontSize:pdsize}} >
                        <p>{title}</p>
                    </div>
                    <div className="price" style={{fontSize:pcsize}}>
                       <p>{price !== undefined ? htmlDecode(currency)+price2 : htmlDecode(currency)+min_price +'-'+htmlDecode(currency)+max_price}</p>
                    </div>
                </div>
                {isOpen === true ?
                    <ProdPop id={id} title={title} price={price} img={gimage} getreadstate={getreadstate} information={information} route={route}/>: null}
            </div>
        :
                <div className="vertical2" style={{width:width, height:height, backgroundColor:'white', border:'0px solid #F0F0F0', borderRadius:'10px'}} >
                    <div className="img" style={{height:vim}}  onClick={(e)=>{setIsOpen(!isOpen); document.body.style.overflow = 'hidden';}}>
                        <img src={"http://vensle.com/api/storage/"+imgfolder+"/"+feat_image} alt=""/>
                    </div>
                    <div className='pdetails' onClick={(e)=>{setIsOpen(!isOpen); document.body.style.overflow = 'hidden';}}>
                        
                        <div className="price" style={{fontSize:pdsize}}  >
                        <p>{price !== undefined ? htmlDecode(currency)+price2 : htmlDecode(currency)+pricemin +' - '+htmlDecode(currency)+pricemax}</p>
                        </div>
                        <div className="prodname" style={{fontSize:pdsize}}>
                            <p>{title.substring(0, 36)}{title.length > 36 ? '...' : ''}</p>
                        </div>
                    </div>
                    {isOpen === true ?
                     <ProdPop getreadstate={getreadstate} information={information} route={route} />: null}
                </div>}
        </div>
        
    )
}
export default Pcards