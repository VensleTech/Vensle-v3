import { faArrowRight, faEnvelope, faMessage } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import axios from "axios"
import fb from "../face.png"
import tw from "../twitter.png"
import wh from "../whatsapp.png"

import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
const Foot = () => {
    const [email, setemail] = useState('')
    const [msg, setmsg] = useState('Subscribe')
    
    
    const push = async () => {
        const data = {
            email:email
        }
        try {
            const partners = await axios.post('http://vensle.com/api/api/subscribe', data)
            setmsg('Subscribed')
           // console.log(partners)
         } catch (error) {
           // console.log(error);
         }
    }
    return (
        <div className="foot">
            <div className="newsletter">
                <div className="news-l">
                    <FontAwesomeIcon icon={faEnvelope}/>
                    <div>
                        <h3>SUBSCRIBE TO OUR NEWSLETTER</h3>
                        <p>Get all the latest information on Events, Sales and Offers.</p>
                    </div>
                </div>
                <div className="news-r">
                    <div>
                    <input type='text' placeholder="Your email address" onChange={(e)=>setemail(e.target.value)}/>
                    </div>
                    <button onClick={push}>{msg}</button>
                </div>
            </div>
            <div className="foot-top">
                <div className="about">
                    <h3>About Us</h3>
                    <div>
                    <p>Vensle.com is an online marketplace that bring buyers and sellers in a neighbourhood together. 
                        You can sell or buy new and used items to people around you. With vensle.com buying and 
                        selling is very fast and easy.</p>

                    <p>You can visit our <Link to={'/faq'} style={{color:'blue'}}>frequently asked question FAQ</Link> or you can click on the  
                    <Link to={'/tutorial'} style={{color:'blue'}}> Sell/Buy Tutorial </Link>
                        link to have a comprehensive guide of all the functionalities and how you can take good 
                        advantage of them. Thank you for using vensle.com</p>

                    </div>
                    <div className="joinus">
                        {/* <h3>Join us on</h3> */}
                        <div>
                            <img src={tw} alt="twitter"/>
                            <img src={fb} alt="facebook"/>
                            <img src={wh} alt="whatsapp"/>
                        </div>
                        
                    </div>
                </div>
                
                <div className="company">
                    <h3>Company</h3>
                    <div>
                        <p><Link to={'/privacy-policy'} style={{color:'black'}}>Privacy Policy</Link></p>
                        <p><Link to={'/terms-of-use'} style={{color:'black'}}>Terms of Use</Link></p>
                        <p><Link to={'/product-listing'} style={{color:'black'}}>Product Listing</Link></p>
                        <p><Link to={'/faq'} style={{color:'black'}}>FAQ</Link></p>
                    </div>
                </div>
                <div className="company">
                    <h3>Sell</h3>
                    <div >
                        <p><Link to={'/admin/place'} style={{color:'black'}}>Start Selling</Link></p>
                        <p><Link to={'/tutorial'} style={{color:'black'}}>Learn to sell</Link></p>
                        <p><Link to={'/tutorial-settings'} style={{color:'black'}}>Quick setup</Link></p>
                    </div>
                </div>
                {/* <div>
                    <h3>About</h3>
                    <p>Company info</p>
                    <p>News</p>
                    <p>Investors</p>
                    <p>Careers</p>
                    <p>Advertise with us</p>
                    <p>Policies</p>
                </div> */}
                
                {/* <div >
                    <h3>Vensle International</h3>
                    <div className="countries">
                        <p>United Kingdom</p>
                        <p>Nigeria</p>
                        <p>Peru</p>
                        <p>USA</p>
                        <p>Cuba</p>
                        <p>Algeria</p>
                        <p>South Africa</p>
                        <p>Ghana</p>
                        <p>Uganda</p>
                        <p>Cape Verde</p>
                        <p>Benin</p>
                        <p>Ivory Coast</p>
                    </div>
                </div> */}
            </div>
            {/* <div className="logos"> 
            </div> */}
            
            <div className="foot-bottom">
                {/* <div className="hr"></div> */}
                <p>Copyright &copy; {Date('Y').split(' ')[3]} Vensle MarketPlace All Rights Reserved</p>
            </div>
        </div>
    )
}
export default Foot